export const fetchPost = () => dispatch =>{
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(111, res);
      return res.json()
    })
    .then(postData => {
      console.log(222, postData);
      dispatch({
        type: 'FETCH_POST',
        payload: postData
      });
    });
};