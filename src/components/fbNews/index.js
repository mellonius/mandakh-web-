import React, { useEffect, useState, useContext } from "react";
import { fbapi, fbtoken } from "../../config";
import axios from "axios";
import FbViewNews from "./fbViewNews";
import { LanguageContext } from "../../theme";
function FbNews() {
  const [fbData, setFbData] = useState([]);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    axios.get(`${fbapi}`, fbtoken).then((res) => {
      setFbData(res.data.data);
    });
  }, [setFbData]);
  return (
    <>
      <div>
        <h1 className="mainHeader text-red-500 text-center">
          {language === "eng"
            ? "Facebook Page Newsfeed"
            : "Фэйсбүүк хуудасны нийтлэл"}
        </h1>
        <div className="bg-red-500 m-auto mt-5 w-40 h-0.5"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {fbData.map((data, index) => (
          <FbViewNews data={data} index={index} key={index} />
        ))}
      </div>
      <div className="w-screen text-right">
        <a
          href={`https://www.facebook.com/mandakhuniversitySIT`}
          target="_blank"
          rel="noreferrer"
          className=" text-blue-500  underline pr-5 "
        >
          {language === "eng" ? "visit page?" : "хуудас руу зочлох уу?"}
        </a>
      </div>
    </>
  );
}

export default FbNews;