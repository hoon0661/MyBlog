import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class BlogEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (html) => {
    console.log(html);
    this.setState({ content: html });
    // this.setState({ content: e.target.value });
  };

  handleSubmit = () => {
    
  };
  render() {
    return (
      <>
        <div className="container">
          <ReactQuill
            theme="snow"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.handleSubmit}>
            Save
          </button>
        </div>
      </>
    );
  }
}

export default BlogEditor;
