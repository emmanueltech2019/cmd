import React from 'react'
import Image from 'next/image'
import medellinHero from '@/images/jpg/medellinHero.jpg'
import medellinLogo from '@/images/png/medellinLogo.png'
import medellinCheck from '@/images/png/medellinCheck.png'
import SlideView from '../components/SlideView'
import NavButton from '../components/NavButton'
import Card from '@/app/components/Card'
import medellinPatient from '@/images/gif/medellinPatient.gif'
import medellinPremium from '@/images/gif/medellinPremium.gif'
import medellinReferral from '@/images/gif/medellinReferral.gif'
import medellinCircle from '@/images/png/medellinCircle.png'
import CardWrapper from '../components/CardWrapper'
import OutlineBackgroundElement from '../components/OutlineBackgroundElement'

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
                    <NavButton className={`p-web-btn-padding`}>Schedule a call now</NavButton>
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
                <div className="flex flex-shrink-0 ">
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
                <NavButton className={`p-web-btn-padding`}>Schedule a call now</NavButton>
            </div>
        </div>
        <CardWrapper>
            <Card gifCircle={medellinCircle} gifImg={medellinPatient} title='Higher Patient Volume' description='Patients prefer the precision and faster recovery of robotic surgery. This translates into more appointments and procedures for their practice.' />
            <Card gifCircle={medellinCircle} gifImg={medellinReferral} title='Increased Referrals' description='Doctors who know your expertise in robotic surgery will refer more patients to you, expanding your network and your income.' />
            <Card gifCircle={medellinCircle} gifImg={medellinPremium} title='Premium Positioning' description='Offering robotic surgery positions you as a leader in your field, allowing you to set more competitive rates and attract higher-value patients.' />
        </CardWrapper>
        <div className="flex items-center justify-center w-full p-0 my-20 overflow-hidden h-web-videoheight">
            <video autoPlay loop muted className='w-full'>
                <source src='/videos/medellinVideo.mp4' type="video/mp4" />
            </video>
        </div>
        <div className="flex items-center justify-center w-full my-5">
            <div className="w-full md:w-[50%]">
                <div className="flex items-center justify-center w-full">
                    <div className="p-1 border-2 border-white rounded-3xl">
                        <div className="p-2 bg-white text-web-blue rounded-3xl">
                            Get in touch
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <h3 className="text-center text-web-blue text-web-contactformfont">Contact Us</h3>
                    <p className="text-xl text-center text-web-lightblue">Fill out the form below and let's get started</p>
                </div>
                <div className="my-10">
                    <form action="">
                            Name
                        <label htmlFor="name" className='text-web-blue'>
                            <input id='name' type="text" placeholder='Red Walls' className='w-full flex items-center justify-between mx-auto my-2 border-[1px] border-white bg-web-formcolor backdrop-blur-md  placeholder:text-web-lightblue rounded-xl p-2 ' />
                        </label>
                        <label htmlFor="email" className='text-web-blue'>
                            <div className="mt-5">
                                Email
                            </div>
                            <input id='email' type="text" placeholder='rojasparedes@correomd.com' className='w-full flex items-center justify-between mx-auto my-2 border-[1px] border-white bg-web-formcolor backdrop-blur-md  placeholder:text-web-lightblue rounded-xl p-2' />
                        </label>
                        <label htmlFor="select" className='text-web-blue'>
                            <div className="mt-5">
                                Select
                            </div>
                            <select type="text" className='w-full flex items-center justify-between mx-auto my-2 border-[1px] border-white bg-web-formcolor backdrop-blur-md  placeholder:text-web-lightblue rounded-xl p-2'>
                                <option value="">I want to receive training in robotic surgery</option>
                                <option value="">I need direct referrals to other robotic surgeons</option>
                                <option value="">Help me grow my robotics practice</option>
                                <option value="">Increase the acquisition of new patients for my practice</option>
                            </select>
                        </label>
                        <label htmlFor="briefly" className='text-web-blue'>
                            <div className="mt-5">
                                Briefly share what you are most looking forward to in your practice
                            </div>
                            <textarea type="text" placeholder='What I most desire for my practice is...' className='w-full flex items-center justify-between mx-auto my-2 border-[1px] bg-web-formcolor backdrop-blur-md placeholder:text-web-lightblue border-white rounded-xl p-2' rows={4} />
                        </label>
                        <NavButton className={`p-3 w-full text-web-lightblue mt-3 shadow-web-shadow`}> Send </NavButton> 
                    </form>
                </div>
            </div>
        </div>
        <div className="my-10">
            <div className="flex flex-col items-center justify-center md:w-[50%] w-full">
                <OutlineBackgroundElement>
                    Get in touch
                </OutlineBackgroundElement>
                <h1 className="my-5 text-center text-web-blue text-web-contactformfont">Our Packages to Boost Your Robotics Practice</h1>
                <p className="text-xl text-center text-web-lightblue">We offer comprehensive solutions to help you capitalize on the financial benefits of robotic surgery.</p>
            </div>
        </div>
    </>
  )
}

export default page