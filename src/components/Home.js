import React from "react";
import image from "../Assets/secondSecImage.png?as=webp";
import Icon1 from "../Assets/icons/Icon1.png?as=webp";
import Icon2 from "../Assets/icons/Icon2.png?as=webp";
import Icon3 from "../Assets/icons/Icon3.png?as=webp";
import Icon4 from "../Assets/icons/Icon4.png?as=webp";
import heroImage from "../Assets/hero-image.png?as=webp";
import ProgressBar from "./ProgressBar.js";

const Home = () => {
  return (
    <div>
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1 className="hero-title">
            LET'S <br /> EMBRACE <br /> EQUITY
          </h1>
          <button className="primary-button">DONATE NOW</button>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="fundraising-section">
            <img src={image} alt="fundraising" />
          </div>
        </div>
        <div className="column">
          <div className="fundraising-text">
            <p>
              "Nawi" highlights the distressing issue of early marriages in
              Kenya, depicting the challenges faced by young individuals thrust
              into matrimony. The film explores the interconnection between
              early marriages and education obstacles, showcasing the profound
              impact on the lives of those involved. It calls for increased
              awareness and policy changes to break this cycle, advocating for a
              future where education becomes a key tool against early marriages.
            </p>
          </div>
        </div>
      </div>
      <div className="fundraising-overview">
        <h2 className="fundraising-overview-h2">
          FUNDRAISING CAMPAIGN <br />{" "}
          <span style={{ color: "white" }}>Overview</span>
        </h2>
        <div className="icons-container">
          <div className="column-50">
            <div className="icon">
              <img src={Icon1} alt="Icon 1" />
              <p>
                BUILDING <br /> DREAMS
              </p>
              <p>Empowering students for success through access to educational opportunities,
                 infrastructure, and skill-building initiatives.</p>
            </div>
          </div>
          <div className="column-50">
            <div className="icon">
              <img src={Icon2} alt="Icon 2" />
              <p>
                CHANGING THE MINDSET OF <br /> HUSBANDS AND FATHERS 
              </p>
              <p>Fostering community empowerment & strength through education, 
                and support for rescued child brides, 
                driving positive transformation.</p>
            </div>
          </div>
          <div className="column-50">
            <div className="icon">
              <img src={Icon3} alt="Icon 3" />
              <p>
                BUILDING MORE <br /> SCHOOLS
              </p>
              <p>Offering crucial support to vulnerable families with safe houses, 
                financial aid, and assistance services, 
                promoting stability and security.</p>
            </div>
          </div>
          <div className="column-50">
            <div className="icon">
              <img src={Icon4} alt="Icon 4" />
              <p>
                COMMUNITY <br /> RESILIENCE
              </p>
              <p>Enhancing community resilience with improved schools, 
                intervention teams, and safety measures, 
                ensuring preparedness and support.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="trailer-section">
        <h2 className="trailer-title">TRAILER</h2>
        <iframe
          src="https://player.vimeo.com/video/87816089?h=097a3a1c0a&color=ffffff&byline=0&portrait=0"
          width="900"
          height="500"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          <a href="https://vimeo.com/87816089">
            KEDI - a.k.a. Nine Lives - Cats in Istanbul - TRAILER 1
          </a>{" "}
          from{" "}
          <a href="https://vimeo.com/charliewuppermann">Charlie Wuppermann</a>{" "}
          on <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </div>
      <div className="progress-bar-section">
        <div className="column">
          <div className="progress-column">
            <img src={image} alt="Fundraising here" />
          </div>
        </div>

        <div className="column">
          <div className="progress-column">
            <h2>Progress</h2>
            <p className="description">
              Elevate the reel and make a real impact! Stay tuned for exclusive
              updates, behind-the-scenes moments, and the journey of our film.
              Join us in turning dreams into reality.
            </p>
            <div className="progress-bar" style={{ width: "90%" }}>
              <div className="progress">
                <ProgressBar totalMilestones={5} milestonesCompleted={3} />
              </div>
            </div>
            <div className="buttons">
              <button className="primary-button">Donate</button>
              <button className="primary-button">Join the Community</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
