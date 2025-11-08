"use client";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="font-bold w-[120px] h-[42px] rounded text-white p-1 bg-blue-400 cursor-pointer"
      >
        {pending ? "작성 중..." : "작성하기"}
      </button>
    </>
  );
}
