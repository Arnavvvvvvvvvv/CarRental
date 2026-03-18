import React from 'react'

const Title = ({title, subTitle, align}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left" }`}>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title
