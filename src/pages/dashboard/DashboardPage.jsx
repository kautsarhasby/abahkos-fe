import { BadgeDollarSign, MapPinHouse, Users } from "lucide-react";

const DashboardPage = () => {
  return (
    <section className="flex justify-between px-8 pt-8">
      <div className="flex gap-4">
        <div className="relative flex h-24 w-48 flex-col items-center justify-center rounded-xl border border-[#0e6a83] text-[#0e6a83]">
          <MapPinHouse
            className="absolute bottom-0 left-0 text-[#0e6a83]/50"
            size={50}
          />
          <p className="text-3xl font-bold">20</p>
          <span className="text-2xl">Boarder</span>
        </div>
        <div className="relative flex h-24 w-48 flex-col items-center justify-center rounded-xl border border-[#0e6a83] text-[#0e6a83]">
          <Users
            className="absolute bottom-0 left-0 text-[#0e6a83]/50"
            size={50}
          />
          <p className="text-3xl font-bold">13</p>
          <span className="text-2xl">Users</span>
        </div>
      </div>
      <div className="relative flex h-24 w-96 flex-col rounded-xl border border-[#0e6a83] bg-gradient-to-t from-[#0e6a83]/50 to-white p-2 text-[#0e6a83]">
        <BadgeDollarSign
          className="absolute bottom-0 left-0 text-[#0e6a83]/50"
          size={50}
        />
        <span className="text-2xl">Balance</span>
        <span className="self-end text-3xl font-semibold">Rp. 90.230.412</span>
      </div>
    </section>
  );
};

export default DashboardPage;
