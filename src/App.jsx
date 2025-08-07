import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
