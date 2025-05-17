import React from 'react'

const SecondCard = () => {
  return (
    <div className="flex gap-3 border-2 border-[#FFFFFFCC] p-web-card rounded-web-cardradius flex-col items-start" 
                    style={{
                        backgroundImage: `url(${medellinDotted.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="p-[3] rounded-full border-web-blue border-[0.0000000001rem] relative">
                        <div className="relative p-3 rounded-full bg-web-blue">
                            <Image src={gifCircle} alt='medellin circle' width={100} height={100} className='w-[90%] absolute left-[50%] top-[50%] animate-rotate' />
                            <Image src={gifImg} alt='medellin premium' width={100} height={100} className='w-5' />
                        </div>
                    </div>
                        <h4 className="text-lg text-[##858f9d] font-medium">{title}</h4>
                    <p className={`text-web-lightblue text-lg font-thin`}>{description}</p>
                </div>
  )
}

export default SecondCard