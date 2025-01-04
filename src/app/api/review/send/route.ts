import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();

    const apiUrl = process.env.GOOGLE_SCRIPT_URL;
    const response = await fetch(apiUrl ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in POST API:", error);
    return NextResponse.json(
      { message: "Internal Server Error (Next.js API)" },
      { status: 500 }
    );
  }
}
