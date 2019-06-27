import React, { Component } from "react";
import axios from "axios";

import { Button } from "react-bootstrap";

import Posts from "./Components/Posts";
import Users from "./Components/Users";

import "./App.css";

export default class App extends Component {
  state = {
    title: "USERS AND POSTS LIST",
    posts: [],
    users: [],
    showPosts: false,
    showUsers: false
  };

  handleShowPosts = () => {
    let { showPosts } = this.state;

    if (showPosts) {
      showPosts = false;
      this.setState({ showPosts });
    } else {
      showPosts = true;
      this.setState({ showPosts });
    }
  };

  handleShowUsers = () => {
    let { showUsers } = this.state;

    if (showUsers) {
      showUsers = false;
      this.setState({ showUsers });
    } else {
      showUsers = true;
      this.setState({ showUsers });
    }
  };

  componentDidMount = async () => {
    const url = "https://jsonplaceholder.typicode.com";

    const posts = await axios.get(`${url}/posts`).then(res => {
      return res.data;
    });

    const users = await axios.get(`${url}/users`).then(res => {
      return res.data;
    });

    this.setState({ posts, users });
  };

  render() {
    const { title, posts, users, showPosts, showUsers } = this.state;
    if (showPosts && showUsers) {
      return (
        <div className="container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="btns">
            <Button onClick={this.handleShowUsers}>
              Listar todos os users
            </Button>
            <Button onClick={this.handleShowPosts}>
              Listar todos os posts
            </Button>
          </div>
          <Users posts={users} />
          <Posts posts={posts} />
        </div>
      );
    } else if (showPosts) {
      return (
        <div className="container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="btns">
            <Button onClick={this.handleShowUsers}>
              Listar todos os users
            </Button>
            <Button onClick={this.handleShowPosts}>
              Listar todos os posts
            </Button>
          </div>
          <Posts posts={posts} />
        </div>
      );
    } else if (showUsers) {
      return (
        <div className="container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="btns">
            <Button onClick={this.handleShowUsers}>
              Listar todos os users
            </Button>
            <Button onClick={this.handleShowPosts}>
              Listar todos os posts
            </Button>
          </div>
          <Users posts={users} />
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="btns">
            <Button onClick={this.handleShowUsers}>
              Listar todos os users
            </Button>
            <Button onClick={this.handleShowPosts}>
              Listar todos os posts
            </Button>
          </div>
        </div>
      );
    }
  }
}
