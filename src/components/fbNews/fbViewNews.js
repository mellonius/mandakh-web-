import React from "react";
import moment from "moment";
import "moment/locale/mn";
import FacebookEmoji from "react-facebook-emoji";
function FbViewNews({ data, index }) {
  const Types =
    data.reactions !== undefined
      ? data.reactions.data
          .map((dataItem) => dataItem.type)
          .filter((type, index, array) => array.indexOf(type) === index)
      : []; // filter out duplicates

  const counts =
    Types.length > 0
      ? Types.map((mediaType) => ({
          type: mediaType,
          count:
            data.reactions !== undefined
              ? data.reactions.data.filter((item) => item.type === mediaType)
                  .length
              : 0,
        }))
      : null;
  return (
    <a
      key={index}
      href={`https://www.facebook.com/${data.id}`}
      target="_blank"
      rel="noreferrer"
      className=" transform  hover:scale-105 z-0 shadow-xl mx-7 my-5 md:mx-4 md:my-4 p-5 rounded-lg  dark:text-white text-gray-800 dark:hover:bg-white dark:hover:text-gray-800  cursor-pointer select-none text-center font-serif"
    >
      <div className=" justify-start py-1">
        <img
          src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-9/138940946_103522448391039_8904845376832196016_n.png?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHo6No31r-01yA2IpY4umahXuHkR6nNOz5e4eRHqc07Pj3m9FNqqFWs6N_id7pxh8HiYh2tsAdGPkjctwcaKdyx&_nc_ohc=TKK9rT54ZBkAX_IReBJ&_nc_ht=scontent.fuln2-1.fna&oh=02718a7d5b4e81bed8b3a239cd76fd88&oe=602A9E92"
          alt="logo"
          className="float-left h-14 p-1 rounded-full "
        />
        <div className="grid grid-rows-2  text-left ml-1 mt-2">
          <span className="text-sm sm:text-sm md:text-base ">
            School of Information Technology
          </span>
          <span className="text-xs text-gray-500 pt-0">
            {moment
              .utc(`${data.created_time}`, "YYYY-MM-DD[T]HH:mm:ss")
              .utcOffset(+120)
              .fromNow()}
          </span>
        </div>
      </div>

      {data.attachments.data.map((zurag, index) => {
        return (
          <div key={index}>
            <p
              className={
                data.message != null
                  ? " text-left truncate ... w-72 sm:w-56 md:w-64 lg:w-72"
                  : " text-left truncate ... w-72 sm:w-56 md:w-64 lg:w-72 underline text-blue-500"
              }
            >
              {data.message != null ? data.message : zurag.target.url}
            </p>
            <img
              src={zurag.media.image.src}
              alt={zurag.target.url}
              className="h-60 w-full rounded"
            />
          </div>
        );
      })}
      <br />
      <hr />
      <div className="grid grid-cols-7 text-left ml-1 mt-2">
        {counts !== null ? (
          counts.map((reaction, index) => {
            if (reaction.type === "LIKE") {
              return (
                <div
                  className="grid grid-cols-2 text-left ml-1 mt-2"
                  key={index}
                >
                  <FacebookEmoji type="like" size="xxs" />
                  <span className="text-sm text-gray-500 font-bold pl-0">
                    {reaction.count > 1000
                      ? `${Math.floor(reaction.count / 1000)}K`
                      : reaction.count}
                  </span>
                </div>
              );
            } else if (reaction.type === "CARE") {
              return (
                <div
                  className="grid grid-cols-2 text-left ml-1 mt-2"
                  key={index}
                >
                  <FacebookEmoji type="yay" size="xxs" />
                  <span className="text-sm text-gray-500 font-bold pl-0 ">
                    {reaction.count > 1000
                      ? `${Math.floor(reaction.count / 1000)}K`
                      : reaction.count}
                  </span>
                </div>
              );
            } else if (reaction.type === "LOVE") {
              return (
                <div
                  className="grid grid-cols-2 text-left ml-1 mt-2"
                  key={index}
                >
                  <FacebookEmoji type="love" size="xxs" />
                  <span className="text-sm text-gray-500 font-bold pl-0 ">
                    {reaction.count > 1000
                      ? `${Math.floor(reaction.count / 1000)}K`
                      : reaction.count}
                  </span>
                </div>
              );
            } else if (reaction.type === "WOW") {
              return (
                <div
                  className="grid grid-cols-2 text-left ml-1 mt-2"
                  key={index}
                >
                  <FacebookEmoji type="wow" size="xxs" />
                  <span className="text-sm text-gray-500 font-bold pl-0 ">
                    {reaction.count > 1000
                      ? `${Math.floor(reaction.count / 1000)}K`
                      : reaction.count}
                  </span>
                </div>
              );
            } else if (reaction.type === "ANGRY") {
              return (
                <div
                  className="grid grid-cols-2 text-left ml-1 mt-2"
                  key={index}
                >
                  <FacebookEmoji type="angry" size="xxs" />
                  <span className="text-sm text-gray-500 font-bold pl-0 ">
                    {reaction.count > 1000
                      ? `${Math.floor(reaction.count / 1000)}K`
                      : reaction.count}
                  </span>
                </div>
              );
            } else if (reaction.type === "HAHA") {
              return (
                <div
                  className="grid grid-cols-2 text-left ml-1 mt-2"
                  key={index}
                >
                  <FacebookEmoji type="haha" size="xxs" />
                  <span className="text-sm text-gray-500 font-bold pl-0 ">
                    {reaction.count > 1000
                      ? `${Math.floor(reaction.count / 1000)}K`
                      : reaction.count}
                  </span>
                </div>
              );
            } else
              return (
                <div
                  className="grid grid-cols-2 text-left ml-1 mt-2"
                  key={index}
                >
                  <FacebookEmoji type="sad" size="xxs" />
                  <span className="text-sm text-gray-500 font-bold pl-0 ">
                    {reaction.count > 1000
                      ? `${Math.floor(reaction.count / 1000)}K`
                      : reaction.count}
                  </span>
                </div>
              );
          })
        ) : (
          <></>
        )}
      </div>
    </a>
  );
}

export default FbViewNews;