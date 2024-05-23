import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import courseData from "../data/courses.json";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Instructors from "@/components/Instructors";
import { Metadata } from "next";

async function getData() {
  return courseData;
}

export const metadata: Metadata = {
  title: "Next Js - Music School",
  description: "Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.",
};

export default async function Home() {
  const data = await getData();
  return (
    <main className="bg-black/[0.96] antialiased bg-grid-white/[0.02] bg-dot-slate/[0.02] relative overflow-hidden">
        <HeroSection />
        <FeaturedCourses courses={data["courses"]} />
        <WhyChooseUs />
        <Testimonials />
        <Projects />
        <Instructors/>
    </main>
  );
}
