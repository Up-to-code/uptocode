import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "All fields are required",
      }),
      {
        status: 400,
      }
    );
  }

  return NextResponse.json({ success: true, message: "Message sent" });
}
