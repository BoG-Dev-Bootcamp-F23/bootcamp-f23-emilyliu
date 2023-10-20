import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import LinesPage from './pages/LinesPage.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route index element = {<Home />} />
        <Route path="about" element = {<About />} />
        <Route path="line">
          <Route path=":lineColor" element = {<LinesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
