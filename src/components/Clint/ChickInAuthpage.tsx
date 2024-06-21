"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ChickInAuthpage = () => {
  const Pathname = usePathname();
  return (
    <div>
      {Pathname === "/auth/Sign-in" ? (
        <Link href="/auth/Sigin-up">Sign Up</Link>
      ) : (
        <Link href="/auth/Sign-in">Sign In</Link>
      )}
    </div>
  );
};

export default ChickInAuthpage;
