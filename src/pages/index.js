import React from "react";
import Layout from "../components/layout";
import FeatureSection from "../components/feature-section"

const IndexPage = () => {

  return (
    <>
    <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');</style>
    <Layout title="This is a Homepage" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
      <FeatureSection />
    </Layout>
    </>
  );
};

export default IndexPage;