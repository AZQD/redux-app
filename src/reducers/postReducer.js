
const initState = {
  postData: []
};

export default function (state = initState, action) {
  switch (action.type){
    case 'FETCH_POST':
      return{
        ...state,
        postData: action.payload
      };
    default:
      return state
  }
}