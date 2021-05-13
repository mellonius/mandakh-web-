import React from "react";
import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta.png";
import youtube from "../../assets/icons/youtube.png";
import twitter from "../../assets/icons/twitter.png";
import call from "../../assets/icons/call.png";
import "./social.css";
function HomeSocial() {
  return (
    <div id="mySidenav" className="absolute top-1/4 text-right m-0 p-0 z-10">
      <a
        href="https://www.facebook.com/MandakhIT"
        className="flex justify-end font-dosis font-bold "
        id="fb"
      >
        <span className="pt-1">Facebook</span>{" "}
        <img
          src={fb}
          alt="fb"
          className="bg-center bg-contain ml-4"
          style={{ width: "30px" }}
        />
      </a>
      <a
        href="https://www.youtube.com/user/Mandakh"
        className="flex justify-end font-dosis font-bold "
        id="youtube"
      >
        <span className="pt-1 pr-5">Youtube</span>{" "}
        <img
          src={youtube}
          alt="yt"
          className="bg-center bg-contain ml-4"
          style={{ width: "20px", height: "20px", margin: "5px" }}
        />
      </a>
      <a
        href="https://twitter.com/MandakhUni"
        className="flex justify-end font-dosis font-bold "
        id="twitter"
      >
        <span className="pt-1 pr-5">Twitter </span>
        <img
          src={twitter}
          alt="tw"
          className="bg-center bg-contain "
          style={{ width: "20px", height: "20px", margin: "5px" }}
        />
      </a>
      <a
        href="https://www.instagram.com/explore/locations/166320313443805/"
        className="flex justify-end font-dosis font-bold "
        id="insta"
      >
        <span className="pt-1">Instagram </span>
        <img
          src={insta}
          alt="ig"
          className="bg-center bg-contain ml-4"
          style={{ width: "30px" }}
        />
      </a>
      <a
        href="tel:7018-5950"
        className="flex justify-end font-dosis font-bold md:hidden"
        id="call"
      >
        <span className="mr-2 pt-1">7018-5950</span>
        <img
          src={call}
          alt="fb"
          className="bg-center bg-contain  h-4 m-1.5 shadow-lg"
        />
      </a>
    </div>
    
  );
}
export default HomeSocial;
