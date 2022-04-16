import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./about.css";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a">
      <div className="a-left">
        <div
          className="a-card bg"
          style={{ backgroundColor: darkMode && "grey" }}
        ></div>
        <div className="a-card">
          <img
            src="https://media.istockphoto.com/photos/focused-developer-coding-on-computer-monitors-working-late-in-office-picture-id1147195672?k=20&m=1147195672&s=612x612&w=0&h=DGtScmoHKlILWv1ZrykJFWRjkAvI0EET9lHGinZp-sk="
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        {" "}
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hey Readers this is Deepanshu , currently a 3rd year student in
          Software Engineering in Maharaja Agrasen Institute of Technology.
        </p>
        <p className="a-desc">
          I Love Designing Modern Web Apps in Reactjs Framework and I am a 4star
          programmer in Java and 3 star in Problem Solving at hacker rank{" "}
          <a
            className="link"
            href="https://www.hackerrank.com/deepanshukhorwa1"
            target="_blank"
            rel="noreferrer"
            style={{
              color: darkMode && "Orange",
              textDecoration: darkMode && "none",
            }}
          >
            Click here
          </a>{" "}
          and comes in top 300 coder in college at Geeks for Geeks{" "}
          <a
            className="link"
            href="https://auth.geeksforgeeks.org/user/deepanshukhorwal779/practice/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: darkMode && "Orange",
              textDecoration: darkMode && "none",
            }}
          >
            GfG Profile
          </a>{" "}
          . I had Solved Over 400+ Dsa Questions and Developed number of Modern
          web apps. I am Intermidiate in SQL and RDBMS Solved Over 100+ queries
          in SQL.
        </p>
        <div className="a-award">
          <img
            src="https://vvce.ac.in/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-22-at-4.20.31-PM-1.jpeg"
            alt=""
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4
              className="a-award-title"
              style={{ color: darkMode && "lightGrey" }}
            >
              Code Innovation Series 2021
            </h4>
            <p className="a-award-desc">
              This is the certificate of Participation{" "}
              <a
                href="https://drive.google.com/file/d/1E-6LArniwGHzL8-c_dK0jPQoqXL_Y0KF/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: darkMode && "Orange",
                  textDecoration: darkMode && "none",
                }}
              >
                Click here
              </a>{" "}
              in Code Innovation Series Powered by Github held in College on
              28th may 2021 .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
