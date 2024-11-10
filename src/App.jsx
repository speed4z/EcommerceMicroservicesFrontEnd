import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content area with flex-grow to take up available space */}
        <main className="flex-grow">
         
        </main>
        
        {/* Footer at the bottom */}
        <Footer />
      </div>
  )
}

export default App
