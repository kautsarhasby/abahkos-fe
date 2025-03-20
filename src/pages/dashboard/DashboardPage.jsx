import {
  Gauge,
  KeyRound,
  LogOut,
  PanelLeft,
  Pencil,
  Settings,
  User,
} from "lucide-react";

const DashboardPage = () => {
  return (
    <main>
      <aside className="h-screen w-80 border-r-2 border-black/20 bg-slate-100/50">
        <section className="flex justify-between p-4">
          <div className="relative flex h-12 w-12 flex-col items-center justify-center rounded-xl border-2 border-[#0e6a83]">
            <User size={64} className="text-[#0e6a83]" />
          </div>
          <PanelLeft />
        </section>
        <section className="flex flex-col justify-center p-4">
          <div className="flex items-center gap-2 text-xl">
            <Gauge size={30} />
            <p>Dashboard</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <KeyRound size={30} />
            <p>Permissions</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <Pencil size={30} />
            <p>Profile</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <Settings size={30} />
            <p>Settings</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <LogOut size={30} />
            <p>Log out</p>
          </div>
        </section>
      </aside>
      <div></div>
    </main>
  );
};

export default DashboardPage;
