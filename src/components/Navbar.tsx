import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-6xl mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Manga<span className="text-primary">VF</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/search">Recherche</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
