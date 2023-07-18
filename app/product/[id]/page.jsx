"use client";
import Image from "next/image";
import useCart from "../../(store)/store";
import { redirect } from "next/navigation";

//TODO Learn NextJS 13: Build a Modern Full-Stack E-commerce App with TailwindCSS + Stripe + Zustand
//1:24:23

export default function ProductPage(props) {
  const { params } = props;
  // console.log(params);
  const { id } = params;
  // console.log("ID:" + id);
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);

  const { cost, productInfo, name, description } = product;
  if (!product || !product?.name) {
    redirect("/");
  }

  function handleAddToCart() {
    const newItem = {
      quantity: 1,
      id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  }

  return (
    <div className="bg-slate-500 w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto h-full">
        <Image
          src={productInfo.images[0]}
          alt={name}
          width={768}
          height={500}
          className="object-contain mx-auto my-10 md:my-8"
        />
        <div className="flex flex-col bg-white shadow-md max-w-3xl justify-center items-center h-full p-6 md:p-16 sm:p-0 md:my-3">
          <div className="flex font-bold justify-around md:justify-normal gap-6 sm:text-3xl md:text-5xl uppercase">
            <h3>{name}</h3>
            <p>${cost / 100}</p>
          </div>
          <p className="text-sm md:text-lg mx-auto md:mx-0 capitalize">
            {description}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-slate-700 text-white rounded hover:bg-slate-500 cursor-pointer px-4 py-2 md:my-2"
          >
            Add on Cart
          </button>
        </div>
      </div>
    </div>
  );
}
