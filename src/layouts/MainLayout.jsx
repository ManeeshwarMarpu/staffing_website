import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
      {/* Footer can go here */}
    </div>
  );
};

export default MainLayout;