import React from "react";

const menuItems = [
  {
    name: "Margherita Pizza",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1601924579731-06a3b81cc9a6",
    description: "Classic delight with 100% real mozzarella cheese.",
  },
  {
    name: "Spicy BBQ Burger",
    price: "$9.49",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    description: "Grilled burger with tangy BBQ sauce and crispy onions.",
  },
  {
    name: "Creamy Alfredo Pasta",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    description: "Rich Alfredo sauce tossed with fettuccine noodles.",
  },
];

const Menu = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-orange-500 mb-10">Our Menu</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-500 mb-2">{item.description}</p>
            <p className="text-orange-500 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
