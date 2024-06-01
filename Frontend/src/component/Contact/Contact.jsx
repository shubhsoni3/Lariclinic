import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    msg: "",
  });

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  console.log(formData);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://drashishcardio.com/api/auth/contact",
        formData
      );
      if (response.status === 200) {
        alert("Data saved and email sent successfully");

        setFormData({ name: "", email: "", phone: "", address: "", msg: "" });
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while sending data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="st-shape-wrap" id="contact">
      <div className="st-shape1">
        <img src="shape/contact-shape1.svg" alt="shape1" />
      </div>
      <div className="st-shape2">
        <img src="shape/contact-shape2.svg" alt="shape2" />
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading
        title="Stay connect with us"
        subTitle="Stay connected with our cardiology hospital for updates on treatments, events, and <br/> advancements in cardiovascular care. Your heart health matters."
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div id="st-alert" />
            <form
              onSubmit={onSubmit}
              className="row st-contact-form st-type1"
              method="post"
              id="contact-form"
            >
              <input type="hidden" name="from_name" value="Nischinto Medical" />
              <input
                type="hidden"
                name="replyto"
                value="Lariclinic@gmail.com"
              />
              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Shubhanshu Jaiswal"
                    required
                    onChange={handleInputChange}
                    value={formData.name}
                  />
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Addresh</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Your Addresh"
                    required
                    onChange={handleInputChange}
                    value={formData.address}
                  />
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Email Address</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Lariclinic@gmail.com"
                    required
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-6">
                <div className="st-form-field st-style1">
                  <label>Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+91 - 7000XXXXXX"
                    required
                    onChange={handleInputChange}
                    value={formData.phone}
                  />
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-12">
                <div className="st-form-field st-style1">
                  <label>Your Message</label>
                  <textarea
                    cols={30}
                    rows={10}
                    id="msg"
                    name="msg"
                    placeholder="Write something here..."
                    required
                    onChange={handleInputChange}
                    value={formData.msg}
                  />
                </div>
              </div>
              {/* .col */}
              <div className="col-lg-12">
                <div className="text-center">
                  <div className="st-height-b10 st-height-lg-b10" />
                  <button
                    className="st-btn st-style1 st-color1 st-size-medium"
                    type="submit"
                    id="submit"
                    name="submit"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
              {/* .col */}
            </form>
          </div>
          {/* .col */}
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default Contact;
