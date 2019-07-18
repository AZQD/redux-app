import React, {Component} from 'react';
import {fetchPost} from '../../actions/actions'
import {connect} from 'react-redux'

class Post extends Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    const postData = this.props.postData;
    const postItem = postData.map(post => (
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

const mapStateToProps = state => {
  return {
    postData: state.postReducer.postData
  }
};

export default connect(mapStateToProps, {fetchPost})(Post);
