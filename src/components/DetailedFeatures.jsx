// DetailedFeatures.jsx
import React from "react";
import {
  CheckCircle,
  BarChart3,
  FileSpreadsheet,
  TrendingDown,
  Building2,
  Siren,
  Tent,
  Wrench,
  Bus,
  HeartPulse,
  Store,
  Users,
} from "lucide-react";
import "./DetailedFeatures.css";
import LPHeader from "./MiniHeader";
import UpdatedFooter from "./UpdatedFooter";

const DetailedFeatures = () => {
  return (
    <div className="df-page-wrapper">
      <LPHeader />

      {/* Key Features Section */}
      <section className="df-section" aria-labelledby="features-heading">
        <h2 id="features-heading" className="df-heading">
          Key Features &amp; Functions
        </h2>

        <div className="df-grid df-features" role="list">
          <article
            className="df-card"
            tabIndex={0}
            role="listitem"
            aria-label="Permit Management Made Easy"
          >
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <FileSpreadsheet />
              </span>
              Permit Management Made Easy
            </h3>
            <ul>
              <li>Apply once for all relevant permits (e.g. events, roads, trading)</li>
              <li>Dashboard views for applicants and reviewers</li>
              <li>Calendar and timeline tracking for ongoing activities</li>
            </ul>
          </article>

          <article className="df-card" tabIndex={0} role="listitem" aria-label="Planning & Visibility">
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <BarChart3 />
              </span>
              Planning &amp; Visibility
            </h3>
            <ul>
              <li>Interactive maps showing all planned public activities</li>
              <li>Overlap warnings and cumulative impact visualisation</li>
              <li>Hotspot analysis for transport and emergency planning</li>
            </ul>
          </article>

          <article
            className="df-card"
            tabIndex={0}
            role="listitem"
            aria-label="Compliance & Risk Tools"
          >
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <CheckCircle />
              </span>
              Compliance &amp; Risk Tools
            </h3>
            <ul>
              <li>Uploads for risk assessments, EMPs, insurance, TM plans</li>
              <li>Auto-generated documents and templated forms</li>
              <li>Built-in role-based reviews and sign-off workflows</li>
            </ul>
          </article>

          <article className="df-card" tabIndex={0} role="listitem" aria-label="Data & Insights">
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <TrendingDown />
              </span>
              Data &amp; Insights
            </h3>
            <ul>
              <li>Reporting for activity trends, bottlenecks, and approvals</li>
              <li>Audit trail of every application, comment, and condition</li>
              <li>Exportable data for policy, tourism, and planning teams</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="df-section" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="df-heading">
          Benefits for Every User
        </h2>

        <div className="df-grid df-benefits" role="list">
          <article className="df-card" tabIndex={0} role="listitem" aria-label="Local Authorities">
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <Building2 />
              </span>
              Local Authorities
            </h3>
            <ul>
              <li>Save time with streamlined workflows</li>
              <li>Improve cross-departmental visibility and approval times</li>
              <li>Centralised compliance, payment, and reporting tools</li>
            </ul>
          </article>

          <article className="df-card" tabIndex={0} role="listitem" aria-label="Statutory Agencies">
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <Siren />
              </span>
              Statutory Agencies
            </h3>
            <ul>
              <li>Be notified early when relevant permits are submitted</li>
              <li>Access key safety files and plans instantly</li>
              <li>Add and track conditions for better public safety outcomes</li>
            </ul>
          </article>

          <article
            className="df-card"
            tabIndex={0}
            role="listitem"
            aria-label="Event Organisers and Traders"
          >
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <Tent />
              </span>
              Event Organisers &amp; Traders
            </h3>
            <ul>
              <li>One clear, guided application for all your needs</li>
              <li>Track permit progress and respond to reviewer comments</li>
              <li>Auto-generate compliant EMPs to save time and ensure approval</li>
            </ul>
          </article>

          <article className="df-card" tabIndex={0} role="listitem" aria-label="Construction and Utilities">
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <Wrench />
              </span>
              Construction &amp; Utilities
            </h3>
            <ul>
              <li>Apply for multiple permits in one go</li>
              <li>Avoid clashes with other works or public events</li>
              <li>Upload TM plans, get real-time updates, and track approvals</li>
            </ul>
          </article>

          <article className="df-card" tabIndex={0} role="listitem" aria-label="Transportation Agencies">
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <Bus />
              </span>
              Transportation Agencies
            </h3>
            <ul>
              <li>View real-time maps of activities impacting roads and transit</li>
              <li>Identify hotspots and plan additional services</li>
              <li>Collaborate with councils and emergency services instantly</li>
            </ul>
          </article>

          <article
            className="df-card"
            tabIndex={0}
            role="listitem"
            aria-label="Voluntary and Emergency Services"
          >
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <HeartPulse />
              </span>
              Voluntary &amp; Emergency Services
            </h3>
            <ul>
              <li>Access site plans, safety details, and expected attendance</li>
              <li>Coordinate deployment with real-time info</li>
              <li>Contribute to post-event reports and system feedback</li>
            </ul>
          </article>

          <article className="df-card" tabIndex={0} role="listitem" aria-label="Businesses and Vendors">
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <Store />
              </span>
              Businesses &amp; Vendors
            </h3>
            <ul>
              <li>Plan around disruptions with public access tools</li>
              <li>Apply for space or short-term permits with ease</li>
              <li>Be found by organisers via the vendor marketplace</li>
            </ul>
          </article>

          <article className="df-card" tabIndex={0} role="listitem" aria-label="General Public">
            <h3 className="df-subheading">
              <span className="df-icon" aria-hidden="true">
                <Users />
              </span>
              General Public
            </h3>
            <ul>
              <li>See what’s happening near you</li>
              <li>Get alerts about noise, traffic, or closures</li>
              <li>Participate in consultations and stay engaged with your community</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="df-section" aria-labelledby="why-heading">
        <h2 id="why-heading" className="df-heading">
          Why It Matters
        </h2>
        <p className="df-text">
          Permitting is about more than permission, it’s about transparency, safety, and trust.
          Poor processes lead to delays, confusion, public frustration, and avoidable risk.
        </p>
        <p className="df-text">
          TheO sets a new standard by making permitting fair, efficient, and easy to manage for
          everyone involved.
        </p>
      </section>

      {/* Explore Section */}{/**
      <section className="df-section df-explore" aria-labelledby="explore-heading">
        <h2 id="explore-heading" className="df-heading">
          Explore TheO
        </h2>
        <div className="df-links">
          <a href="#how" className="df-link" aria-label="See How It Works">
            See How It Works
          </a>
          <a href="#demo" className="df-link" aria-label="Try our Demo">
            Try our Demo
          </a> 
        </div>
      </section>*/}

      <UpdatedFooter />
    </div>
  );
};

export default DetailedFeatures;
