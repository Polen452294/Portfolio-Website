"use client";

import { CalendarDays, FolderKanban, MessageCircle, Wallet } from "lucide-react";
import type { RequestItem, RequestStatus } from "@/types/request";

type RequestAdminCardProps = {
  request: RequestItem;
  isUpdating: boolean;
  onStatusChange: (requestId: number, status: RequestStatus) => Promise<void>;
};

function formatDate(value: string) {
  const date = new Date(value);
  return new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getStatusLabel(status: RequestStatus) {
  switch (status) {
    case "new":
      return "Новая";
    case "in_progress":
      return "В работе";
    case "done":
      return "Завершена";
    default:
      return status;
  }
}

function getStatusClasses(status: RequestStatus) {
  switch (status) {
    case "new":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
    case "in_progress":
      return "border-amber-400/20 bg-amber-400/10 text-amber-300";
    case "done":
      return "border-sky-400/20 bg-sky-400/10 text-sky-300";
    default:
      return "border-white/10 bg-white/[0.04] text-white";
  }
}

export function RequestAdminCard({
  request,
  isUpdating,
  onStatusChange,
}: RequestAdminCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-emerald-300">
            Request #{request.id}
          </div>
          <h3 className="mt-2 text-xl font-semibold text-white">{request.name}</h3>
        </div>

        <div
          className={[
            "rounded-full border px-3 py-1 text-xs",
            getStatusClasses(request.status),
          ].join(" ")}
        >
          {getStatusLabel(request.status)}
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
          <MessageCircle className="h-4 w-4 text-emerald-300" />
          {request.contact}
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
          <FolderKanban className="h-4 w-4 text-emerald-300" />
          {request.project_type}
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
          <Wallet className="h-4 w-4 text-emerald-300" />
          {request.budget || "Бюджет не указан"}
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
          <CalendarDays className="h-4 w-4 text-emerald-300" />
          {formatDate(request.created_at)}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
        <div className="mb-2 text-sm font-medium text-white">Описание задачи</div>
        <p className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
          {request.description}
        </p>
      </div>

      <div className="mt-5">
        <div className="mb-3 text-sm font-medium text-white">Сменить статус</div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            disabled={isUpdating}
            onClick={() => onStatusChange(request.id, "new")}
            className={`rounded-2xl px-4 py-2 text-sm transition ${
              request.status === "new"
                ? "ring-2 ring-emerald-400 bg-emerald-400/20 text-emerald-300"
                : "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
            }`}
          >
            Новая
          </button>

          <button
            type="button"
            disabled={isUpdating}
            onClick={() => onStatusChange(request.id, "in_progress")}
            className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-300 transition hover:bg-amber-400/15 disabled:cursor-not-allowed disabled:opacity-60"
          >
            В работе
          </button>

          <button
            type="button"
            disabled={isUpdating}
            onClick={() => onStatusChange(request.id, "done")}
            className="rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-300 transition hover:bg-sky-400/15 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Завершена
          </button>
        </div>
      </div>
    </div>
  );
}