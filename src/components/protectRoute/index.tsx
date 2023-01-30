import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <h2>Carregando..</h2>
      </>
    );
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};
