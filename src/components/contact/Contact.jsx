import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sewwpbo",
        "template_c5w9hh4",
        form.current,
        "1n4mdhVsrxyvPzV2F"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tusharbali855@gmail.com</h5>
            <a href="mailto:tusharbali855@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookF className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Tushar Bali</h5>
            <a
              href="https://m.me/profile.php?id=100051620182706"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=7082071949"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
