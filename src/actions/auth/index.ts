"use server";

import { User } from "@/db/schema/user";
import { signIn } from "@/auth";

export async function getUserByEmail(email: string) {
  const user = await User.findOne({ email: email }).select("-password").lean();
  return user;
}

export async function ceredntialLogin(formData: any) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
}
