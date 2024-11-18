import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

import Layout from "../components/Layout";
import ResidentRegistration from "../pages/ResidentsRegistration";
import CommonAreaReservation from "../pages/CommonAreaReservation";
import Complaints from "../pages/Complaints";
import ServiceRequests from "../pages/ServiceRequests";
import Assembly from "../pages/Assembly";
import NoticeBoard from "../pages/NoticeBoard";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/condosmart" element={<Dashboard />} />
        <Route path="/list/:type" element={<List />} />
        <Route
          path="/residents-registration"
          element={<ResidentRegistration />}
        />
        <Route
          path="/common-area-reservation"
          element={<CommonAreaReservation />}
        />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/service-requests" element={<ServiceRequests />} />
        <Route path="/assembly" element={<Assembly />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
