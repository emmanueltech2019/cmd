'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AnimateOnScroll } from '../components/AnimateOnScroll'
import medellinHero from '@/images/jpg/medellinHero.jpg'
import medellinLogo from '@/images/png/medellinLogo.png'
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
import medellinCheck from '@/images/png/medellinCheck.png'
import medellinDotted from '@/images/png/medellinDotted.png'
import Nicholas from '@/images/jpg/Nicholas.jpg'
import Michael from '@/images/jpg/Michael.jpg'
import Archie from '@/images/jpg/Archie.jpg'
import Jessica from '@/images/png/Jessica.png'
import Pier from '@/images/png/Pier.png'
import Stephen from '@/images/png/Stephen.png'
import accordionArrow from '@/images/gif/accordionArrow.gif'
import footerGif from '@/images/gif/footerGif.gif'


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile(); // run initially
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};
const page = () => {
    const sectionRef1 = useRef();
    const sectionRef2 = useRef();
    const sectionRef3 = useRef();
    const sectionRef4 = useRef();
    const sectionRef5 = useRef();
    const sectionRef6 = useRef();
    const sectionRef7 = useRef();
    const sectionRef8 = useRef();
    const sectionRef9 = useRef();
    const sectionRef0 = useRef();
    const [accordion, setAccordion] = useState(null);
    const mobileNav = useRef();
    const [toggleNav, setToggleNav] = useState(false);
    const isMobile = useIsMobile();

    const toggleAccordion = (index) => {
        setAccordion(prev => (prev === index ? null : index));
    };
    const people = [
        {
            name: 'Nicholas Barcellona',
            occupation: 'CFO, WVU Medicine',
            description: "Each robotic surgery case generates 16% more revenue than traditional surgery. We've also observed a 51% reduction in hospital stays compred to open surgery.",
            image: Nicholas
        },
        {
            name: 'Dr. Michael Stifelman',
            occupation: 'Director of Robotic Surgery, Hackensack University Medical Center',
            description: "Under our robotic surgery program, patient volume has increased by 30%, and we are handling more complex cases, exceeding national clinic standards.",
            image: Michael
        },
        {
            name: 'Stephen Mumford',
            occupation: 'COO, Baton Rouge General Medical Center',
            description: "By converting open vertral hernia causes to robotic surgery, we could more than double our profits. Even by converting just 50%, we could add about $400,000 in revenue.",
            image: Stephen
        },
        {
            name: 'Dr. Pier Guilianotti',
            occupation: 'Chief of Minimally Invasive Surgery, University of Illinois Colelege of Medicine',
            description: "Robotic surgery has allowed me to perform more than 3,000 procedures and train approximately 2,000 surgeons. It has revolutionized the way we approach complex surgeries.",
            image: Pier
        },
        {
            name: 'Dr. Achie Fernando',
            occupation: 'Urologist, NHS, United Kingdom',
            description: "Using robot-assisted surgery during the pandemic allowed us to perform complex procedures with remove guidance, ensuring patient safety and contuity of care.",
            image: Archie
        },
        {
            name: 'Dr. Jessica Hott',
            occupation: 'Minimally Invasive Gynecologic Surgeon, Berkeley Medical Center',
            description: "With the da Vinci 5, I can perform a hysterectomy in 20 to 25 minutes, instead of over an hour. That efficiency translates into better patient outcomes and more scheduled procedures per day.",
            image: Jessica
        }
    ]
    const accordionContent = [ 
        {
            header: 'How can robotic surgery increase my surgical volume and revenue?',
            content: 'Robotic surgery improves surgical precision, reduces recovery times, and minimizes complications, making it highly attractive to patients. As demand for minimally invasive procedures grows, surgeons who offer robotic options oftern receive more referrals, increase their patient volume, and reduce operating time. This efficiency allows for more procedures to be scheduled per week and improves financial perfomance per case, especially in complex surgeries that typically have higher reimbursement rates.',
            arrow: accordionArrow
        },
        {
            header: 'What types of surgeries are most cost-effective when performed robotically?',
            content: 'Complex procedures such as prostatectomies, hysterectomies, colorectal resections, hernia repairs, and bariatric surgeries tend to generate higher revenues when performed with robotic assistance. These cases benefit significantly from the precsion and minimally invasive nature of robotic platforms, which reduces hospital stays, lowers complication rates, and accelerates patient recovery, resultin in savings for the hospital and increased profitability for the surgeon.',
            arrow: accordionArrow
        },
        {
            header: 'Do patients actively seek out surgeons who use robotic technology?',
            content: "Yes. Today's patients are increasingly informed and prioritize minally invasive solutions that offer faster recovery and better outcomes. Surgeons recognized for using robotic systems oftern benefit from word-of-mouth recommendations, positive online reviews, and increased patient trust. This visibility enhances the surgeon's reputation and promotes organic growth, especially in competitive urban markets.",
            arrow: accordionArrow
        },
        {
            header: 'Is investing in robotic systems justified for a private or medium-sized hospital?',
            content: 'Absolutely. Although robotic systems require a considerable initial investment, their long-term return on investment is solid. Hospitals using robotic platforms typically see reduced length fo sty, fewer postoperative complications,a nd increased caseload capacity. For private or mid-sized hospitals, this can mean a faster break-even point and the opportunity to position themselves as leaders in modern surgery-attracting both patients and qualified surgeons.',
            arrow: accordionArrow
        }
    ]
  return (
    <>
        <nav className={`fixed top-0 z-50 flex h-auto flex-col md:flex-row items-start md:items-center transition-rounded duration-500 ease-in-out justify-between mx-auto my-5 -translate-x-1/2 border-4 border-white left-1/2 md:w-web-navwidth w-[90%] bg-web-navwhite backdrop-blur-md p-web-nav-padding rounded-web-radius ${toggleNav ? 'rounded-xl' : 'rounded-web-radius'}`}>
            <div className="flex items-center justify-center w-web-logowidth h-web-logoheight">
                <Image src={medellinLogo} width={100} height={100} alt='medellin logo' className='w-full' />
            </div>
            <ul ref={mobileNav} className="flex flex-col md:flex-row items-center md:w-auto w-full overflow-hidden gap-web-navgap text-navfontsize transition-[max-height] duration-500 ease-in-out"
                style={
                    isMobile ? {
                        maxHeight: toggleNav ? `${mobileNav.current?.scrollHeight}px` : '0px',
                    } : 
                    {}
                }
            >
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
                <NavButton className={`p-web-btn-padding block `}>Schedule a call now</NavButton>
            </ul>
            <NavButton className={`p-web-btn-padding hidden `}>Schedule a call now</NavButton>
            <p onClick={() => setToggleNav(!toggleNav)} className={`absolute text-3xl cursor-pointer right-5 top-5 ${isMobile ? 'block' : 'hidden'}`}>{toggleNav ? <FaTimes /> : <FaBars />}</p>
        </nav>

        <div className={`w-full flex flex-col justify-end`} 
            style={isMobile? {
                backgroundImage: `url(${medellinHero.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                WebkitMaskImage:
                    'linear-gradient(to bottom, black 95%, transparent)',
                    maskImage:
                    'linear-gradient(to bottom, black 95%, transparent)',
                
            } : {
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
            <div className="mt-[50%] w-[100%] md:w-[80%] mx-auto md:px-0 px-3 animate-translate">
                <h1 className="text-4xl text-center text-web-blue md:text-webhero-font md:leading-webhero-lineheight">Transform Your Surgical Practice! Maximize Profits with Robotic Surgery in Medellin</h1>
                <p className='py-5 text-xl font-light text-center md:text-websubhero-font text-web-navgray'>Attract More Patients, Get More Referrals, and Dominate Your Surgical Market</p>
            </div>
            <InfiniteSlider className={`animate-translateSubElement1`} />
            <div className="flex items-center justify-center my-5 animate-translateSubElement2">
                <NavButton className={`p-web-btn-padding`}>Schedule a call now</NavButton>
            </div>
        </div>
        <AnimateOnScroll ref={sectionRef1} offset={20}>
            <CardWrapper>
                <Card gifCircle={medellinCircle} gifImg={medellinPatient} title='Higher Patient Volume' description='Patients prefer the precision and faster recovery of robotic surgery. This translates into more appointments and procedures for their practice.' />
                <Card gifCircle={medellinCircle} gifImg={medellinReferral} title='Increased Referrals' description='Doctors who know your expertise in robotic surgery will refer more patients to you, expanding your network and your income.' />
                <Card gifCircle={medellinCircle} gifImg={medellinPremium} title='Premium Positioning' description='Offering robotic surgery positions you as a leader in your field, allowing you to set more competitive rates and attract higher-value patients.' />
            </CardWrapper>
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef2} offset={20}>    
            <div className="flex items-center justify-center w-full p-0 my-20 overflow-hidden h-web-videoheight">
                <video autoPlay loop muted className='w-full'>
                    <source src='/videos/medellinVideo.mp4' type="video/mp4" />
                </video>
            </div>
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef3} offset={20}>
            <div className="flex items-center justify-center w-full my-5">
                <div className="w-full md:w-[50%]">
                    <FiftyPercentDefaultWrapper outlineText={`Get in touch`} title={`Contact Us`} description={`Fill out the form below and let's get started`} inlineClass='md:w-full' textClass={``} />
                    <div className="my-10">
                        <form action="" className='px-3 md:px-0'>
                            <label htmlFor="name" className='text-web-blue'>
                                <div className="mt-3 md:mt-5">
                                    Name
                                </div>
                                <input id='name' type="text" placeholder='Red Walls' className=' outline-0 w-full flex items-center justify-between mx-auto my-2 border-[1px] border-white bg-web-formcolor backdrop-blur-md  placeholder:text-web-lightblue rounded-xl p-2 ' />
                            </label>
                            <label htmlFor="email" className='text-web-blue'>
                                <div className="mt-3 md:mt-5">
                                    Email
                                </div>
                                <input id='email' type="text" placeholder='rojasparedes@correomd.com' className='outline-0 w-full flex items-center justify-between mx-auto my-2 border-[1px] border-white bg-web-formcolor backdrop-blur-md  placeholder:text-web-lightblue rounded-xl p-2' />
                            </label>
                            <label htmlFor="select" className='text-web-blue'>
                                <div className="mt-3 md:mt-5">
                                    Select
                                </div>
                                <select type="text" className='outline-0 w-full flex items-center justify-between mx-auto my-2 border-[1px] border-white bg-web-formcolor backdrop-blur-md  placeholder:text-web-lightblue rounded-xl p-2'>
                                    <option value="">I want to receive training in robotic surgery</option>
                                    <option value="">I need direct referrals to other robotic surgeons</option>
                                    <option value="">Help me grow my robotics practice</option>
                                    <option value="">Increase the acquisition of new patients for my practice</option>
                                </select>
                            </label>
                            <label htmlFor="briefly" className='text-web-blue'>
                                <div className="mt-3 md:mt-5">
                                    Briefly share what you are most looking forward to in your practice
                                </div>
                                <textarea type="text" placeholder='What I most desire for my practice is...' className='outline-0 w-full flex items-center justify-between mx-auto my-2 border-[1px] bg-web-formcolor backdrop-blur-md placeholder:text-web-lightblue border-white rounded-xl p-2' rows={4} />
                            </label>
                            <NavButton className={`p-3 w-full text-web-lightblue mt-3 shadow-web-shadow`}> Send </NavButton> 
                        </form>
                    </div>
                </div>
            </div>
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef4} offset={20}>
            <div className="my-10">
                <FiftyPercentDefaultWrapper outlineText='Hello, Doctor!' title='Our Packages to Boost Your Robotics Practice' description="'We offer comprehensive solutions to help you capitalize on the financial benefits of robotic surgery." inlineClass='md:w-[70%]' />
                
                <CardWrapper bg={`${secondCardBackground.src}`} className={`md:grid-cols-2 border-4 border-white rounded-3xl p-5 mx-auto w-[95%]`}>
                    <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinGlobe} title='High Converting Website' description='Build a direct-to-patient funnel through an optimized landing page to convert visitors into booked appointments.' />
                    <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinAudience} title='Brand Audience' description='Generate doctor-to-doctor referals with branded campaigns targeting your colleagues.' />
                    <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinStrategy} title='SEO Strategy' description='Win searches with rich SEO language and dominate local results.' />
                    <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinContent} title='Content' description='Boost your authority with 10 custom content pieces that build trust.' />
                    <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinReputation} title="Managing Your Practice's Reputation" description='Respond to reviews, improve your digital presence, and turn positive experiences into growth for your practice.' />
                    <Card optionalClass={`p-0`} className={`bg-web-cardbgcolor`} gifCircle={medellinCircle} gifImg={medellinRevenue} title="Increase Your Practice's Revenue" description='Optimize your processes, reduce absences, and improve loyalty to achieve a steady stream of revenue.' />
                </CardWrapper>
            </div>
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef5} offset={20}>
            <FiftyPercentDefaultWrapper outlineText='There is more' title='Gain the competitive advantage your practice needs' description="'Stand out in health care sector with innovative solutions that improve efficiency, attract more patients, and strengthen your practice's reputation. Take your practice to the next level with tools designed to make difference." inlineClass='md:w-[70%]' />
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef6} offset={20}>     
            <CardWrapper gridCol={`md:grid-cols-2`} className={`md:p-20 p-5 border-white border-2 rounded-3xl mt-20 mb-20 mx-auto w-[95%]`} bg={`${secondCardBackground.src}`}> 
                <div className="w-full">   
                    <Image className='w-full' src={medellinDoctor} width={1000} height={1000} alt='medellin doctor' />
                </div>
                <FiftyPercentDefaultWrapper textClass={`md:text-start px-5`} extraClass='mx-5 text-sm' className="flex flex-col items-center justify-start w-full mb-10 md:items-start md:w-full" outlineText={`Join the top 10`} title={`Increase Your Revenue and Reputation with Advanced Robotic Surgery`} description={`Are you looking to take your surgical practice to the next level and increase your revenue? Robotic surgery in Colombia is booming, and patients are actively seeking surgeons who offer this cutting-edge technology.`} infiniteSlider={<InfiniteSlider className={`md:w-[80%] mt-5 mr-auto`} />} />
                <FiftyPercentDefaultWrapper textClass={`md:text-start px-5`} extraClass='mx-5 text-sm' className="flex flex-col items-center justify-start w-full mb-10 md:items-start md:w-full" outlineText={`Acquiring quality patients`} title={`Increase your surgical volume and attract high-value patients to your schedule.`} description={`Boost the growth of your surgical practice by increasing the volume of procedures and attracting high-net-worth patients who value specialized care and advanced technology.`} infiniteSlider={<InfiniteSlider className={`md:w-[80%] mt-5 mr-auto`} />} />
                <div className="w-full">   
                    <Image className='w-full' src={medellinBed} width={1000} height={1000} alt='medellin doctor' />
                </div>
            </CardWrapper>
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef7} offset={20}>
            <div className="my-20">
                <FiftyPercentDefaultWrapper outlineText='Economical for your office' title='Our Pricing Plans' description="Discover our adaptable pricing options tailored to meet your financial and educational requirements." inlineClass='md:w-[70%] my-10' />
            </div>
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef8} offset={20}>
            <CardWrapper gridCol={`md:grid-cols-2`} className={`md:p-20 p-5 border-white border-2 rounded-3xl mt-20 mb-20 mx-auto w-[95%]`} bg={`${secondCardBackground.src}`}>
                <div className="p-5 border-2 border-white md:p-10 rounded-3xl bg-web-cardbgcolor" 
                    style={{
                        backgroundImage: `url(${medellinDotted.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="flex justify-between items-cente">
                        <p className="text-lg">Standard</p>
                        <OutlineBackgroundElement className='px-5 py-1 text-sm md:text-normal'>
                            The 50 best surgeons
                        </OutlineBackgroundElement>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className='text-3xl'>$1,234,500</h1>
                        <p className="font-lighter text-md">*billed only once</p>
                        <NavButton className={`p-web-btn-padding`}>
                            Get started now
                        </NavButton>    
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">Effective landing page</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">3 audience campaigns</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">2 SEO key phrases</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">10 personalized contents</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">Digital reputation management</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-10 border-2 border-white rounded-3xl bg-web-cardbgcolor" 
                    style={{
                        backgroundImage: `url(${medellinDotted.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="flex justify-between items-cente">
                        <p className="text-lg">Premium</p>
                        <OutlineBackgroundElement className='px-5 py-1'>
                            Top 10 Surgeons
                        </OutlineBackgroundElement>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className='text-3xl'>COP $2,469,500</h1>
                        <p className="font-lighter text-md">*billed only once</p>
                        <NavButton className={`p-web-btn-padding`}>
                            Get started now
                        </NavButton>    
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">Effective landing page</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">5 referral campaigns</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">40 key SEO phrases</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">20 personalized contents</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={medellinCheck} alt='medellin check' width={100} height={100} className='w-5' />
                                <p className="text-lg font-ligher">Digital reputation management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardWrapper>
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef9} offset={20}>    
            <div className="w-[95%] md:w-[80%] md:p-20 p-5 border-white border-2 rounded-3xl mt-20 mb-20 mx-auto" 
                style={{
                    backgroundImage: `url(${secondCardBackground.src})`
                }}
            >
                <FiftyPercentDefaultWrapper outlineText='Testimonials' title='Listen to the best surgeons' description='Discover how leading surgeons have grown their practices and increased their revenue by fully embracing robotic surgery.' inlineClass='md:py-20 py-10 md:w-[70%]' />
                <div className="grid items-start grid-cols-1 gap-3 md:grid-cols-3" >    
                    {people.map((bio, index) => (    
                        <div key={index} className="p-3 border-2 border-white rounded-2xl bg-web-cardbgcolor">
                                <div  className="flex flex-col gap-2 p-2">
                                    <div className="flex items-center gap-2 py-2 border-gray-300 border-b-[.1px]">
                                        <Image src={bio.image} alt='Nicholas' width={100} height={100} className='rounded-xl w-[20%]' />
                                        <div className="flex flex-col gap-2">
                                            <h5 className='text-lg'>{bio.name}</h5>
                                            <p className="font-light">{bio.occupation}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm">
                                        {bio.description}
                                    </p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimateOnScroll>
        <AnimateOnScroll ref={sectionRef0} offset={20}>
            <div className="w-[95%] md:w-[80%] md:p-20 p-5 border-white border-2 rounded-3xl mt-20 mb-20 mx-auto" 
                style={{
                    backgroundImage: `url(${secondCardBackground.src})`
                }}
            >
                <FiftyPercentDefaultWrapper outlineText='FAQs' title='Frequently Asked Questions' description='Growing Your Practice with Robotic Surgery' inlineClass='md:py-20 py-10 md:w-[70%]' />
                <div className="flex flex-col gap-3">
                    {accordionContent.map((content, index) => {
                        const isOpen = accordion === index;
                        const contentRef = useRef(null);

                        return (
                        <div
                            key={index}
                            onClick={() => toggleAccordion(index)}
                            className="relative bg-[rgba(255,255,255,0.3)] rounded-xl cursor-pointer"
                        >
                            <div className="flex items-center justify-between px-3 py-2 text-sm bg-white md:text-xl text-web-blue rounded-xl">
                            {content.header}
                            <Image
                                src={content.arrow}
                                alt="accordion arrow"
                                width={100}
                                height={100}
                                className={`md:w-[3%] w-[10%] transition-transform duration-300 ${
                                isOpen ? 'rotate-45' : ''
                                }`}
                            />
                            </div>
                            <div
                            ref={contentRef}
                            className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                            style={{
                                maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                            }}
                            >
                            <div className="p-5 md:text-lg text-web-lightblue">
                                <p>{content.content}</p>
                            </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </AnimateOnScroll>
        
        <footer className='w-full p-5 md:p-20'
            style={{
                backgroundImage: `url(${footerGif.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="flex flex-col items-center gap-10 p-5 border-4 border-white md:items-start md:p-10 md:flex-row bg-web-default rounded-3xl">
                <div className="flex flex-col items-center justify-between gap-5 md:items-start">
                    <Image className='w-[50%]' src={medellinLogo} width={700} height={700} alt="medellin logo" />
                    <div>
                        <p className='mb-3 text-center md:text-xl md:text-start'>Step into the surgery of the future! Contact us today and discover how to increase your revenue with robotic surgery.</p>
                        <NavButton className={`p-web-nav-padding w-full`}>
                            Get started now
                        </NavButton>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between flex-shrink-0 md:items-start">
                    <p className="p-3 text-web-blue">Robotic Surgery</p>
                    <button className='transition-all duration-500 bg-#46393900 p-3 hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Robotic Surgery in Colombia</button>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Minimally Invasive Surgery</button>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Benefits of Robotic Surgery</button>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Advances in Robotic Surgery</button>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Robotic Technology in Medicine</button>
                </div>
                <div className="flex flex-col items-center justify-between flex-shrink-0 md:items-start">
                    <p className="p-3 text-web-blue">General Surgery</p>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Robotic Cholecystectomy</button>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Robotic Hernia Surgery</button>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Robot-Assisted Bowel Resection</button>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Robotic Surgery in General Surgery</button>
                    <button className='p-3 transition-all duration-500 bg-transparent hover:bg-web-blue text-web-navgray hover:text-white rounded-web-navbtnradius'>Robotic Surgery in Meddellin</button>
                </div>
            </div>
        </footer>
    </>
  )
}

export default page