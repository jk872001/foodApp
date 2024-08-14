/* eslint-disable no-unsafe-optional-chaining */
import { MENU_API } from "../utils/api";
import { useParams } from "react-router-dom";
import { RestroMenuShimmer } from "../components/Shimmer";
import useFetchRestroMenu from "../customHooks/useFetchRestroMenu";
import { restroImgUri } from "../utils/images";
import RestroAccordian from "../components/RestroAccordian";
const RestroDetails = () => {
  const { resId } = useParams();
  
  let [restroMenuState, restroMenuListState] = useFetchRestroMenu(
    MENU_API + resId
  );
  // const {
  //   name,
  //   cloudinaryImageId,
  //   cuisines,
  //   avgRatingString,
  //   costForTwoMessage,
  //   sla
  // } = restroMenuState;
  if (restroMenuState === null) return <RestroMenuShimmer/>;

  return (
    <div className="w-3/5  m-auto ">
      <div className="flex">
        <img
          width="300"
          className="p-3 text-center rounded-t-lg"
          src={restroImgUri + restroMenuState?.cloudinaryImageId}
          alt="product image"
        />

        <div className="p-8   w-full">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 :text-white">
            {restroMenuState?.name}
          </h5>

          <p className="tracking-tight text-gray-900 ">
            {restroMenuState?.cuisines.join(", ")}
          </p>

          <div className="flex items-center mt-0.5 ">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 :text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded :bg-blue-200 :text-blue-800 ms-3">
              {restroMenuState?.avgRatingString}
            </span>
          </div>
          <div className="flex items-center gap-8 mt-5 ">
            <span className="text-md font-bold text-gray-800 ">
              {restroMenuState?.costForTwoMessage}
            </span>
            <span className="text-md font-bold text-gray-800 ">
              {restroMenuState?.sla?.slaString}
            </span>
            <span className="text-md font-bold text-gray-800 ">
              {restroMenuState?.sla?.lastMileTravelString}
            </span>
          </div>
        </div>
      </div>

      <RestroAccordian restroMenuListState={restroMenuListState}/>
      
    </div>
  );
};

export default RestroDetails;
