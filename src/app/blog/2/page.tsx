import React from "react";
import NavbarThree from "../../../components/Layouts/NavbarThree";
import PageTitleArea from "../../../components/Common/PageTitleArea";
import BlogWithSidebar from "../../../components/Blog/BlogWithSidebar";
import FreeTrialArea from "../../../components/Common/FreeTrialArea";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageTitleArea
        pageTitle="Blog Right Sidebar"
        pageDescription="News and Insights"
      />

      <BlogWithSidebar />

      <FreeTrialArea />

      <Footer />
    </>
  );
}
