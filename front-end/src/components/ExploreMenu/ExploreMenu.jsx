import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

function ExploreMenu({ category, setCategory }) {
  // Helper function to handle category selection
  const handleCategoryClick = (menuName) => {
    setCategory((prevCategory) =>
      prevCategory === menuName ? "All" : menuName
    );
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Discover a variety of options tailored to your taste. Choose from a
        range of delicious and carefully crafted items to satisfy your cravings.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(item.menu_name)}
            className={`explore-menu-list-item ${
              category === item.menu_name ? "active" : ""
            }`}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
