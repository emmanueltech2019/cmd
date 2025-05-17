import React from 'react'
import Image from 'next/image'
import medellinHero from '@/images/jpg/medellinHero.jpg'
import medellinLogo from '@/images/png/medellinLogo.png'
import medellinCheck from '@/images/png/medellinCheck.png'
import SlideView from '../components/SlideView'
import Button from '../components/Button'

const page = () => {
  return (
    <>
        <div className={`h-screen w-full`} 
            style={{
                backgroundImage: `url(${medellinHero.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <nav className='py-5'>
                <div className="w-web-navwidth mx-auto bg-web-navwhite backdrop-blur-md p-web-nav-padding flex justify-between items-center rounded-web-radius border-white border-4 my-5">
                    <div className="w-web-logowidth h-web-logoheight flex justify-center items-center">
                        <Image src={medellinLogo} width={100} height={100} alt='medellin logo' className='w-full' />
                    </div>
                    <ul className="flex gap-web-navgap items-center text-navfontsize">
                        <li>
                            <button className='p-web-nav-padding bg-transparent hover:bg-web-blue text-web-navgray hover:text-white transition-all duration-500 rounded-web-navbtnradius'>Characteristics</button>
                        </li>
                        <li>
                            <button className='p-web-nav-padding bg-transparent hover:bg-web-blue text-web-navgray hover:text-white transition-all duration-500 rounded-web-navbtnradius'>Prices</button>
                        </li>
                        <li>
                            <button className='p-web-nav-padding bg-transparent hover:bg-web-blue text-web-navgray hover:text-white transition-all duration-500 rounded-web-navbtnradius'>Testimonials</button>
                        </li>
                        <li>
                            <button className='p-web-nav-padding bg-transparent hover:bg-web-blue text-web-navgray hover:text-white transition-all duration-500 rounded-web-navbtnradius'>Questions</button>
                        </li>
                    </ul>
                    <Button className='bg-web-yellow hover:bg-web-blue py-4 px-7 transition-all duration-500 hover:text-white shadow-lg rounded-web-radius'>Schedule a call now</Button>
                </div>
            </nav>
            <div className="mt-10 w-[100%] md:w-[70%] mx-auto">
                <h1 className="text-center text-web-blue text-webhero-font leading-webhero-lineheight">Transform Your Surgical Practice! Maximize Profits with Robotic Surgery in Medellin</h1>
                <p className='text-websubhero-font text-web-navgray text-center py-5'>Attract More Patients, Get More Referrals, and Dominate Your Surgical Market</p>
            </div>
            <div className="whitespace-nowrap">
                <SlideView>Increased Referrals</SlideView>
                <SlideView >Premium Positioning</SlideView>
                <SlideView className="p-web-heroslideview bg-web-navwhite flex justify-center items-center border-white border-4">Operational Efficiency</SlideView>
                <SlideView className="p-web-heroslideview bg-web-navwhite flex justify-center items-center border-white border-4">Higher Patient Volume</SlideView>
            </div>
        </div>
    </>
  )
}

export default page