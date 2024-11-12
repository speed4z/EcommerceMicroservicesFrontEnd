function Footer() {
  return (
    <footer className="bg-blue-400 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="mt-2 text-sm">
            E-commerce platform offering high-quality products at affordable
            prices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-300">
                Products
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-blue-300">
                Cart
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <ul className="mt-2 flex justify-center md:justify-start space-x-4">
            <li>
              <a href="#" className="hover:text-blue-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-300">
        © 2024 GroceryX. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
