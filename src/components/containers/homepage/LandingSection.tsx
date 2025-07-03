"use client";

import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });

import krma from "@/assets/logo/Wordmark.svg";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function LandingSection() {
  return (
    <section id="landing-section" className="flex justify-center">
      <div className="flex-1">
        <Image src={krma} alt="krma" width={432} height={169} />
        <h2 className="max-w-xl text-center">
          L'agence de développement qui place vos intérêts avant les siens
        </h2>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        <Card className="card-border-linear-gradient gap-8 px-8">
          <h3
            className={`text-2xl text-brand-beige uppercase self-center font-bold ${syne.className}`}
          >
            Une équipe tech complète
          </h3>
          <p>
            Du design au développement, en passant par la gestion de projet,
            krma peut proposer une squad complète et clé en main.
          </p>
        </Card>
        <Card>
          <h3>Card avec image</h3>
          <p>
            Cette Card contient une image (simulée par un div coloré) et du
            texte alignés horizontal wishement.
          </p>
        </Card>
      </div>
    </section>
  );
}
