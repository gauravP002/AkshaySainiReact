const ShimirUi = ({ title = "Card Title", description = "Card description goes here." }) => {
  return (
      <div className="shimir">
      <h3 className="title">{title}</h3>
      <p className="desc">{description}</p>
      <button className="btn">Explore</button>
    </div>
  );
};

export default ShimirUi;