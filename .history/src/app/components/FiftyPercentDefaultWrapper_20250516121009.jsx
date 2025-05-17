import React from 'react'

const FiftyPercentDefaultWrapper = ({ children, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center md:w-[50%] w-full mx-auto ${className}`}>{children}</div>
    <FiftyPercentDefaultWrapper className={`my-20`}>
                <OutlineBackgroundElement>
                    Join the top 10
                </OutlineBackgroundElement>
                <h1 className="my-5 text-center text-web-blue text-web-contactformfont">Increase Your Revenue and Reputation with Advanced Robotic Surgery</h1>
                <p className="px-20 text-lg font-light text-center text-web-lightblue">Are you looking to take your surgical practice to the next level and increase your revenue? Robotic surgery in Colombia is booming, and patients are actively seeking surgeons who offer this cutting-edge technology.</p>
            </FiftyPercentDefaultWrapper>
  )
}

export default FiftyPercentDefaultWrapper