"use server";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { sendVerficationEmail } from "@/lib/mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email doesn't exist!" };
  }
  if (!existingUser.emailVerified) {
    const existingVerification = await getVerificationTokenByEmail(
      existingUser.email
    );
    const currentDate = new Date();
    if (
      existingVerification?.expires.getTime() ??
      currentDate.getTime() > currentDate.getTime()
    ) {
      return {
        error:
          "Your email isn't verified.Check your email to verify your account!",
      };
    }
    const verificaionToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerficationEmail(verificaionToken.email, verificaionToken.token);
    return { success: "Confirmation email sent!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
