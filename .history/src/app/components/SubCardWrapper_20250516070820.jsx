import React from 'react'
import medellinDotted from '@/images/png/medellinDotted.png'

const SubCardWrapper = ({ children }) => {
  return (
    <div className="flex gap-3 border-2 border-[#FFFFFFCC] p-web-card rounded-web-cardradius flex-col items-start"
        style={{
            backgroundImage: `url(${medellinDotted.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
    >({ children })</div>
  )
}

export default SubCardWrapper