import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Comments from "./Components/Comments";
import UserInfo from "./Components/UserInfo";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/posts/:postId/comments" component={Comments} />
      <Route path="/userinfo/:userId" component={UserInfo} />
    </div>
  </Router>,
  document.getElementById("root")
);
