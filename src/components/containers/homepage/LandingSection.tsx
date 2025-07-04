"use client";

import krma from "@/assets/logo/Wordmark.svg";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function LandingSection() {
  return (
    <section id="landing-section" className="flex justify-between w-full">
      <div className="flex-1 flex flex-col">
        <Image src={krma} alt="krma" width={432} height={169} />
        <h2 className="max-w-xl text-center mt-6">
          L'agence de développement qui place vos intérêts avant les siens
        </h2>
      </div>

      <div className="flex flex-col justify-center gap-8 items-center">
        <Card className="w-105">
          <CardContent>
            <CardTitle className="text-brand-beige">
              Une équipe tech complète
            </CardTitle>
            <CardDescription className="text-brand-beige">
              Du design au développement, en passant par la gestion de projet,
              krma peut proposer une squad{" "}
              <span className="text-brand-glacier">complète</span> et{" "}
              <span className="text-brand-glacier">clé en main</span>.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-115">
          <CardContent>
            <CardTitle className="text-brand-glacier">
              à l'Expérience avérée
            </CardTitle>
            <CardDescription className="text-brand-glacier">
              Au fil du temps, nous avons développé{" "}
              <span className="text-brand-lime">ensemble</span>, des apps avec
              des <span className="text-brand-lime">workflows complexes</span>{" "}
              ou réglementés : paiements, prélèvements, assurances, URSSAF,
              réservations, sécurité routière...
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-125">
          <CardContent>
            <CardTitle className="text-brand-lavender">
              Qui s'adapte à vos besoins
            </CardTitle>
            <CardDescription className="text-brand-lavender">
              Construire un projet de zéro, renforcer des équipes existantes,
              gérer les sujets annexes ou les imprévus. Votre situation est{" "}
              <span className="text-brand-beige">unique</span>, notre
              accompagnement aussi.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
