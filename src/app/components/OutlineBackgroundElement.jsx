import React from 'react'

const OutlineBackgroundElement = ({ children, className='' }) => {
  return (
    <div className={`${className || 'p-1 border-2 border-white rounded-3xl'}`}>
        <div className="px-3 py-1 bg-white text-web-blue rounded-3xl">
            {children}
        </div>
    </div>
  )
}

export default OutlineBackgroundElement