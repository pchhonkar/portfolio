import { MdArrowOutward } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <a
              href="mailto:priyamchhonkar1@gmail.com"
              className="contact-social contact-email-link"
              data-cursor="disable"
            >
              <SiGmail className="contact-gmail-icon" aria-hidden />
              <span>priyamchhonkar1@gmail.com</span>
              <MdArrowOutward />
            </a>
            <h4>Education</h4>
            <p>
              M.S. Data Science, University of Maryland, College Park
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/pchhonkar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/priyamchhonkar/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
