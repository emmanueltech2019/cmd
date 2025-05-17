import React from 'react'
import Image from 'next/image'
import medellinHero from '@/images/jpg/medellinHero.jpg'
import medellinLogo from '@/images/png/medellinLogo.png'
import medellinCheck from '@/images/png/medellinCheck.png'
import SlideView from '../components/SlideView'
import Button from '../components/Button'
import Card from '@/app/components/Card'
import medellinDotted from '@/images/png/medellinDotted.png'
import medellinPatient from '@/images/gif/medellinPatient.gif'
import medellinPremium from '@/images/gif/medellinPremium.gif'
import medellinReferral from '@/images/gif/medellinReferral.gif'
import medellinCircle from '@/images/png/medellinCircle.png'

const page = () => {
    const slideViewData = [
        { id: 1, text: 'Increased Referrals', image: medellinCheck },
        { id: 2, text: 'Premium Positioning', image: medellinCheck },
        { id: 3, text: 'Operational Efficiency', image: medellinCheck },
        { id: 4, text: 'Higher Patient Volume', image: medellinCheck },
    ];
  return (
    <>
        <div className={`h-screen w-full`} 
            style={{
                backgroundImage: `url(${medellinHero.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                WebkitMaskImage:
                    'linear-gradient(to bottom, black 95%, transparent)',
                    maskImage:
                    'linear-gradient(to bottom, black 95%, transparent)',
            }}
        >
            <nav className='py-5'>
                <div className="flex items-center justify-between mx-auto my-5 border-4 border-white w-web-navwidth bg-web-navwhite backdrop-blur-md p-web-nav-padding rounded-web-radius">
                    <div className="flex items-center justify-center w-web-logowidth h-web-logoheight">
                        <Image src={medellinLogo} width={100} height={100} alt='medellin logo' className='w-full' />
                    </div>
                    <ul className="flex items-center gap-web-navgap text-navfontsize">
                        <li>
                            <button className='transition-all duration-500 bg-transparent p-web-nav-padding hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Characteristics</button>
                        </li>
                        <li>
                            <button className='transition-all duration-500 bg-transparent p-web-nav-padding hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Prices</button>
                        </li>
                        <li>
                            <button className='transition-all duration-500 bg-transparent p-web-nav-padding hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Testimonials</button>
                        </li>
                        <li>
                            <button className='transition-all duration-500 bg-transparent p-web-nav-padding hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Questions</button>
                        </li>
                    </ul>
                    <Button>Schedule a call now</Button>
                </div>
            </nav>
            <div className="mt-10 w-[100%] md:w-[70%] mx-auto">
                <h1 className="text-center text-web-blue text-webhero-font leading-webhero-lineheight">Transform Your Surgical Practice! Maximize Profits with Robotic Surgery in Medellin</h1>
                <p className='py-5 text-center text-websubhero-font text-web-navgray'>Attract More Patients, Get More Referrals, and Dominate Your Surgical Market</p>
            </div>
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
            <div className="flex items-center justify-center my-5">
                <Button>Schedule a call now</Button>
            </div>
        </div>
        <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto my-5 items-start">
            <>
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
                            <Image src={medellinPatient} alt='medellin patient' width={100} height={100} className='w-5' />
                        </div>
                    </div>
                    <h4 className="text-lg text-web-blue font-medium">Higher Patient Volume</h4>
                    <p className={`text-[#858f9d] text-lg font-lighter`}>Patients prefer the precision and faster recovery of robotic surgery. This translates into more appointments and procedures for their practice.</p>
                </div>
            </div>
            <div className="border-4 border-white p-web-card rounded-web-cardradius">
                <div className="flex gap-3 items-start border-2 border-[#FFFFFFCC] p-web-card rounded-web-cardradius flex-col" 
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
                            <Image src={medellinReferral} alt='medellin referral' width={100} height={100} className='w-5' />
                        </div>
                    </div>
                     <h4 className="text-lg text-web-blue font-medium">Increased Referrals</h4>
                    <p className={`text-[#858f9d] text-lg font-thin`}>Doctors who know your expertise in robotic surgery will refer more patients to you, expanding your network and your income.</p>
                </div>
            </div>
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
        </div>
    </>
  )
}

export default page