import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { a, desc } from "motion/react-client";
import { link } from "fs";

export function DraggableCardDemo() {
  const items = [
    
    {
      title: "Github",
      link: "https://github.com/imsg1006",      
      image:
        "/github_logo.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/shlokgupta1006/",
      image:
        "/twitter.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Twitter",
      link: "https://x.com/shlok10xDev",
      image:
        "/linkedIn.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    }
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Connect with me on my socials!
      </p>
      {items.map((item) => (
  <DraggableCardBody key={item.title} className={item.className}>
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
      style={{ textDecoration: "none" }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="pointer-events-none relative z-10 h-80 w-80 object-cover"
      />
      <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
        {item.title}
      </h3>
    </a>
  </DraggableCardBody>
))}
       
    </DraggableCardContainer>
  );
}
