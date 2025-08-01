import { cookies } from "next/headers"

export async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies()
  const authToken = cookieStore.get("auth-token")

  // In a real app, you would validate the token against your database
  return authToken?.value === "authenticated"
}

export async function login(email: string, password: string): Promise<boolean> {
  // Updated admin credentials
  if (email === "EMMADRID" && password === "Salusi001") {
    return true
  }
  return false
}
