import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Resource Library</h1>
        <div>Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
