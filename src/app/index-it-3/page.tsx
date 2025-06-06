import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/HomeItThree/MainBanner";
import FeaturedService from "../../components/HomeItThree/FeaturedService";
import ServiceRightImageStyle from "../../components/HomeItThree/ServiceRightImageStyle";
import ServiceLeftImageStyle from "../../components/HomeItThree/ServiceLeftImageStyle";
import TeamStyleTwo from "../../components/Common/TeamStyleTwo";
import Features from "../../components/HomeItThree/Features";
import ClientsFeedbackThree from "../../components/Common/ClientsFeedbackThree";
import PricingStyleThree from "../../components/Pricing/PricingStyleThree";
import OurLovingClientsTwo from "../../components/Common/OurLovingClientsTwo";
import DownloadApp from "../../components/Common/DownloadApp";
import BlogPostStyleOne from "../../components/Common/BlogPostStyleOne";
import SubscribeStyleTwo from "../../components/Common/SubscribeStyleTwo";
import FreeTrialArea from "../../components/Common/FreeTrialArea";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <FeaturedService />

      <ServiceRightImageStyle />

      <ServiceLeftImageStyle />

      <TeamStyleTwo />

      <Features />

      <ClientsFeedbackThree />

      <PricingStyleThree />

      <OurLovingClientsTwo />

      <DownloadApp />

      <BlogPostStyleOne />

      <SubscribeStyleTwo />

      <FreeTrialArea />
      
      <Footer />
    </>
  );
}
