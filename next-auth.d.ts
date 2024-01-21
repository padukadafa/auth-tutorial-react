import NextAuth, { type DefaultSession } from "next-auth";
declare module "next-auth" {
  interface User {
    role: DefaultSession["user"] & UserRole;
  }
}
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role?: UserRole;
  }
}
