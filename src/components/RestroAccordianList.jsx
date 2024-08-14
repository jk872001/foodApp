/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { defaultButton } from "../utils/buttonCss";
import { restroImgUri } from "../utils/images";
import { addItem } from "../redux/slices/cartSlice";

const RestroAccordianList = ({ itemCards }) => {
    const dispatch = useDispatch()
    const handleCart=(item)=>{
          dispatch(addItem(item))
    }
  return (
    <div>
      {itemCards?.map((ele) => {
        return (
          <div
            className="flex justify-between shadow-lg p-5 m-5 bg-white "
            key={ele?.id}>
            <div className="w-7/12">
              <p className="font-bold">{ele?.card?.info?.name}</p>
              <p>{ele?.card?.info?.description}</p>
              <div className="mt-3">
                <span>
                  ₹
                  {ele?.card?.info?.price / 100 ||
                    ele?.card?.info?.defaultPrice / 100}
                </span>
              </div>
            </div>
            <div className="text-center ">
              <img
                width="200"
                alt={ele?.card?.info?.name}
                src={restroImgUri + ele?.card?.info?.imageId}
              />
              <button onClick={()=>handleCart(ele)} className={`${defaultButton} mt-2 w-full`}>
                Add to Cart{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestroAccordianList;
