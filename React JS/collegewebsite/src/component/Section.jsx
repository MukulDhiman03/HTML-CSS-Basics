import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-xl-6 col-12">
            <div id="line"></div>
            <h1>WHY GEU</h1>
            <div id="line"></div>
            <ul className="mt-2" type="square" id="list">
              <li>Ranked among top 100 Universities in India by NIRF, 2021</li>
              <li>NIRF Ranked No 1 Engineering Institution in Uttarakhand</li>
              <li>90% Placement Record</li>
              <li>
                25+ years of experience in nurturing students into leaders
              </li>
              <li>
                Multidisciplinary and holistic learning in the scenic environs
                of Dehradun
              </li>
              <li>
                Here at GEU, we have the collaboration with world class
                institution for the educational opportunities in different
                countries of the world
              </li>
              <li>
                Graphic Era University works with students, faculty and staff
                across campus to promote international and cross-cultural
                learning, as well as respect for diversity
              </li>
            </ul>
          </div>
          <div
            className="col-xl-6 col-12 mt-5 embed-responsive embed-responsive-16by9 align-self-center"
            id="yt_video"
          >
            <iframe
              className="embed-responsive-item"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1Jcb1bfiG1k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullsc
              reen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
