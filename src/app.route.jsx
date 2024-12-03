import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage";


function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-y-hidden w-full flex items-center justify-center bg-gray-100">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
   
          {/* More routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
