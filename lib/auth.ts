import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { validateCredentials } from "./hooks/validateCredentials.hook";
import clientPromise from "./mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const user = await validateCredentials(
          credentials.email,
          credentials.password
        );

        if (user) {
          return user;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const adminEmail = process.env.ADMIN_EMAIL;

        if (user.email === adminEmail) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    },
  },
};
