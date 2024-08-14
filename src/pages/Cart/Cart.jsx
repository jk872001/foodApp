import { useDispatch, useSelector } from "react-redux";
import RestroAccordianList from "../../components/RestroAccordianList";
import { defaultButton } from "../../utils/buttonCss";
import { clearItem } from "../../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return cartItems.length === 0 ? (
    <h1 className="text-lg font-bold text-center m-5">Cart is Empty</h1>
  ) : (
    <div className="w-3/5 m-auto p-5">
      <div className="flex justify-between mx-10">
        <p className="text-lg font-bold">Cart</p>
        <button onClick={handleClearCart} className={defaultButton}>
          Clear Cart
        </button>
      </div>

      <RestroAccordianList itemCards={cartItems} />
    </div>
  );
};

export default Cart;
