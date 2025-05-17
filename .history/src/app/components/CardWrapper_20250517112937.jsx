import React from 'react'

const CardContainer = ({ children, bg, className, gridCol }) => {

  return (
    <div className={`w-[full] md:w-[80%] grid grid-cols-1 ${gridCol || 'md:grid-cols-3'} gap-3 mx-auto my-5 items-start ${className}`} 
    style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>{children}</div>
  )
}

export default CardContainer