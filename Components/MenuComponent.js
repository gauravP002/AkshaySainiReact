const MenuComponent = () => {
  const menuItems = [
    { name: "Paneer Butter Masala", price: "₹250", description: "Rich & creamy paneer gravy" },
    { name: "Veg Biryani", price: "₹200", description: "Flavored rice with vegetables" },
    { name: "Masala Dosa", price: "₹120", description: "Crispy dosa with potato masala" },
    { name: "Egg Curry", price: "₹180", description: "Spicy & flavorful egg curry" },
  ];

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <h3>{item.name}</h3>
            <p className="menu-description">{item.description}</p>
            <p className="menu-price">{item.price}</p>
            <button className="menu-btn">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
