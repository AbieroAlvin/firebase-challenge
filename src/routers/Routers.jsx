import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Movies from "../pages/Movies";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route
        path="movies"
        element={
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
