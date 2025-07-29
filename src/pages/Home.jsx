import BestOffers from "../components/BestOffers/BestOffers";
import Navbar from "../components/Navbar/Navbar";
import Recommended from "../components/Recommended/Recommended";

function Home() {
  return (
    <>
      <Navbar />
      <Recommended />
      <BestOffers />
    </>
  );
}

export default Home;
