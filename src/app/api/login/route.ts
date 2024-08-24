import { getUserByEmail } from "@/actions/auth";
import { auth } from "@/auth";
import dbConnect from "@/db/dbConnect";

import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await auth();

  // if (!session?.user) {
  //   return new NextResponse(`You are not authenticated!`, {
  //     status: 401,
  //   });
  // }

  await dbConnect();

  try {
    const user = await getUserByEmail(session?.user?.email as string);

    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse((error as Error).message, {
      status: 500,
    });
  }
};
