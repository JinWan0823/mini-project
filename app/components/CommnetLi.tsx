import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function CommentLi() {
  return (
    <li className="w-full bg-[#fff] my-2 rounded-[4px] p-2 py-4">
      <div className="border-b-2">
        <span className="font-bold">홍길동</span>
      </div>
      <div className="p-2 mt-2 bg-[#dfdfdf] min-h-[90px]">
        <p>Comment내용, 댓글 내용, 이런저런 내용, 폼 내용</p>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <button className="cursor-pointer text-xl">
          <FaRegHeart fill="gray" />
          {/* <FaHeart fill="red" /> */}
        </button>
        <span className="text-sm text-gray-400">0</span>
      </div>
    </li>
  );
}
