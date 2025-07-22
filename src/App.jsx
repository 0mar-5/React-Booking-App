import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-custom mb-36">
        <Home />
      </div>
    </>
  );
}

export default App;
