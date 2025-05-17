import React from 'react'
import Image from 'next/image'
import medellinHero from '@/images/jpg/medellinHero.jpg'
import medellinLogo from '@/images/png/medellinLogo.png'
import SlideView from '../components/SlideView'
import NavButton from '../components/NavButton'
import Card from '@/app/components/Card'
import medellinPatient from '@/images/gif/medellinPatient.gif'
import medellinPremium from '@/images/gif/medellinPremium.gif'
import medellinReferral from '@/images/gif/medellinReferral.gif'
import medellinGlobe from '@/images/gif/medellinGlobe.gif'
import medellinAudience from '@/images/gif/medellinAudience.gif'
import medellinStrategy from '@/images/gif/medellinStrategy.gif'
import medellinContent from '@/images/gif/medellinContent.gif'
import medellinReputation from '@/images/gif/medellinReputation.gif'
import medellinRevenue from '@/images/gif/medellinRevenue.gif'
import medellinCircle from '@/images/png/medellinCircle.png'
import medellinDoctor from '@/images/png/medellinDoctor.png'
import medellinBed from '@/images/png/medellinBed.png'
import CardWrapper from '../components/CardWrapper'
import OutlineBackgroundElement from '../components/OutlineBackgroundElement'
import secondCardBackground from '@/images/png/secondCardBackground.png'
import FiftyPercentDefaultWrapper from '../components/FiftyPercentDefaultWrapper'
import InfiniteSlider from '../components/InfiniteSlider'

const page = () => {
  return (
    <>
        <nav className="fixed top-0 z-50 flex items-center justify-between mx-auto my-5 -translate-x-1/2 border-4 border-white left-1/2 w-web-navwidth bg-web-navwhite backdrop-blur-md p-web-nav-padding rounded-web-radius">
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
        </nav>
        <div className={`h-screen w-full flex flex-col justify-end`} 
            style={{
                backgroundImage: `url(${medellinHero.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                WebkitMaskImage:
                    'linear-gradient(to bottom, black 95%, transparent)',
                    maskImage:
                    'linear-gradient(to bottom, black 95%, transparent)',
            }}
        >
            <div className="mt-10 w-[100%] md:w-[70%] mx-auto">
                <h1 className="text-center text-web-blue text-webhero-font leading-webhero-lineheight">Transform Your Surgical Practice! Maximize Profits with Robotic Surgery in Medellin</h1>
                <p className='py-5 text-center text-websubhero-font text-web-navgray'>Attract More Patients, Get More Referrals, and Dominate Your Surgical Market</p>
            </div>
            <InfiniteSlider />
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
                <FiftyPercentDefaultWrapper outlineText={`Get in touch`} title={`Contact Us`} description={`Fill out the form below and let's get started`} inlineClass='md:w-full' />
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
            <FiftyPercentDefaultWrapper outlineText='Hello, Doctor!' title='Our Packages to Boost Your Robotics Practice' description="'We offer comprehensive solutions to help you capitalize on the financial benefits of robotic surgery." inlineClass='md:w-[70%]' />
            
            <CardWrapper bg={`${secondCardBackground.src}`} className={`md:grid-cols-2 border-4 border-white rounded-3xl p-10`}>
                <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinGlobe} title='High Converting Website' description='Build a direct-to-patient funnel through an optimized landing page to convert visitors into booked appointments.' />
                <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinAudience} title='Brand Audience' description='Generate doctor-to-doctor referals with branded campaigns targeting your colleagues.' />
                <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinStrategy} title='SEO Strategy' description='Win searches with rich SEO language and dominate local results.' />
                <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinContent} title='Content' description='Boost your authority with 10 custom content pieces that build trust.' />
                <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinReputation} title="Managing Your Practice's Reputation" description='Respond to reviews, improve your digital presence, and turn positive experiences into growth for your practice.' />
                <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinRevenue} title="Increase Your Practice's Revenue" description='Optimize your processes, reduce absences, and improve loyalty to achieve a steady stream of revenue.' />
            </CardWrapper>
        </div>
        <FiftyPercentDefaultWrapper outlineText='There is more' title='Gain the competitive advantage your practice needs' description="'Stand out in health care sector with innovative solutions that improve efficiency, attract more patients, and strengthen your practice's reputation. Take your practice to the next level with tools designed to make difference." inlineClass='md:w-[70%]' />
        
        <CardWrapper gridCol={`grid-cols-2`} className={`p-20 border-white border-2 rounded-3xl mt-20 mb-20`} bg={`${secondCardBackground.src}`}> 
            <div className="w-full">   
                <Image className='w-full' src={medellinDoctor} width={1000} height={1000} alt='medellin doctor' />
            </div>
            <FiftyPercentDefaultWrapper textClass={`text-start px-5`} extraClass='mx-5 text-sm' className="flex flex-col items-start justify-start mb-10 md:w-full" outlineText={`Join the top 10`} title={`Increase Your Revenue and Reputation with Advanced Robotic Surgery`} description={`Are you looking to take your surgical practice to the next level and increase your revenue? Robotic surgery in Colombia is booming, and patients are actively seeking surgeons who offer this cutting-edge technology.`} infiniteSlider={<InfiniteSlider className={`md:w-[80%] mt-5 mr-auto`} />} />
            <FiftyPercentDefaultWrapper textClass={`text-start px-5`} extraClass='mx-5 text-sm' className="flex flex-col items-start justify-start md:w-full" outlineText={`Acquiring quality patients`} title={`Increase your surgical volume and attract high-value patients to your schedule.`} description={`Boost the growth of your surgical practice by increasing the volume of procedures and attracting high-net-worth patients who value specialized care and advanced technology.`} infiniteSlider={<InfiniteSlider className={`md:w-[80%] mt-5 mr-auto`} />} />
            <div className="w-full">   
                <Image className='w-full' src={medellinBed} width={1000} height={1000} alt='medellin doctor' />
            </div>
        </CardWrapper>
        <div className="my-20">
            <FiftyPercentDefaultWrapper outlineText='Economical for your office' title='Our Pricing Plans' description="Discover our adaptable pricing options tailored to meet your financial and educational requirements." inlineClass='md:w-[70%] my-10' />
        </div>
        <CardWrapper gridCol={`grid-cols-2`} className={`p-20 border-white border-2 rounded-3xl mt-20 mb-20`} bg={`${secondCardBackground.src}`}>
            <div className="p">
                
            </div>
        </CardWrapper>
    </>
  )
}

export default page