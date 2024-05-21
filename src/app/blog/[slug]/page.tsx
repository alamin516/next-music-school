import { Spotlight } from "@/components/ui/Spotlight";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="min-h-screen dark:bg-black/[0.96] bg-grid-white/[0.02]">
        My Post: {params.slug}
      </div>
    </>
  );
}
