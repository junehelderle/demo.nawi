import React from "react";
import ludwig from "../Assets/ludwig.png?as=webp";
import brizan from "../Assets/brizan.png?as=webp";
import milcah from "../Assets/milcah.png?as=webp";
import toby from "../Assets/toby.png?as=webp";
import kevin from "../Assets/kevin.png?as=webp";
import lydia from "../Assets/lydia.png?as=webp";


const About = () => {
  return (
    <div>
      <div className="about">
        <div className="our-story">
          <h1 className="about-title">OUR STORY</h1>
          <p>
            We are a young FilmCrew from Munich, Germany, committed to making
            movies not only for their own sake but also to use this emotional
            medium to foster social impact. <br />
            To change people‘s minds – and lives!We are a young FilmCrew from
            Munich, <br />
            Germany, committed to making movies not only for their own sake but
            also to use this emotional medium to foster social impact. <br />
            To change people‘s minds – and lives!
          </p>
          <p>
            Duis et diam ut urna pulvinar condimentum. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            In et turpis laoreet, vestibulum leo vitae, tincidunt purus. Nam
            commodo tempus justo, at aliquet odio rutrum.
          </p>
        </div>
        <div className="our-team2">
          <div className="team2">
            <img src={toby} alt="Toby" />
            <p>
              TOBY SCHMUTZLER
              <br />
              DIRECTOR & CEO
            </p>
          </div>

          <div className="team2">
            <img src={kevin} alt="Kevin" />
            <p>
              KEVIN SCHMUTZLER
              <br /> DIRECTOR &CEO
            </p>
          </div>
          <div className="team2">
            <img src={lydia} alt="Lydia" />
            <p>
              LYDIA WRENSCH
              <br /> PRODUCER
            </p>
          </div>
        </div>

        <div className="our-team">
          <div className="team">
            <img src={ludwig} alt="Ludwig" />
            <p>
              LUDWIG BAYERN
              <br /> EXEC PRODUCER
            </p>
          </div>

          <div className="team">
            <img src={brizan} alt="Brizan" />
            <p>
              BRIZAN WERE
              <br /> PRODUCER
            </p>
          </div>
          <div className="team">
            <img src={milcah} alt="Milcah" />
            <p>
              MILCAH CHEROTHI <br /> WRITER
            </p>
          </div>
        </div>

        <div className="our-mission">
          <h1 className="mission-title">OUR MISSION</h1>
          <p>
            We are a young FilmCrew from Munich, Germany, committed to making
            movies not only for their own sake but also to use this emotional
            medium to foster social impact. <br />
            To change people‘s minds – and lives!
          </p>
          <p> Aenean rutrum justo
            diam, a ullamcorper orci tristique eget. Suspendisse varius, nisi ut
            egestas dictum, mauris lacus aliquam neque, in hendrerit orci lectus
            et diam. Etiam vulputate arcu eget eros vulputate, sed sagittis
            sapien vehicula. Aenean rutrum justo
            diam, a ullamcorper orci tristique eget. Suspendisse varius, nisi ut
            egestas dictum, mauris lacus aliquam neque, in hendrerit orci lectus
            et diam. Etiam vulputate arcu eget eros vulputate, sed sagittis
            sapien vehicula.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
