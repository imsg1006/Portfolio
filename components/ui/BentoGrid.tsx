'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg"; 
import { GlobeDemo } from "./GridGlobe"; 
import dynamic from 'next/dynamic';
import Image from "next/image";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

import { useState } from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { IconDownload, IconEye, IconFile } from "@tabler/icons-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied , setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('shlokgupta10@gmail.com');
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden  shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border  bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,8,29,1) 0%, rgba(12,14,35,1) 100%",
      }}
    >
      <div className={id === 6 ? "flex justify-center h-full" : ""}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
            height={40}
            width={40}
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover , h-full w-full , object-center")}
            />
          )}
        </div>
         
        {id === 6 && (
          <BackgroundGradientAnimation/> 
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
  )}
        >
          <div className="font-sans font-extralight text-sm text-[#c1c2d3]  md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="mt-2 lg:text-3xl z-10 max-w-96 mb-2 font-sans text-lg  font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        {id === 2 && <GlobeDemo/>}
        {id === 3 && (
          <div className="flex gap-4 p-2 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col font-bold mt-4   lg:gap-4">
              {['React.js' , 'Next.js' ,'Python', 'Typescript'].map
              ((item) =>(
                <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs px-3 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]">
              </span>
            </div>
            <div className="flex m-2 flex-col gap-3 font-bold lg:gap-4">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]">
              </span>
              {['TailwindCss', 'FastAPI' , 'ShadcnUI' , 'MaterialUI'].map
              ((item) =>(
                <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs px-3 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                  {item}
                </span>
              ))}
             </div>
          </div> 
        )}

        { id === 6 && (
  <div className="mt-5 relative">
    <div className="absolute -bottom-5 right-0">
      {copied && typeof window !== "undefined" && (
        <Lottie
          options={{
            loop: copied,
            autoplay: copied,
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          height={80}
          width={80}
        />
      )}
    </div>
    <MagicButton
      title={copied ? 'Email copied' : 'Copy my Email'}
      icon={<IoCopyOutline />}
      position="left"
      otherClasses="!bg-[#161a31]"
      handleClick={handleCopy}
    />
  </div>
)}
{ id === 7 && (
  <div className="flex flex-col items-center mt-4">
    <div className="flex gap-3">
      <a
        href="/SHLOK_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 text-white bg-transparent rounded-lg  transition duration-300 font-normal"
      >
        <MagicButton
        
      title={'View Resume'} icon={<IconEye/>}
      position="left"
      otherClasses="!bg-[#161a31]"/>
        
      </a>
      <a
        href="/SHLOK_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2  text-white bg-transparent rounded-lg transition duration-300 text-xs font-extrabold"
        download
      >
        <MagicButton
        
      title={'Download Resume'}
       icon={<IconDownload/>}
      position="left"
      otherClasses="!bg-[#161a31]"/>
        
      </a>
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
};
