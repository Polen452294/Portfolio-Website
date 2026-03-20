"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { adminLogin } from "@/lib/api";
import { saveAdminToken } from "@/lib/auth";  

type AdminLoginFormProps = {
  onSuccess: () => void;
};

export function AdminLoginForm({ onSuccess }: AdminLoginFormProps) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const data = await adminLogin(password);
      saveAdminToken(data.access_token);
      onSuccess();
    } catch {
      setErrorMessage("Неверный пароль администратора.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md"
    >
      <h1 className="text-2xl font-semibold text-white">Admin Login</h1>
      <p className="mt-2 text-sm text-slate-300">
        Введите пароль администратора для просмотра заявок.
      </p>

      <div className="mt-5 space-y-2">
        <label className="text-sm text-slate-300">Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-300/40 focus:ring-2 focus:ring-emerald-300/10"
          placeholder="Введите пароль"
          required
        />
      </div>

      {errorMessage ? (
        <p className="mt-4 text-sm text-rose-300">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-5 inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-medium text-slate-950 transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? "Вход..." : "Войти"}
      </button>
    </form>
  );
}