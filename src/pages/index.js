import React from "react";
import Layout from "../components/layout/layout";
import FeatureSection from "../components/sections/feature-section"
import TextSection from "../components/sections/text-section"
import BlogSection from "../components/sections/blog-section"

const IndexPage = () => {

  return (
    <>
    <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');</style>
    <Layout title="This is a Homepage" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
      <TextSection title="Section Title" text="Nibh ipsum consequat nisl vel pretium lectus quam. Donec pretium vulputate sapien nec sagittis. Purus gravida quis blandit turpis cursus in. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Porttitor leo a diam sollicitudin tempor id eu. Augue eget arcu dictum varius duis at consectetur. Urna duis convallis convallis tellus id interdum velit laoreet id. Quisque egestas diam in arcu cursus euismod quis viverra. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Sit amet nisl suscipit adipiscing. Risus feugiat in ante metus dictum. Cras fermentum odio eu feugiat pretium. Ut tortor pretium viverra suspendisse potenti nullam ac. Urna molestie at elementum eu. Mattis rhoncus urna neque viverra justo nec ultrices. Nullam ac tortor vitae purus faucibus ornare suspendisse sed."/>
      <FeatureSection />
      <BlogSection />
    </Layout>
    </>
  );
};

export default IndexPage;