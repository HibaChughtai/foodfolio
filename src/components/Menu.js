import React from "react";

const Menu = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">🍽️ Popular Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Repeat cards for Pizza, Burger, Fries, Drink */}
        {/* ...same card code as before... */}
      </div>
    </div>
  );
};

export default Menu;
