import React from "react";
import { Link } from "gatsby"

function BlogSection(){
  return (
    <section className="bg-white">
      <div className="max-w-5xl px-6 py-16 mx-auto">
        <div className="px-8 py-12 bg-gray-800 rounded-md md:px-20 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Look what we have to say</h3>
            <p className="max-w-md mt-4 text-gray-400">Super awesome text dignissim enim sit. Elit pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet consectetur adipiscing. Eleifend donec pretium</p>
          </div>
          <Link to="/blog" className="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded md:mt-0 hover:bg-indigo-500">
            Read our blog
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection

