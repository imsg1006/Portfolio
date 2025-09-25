import { workExperience } from '@/data'
import React from 'react'
import { Button } from '../components/ui/MovingBorder'
import Image from 'next/image'

const Experience = () => {
    return (
        <div className='py-16' id='experience'>
            <h1 className='heading'>
                My
                <span className='text-purple '> Work experience
                </span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 '>
                {workExperience.map((card) => (
                    <Button key={card.id} className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                        <div className='flex lg:flex-row w-full h-full flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <div className='relative w-16 h-16 lg:w-20 lg:h-20'>
                                <Image
                                    src={card.thumbnail}
                                    fill
                                    alt={card.thumbnail}
                                    className='object-contain'
                                />
                            </div>
                            <div className='lg:ms-5'>
                                <h1 className='text-start mb-6 text-2xl w-full md:text-3xl font-extrabold'>
                                    {card.company}
                                </h1>
                                <p className='text-start mb-6 text-gray-400'>{card.date}</p>
                                <h2 className='text-start text-xl w-full md:text-2xl font-bold'>
                                    {card.title}
                                </h2>
                                <p className='text-start w-full text-white-100 mt-3  font-semibold '>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience 