import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "./db/schema/user";
import { toast } from "sonner";

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
              toast("Check your password");
              return null;
            }
          } else {
            toast("User not found");
            return null;
          }
        } catch (error) {
          toast((error as Error).message || "An error occurred");
          return null;
        }
      },
    }),
  ],
});
