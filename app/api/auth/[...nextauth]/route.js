import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connectDB from "@/utils/database";
import School from "@/models/School";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        try {
          const school = await School.findOne({ email: credentials.email });
          if (school) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              school.password
            );
            if (isPasswordCorrect) {
              return school;
            }
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
   
  ],
  page: {
    signIn:"/auth/login",
  }

};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };