import { NextRequest, NextResponse } from "next/server";

const comments = [
  { id: 1, text: "첫 번째 댓글입니다!", name: "홍길동", liked: false },
  { id: 2, text: "안녕하세요 👋", name: "김얌얌", liked: true },
];

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
