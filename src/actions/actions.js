export const fetchPost = () => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      return res.json()
    })
    .then(postData => {
      dispatch({
        type: 'FETCH_POST',
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
        type: 'ADD_POST',
        payload: post
      });
    });
};