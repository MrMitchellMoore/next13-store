"use client";
import useCart from "@/app/(store)/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;

  const setProduct = useCart((state) => state.setProduct);

  const router = useRouter();

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
    router.push("/product/" + price_id);
  }

  return (
    <div
      onClick={onProductClick}
      className="flex flex-col shadow bg-[#f7f6f2] hover:shadow-lg cursor-pointer"
    >
      <Image
        src={productInfo.images[0]}
        alt={name}
        sizes="100vw"
        width={250}
        height={133}
        className="object-fill w-full h-full"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="font-bold">${cost / 100}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
