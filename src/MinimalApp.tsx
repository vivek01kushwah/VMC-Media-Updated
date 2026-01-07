import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ErrorBoundary from "./components/ErrorBoundary";

// Minimal App for testing
const MinimalApp = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default MinimalApp;