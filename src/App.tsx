/* component is made up of 
  * TS 
  * JSX 
  * CSS (optional)
  * 
  * component in react must return JSX
  * 
  * skeleton of the component 
  * import (optional)
  * component function 
  *   must return JSX 
  * must be exported
*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import NetflixPage from './pages/NetflixPage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';

// function component with named function
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <Header />

      {/* Configure the routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/netflix" element={<NetflixPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
