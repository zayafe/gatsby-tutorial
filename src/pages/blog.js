import React from "react";
import Layout from "../components/layout";
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
          }
        }
      }
    }
  `);

  return (
    <>
    <Layout title="Blog" subtitle="eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          data.allStrapiArticle.edges.map(item => {
            return (
              <Card key={item.node.id} title={item.node.title} description={item.node.description} />
          )})
        }  
      </div>
    </Layout>
    </> 
  ); 
};

export default Blog;