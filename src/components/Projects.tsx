"use client";
import { Spotlight } from "./ui/Spotlight";
import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div className="relative dark:bg-gray-900 bg-white">
      <div className="max-w-7xl mx-auto py-10">
        <Spotlight
           className="-top-40 right-0 md:right-60 md:-top-20"
          fill="#9E849B"
        ></Spotlight>
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-10 text-center">
          The Best Projects
        </h2>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export default Projects;

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/",
  },
];
