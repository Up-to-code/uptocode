import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 max-w-5xl m-auto">
      <div className="flex-1">
        <Link href={"/"} className="max-h-14 " >
        <Image src="/logo-no-background.svg" alt="logo" width={150} height={50} ></Image>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
