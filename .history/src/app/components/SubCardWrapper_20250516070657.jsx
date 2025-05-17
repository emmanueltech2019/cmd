import React from 'react'

const SubCardWrapper = ({ children }) => {
  return (
    <div className="flex gap-3 border-2 border-[#FFFFFFCC] p-web-card rounded-web-cardradius flex-col items-start"
    >
      {children}
    </div>
  )
}

export default SubCardWrapper