import CommentForm from "./components/CommentForm";
import CommentLi from "./components/CommnetLi";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">
      <main className="max-w-[1100px] w-[95%] py-2 h-screen min-h-[400px] mx-auto relative ">
        <div className="flex flex-col h-full overflow-hidden border-1 bg-[#333] rounded-[12px] overflow-hidden">
          <Header />
          <ul className="flex-1 overflow-y-auto px-2">
            <CommentLi />
            <CommentLi />
            <CommentLi />
            <CommentLi />
            <CommentLi />
            <CommentLi />
            <CommentLi />
          </ul>
        </div>
        <CommentForm />
      </main>
    </div>
  );
}
