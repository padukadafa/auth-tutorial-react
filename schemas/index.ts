import * as z from "zod";
export const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email is requireed" }).email(), // add { message: "Email is required" } to custom error
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().min(1, { message: "Email is requireed" }).email(), // add { message: "Email is required" } to custom error
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Minimum 6 character required" }),
  name: z.string().min(1, { message: "Name is required" }),
});
