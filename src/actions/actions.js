import * as constObj from '../constant';

export const fetchPost = () => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      return res.json()
    })
    .then(postData => {
      dispatch({
        type: constObj.FETCH_POST,
        payload: postData
      });
    });
};

export const addItem = (addData) => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(addData)
  })
    .then(res => res.json())
    .then(post => {
      dispatch({
        type: constObj.ADD_POST,
        payload: post
      });
    });
};

export const selectItemFun = (index) => dispatch => {
  dispatch({
    type: constObj.SELECT_ITEM,
    payload: index
  });
};