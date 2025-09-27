import { workExperience } from '@/data'
import React from 'react'
import { Button } from '../components/ui/MovingBorder'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-12" id="experience">
      <h1 className="heading text-center">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>

      {/* Responsive grid */}
      <div className="w-full mt-12 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:flex-row w-full h-full items-start lg:items-center p-4 sm:p-6 md:p-8 gap-4">
              {/* Logo */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto lg:mx-0">
                <Image
                  src={card.thumbnail}
                  fill
                  alt={card.company}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="lg:ms-5 text-center lg:text-left">
                <h1 className="mb-2 text-lg sm:text-xl md:text-2xl font-extrabold">
                  {card.company}
                </h1>
                <p className="mb-3 text-sm sm:text-base text-gray-400">
                  {card.date}
                </p>
                <h2 className="text-md sm:text-lg md:text-xl font-bold">
                  {card.title}
                </h2>
                {card.desc && (
                  <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-200">
                    {card.desc}
                  </p>
                )}
                {card.desc2 && (
                  <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-200">
                    {card.desc2}
                  </p>
                )}
                {card.desc3 && (
                  <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-200">
                    {card.desc3}
                  </p>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
