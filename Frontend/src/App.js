import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Predictor from './pages/Predictor';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='predictor'element={<Predictor />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
