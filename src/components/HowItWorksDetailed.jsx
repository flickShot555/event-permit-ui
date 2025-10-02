// HowItWorksDetaled.jsx
import React , {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Mail, PhoneCall, MessageSquare, Linkedin, Twitter } from 'lucide-react';
import ScrollToTopButton from "./ScrollToTopButton";
import UpdatedFooter from "./UpdatedFooter";
import LPHeader from "./MiniHeader";
import DemoContact from "./DemoContact";
import ContactUs from "./ContactUs";
/**
 * HowItWorksDetaled
 *
 * Props:
 * - steps: array of step objects { id, title, bullets: string[], for: string }
 * - benefits: array of benefit strings
 * - permits: array of permit strings
 * - onTryDemo: function
 * - onContact: function
 *
 * This component includes default data (from your document). Feel free to pass
 * different data via props to override content.
 */
export default function HowItWorksDetailed({
  steps,
  benefits,
  permits,
  onTryDemo = () => console.log("Try demo clicked"),
  onContact = () => console.log("Contact clicked"),
}) {
  const [showDemo, setDemo] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();
  const defaultSteps = [
    {
      id: "submit",
      title: "Submit Your Permit Request",
      bullets: [
        "Applicants choose the permit type(s) they require",
        "Smart forms guide users to the correct workflows",
        "The system auto-detects required documentation (e.g. site plans, insurance, risk assessments)",
      ],
      for: "Event Organisers, Business Owners, Contractors, Filmmakers",
    },
    {
      id: "allocate",
      title: "Automated Workflow Allocation",
      bullets: [
        "Applications are instantly routed to the relevant internal departments (e.g. Roads, Waste, Fire, Gardaí) and external stakeholders",
        "Internal teams are notified based on the nature, size, and impact of the request",
        "Approval steps and responsibilities are clearly mapped out",
      ],
      for: "Local Authority Teams and Statutory Agencies",
    },
    {
      id: "collaborate",
      title: "Collaborative Review & Feedback",
      bullets: [
        "Stakeholders can tag one another in comments",
        "Applicants receive real-time alerts for missing documents or clarifications",
        "All communication is logged for transparency and traceability",
      ],
      for: "Cross-agency coordination, Event Control Groups, Project Teams",
    },
    {
      id: "payments",
      title: "Payments & Document Generation",
      bullets: [
        "Invoices auto-generated based on permit types and local fee schedules",
        "Secure payment portal built into the platform",
        "Upon approval, TheO issues digital permits, licences, or notifications with QR codes, custom conditions, and expiry settings",
      ],
      for: "Finance, Legal, and Enforcement Officers",
    },
    {
      id: "inspections",
      title: "Inspections, Updates & Close-Out",
      bullets: [
        "Site inspections or compliance checks can be scheduled and logged through TheO",
        "Any changes or revocations are updated in real time",
        "Post-event or post-project reports submitted and stored for future reference",
      ],
      for: "Health & Safety, Waste Management, Gardaí, Licensing Inspectors",
    },
    {
      id: "retention",
      title: "Retention, Data Insights & Reuse",
      bullets: [
        "All documents archived securely",
        "Auto-versioning and audit trails for each application",
        "Historical data supports resource planning, tourism metrics, and reporting",
      ],
      for: "Analytics teams, Planning, Tourism, and Community Engagement",
    },
  ];

  const defaultBenefits = [
    "Apply once for all necessary permits",
    "Reduce approval time by up to 80%",
    "Fully auditable trail of communication and changes",
    "Live tracking for applicants and all involved agencies",
    "GDPR-compliant, hosted securely",
  ];

  const defaultPermits = [
    "Public Event Permits",
    "Road Closures & Traffic Management Orders",
    "Casual Trading Licences",
    "Film & Photography Permits",
    "Parking Bay Suspensions",
    "Alcohol Licences",
    "Temporary Structure Approvals",
    "Noise Management Notifications",
    "Protest Notifications & Risk Registers",
  ];

  const useSteps = steps && steps.length ? steps : defaultSteps;
  const useBenefits = benefits && benefits.length ? benefits : defaultBenefits;
  const usePermits = permits && permits.length ? permits : defaultPermits;

  return (
    <div >
    <ScrollToTopButton />
    <LPHeader />
{/**      <header className="lp-nav">
          <div className="lp-nav-container">
          <button
              onClick={() => {
                // go back in history; this will trigger LandingPage's POP logic
                navigate(-1);
              }}
              aria-label="Go back"
              className="how-back-btn"
            >
              <ArrowLeft className="icon-back"  aria-hidden="true" />
            </button>
            <Link to="/"><img src="/images/logo-3.png" alt="TheO Logo" className="lp-logo" /></Link>
            
          </div>
          <style>{`        
          .lp-nav {
            background: #324858;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            position: relative;
            top: 0;
            z-index: 100;
            animation: navSlideDown 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          
          .lp-nav-container {
            max-width: 100%;
            margin: 0px;
            padding: 30px 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .lp-nav-actions {
            display: flex;
            gap: 10px;
          }
          .btn.ghost { background: transparent; color: #374151; border: 1px solid #e6e7ea; }
          .how-back-btn {
            color: #96BBBB;              
            display: inline-flex;
            align-items: center;
            background-color: transparent;
            border: none;
            padding: 8px 12px;
            margin:10px;

          }
          .how-back-btn:hover { color: white; cursor: pointer } /* icon will become white on parent hover 

          .icon-back { 
            color: inherit;
            width: 2rem;    
            height: 2rem;
          }

          .lp-logo {padding-right: 20px;}
          `}</style>
      </header> */}
      <section
        className="howitworks-detailed"
        aria-labelledby="howitworks-heading"
        role="region"
      >
        <div className="howitworks-inner container">
          <header className="howitworks-header">
            <h2 id="howitworks-heading" className="howitworks-title">
              HOW IT WORKS – One Platform. Every Permit. Total Oversight.
            </h2>

            <p className="howitworks-intro">
              TheO brings clarity to a process long known for confusion. Whether
              you're applying for an event licence, a road closure, a casual
              trading permit, or any combination of approvals—TheO simplifies it
              all. Built in consultation with local authorities, statutory
              stakeholders, and businesses, our platform replaces fragmented
              workflows with an intelligent, unified system that adapts to your
              needs.
            </p>

            <p className="howitworks-intro--muted">
              Welcome to the digital transformation of an archaic permitting
              system.
            </p>
          </header>

          {/* Process visual */}
          <div className="process-visual" aria-hidden="false">
            <ol className="process-steps" aria-label="Process flow">
              <li className="pv-step">Apply</li>
              <li className="pv-arrow" aria-hidden="true">→</li>
              <li className="pv-step">Review</li>
              <li className="pv-arrow" aria-hidden="true">→</li>
              <li className="pv-step">Collaborate</li>
              <li className="pv-arrow" aria-hidden="true">→</li>
              <li className="pv-step">Approve</li>
              <li className="pv-arrow" aria-hidden="true">→</li>
              <li className="pv-step">Monitor</li>
              <li className="pv-arrow" aria-hidden="true">→</li>
              <li className="pv-step">Report</li>
            </ol>
          </div>

          {/* Steps */}
          <div className="steps-grid" role="list">
            {useSteps.map((s, idx) => (
              <article className="step-card" key={s.id || idx} role="listitem">
                <div className="step-card-head">
                  <div className="step-number" aria-hidden="true">
                    {idx + 1}
                  </div>
                  <h3 className="step-title">{s.title}</h3>
                </div>

                <ul className="step-bullets">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="step-bullet">
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="step-footer">
                  <span className="step-for-label">For:</span>
                  <span className="step-for">{s.for}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Benefits and Permits side-by-side (responsive) */}
          <div className="bottom-grid">
            <div className="benefits">
              <h4 className="subhead">Key Benefits of the Process</h4>
              <ul className="benefits-list">
                {useBenefits.map((b, i) => (
                  <li key={i} className="benefit-item">
                    <span className="benefit-dot" aria-hidden="true">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="permits">
              <h4 className="subhead">Permits Handled by TheO</h4>
              <ul className="permits-list">
                {usePermits.map((p, i) => (
                  <li key={i} className="permit-item">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="howitworks-cta">
            <button
              className="btn primary"
              onClick={() => setDemo(true)}
              aria-label="Try our demo"
            >
              Try our Demo
            </button>
            <DemoContact isOpen={showDemo} onClose={() => setDemo(false)} />
            <button
              className="btn ghost"
              onClick={() => setShowContact(true)}
              aria-label="Contact our team"
            >
              Contact Our Team
            </button>
            <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
          </div>
        </div>

        {/* Component-scoped styles (you can move these to an external CSS file) */}
        <style>{`
          .howitworks-detailed { padding: 20px 18px; background: #fff; color: #1f2937; position: relative;}
          .howitworks-inner { max-width: 90%; margin: 0 auto; }
          .howitworks-header { text-align: left; padding:1.5% 0}
          .howitworks-title { font-size: 1.5rem; margin: 0 0 12px; color: #0f172a; }
          .howitworks-intro { font-size: 1rem; margin: 0 0 6px; line-height: 1.5; color: #374151; }
          .howitworks-intro--muted { color: #6b7280; margin-top: 6px; }

          .process-visual {  padding:1.5% 0  }
          .process-steps { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center; list-style: none; padding: 0; margin: 0; font-weight: 600; color: #374151; }
          .pv-step { background: #f3f4f6; padding: 8px 12px; border-radius: 999px; font-size: 0.9rem; }
          .pv-arrow { color: #9ca3af; font-weight: 700; }

          .steps-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; padding: 1.5% 0 }
          .step-card { background: #ffffff; border: 1px solid #e6e7ea; padding: 16px; border-radius: 10px; box-shadow: 0 1px 2px rgba(15,23,42,0.03); }
          .step-card-head { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
          .step-number { width: 36px; height: 36px; border-radius: 8px; background: #ecfeff; color: #056b6b; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; }
          .step-title { font-size: 1.05rem; margin: 0; color: #0f172a; }

          .step-bullets { margin: 8px 0 12px 0; padding-left: 18px; color: #374151; }
          .step-bullet { margin-bottom: 6px; line-height: 1.45; }

          .step-footer { display:flex; gap:8px; align-items:center; font-size:0.9rem; color: #6b7280; }
          .step-for-label { font-weight:600; color:#374151; }

          .bottom-grid { display: grid; grid-template-columns: 1fr 520px; gap: 10px; margin-top: 42px; align-items: start; padding-left: 40px; padding-right:40px }
          .subhead { margin: 0 0 10px 0; font-size: 1.05rem; color: #0f172a; }

          .benefits-list, .permits-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; color: #374151; }
          .benefit-item { display: flex; gap: 8px; align-items: flex-start; }
          .benefit-dot { color: #96bbbb; font-size: 1.4rem; line-height: 1; }

          .permits-list { column-count: 1; }
          .permit-item { background: #f8fafc; padding: 8px 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #eef2f7; }

          .howitworks-cta { margin-top: 40px;margin-bottom: 40px; display: flex; gap: 12px; justify-content: center; }
          .btn { padding: 10px 16px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; }
          .btn.primary { background: #96bbbb; color: #fff; }
          .btn.ghost { background: transparent; color: #374151; border: 1px solid #e6e7ea; }

          /* Responsive */
          @media (max-width: 880px) {
            .steps-grid { grid-template-columns: 1fr; }
            .bottom-grid { grid-template-columns: 1fr; }
            .process-steps { justify-content: flex-start; }
          }
        `}</style>
      </section>
      <UpdatedFooter />

      {/** 
      <footer className="lp-footer footer-spectacular">
        <div className="lp-footer-container">
          <img
            src="/images/logo-3.png"
            alt="TheO Logo"
            className="lp-footer-col footer-info footer-logo-spectacular"
          />
          {/*<nav className="lp-footer-col footer-nav">
            {["Home", "How It Works", "Features", "About", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="footer-nav-spectacular"
                style={{ "--delay": `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </nav>*/}{/*
          <nav className="lp-nav-links">
            <a href="#home" className="nav-link-entrance" style={{ "--delay": "0.1s" }}>
              Home
            </a>
            <a href="#how" className="nav-link-entrance" style={{ "--delay": "0.2s" }}>
              How it Works
            </a>
            <a href="#features" className="nav-link-entrance" style={{ "--delay": "0.3s" }}>
              Features
            </a>
            <a href="#about" className="nav-link-entrance" style={{ "--delay": "0.4s" }}>
              About
            </a>
            <a href="#start" className="nav-link-entrance" style={{ "--delay": "0.5s" }}>
              Get Started
            </a>
          </nav>
          <div className="lp-footer-col footer-contact footer-contact-spectacular">
            <p><Mail size={16} color="#ffff" style={{ marginRight: 5}} /> hello@theo-platform.com</p>
            <p><PhoneCall size={16} color="#ffff" style={{ marginRight: 5}} /> +353 1 234 5678</p>
            <p><MessageSquare size={16} color="#ffff" style={{ marginRight: 5}} /> Live Chat</p>
            <div className="lp-social">
              <a href="#" className="social-spectacular" style={{ "--delay": "0.1s" }}>
                <Linkedin color="#ffff" />
              </a>
              <a href="#" className="social-spectacular" style={{ "--delay": "0.2s" }}>
                <Twitter color="#ffff" />
              </a>
            </div>
          </div>
        </div>
        <style>{`
        .lp-footer {
  background: #324858;
  color: #f7fafc;
  padding: 24px 0;
}

.lp-footer-container {
  max-width: 100%;
  margin: 0;
  padding: 20px;
  gap: 25px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: space-between;
}

.footer-info {
  padding-left: 30px;
  padding-right: 30px;
  text-align: left;
  height: 46px;
}

.footer-info p {
  margin: 0;
  font-size: 0.875rem;
  color: #f7fafc;
}

.footer-nav {
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 32px;
}

.footer-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.footer-nav a:hover {
  text-decoration: underline;
  transform: scale(1.3);
}

.footer-contact {
  flex: 1;
  text-align: left;
  line-height: 1.4;
  padding-left: 50%;
  padding-right: 0;
}

.footer-contact p {
  margin: 4px 0;
  font-size: 0.875rem;
  color: #f7fafc;
}
        .lp-social {
          margin-top: 8px;
          display: inline-flex;
          gap: 12px;
          justify-content: flex-end;
          padding-right: 25px;
        }

        .lp-social a {
          transition: transform 0.3s ease;
        }

        .lp-social a:hover {
          transform: scale(1.2);
        }

        .lp-social img {
          width: 24px;
          height: 24px;
          display: block;
        }
        `}</style>
      </footer>*/}
    </div>
  );
}
