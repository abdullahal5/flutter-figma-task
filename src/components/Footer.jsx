import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between pt-10">
        <div>
          <img src="https://i.ibb.co/wpkxX7P/logo.png" alt="" />
          <p className="text-[#989898]">
            Beautifully designed, expertly crafted Flutter components and
            templates, to jumpstart <br /> your projects and speed up your
            development process.
          </p>
          <div className="flex items-center gap-2 pt-5">
            <div
              style={{ maxWidth: "fit-content" }}
              className="bg-black rounded-full border text-white p-3"
            >
              <FaXTwitter className="" />
            </div>
            <div
              style={{ maxWidth: "fit-content" }}
              className="bg-black rounded-full border text-white p-3"
            >
              <BsLinkedin className="" />
            </div>
            <div
              style={{ maxWidth: "fit-content" }}
              className="bg-black rounded-full border text-white p-3"
            >
              <AiFillInstagram className="" />
            </div>
            <div
              style={{ maxWidth: "fit-content" }}
              className="bg-black rounded-full border text-white p-3"
            >
              <FaSquareFacebook className="" />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-10">
          <div>
            <h1 className="text-xl font-semibold">Explore</h1>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Templates</li>
              <li>Screens</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Support</h1>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>Become a sponsor</li>
              <li>Hire top Flutter Devs</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="flex items-center justify-between py-5 text-[#989898]">
        <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <p>Privacy Policy | Terms & Conditions | Cookie Policy</p>
      </div>
    </>
  );
};

export default Footer;
