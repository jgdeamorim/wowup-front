import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeIt/MainBanner";
import FeaturedService from "../components/HomeIt/FeaturedService";
import ServiceRightImageStyle from "../components/HomeIt/ServiceRightImageStyle";
import ServiceLeftImageStyle from "../components/HomeIt/ServiceLeftImageStyle";
import WhyChooseUs from "../components/Common/WhyChooseUs";
import FeaturesContent from "../components/HomeIt/FeaturesContent";
import ClientsFeedbackSlider from "../components/Common/ClientsFeedbackSlider";
import PricingStyleOne from "../components/Pricing/PricingStyleOne";
import TeamStyleOne from "../components/Common/TeamStyleOne";
import OurLovingClients from "../components/Common/OurLovingClients";
import FaqContent from "../components/Faq/FaqContent";
import SubscribeStyleOne from "../components/Common/SubscribeStyleOne";
import BlogPostStyleOne from "../components/Common/BlogPostStyleOne";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <FeaturedService />

      <ServiceRightImageStyle />

      <ServiceLeftImageStyle />

      <WhyChooseUs />

      <FeaturesContent />

      <ClientsFeedbackSlider />

      <PricingStyleOne />

      <TeamStyleOne />

      <OurLovingClients />

      <FaqContent />

      <SubscribeStyleOne />

      <BlogPostStyleOne />

      <Footer />
    </>
  );
}
