import React, { Component } from "react";
import Card from "./common/Card";
import moment from "moment";

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {this.props.data.map((item) => (
              <div className="col-md-4">
                <Card key={item.id} item={item} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default BlogPage;
