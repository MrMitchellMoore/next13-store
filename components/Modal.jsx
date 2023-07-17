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
        <div className="px-2 overflow-scroll m-1 flex-1 flex flex-col">
          {cartItems.length === 0 ? (
            <>There are no items in your cart 😩.</>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex border-l border-solid border-slate-700 flex-col gap-2 px-2 capitalize font-bold"
                  >
                    <div className="flex items-center justify-between text-xl">
                      <h2>{cartItem.name}</h2>
                      <p>${cartItem.cost / 100}</p>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Quantity: {cartItem.quantity}
                    </p>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="border border-solid border-slate-700 text-2xl h-fit px-2 py-1 grid place-items-center cursor-pointer hover:bg-green-500 hover:duration-[500ms] ease-in-out">
          Checkout
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
