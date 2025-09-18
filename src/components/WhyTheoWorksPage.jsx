// HowTheoWorksPage.jsx
import React from "react";
import {
  Check,
  Layers,
  Users,
  ShieldCheck,
  Lightbulb,
  MessageSquare,
  MapPin,
  BarChart2,
  FileText,
  Archive,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import UpdatedFooter from "./UpdatedFooter";
import LPHeader from "./MiniHeader";

/**
 * HowTheoWorksPage
 *
 * Props:
 * - Header (component) optional
 * - Footer (component) optional
 * - demoHref (string) optional (defaults to "/demo")
 * - howItWorksHref (string) optional (defaults to "/how-TheO-Works")
 *
 * Usage:
 * <HowTheoWorksPage Header={MyHeader} Footer={MyFooter} />
 */
export default function WhyTheoWorksPage({
  demoHref = "/demo",
  howItWorksHref = "/Why-TheO-Works",
}) {
  return (
    <div className="theo-page-root">
      {/* optional header passed in by the caller (keeps its own styles) */}
      <LPHeader />

      <main className="theo-page__container" role="main">
        <article className="theo-page__card">
          <h1 className="theo-title">Why TheO Works — A New Standard in Permit Management</h1>

          <hr className="theo-sep" />

          <section className="theo-intro">
            <h2 className="theo-subtitle">Permits Touch Everything. TheO Brings It All Together.</h2>
            <p>
              Permits are central to how we use and share public space. From events and road closures to street
              trading, signage, and temporary structures, they impact safety, operations, business, and community life.
              But traditional permitting systems are fragmented, outdated, and hard to navigate. TheO replaces all of
              that with a smarter, unified platform that works for everyone.
            </p>
          </section>

          <hr className="theo-sep" />

          <section className="theo-differentiators">
            <h2 className="section-heading">What Makes TheO Different</h2>

            <ul className="theo-feature-list">
              <li>
                <Check className="theo-icon" />
                <div>
                  <strong>All-in-One Platform</strong>
                  <div className="theo-feature-desc">
                    Apply once and manage every permit type from one place. No duplication, no confusion.
                  </div>
                </div>
              </li>

              <li>
                <Users className="theo-icon" />
                <div>
                  <strong>Stakeholder-Centric Design</strong>
                  <div className="theo-feature-desc">
                    Built with local authorities, statutory bodies, businesses, and event organisers — designed for real
                    workflows and reduced friction.
                  </div>
                </div>
              </li>

              <li>
                <ShieldCheck className="theo-icon" />
                <div>
                  <strong>Built-In Safety and Compliance</strong>
                  <div className="theo-feature-desc">
                    Risk assessments, insurance uploads, inspection checklists and conditional approvals — versioned and
                    time-stamped.
                  </div>
                </div>
              </li>

              <li>
                <Lightbulb className="theo-icon" />
                <div>
                  <strong>Smart Guidance, Not Just Submission</strong>
                  <div className="theo-feature-desc">
                    Tailored prompts, automated documentation and permit suggestions based on the applicant's inputs.
                  </div>
                </div>
              </li>

              <li>
                <MessageSquare className="theo-icon" />
                <div>
                  <strong>Real-Time Communication</strong>
                  <div className="theo-feature-desc">
                    Direct comments, tagging and instant updates between departments and stakeholders — fewer calls and
                    emails.
                  </div>
                </div>
              </li>

              <li>
                <Archive className="theo-icon" />
                <div>
                  <strong>Digital End-to-End</strong>
                  <div className="theo-feature-desc">
                    From application to payment to permit issuance — everything digital, secure and audit-ready.
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <hr className="theo-sep" />

          <section className="theo-key-features">
            <h2 className="section-heading">Key Features &amp; Functions</h2>

            <div className="theo-grid">
              <div className="theo-card">
                <MapPin className="theo-card-icon" />
                <h3>Permit Management Made Easy</h3>
                <ul className="theo-bullets">
                  <li>Apply once for all relevant permits (events, roads, trading)</li>
                  <li>Dashboard views for applicants and reviewers</li>
                  <li>Calendar and timeline tracking for ongoing activities</li>
                </ul>
              </div>

              <div className="theo-card">
                <BarChart2 className="theo-card-icon" />
                <h3>Planning &amp; Visibility</h3>
                <ul className="theo-bullets">
                  <li>Interactive maps showing all planned public activities</li>
                  <li>Overlap warnings and cumulative impact visualisation</li>
                  <li>Hotspot analysis for transport and emergency planning</li>
                </ul>
              </div>

              <div className="theo-card">
                <ShieldCheck className="theo-card-icon" />
                <h3>Compliance &amp; Risk Tools</h3>
                <ul className="theo-bullets">
                  <li>Uploads for risk assessments, EMPs, insurance, TM plans</li>
                  <li>Auto-generated documents and templated forms</li>
                  <li>Role-based reviews and sign-off workflows</li>
                </ul>
              </div>

              <div className="theo-card">
                <FileText className="theo-card-icon" />
                <h3>Data &amp; Insights</h3>
                <ul className="theo-bullets">
                  <li>Reporting for activity trends, bottlenecks, and approvals</li>
                  <li>Audit trail of every application, comment, and condition</li>
                  <li>Exportable data for policy, tourism, and planning teams</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="theo-sep" />

          <section className="theo-benefits">
            <h2 className="section-heading">Benefits for Every User</h2>

            <div className="theo-benefit-grid">
              <div className="benefit">
                <h4>Local Authorities</h4>
                <p>Save time with streamlined workflows, improve cross-departmental visibility and centralise compliance.</p>
              </div>

              <div className="benefit">
                <h4>Statutory Agencies</h4>
                <p>Be notified early when relevant permits are submitted and access key safety files instantly.</p>
              </div>

              <div className="benefit">
                <h4>Event Organisers &amp; Traders</h4>
                <p>One guided application, progress tracking and auto-generated EMPs for faster approvals.</p>
              </div>

              <div className="benefit">
                <h4>Construction &amp; Utilities</h4>
                <p>Apply for multiple permits, avoid clashes and upload TM plans with real-time updates.</p>
              </div>

              <div className="benefit">
                <h4>Transportation Agencies</h4>
                <p>View real-time maps of activities, identify hotspots and coordinate services with partners.</p>
              </div>

              <div className="benefit">
                <h4>Voluntary &amp; Emergency Services</h4>
                <p>Access site plans, safety details and coordinate deployments with up-to-date information.</p>
              </div>

              <div className="benefit">
                <h4>Businesses &amp; Vendors</h4>
                <p>Plan around disruptions, apply for short-term permits and be discoverable via vendor marketplace.</p>
              </div>

              <div className="benefit">
                <h4>General Public</h4>
                <p>See what’s happening nearby, get alerts about closures, and participate in consultations.</p>
              </div>
            </div>
          </section>

          <hr className="theo-sep" />

          <section className="theo-why">
            <h2 className="section-heading">Why It Matters</h2>
            <p>
              Permitting is about more than permission — it’s about transparency, safety and trust. Poor processes lead
              to delays, confusion and avoidable risk. TheO sets a new standard by making permitting fair, efficient,
              and easy to manage for everyone involved.
            </p>
          </section>

          <hr className="theo-sep" />

          <section className="theo-explore">
            <h2 className="section-heading">Explore TheO</h2>

            <div className="theo-actions">
              <Link to={howItWorksHref} className="btn-demo page-cta">
                <Check className="btn-icon" /> See How It Works
              </Link>

              <Link to={demoHref} className="btn-demo page-cta outline">
                <Clock className="btn-icon" /> Try our Demo
              </Link>
            </div>
          </section>
        </article>
      </main>

      {/* optional footer passed in by the caller (keeps its own styles) */}
      <UpdatedFooter />

      {/* ===== Internal CSS (scoped by unique class names) ===== */}
      <style>{`
        /* color tokens */
        .theo-page-root { --accent: #96BBBB; --muted: #324858; --bg: #ffffff; --text: #263238; }

        /* overall container paddings: left & right = 4% */
        .theo-page__container {
          padding-left: 60px;
          padding-right: 4%;
          background: var(--bg);
          color: var(--text);
        }

        .theo-page__card {
          max-width: 100%;
          margin: 28px auto;
          padding: 28px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 22px rgba(18, 24, 29, 0.04);
        }

        .theo-title {
          margin: 0 0 8px;
          font-size: 1.9rem;
          color: var(--muted);
          line-height: 1.25;
          text-align: center;
        }

        .theo-sep {
          border: none;
          height: 2px;
          background: linear-gradient(90deg, rgba(150,187,187,0.08), rgba(150,187,187,0.04));
          margin: 38px 0;
          border-radius: 1px;
        }

        .theo-subtitle {
          font-size: 1.1rem;
          margin: 0 0 12px;
          color: #334b52;
        }

        .theo-intro p {
          margin: 0 0 8px;
          color: #424f52;
          line-height: 1.6;
        }

        .section-heading {
          font-size: 1.15rem;
          color: var(--muted);
          margin-bottom: 12px;
        }

        /* feature list */
        .theo-feature-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 28px;
        }
        .theo-feature-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .theo-icon {
          color: var(--accent);
          min-width: 28px;
          min-height: 28px;
        }

        .theo-feature-desc { color: #4b6465; font-size: 0.95rem; margin-top: 4px; }

        /* key features grid */
        .theo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .theo-card {
          border-radius: 10px;
          padding: 14px;
          background: #fafcfc;
          border: 1px solid rgba(150,187,187,0.06);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .theo-card-icon { color: var(--accent); width: 22px; height: 22px; }

        .theo-card h3 { margin: 0; font-size: 1rem; color: #2f4950; }
        .theo-bullets { margin: 8px 0 0; padding-left: 18px; color: #526b6b; }

        /* benefits grid */
        .theo-benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 8px;
        }
        .benefit h4 { margin: 0 0 6px; font-size: 0.95rem; color: #314a50; }
        .benefit p { margin: 0; color: #4b6465; font-size: 0.92rem; line-height: 1.5; }

        /* explore actions */
        .theo-actions {
          display: flex;
          gap: 12px;
          margin-top: 12px;
          align-items: center;
        }

        .btn-demo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: #fff;
          text-decoration: none;
          padding: 10px 16px;
          border-radius: 10px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 16px rgba(22, 34, 36, 0.06);
        }
        .btn-demo.page-cta .btn-icon { opacity: 0.95; }

        .btn-demo.outline {
          background: transparent;
          color: var(--accent);
          border: 2px solid rgba(50,72,88,0.06);
        }

        .btn-icon { width: 18px; height: 18px; }

        /* responsive */
        @media (max-width: 980px) {
          .theo-feature-list { grid-template-columns: 1fr; }
          .theo-grid { grid-template-columns: 1fr; }
          .theo-benefit-grid { grid-template-columns: repeat(2, 1fr); }
          .theo-card { padding: 12px; }
        }

        @media (max-width: 640px) {
          .theo-benefit-grid { grid-template-columns: 1fr; }
          .theo-page__card { padding: 18px; }
          .theo-title { font-size: 1.45rem; }
          .btn-demo { padding: 9px 12px; font-size: 0.95rem; border-radius: 8px; }
        }
      `}</style>
    </div>
  );
}
