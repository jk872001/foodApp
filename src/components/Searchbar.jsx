/* eslint-disable react/prop-types */
import { useState } from "react";

const Searchbar = ({ onDataPass }) => {
  const [inputValue, setInputValue] = useState("");
  const [crossFlag, setCrossFlag] = useState(false);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === "") {
      onDataPass("");
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if(crossFlag){
        setInputValue("")
        onDataPass("")
        setCrossFlag(false)
        return
    }
    if (!inputValue) return;
    onDataPass(inputValue);
    setCrossFlag(true);
  };

  return (
    <form className="w-1/3 ">
      <label
        htmlFor="default-search"
        className="text-sm font-medium text-gray-900 sr-only :text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 :text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          value={inputValue}
          onChange={handleInputChange}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
          required
        />
        <button
          type="submit"
          onClick={handleButtonClick}
          className="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-700   font-medium rounded-lg text-sm px-4 py-2 ">
          {crossFlag ? "X" : "Search"}
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
