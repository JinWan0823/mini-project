import { Suspense } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">
      <main className="max-w-[1100px] w-[95%] py-2 h-screen min-h-[400px] mx-auto">
        <div className="flex flex-col w-full relative h-full overflow-hidden border-1 bg-[#333] rounded-[12px] overflow-hidden">
          <Header />

          <Suspense fallback={<LoadingSpinner />}>
            <CommentList />
          </Suspense>
          <CommentForm />
        </div>
      </main>
    </div>
  );
}
