import React from 'react'

function Card({title, description, image}){
  return (
    <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
      <div className="h-64 w-auto md:w-1/2">
        <img className="inset-0 h-full w-full object-cover object-center" src={image} />
      </div>
      <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
        <div className="font-semibold text-lg leading-tight truncate">{title}</div>
        <p className="mt-2">{description}</p>
      </div>

    </div>
  )
}

export default Card;