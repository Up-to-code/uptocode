import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // retrieve data from your database

  res.status(200).json({});
}
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
