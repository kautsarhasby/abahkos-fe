import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListSidebar = ({ pathname, item, isWide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, url, icon: Icon, data } = item;
  let pathData;
  if (data == undefined) {
    pathData = "";
  } else {
    pathData = data.find((i) => pathname.includes(i.name.toLowerCase()));
  }
  return (
    <main className="relative w-full transition-all">
      <Link
        className={clsx(
          "z-40 flex w-full flex-col items-center gap-2 p-2 text-xl transition-all hover:bg-slate-200",
          name == "Data" ? "justify-between rounded-xl" : "hover:rounded-xl",
          isOpen ? "bg-black/5" : "",
          pathname == url || (data && pathData) ? "bg-slate-200" : "bg-white",
        )}
        to={name === "Data" ? undefined : url}
        onClick={(e) => {
          if (name === "Data") e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <section className={clsx("flex w-full justify-between")}>
          <div
            className={clsx(
              "flex items-center gap-2",
              isWide ? "" : "justify-center",
            )}
          >
            <Icon size={25} />
            <p className={isWide ? "block" : "hidden"}>{name}</p>
          </div>
          <button
            className={clsx(
              name === "Data" ? "block" : "hidden",
              isOpen ? "rotate-180" : "",
              "transition-all",
            )}
          >
            <ChevronDown />
          </button>
        </section>
      </Link>
      <section
        className={clsx(
          "-z-20 flex w-full flex-col items-center rounded-xl bg-slate-100 text-xl transition-transform duration-500",
          name === "Data" ? "block" : "hidden",
          isOpen ? "-z-10 translate-y-0" : "absolute -translate-y-24",
        )}
      >
        {name === "Data"
          ? item.data.map((item, i) => {
              return (
                <Link
                  key={i}
                  to={item.url}
                  className={clsx(
                    pathname.includes(item.name.toLowerCase())
                      ? "bg-slate-200"
                      : "",
                    "flex w-full gap-2 p-2 hover:bg-black/5",
                  )}
                >
                  <item.icon size={25} />
                  {isWide ? <p>{item.name}</p> : ""}
                </Link>
              );
            })
          : ""}
      </section>
    </main>
  );
};

ListSidebar.propTypes = {
  isWide: PropTypes.bool,
  pathname: PropTypes.string,
  item: PropTypes.object,
};

export default ListSidebar;
