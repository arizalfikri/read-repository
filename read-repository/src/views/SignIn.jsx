import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { confirmSign } from "../store/actions/action";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(confirmSign(1));
    navigate("/");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-sm">
      <p className="font-bold">click confirm for read your repositories</p>
      <button
        onClick={(e) => handleConfirm(e)}
        className="bg-green-400 rounded-full hover:bg-green-500 px-4 py-1 text-white hover:animate-bounce"
      >
        Confirm
      </button>
    </div>
  );
}
