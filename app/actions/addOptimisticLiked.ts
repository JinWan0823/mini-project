"use server";

import { revalidatePath } from "next/cache";

export async function updateLikedAction(id: number, newState: boolean) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments/${id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liked: newState }),
    }
  );

  if (!res.ok) throw new Error("업데이트 실패");
  revalidatePath("/");

  return await res.json();
}
