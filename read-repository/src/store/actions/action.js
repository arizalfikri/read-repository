import axios from "axios";
import { FETCH_REPOSITORIES } from "./actionType";
export const FetchData = (username, page) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
      );
      dispatch({
        type: FETCH_REPOSITORIES,
        payload: response.data,
      });
      return true;
    } catch (error) {
      return false;
    }
  };
};

export const SignIn = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3000/callback`);
      console.log(response)
      return true;
    } catch (error) {
      return false;
    }
  };
};