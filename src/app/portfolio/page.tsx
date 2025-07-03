"use client";

import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="text-center justify-center flex flex-col pt-48 gap-2">
      <h1>Portfolio</h1>
      <Link
        href="/"
        className="flex border-brand-lavender bg-slate-800 border-2 rounded-3xl px-3 py-1 self-center gap-2"
      >
        <div className="text-brand-beige">#</div>
        HomePage link
      </Link>
    </div>
  );
}
