import * as constObj from '../constant';

const initState = {
  selectArr: [],
  selected: 0,
};

export default function (state = initState, action) {
  switch (action.type) {
    case constObj.SELECT_ITEM:
      return {
        ...state,
        selected: action.payload
      };
    case constObj.CHANGE_SELECT:
      return {
        ...state,
        selectArr: action.payload
      };
    default:
      return state
  }
}