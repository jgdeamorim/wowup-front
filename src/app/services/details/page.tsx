import React from "react";
import NavbarThree from "../../../components/Layouts/NavbarThree";
import PageTitleArea from "../../../components/Common/PageTitleArea";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";
import SubscribeStyleTwo from "../../../components/Common/SubscribeStyleTwo";
import OurLovingClients from "../../../components/Common/OurLovingClients";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageTitleArea pageTitle="Services" pageDescription="Our Services" />

      <ServiceDetailsContent />

      <SubscribeStyleTwo />

      <OurLovingClients />

      <Footer />
    </>
  );
}