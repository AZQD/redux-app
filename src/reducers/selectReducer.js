import * as constObj from '../constant';

const initState = {
  selectArr: [1, 2, 3],
  selected: 0,
};

export default function (state = initState, action) {
  switch (action.type) {
    case constObj.SELECT_ITEM:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state
  }
}