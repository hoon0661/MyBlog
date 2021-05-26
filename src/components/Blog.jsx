import React, { Component } from "react";
import BlogEditor from "./BlogEditor";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";

class Blog extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <LoginComponent />
        <BlogEditor />
        <FooterComponent />
      </>
    );
  }
}

export default Blog;
