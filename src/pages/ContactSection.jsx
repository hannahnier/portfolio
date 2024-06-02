import style from "../styles/contact.module.css";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGithub from "../assets/icons/github.svg";
import iconMail from "../assets/icons/at-solid.svg";

const ContactSection = () => {
  return (
    <section className={style.main} name="contact" id="contact">
      <h2 className={`sectionTitle ${style.contactTitle}`}>Get in touch</h2>
      <div className={style.contactContainer}>
        <a href="mailto:hannahr@posteo.de" target="_blank">
          <img src={iconMail} alt="Email Icon" />
        </a>
        <a
          href="https://github.com/hannahnier"
          // target="_blank"
        >
          <img src={iconGithub} alt="Github Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/hannah-rein-74419b30b"
          // target="_blank"
        >
          <img src={iconLinkedin} alt="Linkedin Icon" />
        </a>

        {/* <form action="" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>

          <input className={style.formButton} type="submit" />
        </form> */}
      </div>
    </section>
  );
};

export default ContactSection;
