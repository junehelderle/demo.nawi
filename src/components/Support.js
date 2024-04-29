import React from "react";
import Icon5 from "../Assets/icons/icon5.png?as=webp";
import Icon6 from "../Assets/icons/icon6.png?as=webp";
import Icon7 from "../Assets/icons/icon7.png?as=webp";
import supportUs from "../Assets/support2.png?as=webp"
import donateImage from "../Assets/support1.png?as=webp"

const Support = () => {
  return (
    <div>
      <div className="supportus-section" style={{ backgroundImage: `url(${supportUs})` }}>
        <h1 className="support-title">SUPPORT US</h1>
      </div>
      <div>
        <div>
          <div className="donate-section">
            <h1 className="donate-text">DONATION FREQUENCY</h1>
          </div>
        </div>
      </div>
      <div className="frequency">
        <div className="give-now">
          <img src={Icon6} alt="Icon 6" />
          <h3>GIVE NOW</h3>
          <p>
            Take action by making a tax deductible donation to invisible
            children
          </p>
          <button className="donate-btn">ONE-TIME DONATION</button>
        </div>
        <div className="give-monthly">
          <img src={Icon7} alt="Icon 7" />
          <h3>GIVE MONTHLY</h3>
          <p>Donate to grow our community and you become our estate memb</p>
          <button className="donate-btn">MONTHLY DONATION</button>
        </div>
        <div className="give-scholarship">
          <img src={Icon5} alt="Icon 5" />
          <h3>GIVE SCHOLARSHIP</h3>
          <p>Support highschool students in Turkana</p>
          <button className="donate-btn">PROVIDE SCHOLARSHIP</button>
        </div>
      </div>

      <div className="donate-image" style={{ backgroundImage: `url(${donateImage})` }}>
      </div>
      <div className="give-text">
        <p>
          Your commitment can create a ripple effect of positive change. Join
          our community of passionate individuals dedicated to making a
          difference. Click the button below to apply and embark on a rewarding
          journey with us. Your time, skills, and enthusiasm are invaluable —
          together, we can achieve something extraordinary
          Your commitment can create a ripple effect of positive change. Join
          our community of passionate individuals dedicated to making a
          difference. Click the button below to apply and embark on a rewarding
          journey with us. Your time, skills, and enthusiasm are invaluable —
          together, we can achieve something extraordinary
        </p>
        <button className="donate-btn">APPLY TO JOIN US</button>
      </div>
    </div>
  );
};

export default Support;
