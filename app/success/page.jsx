import Link from "next/link";

export default function SuccessPage() {
  return (
    <div>
      <h1>Payment was a success!</h1>
      <Link href={"/"}>
        <button
          role="button"
          className="rounded bg-gray-600 hover:bg-gray-300 duration-75 p-2"
        >
          Back Home
        </button>
      </Link>
    </div>
  );
}
