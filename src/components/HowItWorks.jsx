// HowItWorks.jsx
import React from "react";
import { Pencil, CheckCircle, Users, CreditCard, FileText } from "lucide-react";

const HowItWorks = ({ howRef, visibleSections }) => {
  const steps = [
    {
      icon: Pencil,
      title: "1. Start Application",
      desc: "Begin your event application online.",
      delay: "0.1s",
    },
    {
      icon: CheckCircle,
      title: "2. Internal Review",
      desc: "Review by internal authorities.",
      delay: "0.2s",
    },
    {
      icon: Users,
      title: "3. Stakeholder Collaboration",
      desc: "Collaborate with stakeholders in real-time.",
      delay: "0.3s",
    },
    {
      icon: CreditCard,
      title: "4. Approvals & Payment",
      desc: "Get approvals and make payments online.",
      delay: "0.4s",
    },
    {
      icon: FileText,
      title: "5. Post-Event Reporting",
      desc: "Submit reports and feedback after the event.",
      delay: "0.5s",
    },
  ];

  return (
    <section
      ref={howRef}
      id="how"
      className={`max-w-full bg-white text-center px-9 py-16 ${
        visibleSections?.has("how") ? "section-visible" : ""
      }`}
    >
      <h2 className="text-2xl font-bold mb-10 text-left">How It Works</h2>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center flex-1"
            style={{ "--delay": step.delay }}
          >
            <step.icon className="w-8 h-8 mb-2 stroke-[#96bbbb]" />
            <h3 className="text-base font-semibold text-[#2d3748] mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-[#4a5568]">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Live Demo Link */}
      <a
        href="#live-demo"
        className="relative inline-block overflow-hidden px-3 py-1.5 rounded-md text-[#96bbbb] no-underline text-sm font-medium transition-all duration-300 hover:scale-105 hover:text-white before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#96bbbb] before:-z-10 hover:before:left-0 before:transition-all before:duration-500"
      >
        → See a Live Demo
      </a>
    </section>
  );
};

export default HowItWorks;
