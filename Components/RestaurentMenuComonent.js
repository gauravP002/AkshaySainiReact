import React from "react";


const RestaurentMenuComponent = ({ menuItems }) => {
  if (!menuItems) {
    return <p>No menu data available</p>;
  }

  console.log("Menu Items:", menuItems);

  const { category, defaultPrice, description, imageId, name } = menuItems[0] || {};

  return (
    <div className="restaurentMenu">


      <div className="restaurentMenu-card">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/"+imageId}
          alt={name}
          className="restaurentMenu-image"
        />
        <div className="restaurentMenu-details">
          <h3 className="restaurentMenu-name">{name}</h3>
          <p className="restaurentMenu-category">{category}</p>
          <p className="restaurentMenu-description">{description}</p>
          <p className="restaurentMenu-price">₹{defaultPrice / 100}</p>
          <button className="restaurentMenu-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenuComponent;
