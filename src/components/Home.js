import React, { useState, useEffect } from "react"
import bgdark from "../assets/images/teachers.jpg";
import bgschool from "../assets/images/school3.jpg";
import VideoIntro from "../assets/videos/intro.mp4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Homefooter from "./footer/footer";
import HomeAbout from "./about/about";
import HomeLink from "./services/link";
import HomeSocial from "./social/social";
import HomeSchool from "./school/school";
import HomeContact from "./contact/contact";
import HomeFaqs from "./faqs/faqs";
import HomeMain from "./footer/main";
import News from "./news";
import "./news/scroll.css"
import { BackTop } from "antd";

export default function Home({ news, get, setGetNews }) {
  const [backVisible, setBackVisible] = useState(false);
  const checkScrolTop = () => {
      if (!backVisible && document.getElementById("topD").scrollTop > 400) {
          setBackVisible(true);
      } else if (backVisible && document.getElementById("topD").scrollTop <= 400)
          setBackVisible(false);
  };
  useEffect(() => {
      document.getElementById("topD").addEventListener("scroll", checkScrolTop);
      return function cleanUp() {
          if (document.getElementById("topD") !== null)
              document
                  .getElementById("topD")
                  .removeEventListener("scroll", checkScrolTop);
      };
  });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="topD">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={true}
          swipeable={false}
          autoPlaySpeed={6000}
          containerClass="carousel-container"
          keyBoardControl={true}
          showDots={true}
        >
          <div
            className=" w-full bg-no-repeat bg-cover bg-center flex items-center justify-center h-full sm:h-800"
            style={{ backgroundImage: "url(" + bgschool + ")" }}
          ></div>
          <div
            className=" w-full bg-no-repeat bg-cover bg-center flex items-center justify-center h-full sm:h-800"
            style={{ backgroundImage: "url(" + bgdark + ")" }}
          ></div>
          <div className="w-full bg-no-repeat bg-cover bg-center flex items-center justify-center h-full py-14 sm:h-800">
            <video autoPlay muted src={VideoIntro} width="100%" height="100%" />
          </div>
        </Carousel>

        <br />
        <HomeSocial />
        <br />
        <hr />
        <br />
        <News news={news}
          get={get}
          setGetNews={setGetNews} />
        <br />
        <hr />
        <br />
        {/* <FbNews />
        <br/>
        <br/> */}
        <HomeAbout />
        <br />
        <br />
        <hr />
        <HomeLink />
        <hr />
        <br />
        <HomeSchool />
        <hr />
        <HomeFaqs />
        <br />
        <hr />
        <br />
        <HomeMain />
        <br />
        <HomeContact />
        <br />
        <Homefooter />
        <BackTop visible={backVisible}
            onClick={() => {
                document.getElementById("topD").scroll({
                    top: 0,
                    behavior: "smooth",
                });
            }} />
    </div>

  );
}
