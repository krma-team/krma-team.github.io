import { Syne } from "next/font/google";

const syne = Syne({ weight: ["800"], subsets: ["latin"] });

export default function HeaderBanner() {
  return (
    <div className="flex items-center py-2 px-2 text-lg bg-brand-beige text-background font-medium justify-between">
      <p className="flex flex-row gap-2">
        Écoutez notre podcast
        <span className={`${syne.className} flex`}>☞ ici ←</span>
      </p>
      <p className="text-brand-giants text-sm">{"</>"}</p>
      <p className="flex flex-row gap-2">
        Écoutez notre podcast
        <span className={`${syne.className} flex`}>☞ ici ←</span>
      </p>
      <p className="text-brand-giants text-sm">{"</>"}</p>
      <p className="flex flex-row gap-2">
        Écoutez notre podcast
        <span className={`${syne.className} flex`}>☞ ici ←</span>
      </p>
    </div>
  );
}
