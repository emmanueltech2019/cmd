import React from 'react'

const button = ({children}) => {
  return (
    <button className='bg-web-yellow hover:bg-web-blue transition-all duration-500 hover:text-white shadow-lg rounded-web-radius'>{children}</button>
  )
}

export default button