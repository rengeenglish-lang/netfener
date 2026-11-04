"use server";

import { safeNextPath } from "@/lib/availability";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { db } from "@/server/db";
import { studentLandingPath } from "@/server/services/exam-subsite.service";

export type SignInFormState = { status: "idle" | "error"; message?: string };

export async function signInAction(_prev: SignInFormState, formData: FormData): Promise<SignInFormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  try {
    const user = email ? await db.user.findUnique({ where: { email }, select: { id: true, role: true } }) : null;
    const isStaff = user?.role === "TEACHER" || user?.role === "ADMIN";
    // Students land in their own exam's subsite (exam-first); staff keep the admin panel.
    const landing = isStaff ? "/admin" : user ? await studentLandingPath(user.id) : "/dashboard";
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: safeNextPath(formData.get("next")) ?? landing,
    });
    return { status: "idle" };
  } catch (error) {
    if (error instanceof AuthError) return { status: "error", message: "E-posta veya şifre hatalı. Daha önce Google ile giriş yaptıysanız “Google ile giriş yap” düğmesini kullanın." };
    throw error;
  }
}
