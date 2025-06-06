"use client";
  
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const CompanyIntroVideo: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="company-preview-area">
        <div className="container">
          <div className="company-preview-video">
            <div onClick={() => setToggler(!toggler)} className="video-btn">
              <i className="bx bx-play"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyIntroVideo;
