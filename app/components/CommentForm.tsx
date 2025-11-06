"use client";
import { useActionState } from "react";
import { addComment } from "../actions/addComment";

export default function CommentForm() {
  const [data, submitAction, isPending] = useActionState(addComment, null);
  return (
    <form
      action={submitAction}
      className="comment-form
      w-full p-2 bg-white relative"
    >
      <div
        className="absolute top-0 left-0 w-full h-[30px] -translate-y-[100%]
      bg-gradient-to-b from-transparent via-white/10 to-white"
      ></div>
      <div className="w-full bg-[#dfdfdf] shadow-xl py-4 px-2">
        <input
          type="text"
          name="name"
          placeholder="이름을 입력해주세요."
          className="bg-white p-1"
          required
        />
        <textarea
          name="text"
          className="w-full max-h-[110px] h-[90px] bg-white mt-2 p-1"
          placeholder="내용을 입력해주세요."
          required
        />
        <button
          type="submit"
          className="font-bold w-[120px] h-[42px] rounded text-white p-1 bg-blue-400 cursor-pointer"
        >
          {isPending ? "작성 중..." : "작성하기"}
        </button>
      </div>
    </form>
  );
}
