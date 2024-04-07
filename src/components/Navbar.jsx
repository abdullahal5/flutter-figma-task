import { IoSearch } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="relative">
        <input
          type="text"
          className="w-72 bg-[#F0F0F0] rounded-full py-3 outline-none pl-5"
          placeholder="Search"
        />
        <IoSearch
          fontSize="1.5rem"
          className="absolute text-[#928b8b] right-4 top-3 "
        />
      </div>
      <div className="flex items-center gap-3">
        {isDark ? (
          <MdOutlineLightMode
            className="cursor-pointer"
            onClick={() => setIsDark(!isDark)}
            fontSize="1.3rem"
          />
        ) : (
          <IoMoonOutline
            className="cursor-pointer"
            onClick={() => setIsDark(!isDark)}
            fontSize="1.3rem"
          />
        )}
        <button className="text-black font-semibold border px-3 py-2 rounded-xl">
          Login
        </button>
        <button className="text-white bg-black font-semibold border px-3 py-2 rounded-xl">
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default Navbar;
