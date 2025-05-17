import React from 'react'

const CardContainer = ({ children,  }) => {

  return (
    <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto my-5 items-start" 
    style={{
        backgroundImage: `url(${secondCardBackground.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>{children}</div>
  )
}

export default CardContainer