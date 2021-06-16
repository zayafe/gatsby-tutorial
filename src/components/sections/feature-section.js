import React from "react";
import { useStaticQuery, graphql} from "gatsby";

export default function FeatureSection() {
  const data = useStaticQuery(graphql`
  query {
    allStrapiFeature {
      edges {
        node {
          title
          description
          id
        }
      }
    }
  }
`);

  return (
    <section className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Some topic</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Just another headline
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {data.allStrapiFeature.edges.map((feature) => (
              <div key={feature.node.id} className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-black">{feature.node.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.node.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}