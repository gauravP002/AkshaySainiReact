import { api } from "./constants";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponenet";
import ShimirUi from "../ShimirUi";

const CardContainerComponent = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        console.log("API Data:", data);

        const restaurantList =
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
            console.log("Restaurant List:", restaurantList);

        setRestaurants(restaurantList);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return !restaurants ? <ShimirUi/> : (
    <div className="card-container">
      {restaurants.map((restaurant) => (
        <CardComponent
          key={restaurant.info.id}
          restaurant={restaurant.info}
        />
      ))}
    </div>
  );
};

export default CardContainerComponent;
