const initState = {
  postData: [],
  addData: {}
};

export default function (state = initState, action) {
  switch (action.type) {
    case 'FETCH_POST':
      return {
        ...state,
        postData: action.payload
      };
    case 'ADD_POST':
      return {
        ...state,
        addData: action.payload
      };
    default:
      return state
  }
}