import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import search from "./assets/icon/search.png";
import Repositories from "./components/Repositories";
import FetchData from "./store/actions/action";
export default function App() {
  const [username, setusername] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(FetchData(username, page));
  };
  useEffect(() => {
    dispatch(FetchData(username, page));
  }, [page]);
  return (
    <div className="App flex flex-col items-center gap-6 py-8 text-sm">
      <div className="rounded-md drop-shadow-xl flex flex-col gap-2">
        <label className="font-bold text-center">Username Github</label>
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
        <Repositories page={page} setPage={setPage} />
      </div>
    </div>
  );
}
