import React, { useState } from "react";
import "./ContactUs.css";

const stakeholderOptions = [
  "Local Authority",
  "Business / Event Organiser",
  "Statutory Agency",
  "State Agency",
  "Voluntary Service",
  "Vendor",
  "Emergency Service",
  "Private Individual / General Public",
  "Other",
];

export default function ContactUs({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    countryCode: "+92",
    contactNumber: "",
    organisation: "",
    website: "",
    location: "",
    stakeholder: [],
    otherStakeholder: "",
    query: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // stakeholder checkbox toggling
      const val = value;
      setFormData((prev) => {
        const exists = prev.stakeholder.includes(val);
        const next = exists
          ? prev.stakeholder.filter((s) => s !== val)
          : [...prev.stakeholder, val];
        return { ...prev, stakeholder: next };
      });
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation: at least one stakeholder
    if (formData.stakeholder.length === 0) {
      setError("Please select at least one stakeholder type.");
      return;
    }

    if (
      formData.stakeholder.includes("Other") &&
      formData.otherStakeholder.trim() === ""
    ) {
      setError("Please specify the 'Other' stakeholder type.");
      return;
    }

    // Construct email body
    const subject = "Contact Form Submission";
    const body = `
First Name: ${formData.firstName}
Surname: ${formData.surname}
Email: ${formData.email}
Contact Number: ${formData.countryCode} ${formData.contactNumber}
Organisation: ${formData.organisation}
Website: ${formData.website}
Location: ${formData.location}
Stakeholder: ${formData.stakeholder.join(", ")}${
      formData.stakeholder.includes("Other")
        ? ` (${formData.otherStakeholder})`
        : ""
    }

Query:
${formData.query}
    `;

    // Use mailto (client opens email app with pre-filled content)
    window.location.href = `mailto:info@the-o.io?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div className="contact-overlay" role="dialog" aria-modal="true">
      <div className="contact-modal" role="document">
        <button
          aria-label="Close contact form"
          className="close-btn"
          onClick={() => onClose?.()}
        >
          ✕
        </button>

        <h2 className="contact-title">Contact Us</h2>

        {/* scrollable body (styled scrollbar) */}
        <div className="contact-body">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="form-group">
              <label>
                * First Name
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                * Surname
                <input
                  name="surname"
                  type="text"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                * Email Address
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Row 2 */}
            <div className="form-group">
              <label>
                * Contact Number
                <div className="phone-input">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    aria-label="Country code"
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+92">+92</option>
                    <option value="+61">+61</option>
                    <option value="+971">+971</option>
                    {/* add more as needed */}
                  </select>
                  <input
                    name="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                  />
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                * Organisation / Company Name
                <input
                  name="organisation"
                  type="text"
                  value={formData.organisation}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                * Organisation / Company Website
                <input
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Row 3 */}
            <div className="form-group">
              <label>
                * Location (Country)
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select country</option>
                  <option>Pakistan</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>United Arab Emirates</option>
                  <option>Australia</option>
                  {/* extend as needed */}
                </select>
              </label>
            </div>

            {/* spacing placeholders to keep grid balanced (empty cells) */}
            <div className="form-group empty" aria-hidden="true"></div>
            <div className="form-group empty" aria-hidden="true"></div>

            {/* Stakeholder checkboxes — full width */}
            <div className="form-group full-width">
              <fieldset className="stakeholder-field">
                <legend>* Stakeholder Type</legend>

                <div className="checkbox-grid">
                  {stakeholderOptions.map((opt) => {
                    const isOther = opt === "Other";
                    return (
                      <div key={opt} className="checkbox-item">
                        <label>
                          <input
                            type="checkbox"
                            name="stakeholder"
                            value={opt}
                            checked={formData.stakeholder.includes(opt)}
                            onChange={handleChange}
                          />
                          <span className="checkbox-label-text">{opt}</span>
                        </label>

                        {isOther && formData.stakeholder.includes("Other") && (
                          <input
                            name="otherStakeholder"
                            className="other-input"
                            placeholder="Please specify"
                            value={formData.otherStakeholder}
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </fieldset>
            </div>

            {/* Query */}
            <div className="form-group full-width">
              <label>
                * Query
                <textarea
                  name="query"
                  rows="5"
                  value={formData.query}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* error message */}
            {error && <div className="form-error">{error}</div>}

            {/* Submit */}
            <div className="form-group full-width center">
              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
