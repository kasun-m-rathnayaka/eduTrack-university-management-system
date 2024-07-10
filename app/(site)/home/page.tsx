import React from "react";
import Header from "../components/Header";
import ListSection from "../components/ListSection";
import FeatureSection from "../components/FeatureSection";
import CasesSection from "../components/Coursers";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Header title="Empower our " colored="community"/>
      <main>
        <ListSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
