"use client";

import Link from "next/link";
import HeaderBanner from "@/components/containers/HeaderBanner";

export default function Header() {
  return (
    <header className="flex flex-col fixed w-full bg-background">
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

        <button
          className="flex text-2xl button-border-linear-gradient rounded-full text-brand-glacier font-extralight cursor-pointer px-8 py-2 hover:scale-110 mr-24 transition-transform"
          onClick={() => (window.location.href = "/portfolio")}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
