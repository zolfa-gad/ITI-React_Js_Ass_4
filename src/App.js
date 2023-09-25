import AppRoutes from "./app-routes";
import ProductDetailPage from "./pages/detail-page";

function App() {
  return (
    <div className="App h-100">
      <header className="bg-dark text-light d-flex flex-column justify-content-center align-items-center min-vh-100 fs-4">
        <AppRoutes />
        {/* <ProductDetailPage /> */}
      </header>
    </div>
  );
}

export default App;
