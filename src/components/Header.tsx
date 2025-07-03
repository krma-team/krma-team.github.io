"use client";

import HeaderBanner from "@/containers/HeaderBanner";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col">
      <HeaderBanner />
      <nav className="flex pl-24 items-center justify-between py-5 gap-10 uppercase text-lg font-medium">
        <div className="flex gap-10">
          <Link className="flex" href="/portfolio">
            <div className="text-brand-lime">#</div>
            portfolio
          </Link>
          <Link className="flex" href="/about">
            <div className="text-brand-lime">#</div>
            notre histoire
          </Link>
          <Link className="flex" href="/contact">
            <div className="text-brand-lime">#</div>
            services {"&"} méthodo
          </Link>
        </div>

        {/* Do this with shadeCn later */}
        <button
          className="flex border-2 cursor-pointer rounded-full px-8 py-3 hover:scale-110 "
          onClick={() => (window.location.href = "/portfolio")}
        >
          Contacte
        </button>
      </nav>
    </header>
  );
}
