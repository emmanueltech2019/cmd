import React from 'react'

const OutlineBackgroundElement = ({ children }) => {
  return (
    <div className="p-1 border-white bordlocker-2 inline-b rounded-3xl">
        <div className="p-2 bg-white text-web-blue rounded-3xl">
            {children}
        </div>
    </div>
  )
}

export default OutlineBackgroundElement