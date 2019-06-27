import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

// import { Container } from './styles';

export default class Posts extends Component {
  state = {
    comments: ""
  };

  handleShowComments = async id => {
    console.log("entro");
    const url = "https://jsonplaceholder.typicode.com";

    const comments = await axios
      .get(`${url}/posts/${id}/comments`)
      .then(res => {
        return res.data;
      });

    this.setState({ comments });
  };

  render() {
    return (
      <div className="containerPosts">
        <h1>POSTS</h1>
        <ListGroup variant="flush" className="infoField">
          {this.props.posts.map(post => (
            <ListGroup.Item key={post.id}>
              <span className="field">{post.title}: </span>
              {post.body}
              <Link to={`/posts/${post.id}/comments`} className="post">
                <small>show comments</small>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
