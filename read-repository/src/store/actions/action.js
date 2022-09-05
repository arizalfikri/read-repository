import axios from "axios";
import { Octokit } from "@octokit/rest";
import { FETCH_REPOSITORIES } from "./actionType";
export const FetchData = (username, page) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://api.github.com/users/${username}/repos`
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
      const octokit = new Octokit({
        auth: response.data.access_token,
      });
      let result = await octokit.request(`GET /user/repos`, {});
      dispatch({
        type: FETCH_REPOSITORIES,
        payload: result.data,
      });
      return true;
    } catch (error) {
      return false;
    }
  };
};