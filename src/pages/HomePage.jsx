import React from "react";
import Navbar from "../components/Navbar";
import Jumbotrons from "../components/Jumbotrons";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Jumbotrons />
    </div>
  );
};

export default HomePage;
