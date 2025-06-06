import React from "react";
import NavbarThree from "../../../components/Layouts/NavbarThree";
import PageTitleArea from "../../../components/Common/PageTitleArea";
import ServicesStyleThree from "../../../components/Services/ServicesStyleThree";
import ClientsFeedbackSliderTwo from "../../../components/Common/ClientsFeedbackSliderTwo";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageTitleArea
        pageTitle="Services Style Three"
        pageDescription="Our Services"
      />

      <ServicesStyleThree />

      <ClientsFeedbackSliderTwo />

      <Footer />
    </>
  );
}
