const CardComponent = ({ restaurant }) => {
  const {
    id,
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = restaurant;

  return (
    <div className="card" key={id}>
      <img
        className="card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <div className="card-body">
        <h3>{name}</h3>
        <p>⭐ {avgRating} • {costForTwo}</p>
        <p>{cuisines?.join(", ")}</p>
        <p>⏱ {sla?.slaString}</p>
      </div>
    </div>
  );
};

export default CardComponent;
