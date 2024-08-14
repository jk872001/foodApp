import { Link } from "react-router-dom";
import { defaultButton } from "../../utils/buttonCss";
import { headerList } from "../../utils/constants";
import { appLogo } from "../../utils/images";
import useOnline from "../../customHooks/useOnline";
import { useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnline();
  const { isAuthenticated, userName, login, logout } = useContext(AuthContext);

  const cartItems = useSelector((store) => store.cart.items);
  const handleLogin = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login("Jitesh");
    }
  };
  return (
    <div className="relative w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link to="/">
            <img alt="logo" src={appLogo} width="60" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {headerList.map((ele) => {
              return (
                <li key={ele}>
                  <Link
                    to={ele?.path}
                    className="text-md font-semibold text-gray-800 hover:text-orange-500 ">
                    {ele?.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to="/cart"
                className="text-md font-semibold text-gray-800 hover:text-orange-500 ">
                Cart {` (${cartItems.length}) `}
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button type="button" className="mr-3">
            {isAuthenticated ? userName : ""}
          </button>
          <button type="button" className={defaultButton} onClick={handleLogin}>
            {isAuthenticated ? "Logout" : "Login"}
          </button>
          <button type="button" className="">
            {onlineStatus ? "✅" : "🔴"}
          </button>
        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
