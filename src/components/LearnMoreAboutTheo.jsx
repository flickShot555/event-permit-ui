// src/components/LearnMoreAboutTheO.jsx
import React, { useEffect } from "react";
import LPHeader from "./MiniHeader";
import LPFooter from "./MiniFooter";

/**
 * LearnMoreAboutTheO
 *
 * Props:
 * - onTryDemo: function invoked when "Try our Demo" clicked
 * - onContact: function invoked when "Contact Our Team" clicked
 * - showHeaderFooter: boolean (default true) — whether to render LPHeader / LPFooter
 */
export default function LearnMoreAboutTheO({
  onTryDemo = () => console.log("Try demo clicked"),
  onContact = () => console.log("Contact clicked"),
  showHeaderFooter = true,
}) {
  // inject minimal CSS once
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("learnmore-styles")) return;

    const style = document.createElement("style");
    style.id = "learnmore-styles";
    style.innerHTML = `
:root { --primary: #96BBBB; --text: #0f172a; --muted: #6b7280; --card-bg: #ffffff; --surface: #f8fafc; }

.learnmore-outer { background: #ffffff; color: var(--text); }
.learnmore-container { max-width: 1100px; margin: 0 auto; padding: calc(var(--lp-header-height, 72px) + 28px) 20px 48px; }

/* Hero / intro */
.lm-hero { display: grid; grid-template-columns: 1fr; gap: 18px; margin-bottom: 20px; }
.lm-eyebrow { color: var(--primary); font-weight: 700; font-size: 0.95rem; letter-spacing: 0.02em; }
.lm-title { font-size: 1.6rem; margin: 6px 0 0; color: var(--text); }
.lm-lead { margin: 6px 0 0; color: var(--muted); line-height: 1.6; }

/* Sections */
.lm-section { margin-top: 22px; padding: 18px; background: var(--card-bg); border-radius: 10px; border: 1px solid #eef2f7; box-shadow: 0 1px 2px rgba(15,23,42,0.03); }
.lm-section h3 { margin: 0 0 10px; font-size: 1.1rem; color: var(--text); }
.lm-paragraph { color: var(--muted); line-height: 1.6; margin: 0 0 12px; }

/* lists */
.lm-list { margin: 0; padding-left: 18px; color: var(--muted); }
.lm-list li { margin-bottom: 8px; line-height: 1.5; }

/* Who it's for grid */
.lm-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 8px; }
.lm-card { background: var(--surface); padding: 12px; border-radius: 8px; border: 1px solid #eef2f7; color: var(--text); font-weight: 600; }

/* CTA area */
.lm-cta { display: flex; gap: 12px; margin-top: 16px; align-items: center; }
.btn { padding: 10px 16px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; }
.btn.primary { background: var(--primary); color: #fff; }
.btn.ghost { background: transparent; color: var(--text); border: 1px solid #e6e7ea; }

/* small meta */
.lm-muted { color: var(--muted); font-size: 0.95rem; }

/* responsive */
@media (max-width: 880px) {
  .lm-grid { grid-template-columns: 1fr; }
  .learnmore-container { padding: calc(var(--lp-header-height, 72px) + 20px) 14px 28px; }
}
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="learnmore-outer">
      {showHeaderFooter && <LPHeader />}

      <main className="learnmore-container" role="main" aria-labelledby="lm-heading">
        <section className="lm-hero" aria-labelledby="lm-heading">
          <div>
            <div className="lm-eyebrow">Learn More About TheO</div>
            <h1 id="lm-heading" className="lm-title">A Smarter Way to Manage Public Space</h1>
            <p className="lm-lead">
              Permits are essential for maintaining safe, accessible, and vibrant communities. But
              traditional permitting systems are often siloed, inconsistent, and slow. TheO changes
              that by unifying the entire permit lifecycle—across sectors, user types, and
              jurisdictions—into one seamless, intelligent platform. Built for scalable use globally,
              TheO is purpose-designed to simplify complex permitting processes while improving
              transparency, accountability, and stakeholder coordination.
            </p>
          </div>
        </section>

        <section className="lm-section" aria-labelledby="purpose-heading">
          <h3 id="purpose-heading">Our Purpose</h3>
          <p className="lm-paragraph">
            To create a permitting system that works for everyone—councils, agencies, businesses,
            organisers, and the public—by replacing outdated, fragmented processes with one central
            platform that’s fair, fast, and future-ready.
          </p>
        </section>

        <section className="lm-section" aria-labelledby="problem-heading">
          <h3 id="problem-heading">The Problem We Solved</h3>
          <ul className="lm-list" aria-label="Problems">
            <li>Paper-based or email-driven processes that cause delays and duplication</li>
            <li>Inconsistent workflows between departments and agencies</li>
            <li>Limited visibility into upcoming events, works, or public space use</li>
            <li>Difficult access for applicants with no guidance or feedback</li>
            <li>Risk of non-compliance due to manual errors or oversight</li>
          </ul>
        </section>

        <section className="lm-section" aria-labelledby="how-heading">
          <h3 id="how-heading">How TheO Helps</h3>
          <ul className="lm-list" aria-label="How TheO Helps">
            <li>Digitises the full permit lifecycle—from enquiry to approval to post-event reporting</li>
            <li>Automates document generation (e.g. Event Management Plans)</li>
            <li>Offers real-time visibility for stakeholders and public users</li>
            <li>Provides role-based access, messaging, and approvals</li>
            <li>Enables cross-agency collaboration with audit trails and notifications</li>
            <li>Supports integration with CRM, GIS, and payments systems</li>
          </ul>
        </section>

        <section className="lm-section" aria-labelledby="who-heading">
          <h3 id="who-heading">Who It’s For</h3>
          <div className="lm-grid" role="list">
            <div className="lm-card" role="listitem">Local Authorities: Streamline approvals, reduce admin, and unlock planning insights</div>
            <div className="lm-card" role="listitem">Statutory Agencies: Plan earlier and respond more effectively to risk</div>
            <div className="lm-card" role="listitem">Businesses & Vendors: Access opportunities and plan around disruptions</div>
            <div className="lm-card" role="listitem">Event & Construction Organisers: Apply once for all relevant permits</div>
            <div className="lm-card" role="listitem">Transport & Emergency Services: Monitor hotspots, assign resources, and ensure continuity</div>
            <div className="lm-card" role="listitem">General Public: Stay informed, submit observations, and build trust in local decisions</div>
          </div>
        </section>

        <section className="lm-section" aria-labelledby="vision-heading">
          <h3 id="vision-heading">Our Vision</h3>
          <p className="lm-paragraph">
            A world where every permit is easier to apply for, faster to approve, and safer to deliver—regardless of location, activity type, or stakeholder complexity.
            We envision TheO as a foundational layer for digital governance of public space, supporting:
          </p>
          <ul className="lm-list">
            <li>Smarter cities and regions</li>
            <li>More inclusive planning</li>
            <li>Better economic and tourism forecasting</li>
            <li>Improved event safety and emergency readiness</li>
          </ul>
        </section>

        <section className="lm-section" aria-labelledby="independent-heading">
          <h3 id="independent-heading">Why Independence Matters</h3>
          <p className="lm-paragraph">
            TheO is not an add-on to existing systems or a repurposed form tool. It is a standalone,
            neutral platform created to serve all stakeholders equally. This independence ensures:
          </p>
          <ul className="lm-list">
            <li>Transparency in workflows and decision-making</li>
            <li>Flexibility in deployment across jurisdictions</li>
            <li>Long-term sustainability with no legacy system lock-in</li>
          </ul>
        </section>

        <section className="lm-section" aria-labelledby="next-heading">
          <h3 id="next-heading">What’s Next</h3>
          <ul className="lm-list">
            <li>Expanding globally</li>
            <li>Integrating new permit types and stakeholder modules</li>
            <li>Rolling out region-specific versions</li>
            <li>Launching new analytics dashboards for strategic planning</li>
          </ul>
        </section>

        <section className="lm-section" aria-labelledby="involved-heading">
          <h3 id="involved-heading">Get Involved</h3>
          <p className="lm-paragraph">
            Whether you're a policymaker, project manager, or permit applicant, we want to work with you.
            Book a consultation, join a pilot, or explore how TheO can serve your organisation.
          </p>

          <div className="lm-cta">
            <button className="btn primary" onClick={onTryDemo} aria-label="Try our demo">Try our Demo</button>
            <button className="btn ghost" onClick={onContact} aria-label="Contact our team">Contact Our Team</button>
          </div>
        </section>
      </main>

      {showHeaderFooter && <LPFooter />}
    </div>
  );
}
