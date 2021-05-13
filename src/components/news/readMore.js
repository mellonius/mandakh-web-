import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import Footer from "../footer/footer";
import logo from "../../assets/images/mandakh-light.png";
import moment from "moment";
import fire from '../../fire'
import { BackTop, Spin } from "antd";
import "./scroll.css";
export default function ReadMoreNews() {
    let { date } = useParams();
    const [other, setOther] = useState([]);
    const [news, setNews] = useState(null);
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
    useEffect(() => {
        async function fetchData() {
            await fire.firestore().collection("news").get().then((i) => {
                const items = i.docs.map((d) => d.data());
                setNews(items.filter((e) => e.date === date));
                setOther(items.filter((e) => e.date !== date));
            })
        }
        fetchData();
    }, [date]);

    return <Spin spinning={news === null} id="topD" >
        <div className="bg-white w-full h-full "  >
        <div className="p-5 shadow-md mx-auto">
            <img src={logo} className="h-14 select-none cursor-pointer " alt="logo" onClick={() => window.location.replace("/")} />
        </div>
        <div className="w-full min-h-xl my-10 ">
            <div className="mx-auto max-w-7xl  flex" >
                <div className="w-3/4 p-2 border-r-2">
                    <span className="text-2xl text-black">{news !== null && news[0].title}</span>
                    <hr />

                    <hr />
                    <div className="my-4 pr-2 flex justify-between"><span>Нийтлэгч: {news !== null && news[0].newsAuthor}</span><span>{date.substr(0, 4) + "-" + date.substr(4, 2) + "-" + date.substr(6, 2) + " " + date.substr(8, 2) + ":" + date.substr(10, 2)}</span></div>
                    <hr />
                    {/* {news !== null && news[0].image &&<div className="my-2 cursor-pointer select-none h-80  bg-center bg-contain bg-no-repeat w-full relative " style={{ backgroundImage: `url(${news[0].image})`}} ></div>} */}
                    {news !== null && <div dangerouslySetInnerHTML={{ __html: news[0].body }} className="my-2 max-w-7xl py-2" />}
                </div>
                <div className="w-1/4 ml-2 p-2">
                    <span className="text-lg uppercase text-black"> Бусад мэдээ</span>
                    <hr className="h-0.5 rounded-md bg-blue-500 mb-2" />
                    {other.slice().reverse().map((s, i) => i < 10 && <><Link className="hover:underline text-gray-500 hover:text-gray-700" to={`/news/${s.date}`} >{s.title}</Link><p className="text-xs text-gray-300">{moment(s.date.substr(0, 4) + "-" + s.date.substr(4, 2) + "-" + s.date.substr(6, 2) + " " + s.date.substr(8, 2) + ":" + s.date.substr(10, 2)).fromNow()}</p> <hr className="mb-2" /></>)}
                </div>

            </div>
        </div>
        <Footer />
        <BackTop visible={backVisible}
            onClick={() => {
                document.getElementById("topD").scroll({
                    top: 0,
                    behavior: "smooth",
                });
            }} />
        </div>
    </Spin>
}