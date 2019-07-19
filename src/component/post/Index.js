import React, {Component} from 'react';
import {fetchPost} from '../../actions/actions'
import {connect} from 'react-redux'

class Post extends Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps) {
    // this.props.postData.unshift(nextProps.addData);
  }

  render() {
    const postData = this.props.postData;
    console.log('postData', postData);
    const postItem = postData.map((post, index) => (
      <div key={index}>
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
    postData: state.postReducer.postData,
    addData: state.postReducer.addData
  }
};

export default connect(mapStateToProps, {fetchPost})(Post);
