import React, {Component} from 'react';
import {connect} from 'react-redux'
import {selectItemFun} from '../../actions/actions'
import './index.css';

class Select extends Component {

  selectItemFun = (index)=> {
    this.props.selectItemFun(index);
  };

  render() {
    console.log(112345, this.props);
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

// mapDispatchToProps作为函数，应该返回一个对象，该对象的每个键值对都是一个映射，定义了 UI 组件的参数怎样发出 Action。
const mapDispatchToProps = () => ({selectItemFun});

export default connect(mapStateToProps, mapDispatchToProps)(Select);