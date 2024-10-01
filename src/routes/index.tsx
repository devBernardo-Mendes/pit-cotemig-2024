import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./app.routes";
import AuthRouter from "./auth.routes";
import useLogin from "../pages/Signin/hooks/useGetLogin";

const Routes: React.FC = () => {
  const { isAuthenticated } = useLogin();

  return (
    <BrowserRouter>
      {isAuthenticated ? <AppRouter /> : <AuthRouter />}
    </BrowserRouter>
  );
};

export default Routes;
