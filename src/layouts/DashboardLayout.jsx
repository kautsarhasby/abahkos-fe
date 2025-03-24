import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="min-h-screen w-full overflow-y-auto">
        <section className="fixed top-0 z-40 flex h-20 w-full items-center bg-[#0e6a83] pl-8">
          <span className="text-2xl text-white">Dashboard</span>
        </section>
        <section className="mt-20">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default DashboardLayout;
