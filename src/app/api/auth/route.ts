import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
  const { userId } = getAuth(req);
  if (!userId) {
    console.log("Unauthorized");
    return NextResponse.json({ error: "Unauthorized" });
  } else {
    console.log("Authorized");
    return NextResponse.json({ userId });
  }
}
