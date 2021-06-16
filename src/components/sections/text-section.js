import React from "react";

function TextSection({title, text}){
  return (
    <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto text-center">
            <h2 class="text-3xl font-semibold text-gray-800">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing</h2>
            <p class="max-w-lg mx-auto mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
    
            <img class="object-cover object-center w-full mt-16 rounded-md shadow h-80"
                src="https://images.unsplash.com/photo-1600069226367-412873fb0637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        </div>
    </section>
  )
}

export default TextSection
