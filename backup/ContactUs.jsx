import React, { useState, useRef } from "react";
import "./ContactUs.css";
import perfectCountryCodes from "../src/perfectCountryCodes.json";

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

const initialFormData = {
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
};

export default function ContactUs({ isOpen, onClose }) {
  const europe = countryCodes.filter(c => c.region === "Europe");
  const rest = countryCodes.filter(c => c.region !== "Europe");
  const [formData, setFormData] = useState({ ...initialFormData });
  const [error, setError] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" }); // {type: 'success'|'error'|'', text: '...'}
  const hideTimerRef = useRef(null);

  // Clear / reset all form fields
  function resetForm() {
    setFormData({ ...initialFormData });
    setError("");
  }

  const showStatus = (type, text) => {
    // clear existing timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    setStatus({ type, text });

    // auto-hide after 4 seconds
    hideTimerRef.current = setTimeout(() => {
      setStatus({ type: "", text: "" });
      hideTimerRef.current = null;
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const val = value;
      setFormData((prev) => {
        const exists = prev.stakeholder.includes(val);
        const next = exists ? prev.stakeholder.filter((s) => s !== val) : [...prev.stakeholder, val];
        return { ...prev, stakeholder: next };
      });
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation: required fields
    if (!formData.firstName.trim() || !formData.surname.trim() || !formData.email.trim() || !formData.contactNumber.trim() || !formData.organisation.trim() || !formData.website.trim() || !formData.location.trim() || !formData.query.trim()) {
      setError("Please fill all mandatory fields marked with *.");
      return;
    }
    if (formData.stakeholder.length === 0) {
      setError("Please select at least one stakeholder type.");
      return;
    }
    if (formData.stakeholder.includes("Other") && !formData.otherStakeholder.trim()) {
      setError("Please specify 'Other' stakeholder type.");
      return;
    }

    // compose mailto
    const subject = "Contact Form Submission";
    const body = `
First Name: ${formData.firstName}
Surname: ${formData.surname}
Email: ${formData.email}
Contact Number: ${formData.countryCode} ${formData.contactNumber}
Organisation: ${formData.organisation}
Website: ${formData.website}
Location: ${formData.location}
Stakeholder: ${formData.stakeholder.join(", ")}${formData.stakeholder.includes("Other") ? ` (${formData.otherStakeholder})` : ""}

Query:
${formData.query}
    `;

    const mailto = `mailto:info@the-o.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      // Attempt to open user's email client (this usually succeeds)
      window.location.href = mailto;

      // mimic success
      showStatus("success", "Mail sent successfully.");
      resetForm();

      // optionally close modal after a short delay so user can see the message
      setTimeout(() => {
        onClose?.();
      }, 900);
    } catch (err) {
      // mimic an error
      console.error("mailto error:", err);
      showStatus("error", "Error sending mail. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-overlay" role="dialog" aria-modal="true">
      <div className="contact-modal" role="document">
        <button aria-label="Close contact form" className="close-btn" onClick={() => onClose?.()}>
          ✕
        </button>

        <h2 className="contact-title">Contact Us</h2>

        {/* status message */}
        {status.type && (
          <div className={`form-status ${status.type === "success" ? "status-success" : "status-error"}`}>
            {status.text}
          </div>
        )}

        <div className="contact-body">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="form-group">
              <label>* First Name
                <input name="firstName" type="text" value={formData.firstName} onChange={handleChange} required />
              </label>
            </div>

            <div className="form-group">
              <label>* Surname
                <input name="surname" type="text" value={formData.surname} onChange={handleChange} required />
              </label>
            </div>

            <div className="form-group">
              <label>* Email Address
                <input name="email" type="email" value={formData.email} onChange={handleChange} required />
              </label>
            </div>

            {/* Row 2 */}
            <div className="form-group">
              <label>* Contact Number
              <div className="phone-input">
                <select
                  name="countryCode"
                  value={value}
                  onChange={onChange}
                  aria-label="Country code"
                >
                  <optgroup label="Europe">
                    {europe.map(c => (
                      <option key={`${c.iso}-${c.dial_code}`} value={c.dial_code}>
                        {c.name} ({c.dial_code})
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="All countries">
                    {rest.map(c => (
                      <option key={`${c.iso}-${c.dial_code}`} value={c.dial_code}>
                        {c.name} ({c.dial_code})
                      </option>
                    ))}
                  </optgroup>
                </select>

                <input
                  name="contactNumber"
                  type="tel"
                  value={phoneValue}
                  onChange={onPhoneChange}
                  placeholder="Phone number"
                  required
                />
              </div>
              </label>
            </div>

            <div className="form-group">
              <label>* Organisation / Company Name
                <input name="organisation" type="text" value={formData.organisation} onChange={handleChange} required />
              </label>
            </div>

            <div className="form-group">
              <label>* Organisation / Company Website
                <input name="website" type="url" value={formData.website} onChange={handleChange} required />
              </label>
            </div>

            {/* Row 3 */}
            <div className="form-group">
              <label>* Location (Country)
                <select name="location" value={formData.location} onChange={handleChange} required>
                  <option value="">Select country</option>
                  <option>Pakistan</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>United Arab Emirates</option>
                  <option>Australia</option>
                </select>
              </label>
            </div>

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
              <label>* Query
                <textarea name="query" rows="5" value={formData.query} onChange={handleChange} required />
              </label>
            </div>

            {/* inline error message for validation */}
            {error && <div className="form-error">{error}</div>}

            {/* Submit */}
            <div className="form-group full-width center">
              <button type="submit" className="contact-submit-btn">Send Message</button>
              {/* also include a reset button that calls resetForm directly if you want */}
              <button type="button" className="reset-btn" onClick={resetForm} style={{ marginLeft: 12 }}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
