import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/db/dbConnect";
import { User } from "@/db/schema/user";

export const POST = async (request: NextRequest) => {
  const { firstName, lastName, email, password, userRole } = await request.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role: userRole,
  };

  try {
    await User.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse((error as Error).message, {
      status: 500,
    });
  }
};
