import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../../../lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// function MongoDBAdapter(
//   clientPromise: Promise<import("mongodb").MongoClient>
// ): import("next-auth/adapters").Adapter | undefined {
//   throw new Error("Function not implemented.");
// }
