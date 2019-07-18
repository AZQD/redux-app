import * as constObj from '../constant';

const initState = {
  postData: [],
  addData: {}
};

export default function (state = initState, action) {
  switch (action.type) {
    case constObj.FETCH_POST:
      return {
        ...state,
        postData: action.payload
      };
    case constObj.ADD_POST:
      return {
        ...state,
        addData: action.payload
      };
    default:
      return state
  }
}