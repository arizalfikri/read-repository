import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sing-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
