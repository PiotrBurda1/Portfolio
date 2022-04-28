import { useEffect, useState } from "react";
import { useRef } from "react";
import Animation from "./Animation";
import "./Contact.scss";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animation
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form action="https://formspree.io/f/xnqwgakb" method="POST">
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <section className="contact">
        <div className="contact_options">
          <article className="contact_option">
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
              color="#28A4D9"
              className="icon"
            />
            <h4>Email</h4>
            <h5>piotrek25725@gmail.com</h5>
            <a href="mailto:piotrek25725@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              color="#28A4D9"
              className="icon"
            />
            <h4>Messenger</h4>
            <h5>Piotr burda</h5>
            <a href="https://m.me/piotrek.burda">Send a message</a>
          </article>
          <article className="contact_option">
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="#28A4D9"
              className="icon"
            />
            <h4>WhatsApp</h4>
            <h5>+48 730 020 781</h5>
            <a
              href="https://api.whatsapp.com/send?phone+48730020781"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
      </section>
      </div>
  );
};
export default Contact;
