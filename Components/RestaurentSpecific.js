import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantApi } from "./constants";
import RestaurentMenuComponent from "./RestaurentMenuComonent";

const RestaurantSpecific = () => {
    const { id } = useParams();
    console.log("Restaurant ID:", id);

    const [restaurentMenu, setRestaurentMenu] = useState([]);

    useEffect(() => {
        const fetchRestaurantMenu = async () => {
            try {
                const response = await fetch(restaurantApi);
                const data = await response.json();
                console.log("Restaurant Menu Data:", data?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
                setRestaurentMenu(data?.data.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1]?.card?.card?.itemCards);
            } catch (error) {
                console.error("Error fetching restaurant menu:", error);
            }
        };

        fetchRestaurantMenu();
    }, [id]);

    return (
        <div className="restaurant-specific"
        >
            <h2 className="restaurentMenu-title">🍽 Restaurant Menu</h2>
            {restaurentMenu.map((item) => (
                <RestaurentMenuComponent key={item.card.info.id} menuItems={[item.card.info]} />
            ))}
        </div>
    );
};

export default RestaurantSpecific;
