import style from "../styles/contact.module.css";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import Animated from "../components/Animated";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = async () => {
      try {
        const dataRaw = await fetch(
          "https://hannahnier-server.onrender.com/sendemail",
          // "http://localhost:3000/sendemail", // only for testing
          {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await dataRaw.json();

        // handling the result (message was either sent or error):
        if (data && data.msg) {
          setMessageSent(true);
          console.log("erfolg");
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
        console.log(JSON.stringify(e));
      }
    };

    sendData();
  };

  return (
    <section className={style.main} name="contact" id="contact">
      <h2 className={`sectionTitle ${style.contactTitle}`}>Get in touch</h2>
      <div className={style.contactContainer}>
        <div className={style.contactLinksContainer}>
          <a href="https://github.com/hannahnier">
            <Animated delay={0.6}>
              <img src={iconGithub} alt="Github Icon" />{" "}
            </Animated>
          </a>
          <a href="https://www.linkedin.com/in/hannah-rein-74419b30b">
            <Animated delay={0.8}>
              <img src={iconLinkedin} alt="Linkedin Icon" />{" "}
            </Animated>
          </a>
        </div>
        {!messageSent && (
          <div className={style.formContainer}>
            <form onSubmit={(e) => submitForm(e)}>
              <label htmlFor="contactName">Full Name</label>
              <input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="text"
                name="contactName"
                id="contactName"
                placeholder="Your name"
                required
                value={formData.contactName}
              />

              <label htmlFor="contactEmail">Email</label>
              <input
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="email"
                name="contactEmail"
                id="contactEmail"
                placeholder="Your email"
                required
                value={formData.contactEmail}
              />

              <label htmlFor="contactMessage">Message</label>
              <textarea
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                name="contactMessage"
                id="contactMessage"
                cols="30"
                rows="10"
                placeholder="Your message"
                required
                value={formData.contactMessage}
              ></textarea>

              <input className={style.formButton} type="submit" />
            </form>
          </div>
        )}
        {messageSent && (
          <p className={style.messageNote}>Your message was sent!</p>
        )}
        {error && (
          <p className={style.messageNote}>
            Your message could not be sent. Please contact me via LinkedIn or
            Github.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
