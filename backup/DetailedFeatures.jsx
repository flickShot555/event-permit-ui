import React from "react";
import { CheckCircle, BarChart3, FileSpreadsheet, TrendingDown, Building2, Siren, Tent, Wrench, Bus, HeartPulse, Store, Users } from "lucide-react";
import "./DetailedFeatures.css";
import LPHeader from "../src/components/MiniHeader";
import UpdatedFooter from "../src/components/UpdatedFooter";

const DetailedFeatures = () => {
  return (
    <div className="df-page-wrapper">
    <LPHeader />
      {/* Key Features Section */}
      <section className="df-section">
        <h2 className="df-heading">Key Features & Functions</h2>

        <div className="df-feature-block">
          <div className="df-icon"><FileSpreadsheet /></div>
          <h3 className="df-subheading">Permit Management Made Easy</h3>
          <ul>
            <li>Apply once for all relevant permits (e.g. events, roads, trading)</li>
            <li>Dashboard views for applicants and reviewers</li>
            <li>Calendar and timeline tracking for ongoing activities</li>
          </ul>
        </div>

        <div className="df-feature-block">
          <div className="df-icon"><BarChart3 /></div>
          <h3 className="df-subheading">Planning & Visibility</h3>
          <ul>
            <li>Interactive maps showing all planned public activities</li>
            <li>Overlap warnings and cumulative impact visualisation</li>
            <li>Hotspot analysis for transport and emergency planning</li>
          </ul>
        </div>

        <div className="df-feature-block">
          <div className="df-icon"><CheckCircle /></div>
          <h3 className="df-subheading">Compliance & Risk Tools</h3>
          <ul>
            <li>Uploads for risk assessments, EMPs, insurance, TM plans</li>
            <li>Auto-generated documents and templated forms</li>
            <li>Built-in role-based reviews and sign-off workflows</li>
          </ul>
        </div>

        <div className="df-feature-block">
          <div className="df-icon"><TrendingDown /></div>
          <h3 className="df-subheading">Data & Insights</h3>
          <ul>
            <li>Reporting for activity trends, bottlenecks, and approvals</li>
            <li>Audit trail of every application, comment, and condition</li>
            <li>Exportable data for policy, tourism, and planning teams</li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="df-section">
        <h2 className="df-heading">Benefits for Every User</h2>

        <div className="df-benefit-block">
          <div className="df-icon"><Building2 /></div>
          <h3 className="df-subheading">Local Authorities</h3>
          <ul>
            <li>Save time with streamlined workflows</li>
            <li>Improve cross-departmental visibility and approval times</li>
            <li>Centralised compliance, payment, and reporting tools</li>
          </ul>
        </div>

        <div className="df-benefit-block">
          <div className="df-icon"><Siren /></div>
          <h3 className="df-subheading">Statutory Agencies</h3>
          <ul>
            <li>Be notified early when relevant permits are submitted</li>
            <li>Access key safety files and plans instantly</li>
            <li>Add and track conditions for better public safety outcomes</li>
          </ul>
        </div>

        <div className="df-benefit-block">
          <div className="df-icon"><Tent /></div>
          <h3 className="df-subheading">Event Organisers & Traders</h3>
          <ul>
            <li>One clear, guided application for all your needs</li>
            <li>Track permit progress and respond to reviewer comments</li>
            <li>Auto-generate compliant EMPs to save time and ensure approval</li>
          </ul>
        </div>

        <div className="df-benefit-block">
          <div className="df-icon"><Wrench /></div>
          <h3 className="df-subheading">Construction & Utilities</h3>
          <ul>
            <li>Apply for multiple permits in one go</li>
            <li>Avoid clashes with other works or public events</li>
            <li>Upload TM plans, get real-time updates, and track approvals</li>
          </ul>
        </div>

        <div className="df-benefit-block">
          <div className="df-icon"><Bus /></div>
          <h3 className="df-subheading">Transportation Agencies</h3>
          <ul>
            <li>View real-time maps of activities impacting roads and transit</li>
            <li>Identify hotspots and plan additional services</li>
            <li>Collaborate with councils and emergency services instantly</li>
          </ul>
        </div>

        <div className="df-benefit-block">
          <div className="df-icon"><HeartPulse /></div>
          <h3 className="df-subheading">Voluntary & Emergency Services</h3>
          <ul>
            <li>Access site plans, safety details, and expected attendance</li>
            <li>Coordinate deployment with real-time info</li>
            <li>Contribute to post-event reports and system feedback</li>
          </ul>
        </div>

        <div className="df-benefit-block">
          <div className="df-icon"><Store /></div>
          <h3 className="df-subheading">Businesses & Vendors</h3>
          <ul>
            <li>Plan around disruptions with public access tools</li>
            <li>Apply for space or short-term permits with ease</li>
            <li>Be found by organisers via the vendor marketplace</li>
          </ul>
        </div>

        <div className="df-benefit-block">
          <div className="df-icon"><Users /></div>
          <h3 className="df-subheading">General Public</h3>
          <ul>
            <li>See what’s happening near you</li>
            <li>Get alerts about noise, traffic, or closures</li>
            <li>Participate in consultations and stay engaged with your community</li>
          </ul>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="df-section">
        <h2 className="df-heading">Why It Matters</h2>
        <p className="df-text">
          Permitting is about more than permission—it’s about transparency, safety, and trust.
          Poor processes lead to delays, confusion, public frustration, and avoidable risk.
        </p>
        <p className="df-text">
          TheO sets a new standard by making permitting fair, efficient, and easy to manage for everyone involved.
        </p>
      </section>

      {/* Explore Section */}
      <section className="df-section df-explore">
        <h2 className="df-heading">Explore TheO</h2>
        <div className="df-links">
          <a href="#how" className="df-link">See How It Works</a>
          <a href="#demo" className="df-link">Try our Demo</a>
        </div>
      </section>
      <UpdatedFooter />
    </div>
  );
};

export default DetailedFeatures;
