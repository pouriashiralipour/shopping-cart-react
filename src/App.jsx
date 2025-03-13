import { Navigate, Route, Routes } from "react-router";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import ProductsProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
