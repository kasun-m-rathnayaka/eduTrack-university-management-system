import React from "react";
import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import ListSection from "../components/ListSection";
import FeatureSection from "../components/FeatureSection";
import CasesSection from "../components/Coursers";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
