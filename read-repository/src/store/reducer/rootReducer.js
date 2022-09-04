import { FETCH_REPOSITORIES } from "../actions/actionType";

const initialState = {
  repositories: [],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
