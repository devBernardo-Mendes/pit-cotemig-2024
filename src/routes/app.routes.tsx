import React from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

import Layout from "../components/Layout";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/condosmart" element={<Dashboard />} />
        <Route path="/list/:type" element={<List />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
