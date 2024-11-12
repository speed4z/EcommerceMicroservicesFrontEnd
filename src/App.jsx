import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryGridLayout from "./components/CategoryGridLayout";
import categories from "./components/categorylist.js";
import ProductGrid from "./components/ProductGrid.jsx";

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-stone-100">
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="p-6">
          <div className="w-3/4 max-w-md bg-blue-400 flex justify-center rounded-xl mx-auto mb-4">
            <h2 className="text-2xl font-extrabold mb-4 mt-4 text-white">
              Shop by Category
            </h2>
          </div>
          <CategoryGridLayout categories={categories.slice(0, 20)} />
        </div>

        <div className="p-6">
          <div className="w-3/4 max-w-md bg-blue-400 flex justify-center rounded-xl mx-auto mb-4">
            <h2 className="text-2xl font-extrabold mb-4 mt-4 text-white">
              Shop Products
            </h2>
          </div>
          <ProductGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
