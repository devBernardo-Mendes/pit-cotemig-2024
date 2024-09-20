import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./app.routes";
import AuthRouter from "./auth.routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <AuthRouter />
    <AppRouter />
  </BrowserRouter>
);

export default Routes;
