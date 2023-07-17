"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
      <Link href={"/"}>
        <h1 className="uppercase cursor-pointer hover:scale-110">Shirt Shop</h1>
      </Link>
      <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-400"></i>
    </header>
  );
}
