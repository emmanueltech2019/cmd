import React from 'react'
import OutlineBackgroundElement from './OutlineBackgroundElement'

const FiftyPercentDefaultWrapper = ({ className = '', extraClass = '', inlineClass = '', outlineText, title, description, textClass, infiniteSlider }) => {
  return (
    <div className={`${className || `flex flex-col items-center justify-center md:w-[50%] w-full mx-auto ${inlineClass}`}`}>
      <div className="flex items-start justify-start">
        <div className="flex items-start justify-start w-full">
          <OutlineBackgroundElement className={`${extraClass}`}>
              {outlineText}
          </OutlineBackgroundElement>  
        </div>  
      </div>
      <h1 className={`my-5 px-3 md:px-5 text-center text-web-blue text-web-contactformfont ${textClass}`}>{title}</h1>
      <p className={`md:px-5  px-3 text-lg font-light text-center text-web-lightblue ${textClass}`}>{description}</p>
      {infiniteSlider}
    </div>
  )
}

export default FiftyPercentDefaultWrapper