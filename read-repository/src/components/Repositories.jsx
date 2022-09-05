import "./repo.css";
import { useSelector } from "react-redux";
import not_found from "../assets/img/not_found.webp";
export default function Repositories() {
  const data = useSelector((state) => state.repositories);
  return (
    <div className="mt-2 bg-white rounded-md overflow-auto max-h-96 drop-shadow-xl">
      {data.length === 0 ? (
        <div>
          <img src={not_found} alt="" className="w-32 object-cover" />
        </div>
      ) : (
        <div>
          <div className="flex flex-col">
            {data.map((el, i) => {
              return (
                <a
                  href={el.clone_url}
                  key={i}
                  target="blank"
                  className="flex justify-between gap-2 hover:bg-slate-400 py-2 px-4"
                >
                  <p>{el.name}</p>
                  <p className="text-xs rounded-full px-2 border">
                    {el.private ? "private" : "public"}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
