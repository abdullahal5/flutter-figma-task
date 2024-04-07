import { useEffect, useState } from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineDownload } from "react-icons/hi";

const Projects = () => {
  const [templates, setTemplates] = useState([]);
  const [article, setArticle] = useState([]);

  const fetchedData = async () => {
    try {
      const response = await fetch("/template.json");
      const data = await response.json();
      setTemplates(data);
    } catch (error) {
      console.log(error.message);
    }

    try {
      const response = await fetch("/article.json");
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div>
      <div className="text flex items-center justify-between py-5">
        <h1 className="text-2xl font-semibold">Templates</h1>
        <p className="text-lg">See All</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {templates?.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-sm">{item.title}</h1>
              <div className="flex items-center gap-2">
                <p className="flex items-center gap-1 ">
                  <HiOutlineDevicePhoneMobile color="#989898" /> {item.screen}
                </p>
                <p className="flex items-center gap-1">
                  <HiOutlineDownload color="#989898" /> {item.download}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-semibold py-5">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {article?.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <div className="flex items-center gap-4 text-[#989898] text-sm py-2">
              <p>{item.date}</p>
              <p>{item.tag}</p>
            </div>
            <h1 className="font-semibold text-sm">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
