import React from 'react'

const OutlineBackgroundElement = ({ children }) => {
  return (
    <div className="inline p-1 border-2 border-white rounded-3xl">
        <div className="p-2 bg-white text-web-blue rounded-3xl">
            {children}
        </div>
    </div>
  )
}

export default OutlineBackgroundElement