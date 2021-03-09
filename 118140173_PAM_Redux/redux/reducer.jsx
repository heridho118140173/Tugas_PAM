import { ON, OFF } from "./tipe";
const initData = {
  counter: "#c223af",
};
export const reducerCounter = (state = initData, action) => {
  switch (action.type) {
    case ON:
      return { ...state, counter: action.data };
    case OFF:
      return { ...state, counter: action.data };
    default:
      return state;
  }
};
