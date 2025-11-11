"use client";
import { useRef } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollUp() {
  const topRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={topRef}>123</div>
      <button
        onClick={handleScroll}
        className="absolute bottom-4 right-4 z-999 cursor-pointer bg-[#333] w-[28px] h-[28px] rounded-full flex items-center justify-center"
      >
        <FaAngleUp className="text-white" />
      </button>
    </>
  );
}
