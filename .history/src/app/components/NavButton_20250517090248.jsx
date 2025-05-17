import React from 'react'

const button = ({children, className}) => {
  return (
    <button className={`bg-web-yellow hover:bg-web-blue transition-all duration-500 hover:text-white shadow-lg rounded-web-radius text-web-textblue ${className}`}>{children}</button>
  )
}

export default button