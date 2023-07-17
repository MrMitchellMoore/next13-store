"use client";
import useCart from "@/app/(store)/store";
import ReactDom from "react-dom";

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div
        onClick={closeModal}
        className="bg-transparent inset-0 absolute"
      ></div>
      <div className="flex flex-col gap-4 bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen">
        <div className="flex items-center p-4 justify-between text-2xl font-bold relative mx-2">
          <h1>Cart</h1>
          <i
            onClick={closeModal}
            className="fa-solid fa-xmark cursor-pointer hover:opacity-60"
          ></i>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <>There are no items in your cart 😩.</>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return <div key={itemIndex}>{cartItem.name}</div>;
              })}
            </>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
