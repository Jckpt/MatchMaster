import React from "react";
import NavSearch from "./NavSearch";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo-isolated.svg";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image src={logo} height={32} alt="logo" />
        </Link>
      </div>

      <div className="flex-none gap-2">
        <NavSearch />
      </div>
    </div>
  );
};

export default Navbar;
