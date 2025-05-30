import React from 'react'
import medellinCheck from '@/images/png/medellinCheck.png'
import Image from 'next/image'
import SlideView from './SlideView'

const InfiniteSlider = ({className}) => {
    const slideViewData = [
        { id: 1, text: 'Increased Referrals', image: medellinCheck },
        { id: 2, text: 'Premium Positioning', image: medellinCheck },
        { id: 3, text: 'Operational Efficiency', image: medellinCheck },
        { id: 4, text: 'Higher Patient Volume', image: medellinCheck },
    ];
  return (
    <div className={`flex whitespace-nowrap overflow-hidden w-full md:w-[30%] mx-auto ${className}`} 
        style={{
                WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
    >
        <div className="flex flex-shrink-0 animate-slide">
            {slideViewData.map((item) => (
                <SlideView key={`a-${item.id}`}>
                    <div className="flex gap-3 text-web-textblue">
                        <Image src={item.image} alt='medellin check' width={100} height={100} className='w-5' />
                        {item.text}
                    </div>
                </SlideView>
            ))}
        </div>
        <div className="flex flex-shrink-0 animate-slide">
            {slideViewData.map((item) => (
                <SlideView key={`b-${item.id}`}>
                    <div className="flex gap-3">
                        <Image src={item.image} alt='medellin check' width={100} height={100} className='w-5' />
                        {item.text}
                    </div>
                </SlideView>
            ))}
        </div>
    </div>
  )
}

export default InfiniteSlider