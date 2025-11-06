import { use } from "react";
import CommentLi from "./CommnetLi";

async function getComments() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("데이터를 불러오지 못했습니다.");
  return res.json();
}

export default function CommentList() {
  const comments = use(getComments());
  return (
    <ul className="flex-1 overflow-y-auto px-2">
      {comments.map(
        (comment: { id: string; name: string; comment: string }) => (
          <CommentLi key={comment.id} />
        )
      )}
    </ul>
  );
}
