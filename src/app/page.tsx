"use client";

import krma from "@/assets/logo/Wordmark.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container pl-16 py-20 gap-11">
        <Image src={krma} alt="krma" width={432} height={169} />
        <h2 className="max-w-xl text-center">
          L’agence de développement qui place vos intérêts avant les siens
        </h2>
      </div>
    </main>
  );
}
