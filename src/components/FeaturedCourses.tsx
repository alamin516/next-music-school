"use client";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import image from "@/assets/images/course-image.jpg";

interface Course {
  id: number;
  title: String;
  slug: String;
  description: String;
  price: number;
  instructor: String;
  isFeatured: boolean;
  image: String;
}
type FeaturedCoursesProps = {
  courses: Course[];
};

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ courses }) => {
  const featuresCourses = courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="w-full md:w-10/12 mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
          {featuresCourses.map((course: Course, i) => {
            if(i <= 3){
              return (
                <div key={course.id} className="flex justify-center">
                  <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    <Image
                      src={image}
                      alt="jordans"
                      height="400"
                      width="400"
                      className="object-contain w-full"
                    />
                    <div className="p-4 sm:p-6 flex flex-col ic flex-grow text-center">
                      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        {course['title']}
                      </p>
    
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {course['description']}
                      </p>
                    </div>
                  </BackgroundGradient>
                </div>
              )
            }})}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="relative px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white/60  dark:bg-black/60 shadow shadow-cyan-600 backdrop-blur hover:dark:bg-black/60 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
