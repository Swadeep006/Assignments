import { FaYoutube, FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiMicrophoneFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="bg-[#0f0f0f] text-white px-4 py-2 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <GiHamburgerMenu className="text-2xl cursor-pointer" />
        <div className="flex items-center gap-1">
          <FaYoutube className="text-3xl text-red-600" />
          <span className="text-xl font-bold font- tracking-tight">YouTube</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex border border-gray-600 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="bg-black text-white px-4 py-1 w-[400px] focus:outline-none"
          />
          <button className="bg-zinc-800 px-4 flex items-center justify-center">
            <CiSearch className="text-2xl" />
          </button>
        </div>
        <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700">
          <PiMicrophoneFill className="text-xl" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-zinc-800 px-4 py-1 rounded-full hover:bg-zinc-700 text-sm">
          + Create
        </button>
        <FaRegBell className="text-2xl cursor-pointer" />
        <CgProfile className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
