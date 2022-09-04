import axios from "axios";
import { FETCH_REPOSITORIES } from "./actionType";
export default function FetchData(username, page) {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
      );
      dispatch({
        type: FETCH_REPOSITORIES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
