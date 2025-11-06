export default function CommentForm() {
  return (
    <div
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
          placeholder="이름을 입력해주세요."
          className="bg-white p-1"
        />
        <textarea
          className="w-full max-h-[110px] h-[90px] bg-white mt-2 p-1"
          placeholder="내용을 입력해주세요."
        />
        <button
          type="submit"
          className="font-bold w-[120px] h-[42px] rounded text-white p-1 bg-blue-400 cursor-pointer"
        >
          작성하기
        </button>
      </div>
    </div>
  );
}
