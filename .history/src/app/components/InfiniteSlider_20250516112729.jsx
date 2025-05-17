import React from 'react'

const InfiniteSlider = () => {
  return (
    <div className="flex whitespace-nowrap overflow-hidden w-[50%] mx-auto" 
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
                            <div className="flex gap-3">
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