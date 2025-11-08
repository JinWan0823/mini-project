import { comments } from "@/app/lib/mockDB";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const target = comments.find((item) => item.id === Number(id));
    if (!target) {
      return NextResponse.json(
        { message: "댓글을 찾을 수 없습니다." },
        { status: 404 }
      );
    }
    target.liked = body.liked;
    return NextResponse.json(target);
  } catch (error) {
    return NextResponse.json(
      { message: "서버 오류 발생", error },
      { status: 500 }
    );
  }
}
