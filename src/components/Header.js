import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btn, setbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-green-50">
      <div>
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-semibold">
            {onlineStatus ? "Online " + "✅" : "Online " + "🔴"}
          </li>
          <li className="px-4 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold">Cart</li>
          <button
            className="px-4 font-semibold"
            onClick={() => {
              btn === "Login" ? setbtn("Logout") : setbtn("Login");
            }}
          >
            {btn}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
