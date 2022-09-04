import { FETCH_DATA } from "../actions/actionType";

const initialState = {
  data: [],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
