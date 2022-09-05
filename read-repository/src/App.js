import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import search from "./assets/icon/search.png";
import Repositories from "./components/Repositories";
import github from "./assets/icon/github.png";
import github_white from "./assets/icon/github-white.png";
import { FetchData, SignIn } from "./store/actions/action";
export default function App() {
  const [username, setusername] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(FetchData(username, page)).then(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    dispatch(FetchData(username, page)).then(() => {
      setLoading(false);
    });
  }, [page, isLoading]);
  return (
    <div className="App flex items-center justify-center gap-10 min-h-screen text-sm">
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
            target="_blank"
            rel="noreferrer"
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
      <div>
        <h1 className="text-left">Repositories :</h1>
        {isLoading ? (
          <div className="flex flex-col gap-1 items-center mt-8">
            <div className="animate-spin w-5 h-5 border-2 rounded-full border-t-2 border-t-slate-400"></div>
            <p>Loading....</p>
          </div>
        ) : (
          <Repositories page={page} setPage={setPage} />
        )}
      </div>
    </div>
  );
}
