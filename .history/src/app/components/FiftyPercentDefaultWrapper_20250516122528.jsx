import React from 'react'
import OutlineBackgroundElement from './OutlineBackgroundElement'

const FiftyPercentDefaultWrapper = ({ children, className, extraClass, outlineText, title, description, textClass }) => {
  return (
    <div className={`flex flex-col items-center justify-center md:w-[50%] w-full mx-auto ${className}`}>{children}
      <OutlineBackgroundElement className={`${extraClass}`}>
          {outlineText}
      </OutlineBackgroundElement>
      <h1 className="my-5 text-center text-web-blue text-web-contactformfont">{title}</h1>
      <p className={px-20 text-lg font-light text-center text-web-lightblue}>{description}</p>
    </div>
  )
}

export default FiftyPercentDefaultWrapper