import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Screens = () => {
  const [filter, setFilter] = useState([]);

  const fetchedData = async () => {
    try {
      const response = await fetch("/filter.json");
      const data = await response.json();
      setFilter(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <h1 className="text-2xl font-semibold">Screens</h1>
        <p className="text-lg">See All</p>
      </div>
      <div className="flex flex-wrap space-x-[15px] items-center">
        <span
          className="bg-[#F5F5F5] px-3 py-2 text-sm flex items-center rounded-full border cursor-pointer font-semibold gap-2 "
          style={{ maxWidth: "fit-content" }}
        >
          <img src="https://i.ibb.co/RhBNjRN/Vector.png" alt="" />
          Filter
        </span>
        <span className="border h-6"></span>
        {filter?.map((item, index) => (
          <div key={item.id}>
            <p
              className={`bg-[#F5F5F5] px-3 py-2 cursor-pointer text-sm rounded-full border font-semibold gap-2 ${
                index === 0 ? "bg-black text-white" : "bg-[#F5F5F5]"
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
        <FaArrowRightLong />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-7">
        <img src="https://i.ibb.co/vQMkxwJ/Phone-Mockup.png" alt="" />
        <img src="https://i.ibb.co/5nFHLdG/Phone-Mockup-1.png" alt="" />
        <img src="https://i.ibb.co/6nTyVpF/Phone-Mockup-2.png" alt="" />
        <img src="https://i.ibb.co/fFtrmRh/Phone-Mockup-3.png" alt="" />
        <img src="https://i.ibb.co/0JRtVgG/Phone-Mockup-4.png" alt="" />
        <img src="https://i.ibb.co/2dHV4YK/Phone-Mockup-5.png" alt="" />
        <img src="https://i.ibb.co/NTmzx4c/Phone-Mockup-6.png" alt="" />
        <img src="https://i.ibb.co/PcdJVh9/Phone-Mockup-7.png" alt="" />
        <img src="https://i.ibb.co/XpQp1tf/Phone-Mockup-8.png" alt="" />
        <img src="https://i.ibb.co/bKSL3j1/Phone-Mockup-9.png" alt="" />
      </div>
    </div>
  );
};

export default Screens;
