import React from 'react'

const page = () => {
  return (
    <>
        <div className="h-screen w-full bg-[url('https://framerusercontent.com/images/b5PTKGzRyBS3L9UKBodiyhgwtrk.png?scale-down-to=2048')] bg-cover bg-center">
            <navbar className="w-[80%] bg-[rgba(255,255,255,0.3)] backdrop-blur-md p-3 flex justify-between items-center rounded-3xl">

                <ul className="flex justify-between items-c">
                    <li>Characteristics</li>
                    <li>Prices</li>
                    <li>Testimonials</li>
                    <li>Questions</li>
                </ul>
                <button className='bg-[#fdc201] py-4 px-7 shadow-'>Schedule a call now</button>
            </navbar>
        </div>
    </>
  )
}

export default page