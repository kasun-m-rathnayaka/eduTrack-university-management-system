import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <div>
      <NavBar />
      <Header
        title="Mentor Advising "
        colored="Meetings"
        desc="Regular check-ins with academic advisors to ensure they are on track."
      />
      <div className="my-20">
        <FeatureSection />
      </div>

      <Footer />
    </div>
  );
};

export default page;
