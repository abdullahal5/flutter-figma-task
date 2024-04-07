import { HiOutlineViewGridAdd } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CiGrid31 } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiGithubsponsors } from "react-icons/si";
import { HiMiniUserGroup } from "react-icons/hi2";

const Slider = () => {
  return (
    <div className="w-64 border px-5 py-5 h-auto bg-white">
      <img className="mx-auto" src="https://i.ibb.co/wpkxX7P/logo.png" />
      <hr className="my-5 border border-gray-300" />
      <ul className="space-y-1">
        <li>
          <div className="bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-black rounded-lg">
            <p className="cursor-pointer flex items-center gap-2">
              <HiOutlineViewGridAdd /> Discover
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex items-center gap-2">
              <HiOutlineDevicePhoneMobile /> UI Kits
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex items-center gap-2">
              <CiGrid31 /> Screens
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex items-center gap-2">
              <IoCodeSlashOutline /> Articles
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex items-center gap-2">
              <SiGithubsponsors /> Become Sponsor
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex items-center gap-2">
              <HiMiniUserGroup /> Hire Flutter Dev
            </p>
          </div>
        </li>
      </ul>
      <ul>
        <h1 className="font-semibold text-lg pt-3 pb-3">All Screens</h1>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex justify-between items-center gap-2">
              Sign in <span>10</span>
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex justify-between items-center gap-2">
              Chat <span>5</span>
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex justify-between items-center gap-2">
              Onboarding <span>18</span>
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex justify-between items-center gap-2">
              E-commerce <span>9</span>
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex justify-between items-center gap-2">
              Checkout <span>10</span>
            </p>
          </div>
        </li>
        <li>
          <div className="hover:bg-[#F0F0F0] text-lg font-semibold gap-2 py-2 px-4 text-[#989898] rounded-lg hover:text-black">
            <p className="cursor-pointer flex justify-between items-center gap-2">
              Error <span>16</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
