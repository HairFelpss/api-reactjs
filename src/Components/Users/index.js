import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

import "./styles.css";

export default class Users extends Component {
  state = {
    userInfo: []
  };

  render() {
    return (
      <div className="containerUsers">
        <h1>USERS</h1>
        <ListGroup variant="flush" className="infoField">
          {this.props.posts.map(user => (
            <ListGroup.Item key={user.id}>
              {user.name}
              <Link to={`/userinfo/${user.id}`} className="post">
                <small className="sm">show comments</small>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}
