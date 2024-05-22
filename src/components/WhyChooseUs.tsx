import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import Image from 'next/image';
import image1 from '@/assets/images/scroll-image-1.jpg'
import image2 from '@/assets/images/scroll-image-2.jpg'
import image3 from '@/assets/images/scroll-image-3.jpg'
import image4 from '@/assets/images/scroll-image-4.jpg'


const content = [
    {
      title: "Real-Time Learning",
      description:
        "Experience real-time learning with our expert instructors. Get instant feedback on your performance and improve your skills quickly. Our platform ensures that you stay updated with the latest music trends and techniques.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={image1}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="music school real-time learning"
          />
        </div>
      ),
    },
    {
      title: "Performance Opportunities",
      description:
        "Showcase your talent through various performance opportunities. Our platform provides a stage for you to perform and gain exposure. Connect with a larger audience and take your music career to the next level.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={image2}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="music school performance opportunities"
          />
        </div>
      ),
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Access state-of-the-art facilities equipped with the latest instruments and technology. Our music school offers an environment conducive to learning and creativity. Practice, record, and produce your music with top-notch resources.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={image3}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="state-of-the-art music school facilities"
          />
        </div>
      ),
    },
    {
      title: "Community and Networking",
      description:
        "Become a part of a vibrant community of musicians. Network with peers, collaborate on projects, and build lasting relationships. Our platform connects you with like-minded individuals who share your passion for music.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={image4}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="music school community and networking"
          />
        </div>
      ),
    },
  ];
  

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs