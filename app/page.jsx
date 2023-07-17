import ProductCard from "@/components/ProductCard";
import Stripe from "stripe";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY ?? "", {
    apiVersion: "2020-08-27",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();

  return (
    <>
      <main className="p-4 flex flex-col">
        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:justify-items-between mx-auto gap-4 sm:gap-6">
          {products.map((product, productIndex) => (
            <ProductCard key={productIndex} product={product} />
          ))}
        </div>
      </main>
      ;
    </>
  );
}
