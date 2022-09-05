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

export const confirmSign = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3000/access_token`);
      localStorage.setItem("access_token", response.data.access_token);
      if (!response.data.access_token) {
        throw new Error("no access token");
      }
      console.log(response);
      return true;
    } catch (error) {
      return false;
    }
  };
};