import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Attractions from "./pages/Attractions";
import ActivityDetail from "./pages/ActivityDetail";
import PlanJourney from "./pages/PlanJourney";
import Practical from "./pages/Practical";
import FoodDining from "./pages/FoodDining";
import Shopping from "./pages/Shopping";
import SeasonalGuide from "./pages/SeasonalGuide";
import Budget from "./pages/Budget";
import Gallery from "./pages/Gallery";
import Basket from "./pages/Basket";
import SignIn from "./pages/SignIn";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
          <Route path="/plan-your-journey" element={<PlanJourney />} />
          <Route path="/practical" element={<Practical />} />
          <Route path="/food-dining" element={<FoodDining />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/seasonal-guide" element={<SeasonalGuide />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
