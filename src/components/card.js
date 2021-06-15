import React from 'react'

function Card({title, description}){
  return (
    <div className="rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
    </div>
  )
}

export default Card;