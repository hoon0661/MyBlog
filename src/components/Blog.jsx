import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import BlogPage from "./BlogPage";
import FooterComponent from "./FooterComponent";
import Hardware from "./Hardware";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import Software from "./Software";
import moment from "moment";
import AboutMe from "./AboutMe";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "hello1",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 2,
          title: "hello2",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 3,
          title: "hello3",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 4,
          title: "hello4",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 5,
          title: "hello5",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 6,
          title: "hello6",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 6,
          title: "hello6",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 6,
          title: "hello6",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 6,
          title: "hello6",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
        {
          id: 6,
          title: "hello6",
          content: <p>sdjfklsdf</p>,
          date: moment(new Date()).format("YYYY-MM-DD"),
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/blogpage" />
            </Route>
            <Route
              path="/hardware"
              component={() => <Hardware data={this.state.data} />}
            />
            <Route
              path="/software"
              component={() => <Software data={this.state.data} />}
            />

            <Route path="/aboutme" component={AboutMe} />
            <Route path="/login" component={LoginComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </>
    );
  }
}

export default Blog;
