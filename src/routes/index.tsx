import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./app.routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default Routes;
