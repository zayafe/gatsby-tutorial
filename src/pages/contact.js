import React from "react";
import Layout from "../components/layout/layout";
import TextSection from "../components/sections/text-section"

export default class Contact extends React.Component {
  state = {
    userName: "",
    userMail: "",
    userMessage: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  render(){
    return (
      <>
      <Layout title="Let's keep in touch!" subtitle="Send us a message with this form">
        <TextSection showImage={false} title="We value our customers" text="Aliquam sem fringilla ut morbi tincidunt augue interdum. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Commodo quis imperdiet "></TextSection>
      <form className="container mx-auto p-8 w-6/12 px-4 m-16 bg-gray-200 rounded">
          <input
            type="text"
            name="userName"
            placeholder="Your name"
            value={this.state.userName}
            onChange={this.handleInputChange}
            className="block mx-auto m-4 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12"
          />
          <input
            type="mail"
            name="userMail"
            placeholder="Your mail"
            value={this.state.userMail}
            onChange={this.handleInputChange}
            className="block mx-auto m-4 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12"
          />
        <textarea 
          placeholder="Your message" 
          name="userMessage"
          value={this.state.userMessage}
          onChange={this.handleInputChange}
          className="block mx-auto m-4 px-3 py-3 h-60 resize-none placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12">
        </textarea>
        <button type="submit" className="block mx-auto m-4 px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded md:mt-0 hover:bg-indigo-500 w-40">Submit</button>
      </form>
      </Layout>
      </>
    );
  }
};