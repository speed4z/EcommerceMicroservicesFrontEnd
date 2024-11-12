import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductGrid from './components/ProductGrid'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content area with flex-grow to take up available space */}
        <main className="flex-grow">
         
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <ProductGrid></ProductGrid>

        </main>        
        {/* Footer at the bottom */}
        <Footer />
      </div>
  )
}

export default App
