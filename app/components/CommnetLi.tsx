import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CommentTypes } from "../types/commentTypes";

interface CommentLiProps {
  comment: CommentTypes;
}

export default function CommentLi({ comment }: CommentLiProps) {
  return (
    <li className="w-full bg-[#fff] my-2 rounded-[4px] p-2 py-4">
      <div className="border-b-2">
        <span className="font-bold">{comment.name}</span>
      </div>
      <div className="p-2 mt-2 bg-[#dfdfdf] min-h-[90px]">
        <p>{comment.text}</p>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <button className="cursor-pointer text-xl">
          {comment.liked ? <FaHeart fill="red" /> : <FaRegHeart fill="gray" />}
        </button>
        <span className="text-sm text-gray-400">0</span>
      </div>
    </li>
  );
}
