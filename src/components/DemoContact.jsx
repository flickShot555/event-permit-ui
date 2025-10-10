import React, { useState, useRef } from "react";
import "./DemoContact.css";
import Autocomplete from "./Autocomplete";
//import countryCodes from "../perfectCountryCodes.json"; // <- renamed import to match usage

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
  countryCode: "",
  contactNumber: "",
  organisation: "",
  website: "",
  location: "",
  stakeholder: [],
  otherStakeholder: "",
  query: "",
};

const Countries = [
  { name: "Afghanistan", dial_code: "+93", iso: "AF", region: "Asia" },
  { name: "Albania", dial_code: "+355", iso: "AL", region: "Europe" },
  { name: "Algeria", dial_code: "+213", iso: "DZ", region: "Africa" },
  { name: "Andorra", dial_code: "+376", iso: "AD", region: "Europe" },
  { name: "Angola", dial_code: "+244", iso: "AO", region: "Africa" },
  { name: "Antigua and Barbuda", dial_code: "+1268", iso: "AG", region: "Americas" },
  { name: "Argentina", dial_code: "+54", iso: "AR", region: "Americas" },
  { name: "Armenia", dial_code: "+374", iso: "AM", region: "Asia" },
  { name: "Australia", dial_code: "+61", iso: "AU", region: "Oceania" },
  { name: "Austria", dial_code: "+43", iso: "AT", region: "Europe" },
  { name: "Azerbaijan", dial_code: "+994", iso: "AZ", region: "Asia" },
  { name: "Bahamas", dial_code: "+1242", iso: "BS", region: "Americas" },
  { name: "Bahrain", dial_code: "+973", iso: "BH", region: "Asia" },
  { name: "Bangladesh", dial_code: "+880", iso: "BD", region: "Asia" },
  { name: "Barbados", dial_code: "+1246", iso: "BB", region: "Americas" },
  { name: "Belarus", dial_code: "+375", iso: "BY", region: "Europe" },
  { name: "Belgium", dial_code: "+32", iso: "BE", region: "Europe" },
  { name: "Belize", dial_code: "+501", iso: "BZ", region: "Americas" },
  { name: "Benin", dial_code: "+229", iso: "BJ", region: "Africa" },
  { name: "Bhutan", dial_code: "+975", iso: "BT", region: "Asia" },
  { name: "Bolivia", dial_code: "+591", iso: "BO", region: "Americas" },
  { name: "Bosnia and Herzegovina", dial_code: "+387", iso: "BA", region: "Europe" },
  { name: "Botswana", dial_code: "+267", iso: "BW", region: "Africa" },
  { name: "Brazil", dial_code: "+55", iso: "BR", region: "Americas" },
  { name: "Brunei", dial_code: "+673", iso: "BN", region: "Asia" },
  { name: "Bulgaria", dial_code: "+359", iso: "BG", region: "Europe" },
  { name: "Burkina Faso", dial_code: "+226", iso: "BF", region: "Africa" },
  { name: "Burundi", dial_code: "+257", iso: "BI", region: "Africa" },
  { name: "Cabo Verde", dial_code: "+238", iso: "CV", region: "Africa" },
  { name: "Cambodia", dial_code: "+855", iso: "KH", region: "Asia" },
  { name: "Cameroon", dial_code: "+237", iso: "CM", region: "Africa" },
  { name: "Canada", dial_code: "+1", iso: "CA", region: "Americas" },
  { name: "Central African Republic", dial_code: "+236", iso: "CF", region: "Africa" },
  { name: "Chad", dial_code: "+235", iso: "TD", region: "Africa" },
  { name: "Chile", dial_code: "+56", iso: "CL", region: "Americas" },
  { name: "China", dial_code: "+86", iso: "CN", region: "Asia" },
  { name: "Colombia", dial_code: "+57", iso: "CO", region: "Americas" },
  { name: "Comoros", dial_code: "+269", iso: "KM", region: "Africa" },
  { name: "Congo (Republic of the)", dial_code: "+242", iso: "CG", region: "Africa" },
  { name: "Congo (Democratic Republic of the)", dial_code: "+243", iso: "CD", region: "Africa" },
  { name: "Costa Rica", dial_code: "+506", iso: "CR", region: "Americas" },
  { name: "Côte d'Ivoire", dial_code: "+225", iso: "CI", region: "Africa" },
  { name: "Croatia", dial_code: "+385", iso: "HR", region: "Europe" },
  { name: "Cuba", dial_code: "+53", iso: "CU", region: "Americas" },
  { name: "Cyprus", dial_code: "+357", iso: "CY", region: "Europe" },
  { name: "Czech Republic", dial_code: "+420", iso: "CZ", region: "Europe" },
  { name: "Denmark", dial_code: "+45", iso: "DK", region: "Europe" },
  { name: "Djibouti", dial_code: "+253", iso: "DJ", region: "Africa" },
  { name: "Dominica", dial_code: "+1767", iso: "DM", region: "Americas" },
  { name: "Dominican Republic", dial_code: "+1809", iso: "DO", region: "Americas" },
  { name: "Ecuador", dial_code: "+593", iso: "EC", region: "Americas" },
  { name: "Egypt", dial_code: "+20", iso: "EG", region: "Africa" },
  { name: "El Salvador", dial_code: "+503", iso: "SV", region: "Americas" },
  { name: "Equatorial Guinea", dial_code: "+240", iso: "GQ", region: "Africa" },
  { name: "Eritrea", dial_code: "+291", iso: "ER", region: "Africa" },
  { name: "Estonia", dial_code: "+372", iso: "EE", region: "Europe" },
  { name: "Eswatini", dial_code: "+268", iso: "SZ", region: "Africa" },
  { name: "Ethiopia", dial_code: "+251", iso: "ET", region: "Africa" },
  { name: "Fiji", dial_code: "+679", iso: "FJ", region: "Oceania" },
  { name: "Finland", dial_code: "+358", iso: "FI", region: "Europe" },
  { name: "France", dial_code: "+33", iso: "FR", region: "Europe" },
  { name: "Gabon", dial_code: "+241", iso: "GA", region: "Africa" },
  { name: "Gambia", dial_code: "+220", iso: "GM", region: "Africa" },
  { name: "Georgia", dial_code: "+995", iso: "GE", region: "Asia" },
  { name: "Germany", dial_code: "+49", iso: "DE", region: "Europe" },
  { name: "Ghana", dial_code: "+233", iso: "GH", region: "Africa" },
  { name: "Greece", dial_code: "+30", iso: "GR", region: "Europe" },
  { name: "Grenada", dial_code: "+1473", iso: "GD", region: "Americas" },
  { name: "Guatemala", dial_code: "+502", iso: "GT", region: "Americas" },
  { name: "Guinea", dial_code: "+224", iso: "GN", region: "Africa" },
  { name: "Guinea-Bissau", dial_code: "+245", iso: "GW", region: "Africa" },
  { name: "Guyana", dial_code: "+592", iso: "GY", region: "Americas" },
  { name: "Haiti", dial_code: "+509", iso: "HT", region: "Americas" },
  { name: "Honduras", dial_code: "+504", iso: "HN", region: "Americas" },
  { name: "Hungary", dial_code: "+36", iso: "HU", region: "Europe" },
  { name: "Iceland", dial_code: "+354", iso: "IS", region: "Europe" },
  { name: "India", dial_code: "+91", iso: "IN", region: "Asia" },
  { name: "Indonesia", dial_code: "+62", iso: "ID", region: "Asia" },
  { name: "Iran", dial_code: "+98", iso: "IR", region: "Asia" },
  { name: "Iraq", dial_code: "+964", iso: "IQ", region: "Asia" },
  { name: "Ireland", dial_code: "+353", iso: "IE", region: "Europe" },
  { name: "Israel", dial_code: "+972", iso: "IL", region: "Asia" },
  { name: "Italy", dial_code: "+39", iso: "IT", region: "Europe" },
  { name: "Jamaica", dial_code: "+1876", iso: "JM", region: "Americas" },
  { name: "Japan", dial_code: "+81", iso: "JP", region: "Asia" },
  { name: "Jordan", dial_code: "+962", iso: "JO", region: "Asia" },
  { name: "Kazakhstan", dial_code: "+7", iso: "KZ", region: "Asia" },
  { name: "Kenya", dial_code: "+254", iso: "KE", region: "Africa" },
  { name: "Kiribati", dial_code: "+686", iso: "KI", region: "Oceania" },
  { name: "Kuwait", dial_code: "+965", iso: "KW", region: "Asia" },
  { name: "Kyrgyzstan", dial_code: "+996", iso: "KG", region: "Asia" },
  { name: "Laos", dial_code: "+856", iso: "LA", region: "Asia" },
  { name: "Latvia", dial_code: "+371", iso: "LV", region: "Europe" },
  { name: "Lebanon", dial_code: "+961", iso: "LB", region: "Asia" },
  { name: "Lesotho", dial_code: "+266", iso: "LS", region: "Africa" },
  { name: "Liberia", dial_code: "+231", iso: "LR", region: "Africa" },
  { name: "Libya", dial_code: "+218", iso: "LY", region: "Africa" },
  { name: "Liechtenstein", dial_code: "+423", iso: "LI", region: "Europe" },
  { name: "Lithuania", dial_code: "+370", iso: "LT", region: "Europe" },
  { name: "Luxembourg", dial_code: "+352", iso: "LU", region: "Europe" },
  { name: "Madagascar", dial_code: "+261", iso: "MG", region: "Africa" },
  { name: "Malawi", dial_code: "+265", iso: "MW", region: "Africa" },
  { name: "Malaysia", dial_code: "+60", iso: "MY", region: "Asia" },
  { name: "Maldives", dial_code: "+960", iso: "MV", region: "Asia" },
  { name: "Mali", dial_code: "+223", iso: "ML", region: "Africa" },
  { name: "Malta", dial_code: "+356", iso: "MT", region: "Europe" },
  { name: "Marshall Islands", dial_code: "+692", iso: "MH", region: "Oceania" },
  { name: "Mauritania", dial_code: "+222", iso: "MR", region: "Africa" },
  { name: "Mauritius", dial_code: "+230", iso: "MU", region: "Africa" },
  { name: "Mexico", dial_code: "+52", iso: "MX", region: "Americas" },
  { name: "Micronesia", dial_code: "+691", iso: "FM", region: "Oceania" },
  { name: "Moldova", dial_code: "+373", iso: "MD", region: "Europe" },
  { name: "Monaco", dial_code: "+377", iso: "MC", region: "Europe" },
  { name: "Mongolia", dial_code: "+976", iso: "MN", region: "Asia" },
  { name: "Montenegro", dial_code: "+382", iso: "ME", region: "Europe" },
  { name: "Morocco", dial_code: "+212", iso: "MA", region: "Africa" },
  { name: "Mozambique", dial_code: "+258", iso: "MZ", region: "Africa" },
  { name: "Myanmar", dial_code: "+95", iso: "MM", region: "Asia" },
  { name: "Namibia", dial_code: "+264", iso: "NA", region: "Africa" },
  { name: "Nauru", dial_code: "+674", iso: "NR", region: "Oceania" },
  { name: "Nepal", dial_code: "+977", iso: "NP", region: "Asia" },
  { name: "Netherlands", dial_code: "+31", iso: "NL", region: "Europe" },
  { name: "New Zealand", dial_code: "+64", iso: "NZ", region: "Oceania" },
  { name: "Nicaragua", dial_code: "+505", iso: "NI", region: "Americas" },
  { name: "Niger", dial_code: "+227", iso: "NE", region: "Africa" },
  { name: "Nigeria", dial_code: "+234", iso: "NG", region: "Africa" },
  { name: "North Macedonia", dial_code: "+389", iso: "MK", region: "Europe" },
  { name: "Norway", dial_code: "+47", iso: "NO", region: "Europe" },
  { name: "Oman", dial_code: "+968", iso: "OM", region: "Asia" },
  { name: "Pakistan", dial_code: "+92", iso: "PK", region: "Asia" },
  { name: "Palau", dial_code: "+680", iso: "PW", region: "Oceania" },
  { name: "Palestine", dial_code: "+970", iso: "PS", region: "Asia" },
  { name: "Panama", dial_code: "+507", iso: "PA", region: "Americas" },
  { name: "Papua New Guinea", dial_code: "+675", iso: "PG", region: "Oceania" },
  { name: "Paraguay", dial_code: "+595", iso: "PY", region: "Americas" },
  { name: "Peru", dial_code: "+51", iso: "PE", region: "Americas" },
  { name: "Philippines", dial_code: "+63", iso: "PH", region: "Asia" },
  { name: "Poland", dial_code: "+48", iso: "PL", region: "Europe" },
  { name: "Portugal", dial_code: "+351", iso: "PT", region: "Europe" },
  { name: "Qatar", dial_code: "+974", iso: "QA", region: "Asia" },
  { name: "Romania", dial_code: "+40", iso: "RO", region: "Europe" },
  { name: "Russia", dial_code: "+7", iso: "RU", region: "Europe" },
  { name: "Rwanda", dial_code: "+250", iso: "RW", region: "Africa" },
  { name: "Saint Kitts and Nevis", dial_code: "+1869", iso: "KN", region: "Americas" },
  { name: "Saint Lucia", dial_code: "+1758", iso: "LC", region: "Americas" },
  { name: "Saint Vincent and the Grenadines", dial_code: "+1784", iso: "VC", region: "Americas" },
  { name: "Samoa", dial_code: "+685", iso: "WS", region: "Oceania" },
  { name: "San Marino", dial_code: "+378", iso: "SM", region: "Europe" },
  { name: "Sao Tome and Principe", dial_code: "+239", iso: "ST", region: "Africa" },
  { name: "Saudi Arabia", dial_code: "+966", iso: "SA", region: "Asia" },
  { name: "Senegal", dial_code: "+221", iso: "SN", region: "Africa" },
  { name: "Serbia", dial_code: "+381", iso: "RS", region: "Europe" },
  { name: "Seychelles", dial_code: "+248", iso: "SC", region: "Africa" },
  { name: "Sierra Leone", dial_code: "+232", iso: "SL", region: "Africa" },
  { name: "Singapore", dial_code: "+65", iso: "SG", region: "Asia" },
  { name: "Slovakia", dial_code: "+421", iso: "SK", region: "Europe" },
  { name: "Slovenia", dial_code: "+386", iso: "SI", region: "Europe" },
  { name: "Solomon Islands", dial_code: "+677", iso: "SB", region: "Oceania" },
  { name: "Somalia", dial_code: "+252", iso: "SO", region: "Africa" },
  { name: "South Africa", dial_code: "+27", iso: "ZA", region: "Africa" },
  { name: "South Korea", dial_code: "+82", iso: "KR", region: "Asia" },
  { name: "South Sudan", dial_code: "+211", iso: "SS", region: "Africa" },
  { name: "Spain", dial_code: "+34", iso: "ES", region: "Europe" },
  { name: "Sri Lanka", dial_code: "+94", iso: "LK", region: "Asia" },
  { name: "Sudan", dial_code: "+249", iso: "SD", region: "Africa" },
  { name: "Suriname", dial_code: "+597", iso: "SR", region: "Americas" },
  { name: "Sweden", dial_code: "+46", iso: "SE", region: "Europe" },
  { name: "Switzerland", dial_code: "+41", iso: "CH", region: "Europe" },
  { name: "Syria", dial_code: "+963", iso: "SY", region: "Asia" },
  { name: "Taiwan", dial_code: "+886", iso: "TW", region: "Asia" },
  { name: "Tajikistan", dial_code: "+992", iso: "TJ", region: "Asia" },
  { name: "Tanzania", dial_code: "+255", iso: "TZ", region: "Africa" },
  { name: "Thailand", dial_code: "+66", iso: "TH", region: "Asia" },
  { name: "Togo", dial_code: "+228", iso: "TG", region: "Africa" },
  { name: "Tonga", dial_code: "+676", iso: "TO", region: "Oceania" },
  { name: "Trinidad and Tobago", dial_code: "+1868", iso: "TT", region: "Americas" },
  { name: "Tunisia", dial_code: "+216", iso: "TN", region: "Africa" },
  { name: "Turkey", dial_code: "+90", iso: "TR", region: "Europe" },
  { name: "Turkmenistan", dial_code: "+993", iso: "TM", region: "Asia" },
  { name: "Tuvalu", dial_code: "+688", iso: "TV", region: "Oceania" },
  { name: "Uganda", dial_code: "+256", iso: "UG", region: "Africa" },
  { name: "Ukraine", dial_code: "+380", iso: "UA", region: "Europe" },
  { name: "United Arab Emirates", dial_code: "+971", iso: "AE", region: "Asia" },
  { name: "United Kingdom", dial_code: "+44", iso: "GB", region: "Europe" },
  { name: "United States", dial_code: "+1", iso: "US", region: "Americas" },
  { name: "Uruguay", dial_code: "+598", iso: "UY", region: "Americas" },
  { name: "Uzbekistan", dial_code: "+998", iso: "UZ", region: "Asia" },
  { name: "Vanuatu", dial_code: "+678", iso: "VU", region: "Oceania" },
  { name: "Vatican City", dial_code: "+379", iso: "VA", region: "Europe" },
  { name: "Venezuela", dial_code: "+58", iso: "VE", region: "Americas" },
  { name: "Vietnam", dial_code: "+84", iso: "VN", region: "Asia" },
  { name: "Yemen", dial_code: "+967", iso: "YE", region: "Asia" },
  { name: "Zambia", dial_code: "+260", iso: "ZM", region: "Africa" },
  { name: "Zimbabwe", dial_code: "+263", iso: "ZW", region: "Africa" }
];

