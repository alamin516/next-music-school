import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen  flex-col antialiased dark:text-white h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.6] relative flex items-center justify-center">
        <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-600  dark:from-gray-50 to-cyan-400 dark:to-gray-400 ">
          Not Found
        </h2>
        <p className="mt-4 font-normal text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          Could not find requested resource
        </p>
        <div className="mt-4">
          <Link href="/">
            <Button
              borderRadius="1.75rem"
              className="bg-cyan dark:bg-slate-900  text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Return Home
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
