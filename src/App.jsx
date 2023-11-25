import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllBeersPage from './pages/AllBeersPage';
import HomePage from './pages/HomePage';
import RandomBeerPage from './pages/RandomBeerPage';
import AddBeerPage from './pages/AddBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
