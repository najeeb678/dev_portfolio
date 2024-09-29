import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="w-full px-32 py-8 font-medium flex justify-between">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">Abouwwt</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/reviews">Reviews</Link>
      </nav>
      {/* <Logo /> */}
      <nav>
        <Link href="/" target="_blank">
          A
        </Link>
        <Link href="/" target="_blank">
          B
        </Link>
        <Link href="/" target="_blank">
          C
        </Link>
        <Link href="/" target="_blank">
          D
        </Link>
        <Link href="/" target="_blank">
          E
        </Link>
      </nav>
      <div className="absolute left-[-50%] top-2 translate-x-[-50%] z-20">
       
        <Logo />
      </div>
    </div>
  );
};

export default NavBar;
