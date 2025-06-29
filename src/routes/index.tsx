import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:name" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