// sort once (handles accents & numeric parts)
const collator = new Intl.Collator(undefined, { sensitivity: "base", numeric: true });
const sortedCountries = Countries.slice().sort((a, b) => collator.compare(a.name, b.name));


export default function DemoContact({ isOpen, onClose }) {
  // Use countryCodes imported above (guard in case file is empty)
  //const europe = (Countries || []).filter((c) => c.region === "Europe");
  //const rest = (Countries || []).filter((c) => c.region !== "Europe");

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
//!formData.website.trim() ||
    // Basic validation: required fields
    if (
      !formData.firstName.trim() ||
      !formData.surname.trim() ||
      !formData.email.trim() ||
      !formData.contactNumber.trim() ||
      !formData.organisation.trim() ||
      !formData.location.trim() ||
      !formData.query.trim()
    ) {
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
    const subject = "Website query: Demo Request";
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

    const mailto = `mailto:hello@the-O.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      // Attempt to open user's email client (this usually succeeds)
      window.location.href = mailto;


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

        <h2 className="contact-title">Book a Demo</h2>

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
{/**                <div className="phone-input">
                <select
                  name="countryCode"
                  id="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  
                  <option value="" disabled>
                     
                  </option>
                  {sortedCountries.map((c) => (
                    <option key={`${c.iso}-${c.dial_code}`} value={c.dial_code} label={`(${c.dial_code})                ${c.name} `}>
                    {c.dial_code}
                    </option>
                  ))}
                </select>

                <input
                  name="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
                </div> */}
              </label>
              <div className="phone-input" style={{ display: "flex", gap: 8, alignItems: "center", marginTop:10}}>
             

                <div style={{ flex: 1 }}>
                  <Autocomplete
                    items={sortedCountries}
                    getLabel={(c) => `${c.name} (${c.dial_code})`}
                    placeholder="Search country or code..."
                    onSelect={(c) => setFormData(prev => ({ ...prev, countryCode: c.dial_code }))}
                  />
                </div>

                <input
                  name="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                  style={{ width: 200, padding: "10px 12px", borderRadius: 10, marginTop: 0 }}
                />
              </div>
            </div>


            <div className="form-group">
              <label>* Organisation / Company Name
                <input name="organisation" type="text" value={formData.organisation} onChange={handleChange} required />
              </label>
            </div>

            <div className="form-group">
              <label>Organisation / Company Website
                <input name="website" type="url" value={formData.website} onChange={handleChange} />
              </label>
            </div>

            {/* Row 3 */}
            <div className="form-group">
{/**              <label>* Location (Country)
                <select name="location" value={formData.location} onChange={handleChange} required>
                  <option value="">Select country</option>
                  <option>Pakistan</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>United Arab Emirates</option>
                  <option>Australia</option>
                </select>
              </label> */}

              <label>* Location (Country)
              <Autocomplete
                items={sortedCountries}
                getLabel={(c) => c.name}
                placeholder="Start typing a country..."
                initialQuery={formData.location || ""}
                onSelect={(c) => setFormData(prev => ({ ...prev, location: c.name }))}
              />
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
            <div className="form-group full-width center" style={{zIndex:1010}}>
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
