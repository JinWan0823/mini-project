"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CommentTypes } from "../types/commentTypes";
import { startTransition, useOptimistic } from "react";
import { updateLikedAction } from "../actions/addOptimisticLiked";

interface CommentLiProps {
  comment: CommentTypes;
}

export default function CommentLi({ comment }: CommentLiProps) {
  const [optimisticLiked, addOptimisticLiked] = useOptimistic(
    comment.liked,
    (prev, newState: boolean) => newState
  );

  const handleLike = async (newState: boolean) => {
    startTransition(() => addOptimisticLiked(newState));
    await updateLikedAction(Number(comment.id), newState);
  };

  return (
    <li className="w-full bg-[#fff] my-2 rounded-[4px] p-2 py-4">
      <div className="border-b-2">
        <span className="font-bold">{comment.name}</span>
      </div>
      <div className="p-2 mt-2 bg-[#dfdfdf] min-h-[90px]">
        <p>{comment.text}</p>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <button
          onClick={() => handleLike(!optimisticLiked)}
          className="cursor-pointer text-xl"
        >
          {optimisticLiked ? (
            <FaHeart fill="red" />
          ) : (
            <FaRegHeart fill="gray" />
          )}
        </button>
        <span className="text-sm text-gray-400">
          {optimisticLiked ? "1" : "0"}
        </span>
      </div>
    </li>
  );
}
