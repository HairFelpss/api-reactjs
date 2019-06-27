import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

import "./styles.css";

export default class Comments extends Component {
  state = {
    comments: []
  };
  componentDidMount = async () => {
    const url = "https://jsonplaceholder.typicode.com";
    const {
      match: { params }
    } = this.props;

    const comments = await axios
      .get(`${url}/posts/${params.postId}/comments`)
      .then(res => {
        return res.data;
      });
    this.setState({ comments });
  };

  render() {
    return (
      <div className="containerComments">
        <h1>Feed</h1>
        <Link to="/" className="goHome">
          <p>GO TO HOME PAGE</p>
        </Link>
        <ListGroup variant="flush" className="infoField">
          {this.state.comments.map(comment => (
            <ListGroup.Item key={comment.id}>
              <span className="field"> {comment.name} </span>{" "}
              <font color="red">commented: </font>
              {comment.body}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
