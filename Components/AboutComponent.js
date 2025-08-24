const AboutComponent = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to our restaurant! We serve delicious vegetarian and egg-based dishes, made with fresh ingredients and love. 
            Our mission is to provide a wholesome, flavorful experience for every customer.
          </p>
          <p>
            Established in 2023, we have been dedicated to bringing you the best taste in town. Our chefs carefully prepare each dish 
            with attention to detail and a passion for cooking.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
