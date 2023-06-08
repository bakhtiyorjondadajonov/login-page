import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from ".";

function RequireAuth({ children }) {
  const { authed } = useContext(AuthContext);
  // If the user is not authenticated, redirect them to the login page using the `Navigate` component
  if (!authed) return <Navigate to="/login" />;
  // If the user is authenticated, render the `children` components
  return children;
}
export default RequireAuth;
