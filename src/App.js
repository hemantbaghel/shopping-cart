
import './App.css';
import Header from "../src/component/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../src/component/Home";
import Cart from "../src/component/Cart"

function App() {
  return (
    <BrowserRouter>
      <Header />
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Cart" element={<Cart/>} />
      
          
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
