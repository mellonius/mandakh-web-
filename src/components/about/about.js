import React from "react";
import "./about.css";
function HomeAbout() {
  const [header] = React.useState({
    subHeading: "Бид мэдлэгээр баялгийг бүтээнэ",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <i className="fa fa-rocket commonIcons" aria-hidden="true"></i>,
      heading: "Эрхэм зорилго",
      text:
        "Үндэсний болон олон улсын стандарт, дэлхийн хөгжлийн чиг хандлагад нийцсэн боловсролын чанартай үйлчилгээ үзүүлж, оюунлаг чадварлаг судлаач мэргэжилтэн бэлтгэнэ.",
    },
    {
      id: 2,
      icon: <i className="fa fa-eye commonIcons" aria-hidden="true"></i>,
      heading: "Алсын хараа",
      text:
        "Олон улсын хэмжээнд хүлээн зөвшөөрөгдсөн сургалт-судалгааны их сургууль болох.",
    },
    {
      id: 3,
      icon: <i className="fa fa-diamond commonIcons" aria-hidden="true"></i>,
      heading: "Үнэт зүйлс",
      text:
        "Чанартай сургалт Чадварлаг мэргэжилтэн Ёс зүй, хариуцлага Оюунлаг, хүнлэг, нэгдмэл байдал",
    },
  ]);
  return (
    <div className="services  bg-opacity-50">
      <div className="container  dark:text-white text-gray-800">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader text-center text-blue-600 ">{header.subHeading}</h1>
            <div className="bg-red-500 m-auto mt-5 w-40 h-0.5"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 ">
            {state.map((info) => (
              <div
                key={info.id}
                className="transform  hover:scale-110  shadow-lg m-5 p-5 rounded-lg  dark:text-white text-gray-800 hover:bg-gray-100 dark:hover:bg-white dark:hover:text-gray-800  cursor-pointer select-none text-center"
              >
                {info.icon}
                <p className=" font-bold text-xl text-blue-600">
                  {" "}
                  {info.heading}
                </p>
                <p className="justify-between">{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeAbout;
