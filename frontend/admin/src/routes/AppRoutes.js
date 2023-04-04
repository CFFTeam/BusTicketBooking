import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import AccountUserPage from "../pages/AccountUserPage/AccountUserPage";
import BusStationPage from "../pages/BusStationPage/BusStationPage";
import BusRoutePage from "../pages/BusRoutePage/BusRoutePage";
import BusTypePage from "../pages/BusTypePage/BusTypePage";
import TicketPage from "../pages/TicketPage/TicketPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="account" element={<AccountUserPage />} />
                <Route path="bus-type" element={<BusTypePage />} />
                <Route path="bus-station" element={<BusStationPage />} />
                <Route path="bus-route" element={<BusRoutePage />} />
                <Route path="ticket" element={<TicketPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;   