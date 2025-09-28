// HowItWorks-detailed.jsx
//rendered from the hero section
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UpdatedFooter from "./UpdatedFooter";      // as requested
import LPHeader from "./MiniHeader";      // as requested
import ContactUs from "./ContactUs";
import ScrollToTopButton from "./ScrollToTopButton";
import {
  Send,
  Zap,
  Users,
  CreditCard,
  Clipboard,
  Archive,
  ArrowRight,
  PlayCircle,
  Mail,
  FileText
} from "lucide-react";
import { Calendar, Store, Truck } from "lucide-react";
import "./HowItWorks-Detailed.css";

export default function HowTheoWorksDetailed() {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const initialScroll =
      (location.state && location.state.scrollY) ||
      Number(sessionStorage.getItem("howitworks:lastScrollY")) ||
      0;

    // allow layout to settle
    window.setTimeout(() => window.scrollTo(0, 0), 40);

    const saveScrollBeforeLeave = () => {
      sessionStorage.setItem("howitworks:lastScrollY", String(window.scrollY || 0));
    };

    window.addEventListener("beforeunload", saveScrollBeforeLeave);
    return () => {
      saveScrollBeforeLeave();
      window.removeEventListener("beforeunload", saveScrollBeforeLeave);
    };
  }, [location.state]);

  const handleBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from, { state: { restoreScroll: window.scrollY } });
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="hiw-page">
      <LPHeader />
      <ScrollToTopButton />

      <main className="hiw-main" ref={mainRef} role="main">
        <header className="hiw-hero" aria-labelledby="hiw-hero-title">
          <div className="hiw-hero-inner">

            <h1 id="hiw-hero-title" className="hiw-title">
              HOW IT WORKS – One Platform. Every Permit. Total Oversight.
            </h1>

            <div className="hiw-underline" aria-hidden />

            <p className="hiw-lead">
              TheO brings clarity to a process long known for confusion. Whether you're applying for an
              event licence, a road closure, a casual trading permit, or any combination of approvals—
              TheO simplifies it all. Built in consultation with local authorities, statutory stakeholders,
              and businesses, our platform replaces fragmented workflows with an intelligent, unified system
              that adapts to your needs. Welcome to the digital transformation of an archaic permitting system.
            </p>
          </div>
        </header>

        <section className="hiw-process" aria-labelledby="hiw-process-title">
          <h2 id="hiw-process-title" className="hiw-section-title">Step-by-Step Process</h2>

          <div className="hiw-steps-grid">
            <article className="hiw-step-card" tabIndex={0}>
              <div className="hiw-step-icon" aria-hidden>
                <Send size={22} />
              </div>
              <div className="hiw-step-body">
                <h3 className="hiw-step-title">1. Submit Your Permit Request</h3>
                <ul className="hiw-bullets">
                  <li>Applicants choose the permit type(s) they require</li>
                  <li>Smart forms guide users to the correct workflows</li>
                  <li>The system auto-detects required documentation (site plans, insurance, risk assessments)</li>
                </ul>
                <p className="hiw-for">For: Event Organisers, Business Owners, Contractors, Filmmakers</p>
              </div>
            </article>

            <article className="hiw-step-card" tabIndex={0}>
              <div className="hiw-step-icon" aria-hidden>
                <Zap size={22} />
              </div>
              <div className="hiw-step-body">
                <h3 className="hiw-step-title">2. Automated Workflow Allocation</h3>
                <ul className="hiw-bullets">
                  <li>Applications are routed to relevant internal departments and external stakeholders</li>
                  <li>Internal teams are notified based on nature, size, and impact</li>
                  <li>Approval steps and responsibilities are clearly mapped out</li>
                </ul>
                <p className="hiw-for">For: Local Authority Teams and Statutory Agencies</p>
              </div>
            </article>

            <article className="hiw-step-card" tabIndex={0}>
              <div className="hiw-step-icon" aria-hidden>
                <Users size={22} />
              </div>
              <div className="hiw-step-body">
                <h3 className="hiw-step-title">3. Collaborative Review & Feedback</h3>
                <ul className="hiw-bullets">
                  <li>Stakeholders can tag one another in comments</li>
                  <li>Applicants receive real-time alerts for missing documents or clarifications</li>
                  <li>All communication is logged for transparency and traceability</li>
                </ul>
                <p className="hiw-for">For: Cross-agency coordination, Event Control Groups, Project Teams</p>
              </div>
            </article>

            <article className="hiw-step-card" tabIndex={0}>
              <div className="hiw-step-icon" aria-hidden>
                <CreditCard size={22} />
              </div>
              <div className="hiw-step-body">
                <h3 className="hiw-step-title">4. Payments & Document Generation</h3>
                <ul className="hiw-bullets">
                  <li>Invoices auto-generated based on permit types and local fee schedules</li>
                  <li>Secure payment portal built into the platform</li>
                  <li>Digital permits issued with QR codes, custom conditions, and expiry settings</li>
                </ul>
                <p className="hiw-for">For: Finance, Legal, and Enforcement Officers</p>
              </div>
            </article>

            <article className="hiw-step-card" tabIndex={0}>
              <div className="hiw-step-icon" aria-hidden>
                <Clipboard size={22} />
              </div>
              <div className="hiw-step-body">
                <h3 className="hiw-step-title">5. Inspections, Updates & Close-Out</h3>
                <ul className="hiw-bullets">
                  <li>Site inspections or compliance checks scheduled and logged through TheO</li>
                  <li>Changes or revocations updated in real time</li>
                  <li>Post-event or post-project reports submitted and stored</li>
                </ul>
                <p className="hiw-for">For: Health & Safety, Waste Management, Gardaí, Licensing Inspectors</p>
              </div>
            </article>

            <article className="hiw-step-card" tabIndex={0}>
              <div className="hiw-step-icon" aria-hidden>
                <Archive size={22} />
              </div>
              <div className="hiw-step-body">
                <h3 className="hiw-step-title">6. Retention, Data Insights & Reuse</h3>
                <ul className="hiw-bullets">
                  <li>All documents archived securely</li>
                  <li>Auto-versioning and audit trails for every application</li>
                  <li>Historical data supports planning, tourism metrics, and reporting</li>
                </ul>
                <p className="hiw-for">For: Analytics teams, Planning, Tourism, and Community Engagement</p>
              </div>
            </article>
          </div>
        </section>

        <section className="hiw-visual" aria-labelledby="hiw-visual-title">
          <h2 id="hiw-visual-title" className="hiw-section-title">Process Visual</h2>
          <div className="timelineholder">
            <div className="hiw-timeline" role="img" aria-label="Apply, Review, Collaborate, Approve, Monitor, Report">
                <div className="hiw-timeline-item">
                <div className="hiw-timeline-icon"><FileText size={16}/></div>
                <div className="hiw-timeline-label">Apply</div>
                </div>
                <div className="hiw-timeline-arrow"><ArrowRight size={16} /></div>

                <div className="hiw-timeline-item">
                <div className="hiw-timeline-icon"><Users size={16}/></div>
                <div className="hiw-timeline-label">Review</div>
                </div>
                <div className="hiw-timeline-arrow"><ArrowRight size={16} /></div>

                <div className="hiw-timeline-item">
                <div className="hiw-timeline-icon"><Users size={16}/></div>
                <div className="hiw-timeline-label">Collaborate</div>
                </div>
                <div className="hiw-timeline-arrow"><ArrowRight size={16} /></div>

                <div className="hiw-timeline-item">
                <div className="hiw-timeline-icon"><Zap size={16}/></div>
                <div className="hiw-timeline-label">Approve</div>
                </div>
                <div className="hiw-timeline-arrow"><ArrowRight size={16} /></div>

                <div className="hiw-timeline-item">
                <div className="hiw-timeline-icon"><EyeIconPlaceholder /></div>
                <div className="hiw-timeline-label">Monitor</div>
                </div>
                <div className="hiw-timeline-arrow"><ArrowRight size={16} /></div>

                <div className="hiw-timeline-item">
                <div className="hiw-timeline-icon"><Archive size={16}/></div>
                <div className="hiw-timeline-label">Report</div>
                </div>
            </div>
          </div>
        </section>

        <section className="hiw-benefits" aria-labelledby="hiw-benefits-title">
          <h2 id="hiw-benefits-title" className="hiw-section-title">Key Benefits of the Process</h2>
          <ul className="hiw-benefits-list">
            <li className="hiw-benefit-item"><CheckMarkIcon /> Apply once for all necessary permits</li>
            <li className="hiw-benefit-item"><CheckMarkIcon /> Reduce approval time by up to 80%</li>
            <li className="hiw-benefit-item"><CheckMarkIcon /> Fully auditable trail of communication and changes</li>
            <li className="hiw-benefit-item"><CheckMarkIcon /> Live tracking for applicants and all involved agencies</li>
            <li className="hiw-benefit-item"><CheckMarkIcon /> GDPR-compliant, hosted securely</li>
          </ul>
        </section>

        <section className="hiw-permits" aria-labelledby="hiw-permits-title">
  <h2 id="hiw-permits-title" className="hiw-section-title">
    Permits &amp; Licences Handled by TheO
  </h2>

  <ol className="hiw-permits-list" aria-label="Permits and licences handled by TheO">
    <li className="hiw-permit-group" >
      <div className="hiw-permit-icon" aria-hidden="true"><Calendar /></div>
      <div className="hiw-permit-body">
        <h3 className="hiw-permit-group-title">Event-Specific Permits</h3>
        <ul className="hiw-permit-items">
          <li>Public Event Licences (small, medium, and large events)</li>
          <li>Indoor &amp; Outdoor Event Licences</li>
          <li>Temporary Road Closures &amp; Traffic Management Orders</li>
          <li>Use of Public Spaces (parks, squares, footpaths)</li>
          <li>Temporary Structure Approvals (stages, marquees, grandstands)</li>
          <li>Fireworks &amp; Pyrotechnics Display Permits</li>
          <li>Noise Management Plans &amp; Notifications</li>
        </ul>
      </div>
    </li>

    <li className="hiw-permit-group" tabIndex={0}>
      <div className="hiw-permit-icon" aria-hidden="true"><Store /></div>
      <div className="hiw-permit-body">
        <h3 className="hiw-permit-group-title">Commercial &amp; Trading Permissions</h3>
        <ul className="hiw-permit-items">
          <li>Casual Trading Licences (food stalls, vendors, markets)</li>
          <li>Food Preparation &amp; Sales Permits (HSE approvals)</li>
          <li>Alcohol Licences (occasional liquor permits, by-law relaxations)</li>
          <li>Sampling, Promotions &amp; Merchandising Permits</li>
          <li>Film &amp; Photography Permits in public spaces</li>
        </ul>
      </div>
    </li>

    <li className="hiw-permit-group" tabIndex={0}>
      <div className="hiw-permit-icon" aria-hidden="true"><Truck /></div>
      <div className="hiw-permit-body">
        <h3 className="hiw-permit-group-title">Transport &amp; Infrastructure Permissions</h3>
        <ul className="hiw-permit-items">
          <li>Parking Bay Suspensions</li>
          <li>Heavy Goods Vehicle (HGV) &amp; Abnormal Load Permits</li>
          <li>Crane, Hoist &amp; Equipment Placement Permits</li>
          <li>Scaffolding &amp; Hoarding Permits</li>
        </ul>
      </div>
    </li>

    <li className="hiw-permit-group" tabIndex={0}>
      <div className="hiw-permit-icon" aria-hidden="true"><Users /></div>
      <div className="hiw-permit-body">
        <h3 className="hiw-permit-group-title">Community &amp; Civic Notifications</h3>
        <ul className="hiw-permit-items">
          <li>Protest / Demonstration Notifications</li>
          <li>Risk Registers &amp; Safety Submissions</li>
          <li>Public Advertising &amp; Signage Approvals</li>
        </ul>
      </div>
    </li>
  </ol>
</section>

        <div className="hiw-demo-cta">
          <button
            className="hiw-demo-btn"
            onClick={() => navigate("/demo")}
            aria-label="Try our demo"
          >
            <PlayCircle  size={14} /> Try our Demo
          </button>

          <button
            className="hiw-contact-btn"
            onClick={() => setShowContact(true)}
            aria-label="Contact our team"
          >
            <Mail size={16} /> Contact Our Team
          </button>
          <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
        </div>
      </main>

      <UpdatedFooter />

      
    </div>
  );
}

/**
 * Lightweight inline icon components so we avoid failing imports for uncommon icons.
 * Replace or remove if you prefer other Lucide icons that exist in your project.
 */
function CheckMarkIcon() {
  return <svg className="hiw-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20 6L9 17l-5-5" stroke="#96BBBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}
function EyeIconPlaceholder() {
  // simple eye-shaped placeholder (non-emoji) — visually consistent
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="#2d3748" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2.2" fill="#96BBBB"/>
  </svg>;
}
