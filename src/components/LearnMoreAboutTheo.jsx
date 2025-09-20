// src/components/LearnMoreAboutTheO.jsx
import React, { useEffect } from "react";
import LPHeader from "./MiniHeader";
//import UpdatedFooter from "./UpdatedFooter";
import UpdatedFooter from "./UpdatedFooter";

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
    style.innerHTML = `:root{
      --primary: #96bbbb;        /* stronger teal accent */
      --primary-600: #095a64;
      --text: #0f172a;
      --muted: #425066;
      --surface: #ffffff;
      --page-bg: #f7fafc;
      --card-bg: #ffffff;
      --max-width: 100%;
    
      --radius-sm: 8px;
      --radius-md: 12px;
      --gap: 16px;
    
      --shadow-sm: 0 6px 18px rgba(15,23,42,0.06);
      --shadow-md: 0 14px 36px rgba(15,23,42,0.08);
    
      --fs-hero: clamp(1.6rem, 3.5vw, 2.25rem);
      --fs-heading: clamp(1.05rem, 1.2vw, 1.15rem);
      --fs-base: 1rem;
      --lh-relaxed: 1.6;

      --lm-equal-height: 320px; /* tune this */
    }
    
    /* page */
    .learnmore-outer {
      background: var(--page-bg);
      color: var(--text);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .learnmore-container {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 60px clamp(16px, 3vw, 48px) 48px;
      box-sizing: border-box;
    }

    /* make lm-div behave as a reliable flex grid and stretch children */
    .lm-div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 16px;              /* spacing between items */
      align-items: stretch;   /* critical: stretch children to the same height in each row */
      justify-content: flex-start;
    }

    /* predictable children sizing: two columns on desktop, one column on small screens */
    .lm-div > .lm-section {
      /* allow them to grow/shrink — tune the basis for desired column behaviour */
      flex: 1 1 calc(50% - 16px);  /* two columns (50%) with gap accounted for */
      min-width: 260px;           /* prevents them from becoming too small */
      box-sizing: border-box;     /* include padding/border in sizing */
      display: flex;              /* make section a column so content flows naturally */
      flex-direction: column;
    }

    /* ensure inner content can shrink if needed */
    .lm-div > .lm-section * {
      min-width: 0;               /* important: lets text wrap instead of forcing overflow */
    }

    /* responsive: stack on small screens */
    @media (max-width: 700px) {
      .lm-div > .lm-section {
        flex: 1 1 100%;
      }
    }
    
    /* Make children behave predictably in flex */
    .lm-div > * {
      /* allow each child to grow and shrink; prefer a sensible base width */
      flex: 1 1 320px;      /* prefer ~320px but will shrink on small screens */
      min-width: 0;         /* CRITICAL: lets flex items shrink below their content width */
      box-sizing: border-box;
    }
    
    /* Prevent overflow from long words/URLs */
    .lm-div p, .lm-div .lm-card, .lm-div li {
      overflow-wrap: anywhere;   /* or use break-word / break-word fallback */
      word-break: break-word;
    }
    
    /* If you prefer fixed columns on desktop, use this instead of flex-basis above:
    .lm-div { display:flex; flex-wrap:wrap; gap:16px;}
    .lm-div > * { flex: 1 1 calc(33.333% - 16px); min-width:220px; }
    */
    
    /* optional: give clear visual of children during debugging */
    .lm-div.debug > * { outline: 1px dashed rgba(0,0,0,0.08); }
    
    /* HERO / INTRO */
    .lm-hero {
      display: block;
      margin-bottom: 20px;
    }
    
    /* eyebrow / small lead */
    .lm-eyebrow {
      color: var(--primary);
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    
    /* main title - larger and responsive */
    .lm-title {
      font-size: var(--fs-hero);
      line-height: 1.08;
      margin: 8px 0 10px;
      color: var(--text);
      font-weight: 700;
      max-width: 70ch; /* keep heading lines short for readability */
    }
    
    /* lead paragraph */
    .lm-lead {
      margin: 0;
      margin-top: 26px;
      color: var(--muted);
      line-height: var(--lh-relaxed);
      font-size: clamp(1rem, 1.1vw, 1.05rem);
      max-width: 100%;
      display: block;
    }
    
    /* SECTION CARDS */
    .lm-section {
      margin-top: 22px;
      margin-bottom: 22px;
      padding: 28px;
      background: transparent; /* keep page rhythm; card backgrounds are inside */
      border-radius: var(--radius-md);
    }
    
    /* section inner card (visual surface) */
    .lm-section > .section-surface,
    .lm-section { /* style both if you want to wrap content in a surface later */
      background: var(--card-bg);
      border-radius: var(--radius-md);
      padding: 18px;
      border: 1px solid rgba(15,23,42,0.04);
      box-shadow: var(--shadow-sm);
    }
    
    /* section heading */
    .lm-section h3 {
      margin: 0 0 10px;
      font-size: var(--fs-heading);
      color: var(--text);
      font-weight: 700;
      line-height: 1.15;
    }
    
    /* paragraph */
    .lm-paragraph {
      color: var(--muted);
      line-height: var(--lh-relaxed);
      margin: 0 0 12px;
      font-size: var(--fs-base);
    }
    
    /* lists */
    .lm-list {
      margin: 0;
      padding-left: 20px;
      color: var(--muted);
      line-height: 1.6;
      font-size: var(--fs-base);
    }
    .lm-list li {
      margin-bottom: 8px;
    }
    
    /* WHO IT'S FOR grid - fluid layout */
    .lm-grid {
      display: grid;
      gap: var(--gap);
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      margin-top: 12px;
    }
    
    /* individual card inside grid */
    .lm-card {
      background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.98));
      padding: 14px;
      border-radius: var(--radius-sm);
      border: 1px solid rgba(15,23,42,0.04);
      box-shadow: 0 6px 16px rgba(15,23,42,0.04);
      color: var(--text);
      font-weight: 600;
      font-size: 0.98rem;
      transition: transform 180ms ease, box-shadow 180ms ease;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    /* lift + stronger shadow on hover/focus */
    .lm-card:hover,
    .lm-card:focus {
      transform: translateY(-6px);
      box-shadow: var(--shadow-md);
      outline: none;
    }
    
    .lm-card:focus-visible {
      box-shadow: 0 0 0 4px rgba(11,114,133,0.10);
    }
    
    /* CTA area */
    .lm-cta {
      display: flex;
      gap: 12px;
      margin-top: 16px;
      align-items: center;
      flex-wrap: wrap;
    }
    
    /* Buttons */
    .btn {
      padding: 10px 16px;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      font-size: 0.975rem;
      line-height: 1;
      transition: transform 140ms ease, box-shadow 140ms ease, background 120ms ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    
    /* Primary */
    .btn.primary {
      background: var(--primary);
      color: #fff;
      box-shadow: 0 6px 18px rgba(11,114,133,0.08);
    }
    .btn.primary:hover { transform: translateY(-3px); background: var(--primary-600); box-shadow: var(--shadow-md); }
    .btn.primary:focus-visible { outline: 3px solid rgba(11,114,133,0.14); outline-offset: 3px; }
    
    /* Ghost */
    .btn.ghost {
      background: transparent;
      color: var(--text);
      border: 1px solid rgba(15,23,42,0.06);
    }
    .btn.ghost:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(15,23,42,0.04); }
    .btn.ghost:focus-visible { outline: 3px solid rgba(15,23,42,0.06); outline-offset: 3px; }
    
    /* small meta */
    .lm-muted { color: var(--muted); font-size: 0.95rem; }
    
    /* small helpers */
    .lead { font-size: 1.05rem; color: var(--muted); max-width: 65ch; }
    .muted { color: var(--muted); }
    
    /* responsive tweaks */
    @media (min-width: 960px) {
      .lm-hero {
        display: block;
        /* you can switch to a 2-column hero if you add an aside later:
           grid-template-columns: 1fr 420px; gap: 24px;
           For now, keep single-column content but allow space for media. */
      }
    }
    
    /* mobile */
    @media (max-width: 880px) {
      .learnmore-container { padding: calc(var(--lp-header-height, 72px) + 20px) 14px 28px; }
      .lm-title { font-size: clamp(1.5rem, 6vw, 1.85rem); max-width: 62ch; }
      .lm-grid { grid-template-columns: 1fr; }
      .lm-section > .section-surface,
      .lm-section { padding: 14px; }
    }
    
    /* reduce motion for users who prefer it */
    @media (prefers-reduced-motion: reduce) {
      .lm-card, .btn, .lm-card:hover, .lm-card:focus { transition: none !important; transform: none !important; }
    }`;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="learnmore-outer">
      {showHeaderFooter && <LPHeader />}

      <main className="learnmore-container" role="main" aria-labelledby="lm-heading">
        <section className="lm-hero" aria-labelledby="lm-heading">
          <div>
            <div className="lm-title">Learn More About TheO</div>
            <h1 id="lm-heading" className="lm-eyebrow">A Smarter Way to Manage Public Space</h1>
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

        <div className="lm-div">
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
        </div>

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

        <div className="lm-div">
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
        </div>

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

      {showHeaderFooter && <UpdatedFooter />}
    </div>
  );
}
