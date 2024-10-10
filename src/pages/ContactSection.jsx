import style from "../styles/contact.module.css";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import Animated from "../components/Animated";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useLangContext } from "../utils/LangProvider";
import { contactSection } from "../utils/dictionary";

const ContactSection = () => {
  const { language } = useLangContext();

  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  });

  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const sendData = async () => {
      const backendUrl = import.meta.env.VITE_backendUrl;
      try {
        const dataRaw = await fetch(backendUrl, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });
        const data = await dataRaw.json();

        // handling the result (message was either sent or error):
        if (data && data.msg) {
          setLoading(false);
          setMessageSent(true);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };

    sendData();
  };

  return (
    <section className={style.main} name="contact" id="contact">
      <h2 className={`sectionTitle ${style.contactTitle}`}>
        {contactSection[language].title}
      </h2>
      <div className={style.contactContainer}>
        <div className={style.contactLinksContainer}>
          <a href="https://github.com/hannahnier" target="_blank">
            <Animated delay={0.6}>
              <img src={iconGithub} alt="Github Icon" />{" "}
            </Animated>
          </a>
          <a
            href="https://www.linkedin.com/in/hannah-rein-74419b30b"
            target="_blank"
          >
            <Animated delay={0.8}>
              <img src={iconLinkedin} alt="Linkedin Icon" />{" "}
            </Animated>
          </a>
        </div>
        {!messageSent && !error && (
          <div className={style.formContainer}>
            <form onSubmit={(e) => submitForm(e)}>
              <label htmlFor="contactName">
                {contactSection[language].form.name}
              </label>
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
                placeholder={contactSection[language].placeholders.name}
                required
                value={formData.contactName}
              />

              <label htmlFor="contactEmail">
                {contactSection[language].form.email}
              </label>
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
                placeholder={contactSection[language].placeholders.email}
                required
                value={formData.contactEmail}
              />

              <label htmlFor="contactMessage">
                {contactSection[language].form.message}
              </label>
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
                placeholder={contactSection[language].placeholders.message}
                required
                value={formData.contactMessage}
              ></textarea>

              {!loading && (
                <button className={style.formButton} type="submit">
                  {contactSection[language].button}
                </button>
              )}
            </form>
          </div>
        )}
        {loading && (
          <PulseLoader
            color="rgb(134, 153, 223)"
            loading={loading}
            aria-label={contactSection[language].loadingAria}
          />
        )}
        {messageSent && (
          <p className={style.messageNote}>
            {contactSection[language].success}
          </p>
        )}
        {error && (
          <p className={style.messageNote}>{contactSection[language].error}</p>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
