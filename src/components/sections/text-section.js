import React from "react";

function TextSection({title, text, showImage}){
  return (
    <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-800">{title}</h2>
            <p class="max-w-lg mx-auto mt-4 text-gray-600">{text}</p>
            {
              showImage && 
              <img class="object-cover object-center w-full mt-16 rounded-md shadow h-80"
                  src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg" />
            }
        </div>
    </section>
  )
}

export default TextSection
