import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import courseData from "../data/courses.json";
import WhyChooseUs from "@/components/WhyChooseUs";

async function getData() {
  return courseData
}


export default async function Home() {
  const data = await getData()
return (
    <main className="bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <HeroSection/>
      <FeaturedCourses courses={data['courses']}/>
      <WhyChooseUs/>
    </main>
  );
}
