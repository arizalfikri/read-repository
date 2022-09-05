import { useDispatch } from "react-redux";
import { confirmSign } from "../store/actions/action";

export default function SignIn() {
  const dispatch = useDispatch();
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(confirmSign());
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3">
      <p>click confirm for read your repositories</p>
      <button
        onClick={(e) => handleConfirm(e)}
        className="bg-green-400 rounded-full hover:bg-green-500 px-4 py-2"
      >
        Confirm
      </button>
    </div>
  );
}
