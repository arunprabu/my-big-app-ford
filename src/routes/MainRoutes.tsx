import React, {lazy, Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';
import CreateUser from '../components/users/CreateUser';
import UserDetails from '../components/users/UserDetails';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import TodosPage from '../pages/TodosPage';
import UsersPage from '../pages/UsersPage';

// Implementing lazy loading of components
const NetflixPage = lazy(() => import("../pages/NetflixPage") );
const ProductsPage = lazy(() => import( "../pages/ProductsPage"));
const CounterPage = lazy(() => import("../pages/CounterPage"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {/* Configure the routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/netflix" element={<NetflixPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/create" element={<CreateUser />} />
        {/* id is the url parameter in the above route */}
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </Suspense>
  );
}

export default MainRoutes