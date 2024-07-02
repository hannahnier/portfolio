import style from "../styles/contact.module.css";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import Animated from "../components/Animated";

const ContactSection = () => {
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
        <div className={style.formContainer}>
          <form
            action="https://hannahnier-server.onrender.com/sendemail"
            method="POST"
          >
            <label htmlFor="contactName">Full Name</label>
            <input
              type="text"
              name="contactName"
              id="contactName"
              placeholder="Your name"
              required
            />

            <label htmlFor="contactEmail">Email</label>
            <input
              type="email"
              name="contactEmail"
              id="contactEmail"
              placeholder="Your email"
              required
            />

            <label htmlFor="contactMessage">Message</label>
            <textarea
              name="contactMessage"
              id="contactMessage"
              cols="30"
              rows="10"
              placeholder="Your message"
              required
            ></textarea>

            <input className={style.formButton} type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
