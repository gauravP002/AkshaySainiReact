import CardContainerComponent from "./CardContainerComponent";

const BodyComponent = () => {
  return (
    <main className="body">
      <section className="hero">
        <h2>Welcome to FoodieApp 🍕</h2>
        <p>Your favorite meals delivered fresh & fast!</p>
        <button className="cta-btn">Order Now</button>
      </section>
        <CardContainerComponent />
    </main>
  );
};

export default BodyComponent;
