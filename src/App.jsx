import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import Employers from "./pages/Employers";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import About from "./pages/About";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// This wrapper handles the "Fade" animation when switching pages
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="employers" element={<Employers />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="about" element={<About />} />
          {/* <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;