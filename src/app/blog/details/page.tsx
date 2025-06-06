import React from "react";
import NavbarThree from "../../../components/Layouts/NavbarThree";
import PageTitleArea from "../../../components/Common/PageTitleArea";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import FreeTrialArea from "../../../components/Common/FreeTrialArea";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageTitleArea
        pageTitle="Blog Details"
        pageDescription="News and Insights"
      />

      <BlogDetailsContent />

      <FreeTrialArea />

      <Footer />
    </>
  );
}
