import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "./db/schema/user";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credential) {
        if (credential == null) return null;

        try {
          const user = await User.findOne({
            email: credential?.email,
          });

          if (user) {
            const isMatch = await bcrypt.compare(credential.password as string, user.password);

            if (isMatch) {
              return user;
            } else {
              throw new Error("Check your password");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          throw new Error(err as string);
        }
      },
    }),
  ],
});
