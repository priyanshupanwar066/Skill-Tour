import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5e99905d-c6f1-4608-9663-0f0dd93f4f04");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=>res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact' name='contact' id='contact'>
      <div className="contact-col">
        <h3>Send Us A Message <img src={msg_icon} alt="" /></h3>
        <p>
            Feel free to reach out through contact form or find our contact information below. Your feedback , qustions , and suggestions are important to us as we strive to provide exceptional service to our Programmers Community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />priyanshupanwar077@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 2348739839</li>
            <li><img src={location_icon} alt="" />Skill Tour, 123 Main St, <br /> Anytown,  USA</li>
        </ul>
      </div> 
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder="Enter Your Name" required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder="Enter Your Phone Number" required/>
            <label>Email Address</label>
            <input type="email" name='email' placeholder="Enter Your Email" required/>
            <label>Write Your Message Here</label>
            <textarea name='message' rows="6" placeholder="Enter Your Message" required></textarea>
            <button type="submit" className='btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
