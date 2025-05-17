import React from 'react'
import Image from 'next/image'
import medellinHero from '@/images/jpg/medellinHero.jpg'
import medellinLogo from '@/images/png/medellinLogo.png'
import medellinCheck from '@/images/png/medellinCheck.png'
import SlideView from '../components/SlideView'
import Button from '../components/NavButton'
import Card from '@/app/components/Card'
import medellinPatient from '@/images/gif/medellinPatient.gif'
import medellinPremium from '@/images/gif/medellinPremium.gif'
import medellinReferral from '@/images/gif/medellinReferral.gif'
import medellinCircle from '@/images/png/medellinCircle.png'
import CardWrapper from '../components/CardWrapper'

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
        <CardWrapper>
            <Card gifCircle={medellinCircle} gifImg={medellinPatient} title='Higher Patient Volume' description='Patients prefer the precision and faster recovery of robotic surgery. This translates into more appointments and procedures for their practice.' />
            <Card gifCircle={medellinCircle} gifImg={medellinReferral} title='Increased Referrals' description='Doctors who know your expertise in robotic surgery will refer more patients to you, expanding your network and your income.' />
            <Card gifCircle={medellinCircle} gifImg={medellinPremium} title='Premium Positioning' description='Offering robotic surgery positions you as a leader in your field, allowing you to set more competitive rates and attract higher-value patients.' />
        </CardWrapper>
        <div className="w-full p-0 h-web-videoheight overflow-hidden flex justify-center items-center my-5">
            <video autoPlay loop muted className='w-full'>
                <source src='/videos/medellinVideo.mp4' type="video/mp4" />
            </video>
        </div>
        <div className="my-5 flex justify-center items-center w-full">
            <div className="w-full md:w-[50%]">
                <div className="w-full flex justify-center items-center">
                    <div className="border-white border-2 p-1">
                        <button className="bg-white text-web-blue">
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page