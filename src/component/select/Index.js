import React, {Component} from 'react';
import {connect} from 'react-redux'
import {selectItemFun} from '../../actions/actions'
import './index.css';

class Select extends Component {

  selectItemFun = (index)=> {
    this.props.selectItemFun(index);
  };

  render() {
    return (
      <div className='selectBox'>
        {
          this.props.selectArr.map((item, index) =>
            <div onClick={() => this.selectItemFun(index)} className={`selectItem ${this.props.selected === index}`} key={index}>{item.body}</div>
          )
        }
      </div>
    )
  }

}

const mapStateToProps = status => (
  {
    selectArr: status.selectReducer.selectArr,
    selected: status.selectReducer.selected
  }
);

export default connect(mapStateToProps, {selectItemFun})(Select);