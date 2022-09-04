import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import search from "./assets/icon/search.png";
import Repositories from "./components/Repositories";
import FetchData from "./store/actions/action";
import github from "./assets/icon/github.png";
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
    <div className="App flex flex-col items-center gap-6 py-8 text-sm">
      <div className="rounded-md drop-shadow-xl flex flex-col gap-2">
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
