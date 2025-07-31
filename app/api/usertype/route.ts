import { auth } from "@/auth";
import prisma from "@/db/src";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  console.log(session?.user);
  
  if (!session?.user)
    return NextResponse.json(
      { message: "Unauthorized access" },
      { status: 401 }
    );

  try {
    const body = await req.json()
    const { type } = body;

    const user = await prisma.user.findUnique({
      where: { id: session?.user?.id },
    });
    if (!user)
      return NextResponse.json(
        {
          message:
            "Sorry user with email does not exist. Please create an account first.",
        },
        { status: 404 }
      );

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        userType: type === "owner" ? "Owner" : "NormalUser",
      },
    });

    return NextResponse.json({ message: "User type updated successfully." });
  } catch (error) {
        console.log(error);
        return NextResponse.json({ mesage: "Something went wrong. Please try again later"})
  }
}
