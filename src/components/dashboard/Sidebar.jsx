import { PanelLeft, User } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ListSidebar from "./ListSidebar";
import { DefaultMetadata } from "../../lib/constants";
import clsx from "clsx";

const Sidebar = () => {
  const pathname = useLocation().pathname;
  const [isWide, setIsWide] = useState(true);

  return (
    <aside
      className={clsx(
        "h-screen border-r-2 border-black/20 bg-white transition-all",
        isWide ? "w-80" : "w-24",
      )}
    >
      <section className="relative flex h-[8%] justify-between p-4">
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border-2 border-[#0e6a83]">
          <User size={64} className="text-[#0e6a83]" />
        </div>
        <button
          onClick={() => setIsWide(!isWide)}
          className={clsx(
            "z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-black text-white transition-all",
            isWide ? "" : "absolute -right-7 bottom-5",
          )}
        >
          <PanelLeft />
        </button>
      </section>
      <section className="flex h-[92%] flex-col p-4">
        <section className="z-30">
          {DefaultMetadata.NavigationSidebar.map((item, i) => (
            <ListSidebar
              key={i.toString()}
              item={item}
              pathname={pathname}
              isWide={isWide}
            />
          ))}
        </section>
        <section className="bottom-0 mt-auto">
          {DefaultMetadata.ToolsSideBar.map((item, i) => (
            <ListSidebar
              key={i.toString()}
              item={item}
              pathname={pathname}
              isWide={isWide}
            />
          ))}
        </section>
      </section>
    </aside>
  );
};

export default Sidebar;
