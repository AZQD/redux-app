import React, {Component} from 'react';
// import axios from 'axios';
import {fetch} from 'whatwg-fetch'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
      .then(post => {
        this.setState({
          postData: post
        });
      });
  }

  render() {
    const { postData } = this.state;
    const postItem = postData.map(post=>(
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        {postItem}
      </div>
    );
  }
}

export default Post;
