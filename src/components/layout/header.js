import React from "react";

function Header({title, subtitle}){
  return (
    <section className="container h-96 min-w-full bg-black py-24 px-16">
      <h1 className="text-center font-extrabold md:text-6xl text-4xl text-white">{title}</h1>
      <h2 className="text-center md:text-3xl text-2xl text-gray-300">{subtitle}</h2>
    </section>
  )
}

export default Header