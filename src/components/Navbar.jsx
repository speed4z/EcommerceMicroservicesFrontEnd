import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400 p-4">
      <div className="container max-w-full mx-auto flex justify-between items-center">
        <div className="mx-4">
          <h2 className="text-white text-2xl font-extrabold mx-7">
            <a href="/">Ecommerce</a>
          </h2>
        </div>

        <div className="flex-grow mx-4 max-w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-xl border-4 border-blue-300 font-extrabold focus:border-blue-500 focus:outline-none hover:border-blue-500"
          />
        </div>

        <div className="hidden md:flex space-x-4 ml-auto ">
          <button className="text-white font-extrabold px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-lg">
            Login
          </button>
          <button className="text-white font-extrabold px-3 py-1 bg-blue-500 hover:bg-blue-600  rounded-lg">
            Cart
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-white md:hidden" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-400 p-4 space-y-2">
          <a href="/" className="block text-white hover:text-blue-300">
            Login
          </a>
          <a href="/cart" className="block text-white hover:text-blue-300">
            Cart
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
