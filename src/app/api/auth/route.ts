import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);
  if (!userId) {
    console.log("Unauthorized");
    return NextResponse.json({ error: "Unauthorized" });
  } else {
    console.log("Authorized");
    return NextResponse.json({ userId });
  }
}
