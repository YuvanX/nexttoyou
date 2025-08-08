import { auth } from "@/auth";
import prisma from "@/db/src";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await auth();

  try {
    if (!session?.user) {
      return NextResponse.json(
        { message: "Unauthorized user" },
        { status: 401 }
      );
    }
    const user = await prisma.user.findUnique({
      where: { id: session?.user?.id },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found " }, { status: 404 });
    }

    const userAccommodations = await prisma.accommodation.findMany({
      where: { userId: session?.user?.id },
    });
    if (userAccommodations.length === 0) {
      return NextResponse.json(
        { message: "No accommodations found " },
        { status: 404 }
      );
    }

    return NextResponse.json({
      accommodations: userAccommodations,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
