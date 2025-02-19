import { Styles } from "../Styles/Styles";
import { useState } from "react";

export default function Contact() {
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
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-dvh">
      <div className={Styles.container}>
        <h2 className={Styles.pageTittle}>Contact Me</h2>
        <form onSubmit={handleSubmit} className={Styles.formContainer}>
          <label htmlFor="name" className="block text-md/6 font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={Styles.input}
          />
          <label htmlFor="email" className="block text-md/6 font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={Styles.input}
          />
          <label htmlFor="message" className="block text-md/6 font-medium">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className={Styles.input}
          />
          <button type="submit" className="block bg-outlineFocus text-white py-1 px-4 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>

)
}

