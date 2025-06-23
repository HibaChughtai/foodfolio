import './App.css';
import Navbar from "./component/Navbar"; // ✅ Corrected line
import Home from './pages/Home';         // ✅ Home component import

function App() {
  return (
    <>
      <Navbar />

      <h1 className="text-3xl font-bold text-center mt-10 text-red-600">
        Welcome to Food Delivery App
      </h1>

      <p className="text-center text-gray-600 mt-4">
        Order your favorite food like Pizza, Burgers, and more!
      </p>

      <Home />  {/* Yeh line Home.js ka design dikhayegi */}
    </>
  );
}

export default App;
