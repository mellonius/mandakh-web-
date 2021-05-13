import React from "react";
import bgdark from "../../assets/images//school2.jpg";
import './link.css';
function HomeLink() {
  const [header] = React.useState({
    subHeading: "Чухал холбоосууд ",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: (
        <i
          className="fa fa-user common1Icons1 dark:text-white  text-white "
          aria-hidden="true"
        ></i>
      ),
      heading: "Багшийн веб",
    },
    {
      id: 2,
      icon: (
        <i
          className="fa fa-graduation-cap common1Icons1 dark:text-white text-white "
          aria-hidden="true"
        ></i>
      ),
      heading: "Оюутны веб",
    },
    {
      id: 3,
      icon: (
        <i
          className="fa fa-desktop common1Icons1 dark:text-white text-white "
          aria-hidden="true"
        ></i>
      ),
      heading: "Цахим сургалтын систем",
    },

    {
      id: 5,
      icon: (
        <i
          className="fa fa-book common1Icons1 dark:text-white  text-white "
          aria-hidden="true"
        ></i>
      ),
      heading: "Номын сангийн цахим каталог",
    },
    {
      id: 6,
      icon: (
        <i
          className="fa fa-laptop common1Icons1 dark:text-white  text-white "
          aria-hidden="true"
        ></i>
      ),
      heading: "Элсэлтийн цахим бүртгэл",
    },
  ]);
  return (
    <div className=" dark:text-white  text-white bg-fixed " style={{ backgroundImage: "url(" + bgdark + ")" }}>
      <div className="text-center">
        <h1 className="mainHeader   dark:text-white text-white ">{header.subHeading}</h1>
        <div className="bg-red-500 m-auto my-5 w-40 h-0.5"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 ">
        {state.map((info) => (
          <div
            className=" dark:text-white text-white  cursor-pointer text-center transform  hover:scale-110 py-3"
            key={info.id}
          >
            {info.icon}
            <br />
            <span>{info.heading}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeLink;
