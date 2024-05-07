import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   - logo
 *   - Nav  items
 * Body
 *   - Search
 *   - Restaurant Container
 *     - RestaurantCards
 *       - img
 *       - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  -Copyright
 *  -links
 *  -address
 *  -contact
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/irnwr59vlrmciau11or0"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.delvTime}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani,Pakistani,Asian"
          rating="4.6 stars"
          delvTime="38 minutes"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burgers,Fast Food,American"
          rating="4.4 stars"
          delvTime="40 minutes"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
