import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-black bg-white dark:text-gray-200 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            quasi distinctio veritatis totam itaque repellendus libero culpa,
            dolorem architecto delectus!
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Courses</h2>
          <ul>
            <li className="py-2">
              <Link href="/courses">All Courses</Link>
            </li>
            <li className="py-2">
              <Link href="/courses">Basic Music Theory</Link>
            </li>
            <li className="py-2">
              <Link href="/courses">Advanced Composition</Link>
            </li>
            <li className="py-2">
              <Link href="/courses">Songwriting</Link>
            </li>
            <li className="py-2">
              <Link href="/courses">Music Production</Link>
            </li>
          </ul>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul>
            <li className="py-2"><Link href="/">Facebook</Link></li>
            <li className="py-2"><Link href="/">Instagram</Link></li>
            <li className="py-2"><Link href="/">Linkedin</Link></li>
            <li className="py-2"><Link href="/">Twitter</Link></li>
          </ul>
        </div>
        <div>
        <h2 className="text-xl font-bold mb-4">Subscribe</h2>
        </div>
      </div>
      <p className="text-center pt-12 text-xs">&copy;2024 - All Rights Reserved - Music School</p>
    </footer>
  );
};

export default Footer;
