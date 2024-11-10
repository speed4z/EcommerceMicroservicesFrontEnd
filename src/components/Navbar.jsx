import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <h2 className="text-white text-2xl font-bold">
          <a href="/">Amazon</a>
        </h2>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-blue-300">Home</a>
          <a href="/products" className="text-white hover:text-blue-300">Products</a>
          <a href="/cart" className="text-white hover:text-blue-300">Cart</a>
        </div>

        <div className="md:hidden">
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-400 p-4 space-y-2">
          <a href="/" className="block text-white hover:text-blue-300">Home</a>
          <a href="/products" className="block text-white hover:text-blue-300">Products</a>
          <a href="/cart" className="block text-white hover:text-blue-300">Cart</a>
        </div>
      )}
    </nav>

  );
}

export default Navbar;