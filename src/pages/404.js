import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";

const IndexPage = () => {

  return (
    <>
    <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');</style>
    <Layout title="Oops" subtitle="Sorry, the page you are looking for apparently doesn't exist">
      <div>
      <Link to="/" className="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded md:mt-0 hover:bg-indigo-500">
        Why not go back to Home instead?
      </Link>
      </div>
    </Layout>
    </>
  );
};

export default IndexPage;