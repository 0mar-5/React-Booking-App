import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              Loading...
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
