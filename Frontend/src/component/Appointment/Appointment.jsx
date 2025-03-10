import React, { useState } from "react";
import SectionHeading from "../../component/SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import axios from "axios";

const Appointment = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
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
        "http://drashishcardio.com/api/auth/appointment",
        formData
      );
      if (response.status === 200) {
        alert("Data saved and email sent successfully");

        setFormData({ name: "", email: "", phone: "", date: "", msg: "" });
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while sending data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="st-shape-wrap st-gray-bg">
      <div className="st-shape4">
        <img src="/shape/section_shape.png" alt="/shape/section_shape.png" />
      </div>
      <div className="st-shape6">
        <img src="/shape/contact-shape3.svg" alt="/shape/contact-shape3.svg" />
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading
        title="Make an appointment"
        subTitle="To schedule an appointment for expert care, please contact us at your convenience.
        <br /> Our team is ready to assist you with your healthcare needs."
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <form
              method="POST"
              className="st-appointment-form"
              id="appointment-form"
              onSubmit={onSubmit}
            >
              <input
                type="hidden"
                name="from_name"
                value="Nischinto Medical Appoinment"
              />
              <input type="hidden" name="replyto" value="custom@gmail.com" />
              <div id="st-alert1" />
              <div className="row">
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Shubhnshu Jaiswal"
                      onChange={handleInputChange}
                      value={formData.name}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Email Address</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      onChange={handleInputChange}
                      value={formData.email}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="+91 - 7000XXXXXX"
                      onChange={handleInputChange}
                      value={formData.phone}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="st-form-field st-style1">
                    <label>Booking Date</label>
                    <input
                      name="date"
                      type="date"
                      id="date"
                      placeholder="dd/mm/yy"
                      onChange={handleInputChange}
                      value={formData.date}
                      required
                    />
                    <div className="form-field-icon">
                      <Icon icon="fa:calendar" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="st-form-field st-style1">
                    <label>Message</label>
                    <textarea
                      cols={30}
                      rows={10}
                      id="msg"
                      name="msg"
                      placeholder="Write something here..."
                      onChange={handleInputChange}
                      value={formData.msg}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    className="st-btn st-style1 st-color1 st-size-medium"
                    type="submit"
                    id="appointment-submit"
                    name="submit"
                  >
                    {loading ? "Sending..." : "Appointment"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
