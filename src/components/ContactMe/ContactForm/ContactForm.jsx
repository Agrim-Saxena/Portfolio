import React from "react";
import "./ContactForm.css";

const ContactForm = () =>{

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0bc76ecb-b4db-438e-b147-3226384ad463");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json
    }).then((res) => res.json());

    if(res.success){
      alert(res.message);
    }
  };




  return (
    <div className="contact-form-container">
        <form onSubmit={onSubmit}>
            <div className="name-container">
                <input type="text" name="firstname" placeholder="First Name" />
                <input type="text" name="lastname" placeholder="Last Name" />
            </div>

            <input type="text" name="email" placeholder="Email" />
            <textarea type="text" name="message" placeholder="Message" rows={3} />

            <button>SEND</button>
        </form>
    </div>
  );
};

export default ContactForm;