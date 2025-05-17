import React from 'react'

const FiftyPercentDefaultWrapper = ({ children, className }) => {
  return (
    <div className="flex flex-col items-center justify-center md:w-[50%] w-full mx-auto">{children}</div>
  )
}

export default FiftyPercentDefaultWrapper