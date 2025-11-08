"use server";
import { revalidatePath } from "next/cache";

export async function addComment(_prevState: unknown, formData: FormData) {
  const name = formData.get("name");
  const text = formData.get("text");
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, text }),
  });
  if (!res.ok) throw new Error("서버 에러 발생");
  revalidatePath("/");
  return await res.json();
}
