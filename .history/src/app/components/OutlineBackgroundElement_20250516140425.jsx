import React from 'react'

const OutlineBackgroundElement = ({ children, className='' }) => {
  return (
    <div className={`p-1 border-2 border-white rounded-3xl ${className}`}>
        <div className="p-2 bg-white text-web-blue rounded-3xl">
            {children}
        </div>
    </div>
  )
}

export default OutlineBackgroundElement