import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("We will contact you soon..", {
      autoClose: 3000,
      pauseOnHover: false,
      toastId: "contact-toast",
    });

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Happy To Help 😊</h2>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">
            <h4 className="mb-3 text-center">Contact Us</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-send"></i> Send Message
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
