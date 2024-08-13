import React, { useState } from "react";
import "./contactus.css"; // Ensure this CSS file matches the style you want

const ContactForm = () => {
  // State to handle the form submission result message
  const [result, setResult] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setResult("Sending..."); // Set the result message to "Sending..." while the form is being submitted

    // Create a new FormData object to hold the form data
    const formData = new FormData(event.target);

    // Add the access key required for the Web3Forms API
    formData.append("access_key", "24498d8c-f382-43ac-84c0-7d323321859c");

    try {
      // Send the form data to the Web3Forms API using a POST request
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Parse the response data
      const data = await response.json();

      if (data.success) {
        // If the form submission was successful, update the result message
        setResult("Form Submitted Successfully");
        event.target.reset(); // Reset the form fields
      } else {
        // If there was an error in the submission, display the error message
        setResult(data.message);
      }
    } catch (error) {
      // Handle any errors that occurred during the fetch request
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <section>
      {/* Hero section with a heading */}
      <div className="listing-hero">
        <div className="hero-heading">
          <div className="hero-large">Contact Us.</div>
          <div className="hero-text">
            <i>Got any Questions? Feel free to ask.</i>
          </div>
        </div>
      </div>

      {/* Container for the contact form */}
      <div className="container-contact">
        <div className="wrap-contact">
          <form
            name="contact"
            className="contact-form validate-form"
            method="post"
            onSubmit={handleSubmit}
          >
            {/* Input for Full Name */}
            <div className="wrap-input validate-input">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Input for Email */}
            <div className="wrap-input validate-input">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </div>

            {/* Textarea for Message */}
            <div className="wrap-input validate-input">
              <textarea
                className="input"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="container-contact-form-btn">
              <button type="submit" className="contact-form-btn">
                <span>Send</span>
              </button>
            </div>

            {/* Contact information grid */}
            <div className="grid-container">
              <div className="item1 left-align">
                <i className="fa fa-lg fa-map-marker-alt"></i>Chennai 641008
              </div>
              <div className="item4 right-align">
                <i className="fa fa-lg fa-phone"></i> (+91)8508901001<br />
              </div>
            </div>

            {/* Result message area */}
            <div className="result-message">{result}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
