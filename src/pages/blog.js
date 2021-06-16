import React from "react";
import Layout from "../components/layout/layout";
import Card from "../components/card"
import { useStaticQuery, graphql} from "gatsby";

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        edges {
          node {
            slug
            title
            description
            id
            image {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <>
    <Layout title="Blog" subtitle="eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
      <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
        {
          data.allStrapiArticle.edges.map(item => {
            return (
              <Card key={item.node.id} title={item.node.title} description={item.node.description} image={item.node.image.url}/>
          )})
        }  
      </div>
    </Layout>
    </> 
  ); 
};

export default Blog;