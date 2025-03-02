const Navbar = () => {
  return (
    <nav className="px-40 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold text-[#19A7CE]">
          <a href="#">abahkos</a>
        </div>
        <div>
          <ul className="flex items-center gap-8 font-semibold">
            <li className="flex cursor-pointer items-end rounded-lg bg-linear-to-r/oklch from-sky-300 to-blue-300 px-6 py-1">
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#" className="hover:opacity-80">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
