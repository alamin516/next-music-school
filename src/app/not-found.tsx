import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] dark:text-white">
        <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Not Found</h2>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </main>
    </>
  );
}
