import React from 'react'
import Image from 'next/image'
import mede

const page = () => {
  return (
    <>
        <div className="h-screen w-full bg-[url('https://framerusercontent.com/images/b5PTKGzRyBS3L9UKBodiyhgwtrk.png?scale-down-to=2048')] bg-cover bg-center">
            <nav className='py-5'>
                <div className="w-web-navwidth mx-auto bg-web-navwhite backdrop-blur-md p-web-nav-padding flex justify-between items-center rounded-web-radius border-white border-3 my-5">
                    <div className="w-web-logowidth h-web-logoheight">
                        <Image src="https://framerusercontent.com/images/gV1KoVbV4MaUzhldJP5irrxjtI.png?scale-down-to=512" alt="Logo" width={100} height={100} />
                    </div>
                    <ul className="flex gap-web-navgap items-center text-navfontsize">
                        <li>Characteristics</li>
                        <li>Prices</li>
                        <li>Testimonials</li>
                        <li>Questions</li>
                    </ul>
                    <button className='bg-web-yellow hover:bg-web-blue py-4 px-7 transition-all duration-500 hover:text-white shadow-lg rounded-web-radius'>Schedule a call now</button>
                </div>
            </nav>
        </div>
    </>
  )
}

export default page