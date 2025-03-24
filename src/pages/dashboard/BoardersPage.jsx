import { Pencil, Search, Trash } from "lucide-react";
import mockdata from "/dummy/MOCK_DATA.json";
const BoardersPage = () => {
  return (
    <section className="px-8 pt-8">
      <div className="relative flex">
        <Search className="absolute top-2.5 left-2 text-black/20" />
        <input
          type="text"
          className="w-full rounded-lg border-2 border-black/20 py-2 pl-10"
          placeholder="Search Boarder"
        />
      </div>

      <div className="h-min-screen w-full py-8">
        <div className="flex h-auto w-full flex-col rounded-xl border border-[#0e6a83] bg-white p-2 text-[#0e6a83]">
          <section className="flex justify-between">
            <div className="flex flex-col">
              <span>
                Name : <b>Rangers Premio Kost</b>
              </span>
              <span>
                Phone : <b>081319905342</b>
              </span>
              <span>
                Address :{" "}
                <b>
                  Jl. Kedoya Raya No.21, Pondok Cina, Kecamatan Beji, Kota
                  Depok, Jawa Barat 16424
                </b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="cursor-pointer rounded-xl bg-[#0e6a83] p-2 hover:bg-[#084252]">
                <Pencil className="text-white" />
              </button>
              <button className="cursor-pointer rounded-xl bg-red-500 p-2 hover:bg-red-700">
                <Trash className="text-white" />
              </button>
            </div>
          </section>
          <section className="h-96 border-collapse overflow-y-auto">
            <table className="w-full">
              <thead className="">
                <tr className="sticky top-0 bg-white">
                  <th className="sticky top-0 p-2">Id</th>
                  <th className="sticky top-0 p-2">Room Number</th>
                  <th className="sticky top-0 p-2">Floor</th>
                  <th className="sticky top-0 p-2">Status</th>
                  <th className="sticky top-0 p-2">Price</th>
                  <th className="sticky top-0 p-2">Description</th>
                  <th className="sticky top-0 p-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {mockdata.map((row, i) => (
                  <tr key={i} className="text-black odd:bg-[#0e6a83]/20">
                    <td className="border p-2">{row.id}</td>
                    <td className="border p-2">{row.room_number}</td>
                    <td className="border p-2">{row.floor}</td>
                    <td className="border p-2">{row.status}</td>
                    <td className="border p-2">{row.price}</td>
                    <td className="border p-2">{row.description}</td>
                    <td className="border p-2">
                      <div className="flex justify-center gap-2">
                        <button className="cursor-pointer rounded-xl bg-[#0e6a83] p-2 hover:bg-[#084252]">
                          <Pencil className="text-white" />
                        </button>
                        <button className="cursor-pointer rounded-xl bg-red-500 p-2 hover:bg-red-700">
                          <Trash className="text-white" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </section>
  );
};

export default BoardersPage;
