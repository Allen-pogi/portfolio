import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage";
import ParticlesBackground from "./background/background";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-gray-100">
        {/* Particles as background */}
     
        
        <div className="relative z-10">
    
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<HomePage />} />
   
            {/* More routes can be added here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
