import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const HomeScreen = () => {
  return (
    <div>
      <CalltoActionSection />
      <ShopSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
