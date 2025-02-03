import Link from "next/link";
import React from "react";

export default function ({ navItemName, Icon }) {
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-2 capitalize transition-transform duration-300 ease-in-out hover:scale-105 "
      >
        <p>{navItemName}</p>
        {Icon && <Icon />}
      </Link>
    </>
  );
}
