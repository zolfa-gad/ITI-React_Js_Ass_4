import AppRoutes from "./app-routes";
import { Provider } from "react-redux";
import favouriteStore from "./store/store";

function App() {
  return (
    <div className="App h-100">
      <header className="bg-dark text-light d-flex flex-column justify-content-center align-items-center min-vh-100 fs-4">
        <Provider store={favouriteStore}>
          <AppRoutes />
        </Provider>
        {/* <ProductDetailPage /> */}
      </header>
    </div>
  );
}

export default App;
