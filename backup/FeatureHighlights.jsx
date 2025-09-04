import React from "react";
import "./FeatureHighlights.css";
import { MessageSquare, Users, ShieldCheck, Lightbulb, Layers, Cloud, CheckCircle } from 'lucide-react';

// FeatureHighlights.jsx
// - Standalone component (NOT a <section>)
// - Minimal props: `visible` boolean + forwarded ref for intersection/animations
// - Uses namespaced `fh-` classes from FeatureHighlights.css

const HIGHLIGHTS = [
  {
    title: "Real-Time Communication",
    desc: "No more phone calls and email chains. TheO supports direct comments, tagging, and instant updates between departments and stakeholders.",
    Icon: MessageSquare
  },
  {
    title: "Stakeholder-Centric Design",
    desc: "TheO was built in collaboration with local authorities, statutory bodies, businesses, and event organisers. Every feature supports real-world workflows and reduces friction.",
    Icon: Users
  },
  {
    title: "Built-In Safety and Compliance",
    desc: "Risk assessments, insurance uploads, inspection checklists, conditional approvals—all integrated, version-controlled, and time-stamped.",
    Icon: ShieldCheck
  },
  {
    title: "Smart Guidance, Not Just Submission",
    desc: "Applicants receive tailored prompts, permit suggestions, and automated documentation like Event Management Plans (EMPs) based on their inputs.",
    Icon: Lightbulb
  },
  {
    title: "All-in-One Platform",
    desc: "Apply once and manage every permit type from one place. No duplication, no confusion.",
    Icon: Layers
  },
  {
    title: "Digital End-to-End",
    desc: "From application to payment to permit issuance, everything is digital, secure, and audit-ready.",
    Icon: Cloud
  },
];

// Recommended icon map (uses your titles as the key)
const iconMap = {
    "Real-Time Communication": MessageSquare,
    "Stakeholder-Centric Design": Users,
    "Built-In Safety and Compliance": ShieldCheck,
    "Smart Guidance, Not Just Submission": Lightbulb,
    "All-in-One Platform": Layers,
    "Digital End-to-End": Cloud,
  };

  const FeatureHighlights = React.forwardRef(function FeatureHighlights({ visible = false }, ref) {
    return (
      <div
        ref={ref}
        id="fh-features"
        className={`fh-features ${visible ? "fh-section-visible" : ""}`}
        role="region"
        aria-labelledby="fh-section-title"
      >
        <h1 id="fh-section-title" className="fh-section-title">
          Features &amp; Benefits
        </h1>
  
        <p className="fh-intro">
          Permits are central to how we use and share public space. From events and road closures to
          street trading, signage, and temporary structures, they impact safety, operations, business, and community life.
          TheO replaces traditional fragmented permitting systems with a smarter, unified platform.
        </p>
  
        <div className="fh-cards" aria-live="polite">
          {HIGHLIGHTS.map((h, idx) => {
            // Choose icon in this order: explicit h.Icon -> mapping by title -> default CheckCircle
            const Icon = h.Icon || iconMap[h.title] || CheckCircle;
  
            return (
              <article
                key={idx}
                className="fh-card"
                style={{ "--delay": `${0.1 + idx * 0.05}s` }}
                aria-labelledby={`fh-card-title-${idx}`}
              >
                <div className="fh-card-icon" aria-hidden>
                  <Icon size={20} />
                </div>
  
                <div className="fh-card-body">
                  <h3 id={`fh-card-title-${idx}`} className="fh-card-title">
                    {h.title}
                  </h3>
                  <p className="fh-card-desc">{h.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
  
        <div className="fh-cta">
          <button className="fh-btn" type="button">
            Learn More
          </button>
        </div>
      </div>
    );
  });
  

export default FeatureHighlights;
