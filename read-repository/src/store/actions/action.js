import axios from "axios";
import { FETCH_DATA } from "./actionType";

export default function FetchData(username) {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      console.log(response, "<<<<<<");
    } catch (error) {
      console.log(error);
    }
  };
}
