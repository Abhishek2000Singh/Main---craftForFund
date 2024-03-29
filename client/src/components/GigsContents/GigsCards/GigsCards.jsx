import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill, BsFillHeartFill } from "react-icons/bs";
import Avatar from "../../../assets/icons/avatar.jpg";
import loader from "../../../assets/icons/loader.svg";
import { Axios } from "../../../config";
import requests from "../../../libs/request";
import { useQuery } from "@tanstack/react-query";

const GigsCards = ({ item }) => {
  const { isLoading, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      Axios.get(`${requests.users}/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  const truckcateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <Link
      to={`/gigs/${item._id}`}
      className="w-full shadow-box flex items-start flex-col justify-start border group"
    >
      <img
        src='https://www.addevice.io/storage/ckeditor/uploads/images/6597be3d2e997_how.to.make.a.social.media.app.png'
        alt={item?.username}
        className="w-full object-cover h-[200px]"
      />
      <div className="w-full bg-white pt-5 flex items-start flex-col gap-3 justify-start">
        <div className="flex items-center justify-start gap-3 px-4">
          {isLoading ? (
            <div className="w-4 h-4">
              <img
                src={loader}
                alt="loading..."
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <>
              <div className="w-8 h-8">
                <img
                  src={data?.img || Avatar}
                  alt={data?.username}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex flex-col items-start justify-start">
                <h2 className="text-sm font-medium">Vimal Anand</h2>
                <p className="text-sm font-normal text-gray-400">
                  Lender
                </p>
              </div>
            </>
          )}
        </div>
        <p className="text-darkColor text-base group-hover:text-primary transition-all duration-300 px-4">
          Social Development App
        </p>
        <p className="flex items-center justify-start gap-1 text-yellow-400 font-semibold px-4">
          <BsStarFill />
          4.5
        </p>
        <div className="border-t w-full p-5 flex items-center justify-between">
          <span className="text-gray-400 cursor-pointer">
            <BsFillHeartFill size={20} />
          </span>
          <span className="text-sm font-normal text-gray-500">
            Explore More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GigsCards;
