import React from 'react'

const slideview = ({ children }) => {
  return (
    <div className='p-web-heroslideview bg-web-navwhite flex justify-center items-center border-white border-2 rounded-web-heroslideradius text-web-navfontsize text-web-blue inline-block'>{children}</div>
  )
}

export default slideview