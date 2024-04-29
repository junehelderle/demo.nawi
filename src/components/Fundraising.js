import React from "react";
import image from "../Assets/secondSecImage.png?as=webp";

const fundraisingGoals = [
  {
    title: "Completion of Loropio Girls Senior High School",
    description:
      "This project aims to complete the construction of Loropio Girls Senior High School, providing better educational facilities for girls in the region.",
    image: image,
  },
  {
    title: "Extension of Loropio Girls Senior High School",
    description:
      "Extending the facilities of Loropio Girls Senior High School to accommodate more students and improve educational resources.",
    image: image,
  },
  {
    title: "11 years of Quality School Education Stipend",
    description:
      "Providing stipends to support students' education for 11 years, covering various expenses including textbooks, uniforms, and transportation.",
    image: image,
  },
  {
    title: "Tertiary Education",
    description:
      "Supporting students to pursue a 4-year degree program at a Kenyan university, covering tuition fees and associated expenses.",
    image: image,
  },
  {
    title: "Kenyan University, 4-year Degree",
    description:
      "Supporting students to pursue a 4-year degree program at a Kenyan university, covering tuition fees and associated expenses.",
    image: image,
  },
  {
    title: "AIE - Stipend",
    description:
      "Providing stipends to students enrolled in the AIE program to support their living expenses and encourage participation.",
    image: image,
  },
  {
    title: "Learning Lions ICT Training Programs",
    description:
      "Funding ICT programs including Mobile LEAP, Boot Camp, and Advanced Track to equip students with essential digital skills.",
    image: image,
  },
  {
    title: "EBU - Tuition and Stipend",
    description:
      "Covering tuition fees and providing stipends for students enrolled in the EBU program, enabling them to access quality education.",
    image: image,
  },
  {
    title: "Family Support",
    description:
      "Providing support to families of students to alleviate financial burdens and ensure their children can continue their education.",
    image: image,
  },
  {
    title: "School Improvements",
    description:
      "Enhancing infrastructure and resources in schools to create a conducive learning environment for students.",
    image: image,
  },
  {
    title: "Building New Primary School",
    description:
      "Constructing a new primary school to accommodate the growing number of students and expand access to education.",
    image: image,
  },
  {
    title: "Building New Senior Secondary School - girls only",
    description:
      "Constructing a new senior secondary school exclusively for girls to provide them with quality education and empower them.",
    image: image,
  },
  {
    title: "Building New Junior Secondary School",
    description: "This project focuses on constructing a new junior secondary school to address the growing demand for quality education in the community.",
    image: image,
  },
  {
    title: "Intervention and Rescue Teams",
    description:
      "Creating intervention and rescue teams to address emergencies and ensure the safety and well-being of students and staff.",
    image: image,
  },
  {
    title: "Build Safe Houses including 3-5 years running costs",
    description:
      "Establishing safe houses to provide refuge for vulnerable students, covering construction costs as well as ongoing operational expenses.",
    image: image,
  },
  {
    title: "Dorms for Learning Lions",
    description:
      "Building dormitories to accommodate students participating in the Learning Lions program, providing them with a conducive living environment for learning.",
    image: image,
  },
];

const FundraisingGoal = ({ title, description, image }) => {
  return (
    <div className="fundraising-goal">
      <div className="front-content">
        <img src={image} />
        <h3>{title}</h3>
      </div>
      <div className="back-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

const Fundraising = () => {
  return (
    <div className="App">
      <h1 style={{ color: "#ff5f05" }}>FUNDRAISING GOALS</h1>
      <div
        className="donorbox"
      // style={{ border: "2px dashed red", background: "white" }}
      >
        <h1>
          DONORBOX
          // US Donation Form
          <iframe
            src="https://donorbox.org/embed/nawi?default_interval=o&hide_donation_meter=true&show_content=true"
            name="donorbox"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            frameborder="0"
            scrolling="no"
            height="900px"
            width="100%"
            style={{
              minWidth: "250px",
              maxHeight: "none!important",
            }}
          ></iframe>

          // EU Donation Form
          <iframe
            src="https://donorbox.org/embed/nawi_test?language=en"
            name="donorbox"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            frameborder="0"
            scrolling="no"
            height="900px"
            width="100%" style={{
              minWidth: "250px",
              maxHeight: "none!important",
            }}
          ></iframe>
        </h1>
      </div>
      <div className="fundraising-goals-container">
        {fundraisingGoals.map((goal, index) => (
          <FundraisingGoal
            key={index}
            title={goal.title}
            description={goal.description}
            fundraisingGoal={goal.fundraisingGoal}
            image={goal.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Fundraising;
