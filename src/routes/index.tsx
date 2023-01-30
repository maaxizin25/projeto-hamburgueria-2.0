import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/protectRoute";
import { Homepage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { Register } from "../pages/Register";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} />
      <Route path="register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Homepage />} />
      </Route>
    </Routes>
  );
};
