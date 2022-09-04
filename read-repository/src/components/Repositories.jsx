import { useSelector } from "react-redux";
import not_found from "../assets/img/not_found.webp";
export default function Repositories({ page, setPage }) {
  const data = useSelector((state) => state.repositories);
  const decrement = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const increment = () => {
    if (data.length !== 0) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <div className="mt-2 bg-white rounded-md overflow-hidden drop-shadow-xl">
      {data.length === 0 ? (
        <div>
          <img src={not_found} alt="" className="w-32 object-cover" />
        </div>
      ) : (
        <div className="flex flex-col gap-2 py-2 px-4">
          {data.map((el, i) => {
            return (
              <a
                href={el.clone_url}
                key={i}
                target="blank"
                className="hover:text-blue-400"
              >
                {el.name}
              </a>
            );
          })}
        </div>
      )}
      <div className="flex gap-2 justify-center py-3">
        <button
          className="rounded-full bg-slate-300 hover:bg-slate-200 w-5 h-5 text-center"
          onClick={() => decrement()}
        >
          {"<"}
        </button>
        <p>{page}</p>
        <button
          className="rounded-full bg-slate-300 hover:bg-slate-200 w-5 h-5 text-center"
          onClick={() => increment()}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
