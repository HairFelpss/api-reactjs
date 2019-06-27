import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

import "./styles.css";

export default class UserInfo extends Component {
  state = {
    userInfo: []
  };

  componentDidMount = async () => {
    const url = "https://jsonplaceholder.typicode.com";
    const {
      match: { params }
    } = this.props;

    const userInfo = await axios
      .get(`${url}/users/${params.userId}`)
      .then(res => {
        return res.data;
      });
    this.setState({ userInfo });
  };

  render() {
    const { userInfo } = this.state;
    return (
      <div className="containerUserInfo">
        <h1>User Information</h1>
        <Link to="/" className="goHome">
          <p>GO TO HOME PAGE</p>
        </Link>
        <ListGroup variant="flush" className="infoField">
          <ListGroup.Item variant="dark">
            <span className="field">Id: </span> {userInfo.id}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="field">Name: </span> {userInfo.name}
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <span className="field">Username: </span> {userInfo.username}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="field">Phone: </span> {userInfo.phone}
          </ListGroup.Item>
          <ListGroup.Item variant="dark">
            <span className="field">Site: </span> {userInfo.website}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
