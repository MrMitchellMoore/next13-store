"use client";

import useCart from "@/app/(store)/store";
import Link from "next/link";
import Modal from "./Modal";

export default function Header() {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
      {openModal && <Modal />}
      <Link href={"/"}>
        <h1 className="uppercase cursor-pointer hover:scale-110">Shirt Shop</h1>
      </Link>
      <div
        onClick={setOpenModal}
        className="relative cursor-pointer group grid place-items-center"
      >
        {cartItems.length > 0 && (
          <div className="absolute -top-3 bg-blue-400 text-white rounded-full -right-2">
            <p className="text-sm px-1">{cartItems.length}</p>
          </div>
        )}
        <i className="fa-solid fa-cart-shopping cursor-pointer group-hover:text-slate-400"></i>
      </div>
    </header>
  );
}
