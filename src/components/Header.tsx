import Link from "next/link";

export default function Header() {
  return (
    <header className="flex px-24 items-start justify-between py-5">
      <nav className="flex gap-10 uppercase text-lg font-medium">
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
      </nav>
    </header>
  );
}
