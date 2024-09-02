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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import NetflixPage from "./pages/NetflixPage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import CreateUser from "./components/users/CreateUser";
import UserDetails from "./components/users/UserDetails";
import { ErrorBoundary } from "react-error-boundary";
import CounterPage from "./pages/CounterPage";

const queryClient = new QueryClient();

// function component with named function
function App() {
  // must return JSX
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />

        <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
          {/* Configure the routes */}
          <Routes>
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
        </ErrorBoundary>

        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
