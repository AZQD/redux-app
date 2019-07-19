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
      // let postData = state.postData; // 直接赋值不可取；
      let postData = []; // 一定要深复制，一定要深复制，一定要深复制
      state.postData.map((item) => {
        postData.push(item);
      });
      postData.unshift(action.payload);
      return {
        ...state,
        postData,
        addData: action.payload
      };
    default:
      return state
  }
}