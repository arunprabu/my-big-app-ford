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
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import { ErrorBoundary } from "react-error-boundary";
import MainRoutes from "./routes/MainRoutes";

const queryClient = new QueryClient();

// function component with named function
function App() {
  // must return JSX
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />

        <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
          <MainRoutes />
        </ErrorBoundary>

        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
