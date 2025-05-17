import React from 'react'
import OutlineBackgroundElement from './OutlineBackgroundElement'

const FiftyPercentDefaultWrapper = ({ className = '', extraClass = '', outlineText, title, description, textClass, infiniteSlider }) => {
  return (
    <div className={`flex flex-col items-center justify-center md:w-[50%] w-full mx-auto ${className}`}>
      <div className="flex items-start justify-start">
        div.flex.justify-start.items-start  
        <OutlineBackgroundElement className={`${extraClass}`}>
            {outlineText}
        </OutlineBackgroundElement>
      </div>
      <h1 className={`my-5 text-center text-web-blue text-web-contactformfont ${textClass}`}>{title}</h1>
      <p className={`px-20 text-lg font-light text-center text-web-lightblue ${textClass}`}>{description}</p>
      {infiniteSlider}
    </div>
  )
}

export default FiftyPercentDefaultWrapper