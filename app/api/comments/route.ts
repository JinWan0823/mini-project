import { comments } from "@/app/lib/mockDB";
import { NextRequest, NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(comments);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newComment = {
      id: Date.now(),
      text: body.text,
      name: body.name,
      liked: false,
    };
    comments.push(newComment);
    return NextResponse.json(newComment);
  } catch (error) {
    return NextResponse.json(
      { message: "서버 오류 발생", error },
      { status: 500 }
    );
  }
}
