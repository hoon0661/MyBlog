import React, { Component } from "react";
import BlogPage from "./BlogPage";

class Hardware extends Component {
  state = {};
  render() {
    return <BlogPage data={this.props.data} />;
  }
}

export default Hardware;
