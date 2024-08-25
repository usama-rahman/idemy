"use server";

import { User } from "@/db/schema/user";
import { signIn } from "@/auth";

async function getUserByEmail(email: string) {
  const user = await User.findOne({ email: email }).select("-password").lean();
  return user;
}

async function ceredntialLogin(formData: any) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log(response);
    return response;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
}

export { ceredntialLogin, getUserByEmail };
