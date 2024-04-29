import React from "react";
import image from "../Assets/News.png?as=webp";

const News = () => {
  return (
    <div className="news-section">
      <div className="column">
        <div className="news-column">
          <h2 className="press">PRESS</h2>
          <img src={image} alt="Fundraising Image" />
        </div>
      </div>

      <div className="column">
        <div className="news-column">
          <h2 className="text">MEDIA</h2>
          <div className="news-description">
            <p>Extension of Loropio Girls Senior High School</p>
            <p>Extension of Loropio Girls Senior High School</p>
            <p>Extension of Loropio Girls Senior High School</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
