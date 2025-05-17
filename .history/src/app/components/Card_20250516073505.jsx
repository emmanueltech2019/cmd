import React from 'react'
import medellinDotted from '@/images/png/medellinDotted.png'
import Image from 'next/image'

const Card = ({
    gifCircle,
    gifImg,
    title = 'default title',
    description = 'default description',
}) => {
  return (
        <div className="border-4 border-white p-web-card rounded-web-cardradius">
            <div className="flex gap-3 border-2 border-[#FFFFFFCC] p-web-card rounded-web-cardradius flex-col items-start" 
                style={{
                    backgroundImage: `url(${medellinDotted.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="p-[3] rounded-full border-web-blue border-[0.0000000001rem] relative">
                    <div className="p-3 rounded-full bg-web-blue relative">
                        <Image src={medellinCircle} alt='medellin circle' width={100} height={100} className='w-[90%] absolute left-[50%] top-[50%] animate-rotate' />
                        <Image src={medellinPremium} alt='medellin premium' width={100} height={100} className='w-5' />
                    </div>
                </div>
                    <h4 className="text-lg text-[##858f9d] font-medium">Premium Positioning</h4>
                <p className={`text-[#858f9d] text-lg font-thin`}>Offering robotic surgery positions you as a leader in your field, allowing you to set more competitive rates and attract higher-value patients.</p>
            </div>
        </div>
    
  )
}

export default Card