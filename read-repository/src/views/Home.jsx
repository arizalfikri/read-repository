import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import search from "../assets/icon/search.png";
import Repositories from "../components/Repositories";
import github from "../assets/icon/github.png";
import github_white from "../assets/icon/github-white.png";
import { FetchData } from "../store/actions/action";
export default function Home() {
  const [username, setusername] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [notLogin, setNotLogin] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.repositories);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(FetchData(username));
  };
  return (
    <div className="flex items-center justify-center gap-10 min-h-screen text-sm">
      <div className="rounded-md drop-shadow-xl flex flex-col gap-4">
        <div className="flex gap-2 items-center justify-center py-3">
          <p className="font-bold text-center">Username Github</p>
          <img src={github} alt="github" className="object-cover" />
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center gap-1">
          <input
            className="rounded-full px-4 py-1"
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          />
          <button type="submit">
            <img
              src={search}
              className="rounded-full bg-white hover:bg-gray-100 p-2 w-8 h-8 object-cover drop-shadow-xl"
              alt="icon-search"
            />
          </button>
        </form>
        <div className="flex flex-col gap-2 items-center">
          <p>or sign-in with your account Github</p>
          <a
            href="https://github.com/login/oauth/authorize?client_id=21e91e2bfd623949254c"
            className="rounded-md py-1 w-28 bg-[#464646] hover:bg-[#333333] flex justify-center items-center gap-1 text-white"
          >
            <img
              src={github_white}
              alt="icon-github"
              className="object-cover"
            />
            <p>Sign-in</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-center bg-[#464646] text-white py-2 px-3 rounded-t-xl drop-shadow-xl">
          total : {data.length > 0 ? data.length + 1 : 0} repositories
        </p>
        <Repositories
          type={localStorage.getItem("access_token") ? setLogin : setNotLogin}
          value={localStorage.getItem("access_token") ? isLogin : notLogin}
        />
      </div>
    </div>
  );
}
