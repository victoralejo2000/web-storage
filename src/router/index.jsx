import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginUser, HomePage} from "../page";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;