// PlatformHighlightsSection.jsx
import React, { useEffect, useRef } from "react";
import { Layers, Users, ShieldCheck, FileText, MessageSquare, CreditCard } from "lucide-react";
import "./PlatformHighlightsSection.css";

export default function PlatformHighlightsSection({
  id = "platform-highlights",
  title = "Platform Highlights",
  subtitle = "What makes TheO different — designed for real-world workflows, safety, and seamless communication.",
  highlights = null,
  ctaText = "Explore The Platform", // <-- default provided here
  onCtaClick = () => {},
}) {
  const defaultHighlights = [
    { title: "All-in-One Platform", description: "Apply once and manage every permit type from one place. No duplication, no confusion.", Icon: Layers },
    { title: "Stakeholder-Centric Design", description: "TheO was built in collaboration with local authorities, statutory bodies, businesses, and event organisers. Every feature supports real-world workflows and reduces friction.", Icon: Users },
    { title: "Built-In Safety and Compliance", description: "Risk assessments, insurance uploads, inspection checklists, conditional approvals—all integrated, version-controlled, and time-stamped.", Icon: ShieldCheck },
    { title: "Smart Guidance, Not Just Submission", description: "Applicants receive tailored prompts, permit suggestions, and automated documentation like Event Management Plans (EMPs) based on their inputs.", Icon: FileText },
    { title: "Real-Time Communication", description: "No more phone calls and email chains. TheO supports direct comments, tagging, and instant updates between departments and stakeholders.", Icon: MessageSquare },
    { title: "Digital End-to-End", description: "From application to payment to permit issuance, everything is digital, secure, and audit-ready.", Icon: CreditCard },
  ];

  const cards = highlights || defaultHighlights;
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            obs.unobserve(node);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={id} className="ph-section" aria-labelledby={`${id}-title`}>
      <div className="ph-inner">
        <div className="ph-head">
          <h2 id={`${id}-title`} className="ph-title">{title}</h2>
          <p className="ph-subtitle">{subtitle}</p>
        </div>

        <div className="ph-grid">
          {cards.map((card, idx) => {
            const Icon = card.Icon;
            return (
              <article key={idx} className="ph-card">
                <div className="ph-card-left">
                  <div className="ph-icon" aria-hidden>
                    <Icon size={28} strokeWidth={1.5} color="#96BBBB" />
                  </div>
                </div>

                <div className="ph-card-right">
                  <h3 className="ph-card-title">{card.title}</h3>
                  <p className="ph-desc">{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="ph-cta">
          <button className="ph-button" onClick={onCtaClick} aria-label={ctaText}>
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
