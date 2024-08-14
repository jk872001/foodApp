import { SWIGGY_API } from "../utils/api";
import { defaultButton } from "../utils/buttonCss";
import RestroCard, { withPromotedLabel } from "./RestroCard";
import Searchbar from "./Searchbar";
import { useState, useEffect } from "react";
import { ShimmerCardContainer } from "./Shimmer.jsx";

const RestroContainer = () => {
  const [restroListState, setRestroListState] = useState([]);
  const [filterRestroListState, setFilterRestroListState] = useState([]);
  const [isLoadingState, setIsLoadingState] = useState(true);
  useEffect(() => {
    fetchRestroData();
  }, []);

  const RestroCardPromoted = withPromotedLabel(RestroCard);

  const fetchRestroData = async () => {
    const restro = await fetch(SWIGGY_API);
    const restroJson = await restro.json();

    // initialize checkJsonData() function to check Swiggy Restaurant data
    function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          restroJson?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = checkJsonData(restroJson);
    // console.log(resData);
    setRestroListState(resData);
    setFilterRestroListState(resData);
    setIsLoadingState(false);
  };

  const handleTopRated = () => {
    setFilterRestroListState((prevList) =>
      prevList.filter((ele) => +ele?.info?.avgRatingString > 4.2)
    );
  };
  const handleClearFilter = () => {
    setFilterRestroListState(restroListState);
  };

  const handleDataFromChild = (data) => {
    const filterSearch = restroListState.filter((ele) =>
      ele?.info?.name.toLowerCase().includes(data.toLowerCase())
    );
    setFilterRestroListState(filterSearch);
  };

  return (
    <div className="">
      <div className="px-5 mt-5 mx-10 flex justify-between align-middle">
        <Searchbar onDataPass={handleDataFromChild} />
        <div>
          <button
            type="button"
            className={defaultButton}
            onClick={handleClearFilter}>
            Clear Filter
          </button>
          <button
            type="button"
            className={defaultButton}
            onClick={handleTopRated}>
            Top Rated
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {isLoadingState
          ? Array(6)
              .fill("")
              .map((_, idx) => <ShimmerCardContainer key={idx} />)
          : filterRestroListState.map((ele) => {
              return ele.info.avgRating > 4.2 ? (
                <RestroCardPromoted key={ele?.info?.id} {...ele?.info} />
              ) : (
                <div className="w-1/6 max-w-sm bg-white border border-gray-200 rounded-lg shadow  mx-5 my-3">
                  <RestroCard key={ele?.info?.id} {...ele?.info} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default RestroContainer;
