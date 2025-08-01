"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { createPost } from "./posts"
import { login } from "./auth"

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const isValid = await login(email, password)

  if (isValid) {
    const cookieStore = await cookies()
    cookieStore.set("auth-token", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    redirect("/admin")
  } else {
    redirect("/admin/login?error=invalid-credentials")
  }
}

export async function createPostAction(formData: FormData) {
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const excerpt = formData.get("excerpt") as string
  const content = formData.get("content") as string
  const coverImage = formData.get("coverImage") as string
  const tags = (formData.get("tags") as string).split(",").map((tag) => tag.trim())
  const author = formData.get("author") as string
  const published = formData.get("published") === "on"

  await createPost({
    title,
    slug,
    excerpt,
    content,
    coverImage: coverImage || undefined,
    tags,
    author,
    published,
  })

  redirect("/admin")
}
