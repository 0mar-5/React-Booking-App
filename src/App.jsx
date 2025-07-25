import Navbar from "./components/Navbar/Navbar";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="mb-36 pt-[2%] ">
          <Suspense
            fallback={
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                Loading...
              </div>
            }
          >
            <AppRoutes />
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
