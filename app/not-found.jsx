import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black h-screen text-white">
      <div className="max-w-[1200px] pt-20 text-center mx-auto">
        <h2>404 Not Found</h2>
        <p>Could not find requested resource</p>
        <p>
          Go back to{" "}
          <Link href="/" className="text-red-500">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
