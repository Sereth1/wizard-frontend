import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  const baseUrl = process.env.URL;

  try {
    const res = await axios.get(
      `${baseUrl}/houses${name ? `?name=${name}` : ""}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      }
    );

    return NextResponse.json(res.data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Unknown error occurred");
    }
    return NextResponse.json(
      { error: "Failed to fetch houses" },
      { status: 500 }
    );
  }
}
