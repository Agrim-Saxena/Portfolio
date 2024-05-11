import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () =>{
  return (
    <section id="contact" className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{ flex: 1 }}>
                <ContactInfoCard
                iconUrl="./images/email-icon.png"
                text="agrim1312saxena@gmail.com"
                />
                <ContactInfoCard
                iconUrl="./images/github-icon.png"
                text="https://github.com/Agrim-Saxena"
                />
            </div>
            <div style={{ flex: 1 }}>
                <ContactForm />
            </div>
        </div>
    </section>
  );
};

export default ContactMe;