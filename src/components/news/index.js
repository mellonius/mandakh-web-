import React, { useContext } from "react";
import { LanguageContext } from "../../theme";
import banner from "../../assets/images/banner.png"
import "react-multi-carousel/lib/styles.css";
import { Spin, Tag, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import moment from "moment";
import 'moment/locale/mn'
export default function News({ news }) {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div>
        <h1 className="mainHeader text-red-500 text-center">
          {language === "eng"
            ? "News"
            : "Мэдээ мэдээлэл"}
        </h1>
        <div className="bg-red-500 m-auto my-5 w-40 h-0.5"></div>
      </div>
      <Spin spinning={news && news.length === 0}>
        <div className='w-screen h-60 overflow-x-auto  flex justify-center'>
          {news.slice().reverse().map((e, index) =>
            index < 4 && <div className="p-5 cursor-pointer select-none h-full rounded-md shadow-md bg-center bg-cover mx-2 relative " style={{ backgroundImage: `url(${e.image ? e.image : banner})`, width: '400px' }} key={e.date}>
              {e.category !== '' && <Tag color={e.color} className="absolute top-2 right-0">{e.category}</Tag>}
              <div className="absolute h-20 bottom-0 right-0 left-24 p-2 rounded-tl-md  bg-white bg-opacity-90">
                <Tooltip title={e.title} placement="bottom">
                  <p className="font-bold text-base uppercase truncate ... mb-0 ">{e.title}</p>
                </Tooltip>

                <Link className="hover:underline hover:text-yellow-500 text-yellow-500" to={`/news/${e.date}`} >{language === "eng"
                  ? "Read more"
                  : "Дэлгэрэнгүй"}</Link>
                <p className="text-right"> {moment(e.date.substr(0, 4) + "-" + e.date.substr(4, 2) + "-" + e.date.substr(6, 2) + " " + e.date.substr(8, 2) + ":" + e.date.substr(10, 2)).fromNow()}</p>
              </div>
            </div>)}

        </div>
      </Spin>
    </>
  );
}
