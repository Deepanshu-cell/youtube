import React from "react";
import "./contact.css";
import phone from "../../img/phone.png";
import address from "../../img/address.png";
import email from "../../img/email.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  let [done, setDone] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); //--> it will prevent refereshing of page on submit
    emailjs
      .sendForm(
        "service_4hcarum",
        "template_qb7pvk6",
        formRef.current,
        "bhbWJCzsV9b1dEXoF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              91+8800266439
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              deepanshukhorwal779@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              New Delhi , India
            </div>
            <div className="c-info-item">
              <a
                href="https://www.linkedin.com/in/deepanshu-khorwal-38bb94211/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent--background-PNG.png"
                  alt=""
                  className="c-icon"
                />
              </a>
              Linkdin
            </div>
            <div className="c-info-item">
              <a
                href="https://github.com/Deepanshu-cell"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt=""
                  className="c-icon"
                />
              </a>
              Github
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story ?</b> Get in touch always available for
            Freelancing if the right project comes along me
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              name="Message"
              placeholder="Message"
              rows="5"
            ></textarea>
            <button>Submit</button>
            {done && "Thank You... i will reach you soon."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
