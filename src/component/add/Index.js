import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addItem} from '../../actions/actions'
import './index.css';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem({
      title: this.state.title,
      body: this.state.body
    });
  };

  render() {
    return (
      <div className='addBox'>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">标题：</label>
          <input type="text" name='title' onChange={this.onChange} value={this.state.title}/>
          <br/>
          <label htmlFor="body">内容：</label>
          <input type="text" name='body' onChange={this.onChange} value={this.state.body}/>
          <br/>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }

}


export default connect(null, {addItem})(Add);