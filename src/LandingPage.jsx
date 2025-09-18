"use client"

import { useState, useEffect, useRef } from "react"
import { Compass, Search, FileText, Mail, PhoneCall, MessageSquare } from "lucide-react"
import { Pencil, CheckCircle, Users } from "lucide-react";
import { useNavigationType, useNavigate } from "react-router-dom";
//import HowItWorks from "./components/HowItWorks";
import { Link } from "react-router-dom"
import { Linkedin, Twitter } from "lucide-react"
import "./LandingPage.css"
import ScrollToTopButton from "./components/ScrollToTopButton"
import HowLink from "./components/HowLink";
import PricingPage from "./components/PricingPage";
import FeatureHighlights from "./components/FeatureHighlights";
import FloatingMenu from "./components/FOB"
import ContactUs from "./components/ContactUs";
import UpdatedFooter from "./components/UpdatedFooter";

//import PlatformHighlightsSection from "./components/PlatformHighlightsSection";
import { MessageCircle, CreditCard, PhoneIncoming, Globe2, Building, Megaphone, ShieldCheck, TrendingUp, Rocket, ToolCase, Check } from "lucide-react";


export default function LandingPage() {
  const [activeTitle, setActiveTitle] = useState(null);
  const [showMore, setShowMore] = useState(false)
  const [showContact, setShowContact] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const navigationType = useNavigationType(); // returns 'POP' | 'PUSH' | 'REPLACE'
  const navigate = useNavigate();

  const sliderImages = ["/images/hero2.png", "/images/3.jpeg", "/images/music.jpg", "/images/Performance.jpg"]

  // Refs for intersection observer
  const heroRef = useRef(null)
  const transformingRef = useRef(null)
  const worksRef = useRef(null)
  const whoRef = useRef(null)
  const whyRef = useRef(null)
  const howRef = useRef(null)
  const featuresRef = useRef(null)
  const aboutRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section")
            setVisibleSections((prev) => new Set([...prev, sectionId]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const sections = [
      { ref: heroRef, id: "hero" },
      { ref: transformingRef, id: "transforming" },
      { ref: worksRef, id: "works" },
      { ref: whoRef, id: "who" },
      { ref: whyRef, id: "why" },
      { ref: howRef, id: "how" },
      { ref: featuresRef, id: "features" },
      { ref: aboutRef, id: "about" },
      { ref: ctaRef, id: "cta" },
    ]

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", id)
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, []);

  useEffect(() => {
    // only restore if we arrived here via browser back/forward
    if (navigationType === "POP") {
      try {
        const pos = sessionStorage.getItem("landingScroll");
        if (pos !== null) {
          // restore scroll position (no smooth to avoid odd animations)
          window.scrollTo({ top: parseInt(pos, 10) || 0, behavior: "auto" });
          sessionStorage.removeItem("landingScroll");
        }
      } catch (err) {
        // ignore storage errors
      }
    }
  }, [navigationType]);

  const moveToWhy = () => {
    navigate("/Why-TheO-Works");
  }

  {/**who is it made for details */}
  const detailsByTitle = {
    "Local Authorities": (
      <>
        <h4>TheO for Local Authorities</h4>
        <p>Get started in days. Go live in weeks. Build smarter systems for years.</p>
        <p>
          TheO was designed with local authority needs at its core. Whether you're starting from a
          paper-based process or looking to integrate with existing digital tools, onboarding is
          flexible, fast, and fully supported by our team.
        </p>
  
        <h5>
          <ToolCase size={16} style={{ marginRight: 8 }} />
          What We Need From You
        </h5>
        <p>To get you live quickly and accurately, we’ll guide you through a short discovery phase. During this step, we’ll ask you to provide information about:</p>
  
        <h6>
          <Check size={14} style={{ marginRight: 8 }} />
          Your Existing Permit Types
        </h6>
        <ul>
          <li>List of permits and licences you currently issue (e.g. events, road closures, trading, filming)</li>
          <li>Whether they are paper-based, online, or partially digitised</li>
          <li>Any associated forms, checklists, or guidance documents</li>
        </ul>
  
        <h6>
          <Check size={14} style={{ marginRight: 8 }} />
          Your Current Approval Workflow
        </h6>
        <ul>
          <li>Departments or roles involved in reviewing each permit type (e.g. Roads, Planning, Environment)</li>
          <li>Internal handoffs and dependencies (e.g. sequencing or conditions)</li>
          <li>Typical timelines and SLAs for each permit type</li>
          <li>Notes on existing bottlenecks or pain points</li>
        </ul>
  
        <h6>
          <Check size={14} style={{ marginRight: 8 }} />
          Your Stakeholder Network
        </h6>
        <ul>
          <li>Statutory agencies involved in your review processes (e.g. Gardaí, Fire Service, HSE)</li>
          <li>Voluntary or local organisations who may provide input or support (e.g. Civil Defence, Order of Malta)</li>
          <li>Any communication formats used (email, meetings, PDFs, calls)</li>
        </ul>
  
        <h6>
          <Check size={14} style={{ marginRight: 8 }} />
          Your System Landscape
        </h6>
        <ul>
          <li>Any current systems or software in use (e.g. CRM, GIS, payments, ticketing)</li>
          <li>Whether integration is required or preferred</li>
          <li>Data protection considerations (e.g. secure email, cloud storage policies)</li>
        </ul>
  
        <h6>
          <Check size={14} style={{ marginRight: 8 }} />
          Your Public Communications
        </h6>
        <ul>
          <li>Existing public event calendars or permit notice boards</li>
          <li>Required public consultation or observation processes</li>
          <li>FOI obligations or compliance considerations</li>
          <li>Accessibility or language requirements for public-facing content</li>
        </ul>
  
        <h5>
          <Compass size={16} style={{ marginRight: 8 }} />
          Our Onboarding Process
        </h5>
        <ol>
          <li><strong>Discovery Session</strong> — We meet your key teams to map permit types, workflows, and review processes.</li>
          <li><strong>Platform Configuration</strong> — We tailor dashboards, workflows, forms and checklists to how you work.</li>
          <li><strong>Stakeholder Setup</strong> — Onboard internal teams and statutory stakeholders with role-based access.</li>
          <li><strong>Testing & Review</strong> — Test with real permit examples and refine before go-live.</li>
          <li><strong>Staff Training & Go-Live</strong> — Train staff, launch live environment and provide support.</li>
        </ol>
  
        <h5>Ongoing Support & Development</h5>
        <ul>
          <li>Dedicated onboarding and support specialist</li>
          <li>Continuous feedback loops and feature updates</li>
          <li>Optional integrations (GIS, CRM, etc.)</li>
          <li>Data ownership stays with you — TheO is controller-neutral</li>
        </ul>
  
        <h5>Benefits for Local Authorities</h5>
        <ul>
          <li>Save time and reduce admin across departments</li>
          <li>Gain real-time visibility of permit activity</li>
          <li>Improve stakeholder collaboration and accountability</li>
          <li>Ensure GDPR-compliant record keeping</li>
          <li>Provide a better experience for the public and applicants</li>
        </ul>
  
        <p>→ <em>Ready to get started?</em> <strong>[Book a Consultation]</strong> • <strong>[Download the Local Authority Onboarding Pack]</strong></p>
      </>
    ),
  
    "Event Organisers & Businesses": (
      <>
        <h4>TheO for Businesses</h4>
        <p><strong>Empowering Businesses with Smarter Planning</strong></p>
        <p>
          Whether you're running a local café, launching a pop-up, planning a promotion, or managing
          logistics across multiple locations, TheO helps businesses plan better and stay informed.
        </p>
  
        <h5>Why Businesses Use TheO</h5>
        <ul>
          <li>Plan Around Disruptions: See real-time road closures, events, and public works near your business.</li>
          <li>Leverage Opportunities: Discover upcoming events where you can trade, promote, or activate your brand.</li>
          <li>Apply for Permits with Ease: Submit applications for signage, temporary trading, or public space use in one streamlined system.</li>
          <li>Stay Compliant: Upload your documents, track application progress, and receive instant updates on your status.</li>
          <li>Access the Vendor Marketplace: List your services and get booked by organisers directly through TheO.</li>
        </ul>
  
        <h5>Permit Types Relevant to Businesses</h5>
        <ul>
          <li>Casual Trading Licences</li>
          <li>Temporary Signage Permits</li>
          <li>Road Occupancy or Street Furniture Applications</li>
          <li>Event Participation Permits</li>
          <li>Parking Bay Suspensions</li>
          <li>Public Promotions / Brand Activations</li>
        </ul>
  
        <h5>How It Works</h5>
        <ol>
          <li>Log in to your business account</li>
          <li>Search for upcoming events or works in your area by date, category, or location</li>
          <li>Apply for relevant permits or express interest in vendor opportunities</li>
          <li>Upload documentation and receive real-time feedback from approving authorities</li>
          <li>Track approvals and get notified instantly once your permit is issued</li>
        </ol>
  
        <h5>Benefits for Local Businesses</h5>
        <ul>
          <li>Make operational decisions with greater confidence</li>
          <li>Save time with guided applications and reusable profiles</li>
          <li>Receive alerts for disruptions or local opportunities</li>
          <li>Improve visibility through TheO's vendor marketplace</li>
        </ul>
  
        <p>→ <strong>[Sign Up Now]</strong> • <strong>[Try our Demo for Your Business]</strong></p>
        <p>For larger commercial operators contact <a href="mailto:business@theo-platform.com">business@theo-platform.com</a>.</p>
      </>
    ),
  
    "Statutory Agencies": (
      <>
        <h4>TheO for Statutory Agencies</h4>
        <p><strong>Early Access. Clear Oversight. Smarter Planning.</strong></p>
        <p>
          TheO gives statutory agencies a direct view into upcoming events, works, and permit applications
          that affect public safety, mobility, and compliance — enabling faster, more coordinated decisions.
        </p>
  
        <h5>Why Statutory Agencies Use TheO</h5>
        <ul>
          <li>Real-Time Alerts when a permit requires your input</li>
          <li>Centralised Access to all relevant applications and documents</li>
          <li>Efficient Review: add comments, conditions, or objections directly in-platform</li>
          <li>Shared Documentation: maps, plans, safety files, risk assessments, insurance</li>
          <li>Cumulative Oversight: local, regional, national activity for planning</li>
        </ul>
  
        <h5>Typical Stakeholders</h5>
        <ul>
          <li>An Garda Síochána</li>
          <li>Fire Services</li>
          <li>Health & Safety Authority (HSA)</li>
          <li>Environmental Protection Agency (EPA)</li>
          <li>Health Service Executive (HSE)</li>
        </ul>
  
        <h5>Key Features for Statutory Reviewers</h5>
        <ul>
          <li>Stakeholder Tagging & Alerts</li>
          <li>Smart Forms to ensure the right information is submitted</li>
          <li>Permit Timeline View</li>
          <li>Audit Trail of comments and decisions</li>
          <li>Secure Role-Based Access</li>
        </ul>
  
        <p>→ <strong>[Request Access]</strong> • <strong>[Schedule a Walkthrough]</strong></p>
        <p>Contact <a href="mailto:statutory@theo-platform.com">statutory@theo-platform.com</a> for enterprise options.</p>
      </>
    ),
  
    "State Agencies": (
      <>
        <h4>TheO for Transportation & State Agencies</h4>
        <p><strong>Plan Ahead. Stay Informed. Keep People Moving.</strong></p>
        <p>
          TheO empowers transport and state authorities with real-time visibility of upcoming permitted activities
          that may impact roads, transit routes, pedestrian flow, and public infrastructure.
        </p>
  
        <h5>Why Transportation & State Authorities Use TheO</h5>
        <ul>
          <li>Live Visibility of future events and works</li>
          <li>Hotspot Mapping to identify clusters by date/time/location</li>
          <li>Early Notifications when permits impact your network</li>
          <li>Integrated Coordination with councils, organisers, and emergency services</li>
          <li>Map-Based Interface and planning dashboards</li>
        </ul>
  
        <h5>Key Features</h5>
        <ul>
          <li>Risk Flags & Overlap Warnings</li>
          <li>Direct Commenting for transport-specific conditions</li>
          <li>Role-Specific Alerts</li>
          <li>Data Export & Planning Dashboards</li>
        </ul>
  
        <p>→ <strong>[Request Transport Access]</strong> • <strong>[Schedule a Platform Tour]</strong></p>
        <p>Contact <a href="mailto:transport@theo-platform.com">transport@theo-platform.com</a> for APIs and custom dashboards.</p>
      </>
    ),
  
    "Voluntary Services": (
      <>
        <h4>TheO for Voluntary Services</h4>
        <p><strong>Be Prepared. Stay Informed. Support Safely.</strong></p>
        <p>
          Voluntary services (Civil Defence, Order of Malta, Irish Red Cross, etc.) get early visibility and access
          to critical information so teams can plan and deploy safely.
        </p>
  
        <h5>Why Voluntary Services Use TheO</h5>
        <ul>
          <li>Advance Notice for events needing support</li>
          <li>Access to key documents: site maps, risk assessments, emergency procedures</li>
          <li>Defined Roles and better coordination with organisers</li>
          <li>Efficient Deployment with location & timing data</li>
        </ul>
  
        <h5>What You Can Do</h5>
        <ul>
          <li>View upcoming events requiring voluntary medical or safety support</li>
          <li>Access logistical and safety documentation</li>
          <li>Confirm availability and provide feedback in-platform</li>
          <li>Support after-action reviews via shared reporting</li>
        </ul>
  
        <p>→ <strong>[Request Access for Your Team]</strong> • <strong>[Schedule a Briefing or Demo]</strong></p>
        <p>Contact <a href="mailto:voluntary@theo-platform.com">voluntary@theo-platform.com</a> for aggregated reporting tools.</p>
      </>
    ),
  
    "Vendors": (
      <>
        <h4>TheO for Vendors & Service Providers</h4>
        <p><strong>Be Visible. Get Booked. Grow Your Business.</strong></p>
        <p>
          TheO helps vendors connect with organisers and local authorities looking for trusted suppliers: showcase offerings,
          manage credentials, and win more work.
        </p>
  
        <h5>Why Vendors Use TheO</h5>
        <ul>
          <li>Dedicated Marketplace and verified vendor directory</li>
          <li>Centralised Profile: upload insurance, certifications, company info</li>
          <li>Easy Bookings & direct contact from organisers</li>
          <li>Reuse documents across jobs and permit types</li>
        </ul>
  
        <h5>Marketplace Categories</h5>
        <ul>
          <li>Infrastructure (stages, tents, fencing)</li>
          <li>Traffic & Safety (marshals, stewards, TM plans)</li>
          <li>Health & Medical (first aid, medics)</li>
          <li>Catering (food vendors, mobile services)</li>
          <li>Sustainability & General Support</li>
        </ul>
  
        <p>→ <strong>[Register Your Company]</strong> • <strong>[Try our Demo for Vendors]</strong></p>
      </>
    ),
  
    "Emergency Services": (
      <>
        <h4>TheO for Emergency Services</h4>
        <p>
          Coordinate response plans and access event details instantly. Emergency services are automatically alerted
          to permits that may impact safety, access or require operational response.
        </p>
  
        <h5>Why Emergency Services Use TheO</h5>
        <ul>
          <li>Immediate notifications for events affecting public safety</li>
          <li>Access to event details, maps and emergency plans</li>
          <li>Coordinate directly with organisers and local authorities in-platform</li>
          <li>Improve pre-event planning and on-the-day response</li>
        </ul>
  
        <p>→ <strong>[Request Access]</strong> • <strong>[Schedule a Walkthrough]</strong></p>
      </>
    ),
  
    "Public": (
      <>
        <h4>TheO for the General Public</h4>
        <p><strong>Stay Informed. Get Involved. Be Heard.</strong></p>
        <p>
          TheO empowers citizens by making local activities more transparent, accessible, and easier to engage with.
          Check road closures, participate in public consultations, or see what’s happening near you.
        </p>
  
        <h5>Why the Public Uses TheO</h5>
        <ul>
          <li>Live Local Info: approved events, roadworks, and public activities</li>
          <li>Alerts & Disruptions: notifications about closures and crowds</li>
          <li>Transparency: see what permits have been issued and what’s pending</li>
          <li>Public Participation: submit observations or feedback</li>
          <li>Privacy-Respecting: no sign-up required to view public data</li>
        </ul>
  
        <h5>What You Can Do</h5>
        <ul>
          <li>Search events/works by date, location, or type</li>
          <li>Access permit summaries and responsible parties</li>
          <li>Check impact notifications (noise, traffic, diversions)</li>
          <li>Participate in consultations and submit comments</li>
          <li>Subscribe to local alerts</li>
        </ul>
  
        <p>→ <strong>[View What’s Happening Near Me]</strong> • <strong>[Submit an Observation or Comment]</strong></p>
      </>
    ),
  };
  const personas = [
    { icon: Building, title: "Local Authorities", desc: "Internal workflows, audits, inter-department sync.", delay: "0.1s" },
    { icon: Megaphone, title: "Event Organisers & Businesses", desc: "All permits in one place + vendor access.", delay: "0.2s" },
    { icon: ShieldCheck, title: "Statutory Agencies", desc: "Real-time alerts, inspection logging, permit conditions.", delay: "0.3s" },
    { icon: FileText, title: "State Agencies", desc: "Regional oversight, policy monitoring, national visibility.", delay: "0.4s" },
    { icon: Users, title: "Voluntary Services", desc: "Stay informed and collaborate with agencies in real time.", delay: "0.5s" },
    { icon: CreditCard, title: "Vendors", desc: "Apply, manage, and track temporary permissions.", delay: "0.6s" },
    { icon: PhoneIncoming, title: "Emergency Services", desc: "Coordinate response plans and access event details instantly.", delay: "0.7s" },
    { icon: Globe2, title: "Public", desc: "View verified events, closures, and comment on local plans.", delay: "0.8s" },
  ];

  return (
    <div className="lp">
      <FloatingMenu />
      <ScrollToTopButton />

      {/* NAV */}
      <header className="lp-nav" id="header">
        <div className="lp-nav-container">
          <img src="/images/logo-3.png" alt="TheO Logo" className="lp-logo logo-entrance" />
          <div className="lp-nav-actions">
            <Link to="/login" className="btn-outline btn-entrance" style={{ "--delay": "0.6s" }}>
              Login
            </Link>
            {/*<Link to="/login" className="btn-solid btn-entrance" style={{ "--delay": "0.7s" }}>
              Dashboard
            </Link>*/}
          </div>
        </div> 
      </header>

      {/* HERO */}
      <section
        ref={heroRef}
        className={`lp-hero ${visibleSections.has("hero") ? "section-visible" : ""}`}
        id="home"
        style={{ backgroundImage: `url(${sliderImages[currentIndex]})` }}
      >
        <div className="lp-hero-content">
          <h1 className="hero-title-spectacular">What permit(s) can we help you with?</h1>
          <p className="hero-subtitle-spectacular">Access permit information and apply online - all from here</p>
          <input type="text" placeholder="Search…" className="lp-search-bar search-spectacular" />
        </div>
      </section>

      {/* TRANSFORMING EVENT PLANNING FRAME */}
      <section
        ref={transformingRef}
        className={`lp-transforming-frame ${visibleSections.has("transforming") ? "section-visible" : ""}`}
      >
        <div className="lp-transforming-content content-slide-spectacular">
          <h1 className="title-slide-spectacular">Transforming Planning with One Seamless Platform</h1>
          <p className="text-fade-spectacular">
          From festivals to roadworks, trading to temporary structures—TheO unifies permit applications, 
          approvals, and oversight into one intuitive system. Built for councils, agencies, businesses, 
          and organisers, it simplifies every step of the permitting process across sectors.
          </p>
          <div className="lp-about-href about-link-spectacular">
              <a
                href="/how-TheO-Works"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/how-TheO-Works");
                }}
              >
                Explore how it works
              </a>
          </div>
          <p>TheO is a multi-permit platform for businesses, events, works, and trading—designed to streamline workflows, reduce risk, and ensure smarter governance.</p>
        </div>
        <div className="lp-transforming-image image-slide-spectacular">
          <img src="/images/4.jpeg" alt="Illustration of seamless event planning" />
        </div>
      </section>

      {/* WHO IT'S MADE FOR new: One system. Multiple users. Real impact. 
      <section
        ref={whoRef}
        id="who"
        className={`lp-section--padded ${visibleSections.has("who") ? "section-visible" : ""}`}
      >
        <h1 className="lp-section-title-who title-spectacular">One system. Multiple users. Real impact.</h1>
        <h3>TheO supports the full ecosystem of permitting — making life easier for councils, organisers, agencies, businesses, and citizens alike. Click below to see how each stakeholder benefits:</h3>
        <div className="lp-who-grid">
          {[
            {
              icon: Building,
              title: "Local Authorities",
              desc: "Internal workflows, audits, inter‑department sync.",
              delay: "0.1s",
            },
            {
              icon: Megaphone,
              title: "Event Organisers & Businesses",
              desc: "All permits in one place + vendor access.",
              delay: "0.2s",
            },
            {
              icon: ShieldCheck,
              title: "Statutory Agencies",
              desc: "Real‑time alerts, inspection logging, permit conditions.",
              delay: "0.3s",
            },
            {
              icon: FileText,
              title: "State Agencies",
              desc: "Regional oversight, policy monitoring, national visibility.",
              delay: "0.4s",
            },
            {
              icon: Users,
              title: "Voluntary Services",
              desc: "Stay informed and collaborate with agencies in real time.",
              delay: "0.5s",
            },
            {
              icon: CreditCard,
              title: "Vendors",
              desc: "Apply, manage, and track temporary permissions.",
              delay: "0.6s",
            },
            {
              icon: PhoneIncoming,
              title: "Emergency Services",
              desc: "Coordinate response plans and access event details instantly.",
              delay: "0.7s",
            },
            {
              icon: Globe2,
              title: "Public",
              desc: "View verified events, closures, and comment on local plans.",
              delay: "0.8s",
            },
          ].map((item, index) => (
            <div key={index} className="persona-card persona-spectacular" style={{ "--delay": item.delay }}>
              <item.icon className="persona-icon icon-spectacular" />
              <div className="persona-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{marginTop: 20}}>
          TheO Adapts to You - With role-based access and workflow controls, TheO delivers a tailored experience for each user type — 
          while maintaining transparency, consistency, and compliance across the board.
        </p>
        <div className="lp-feature-ctas--bottom">
          <button className="btn-primary">Book a demo</button>
          <button className="btn-secondary-outline" onClick={() => setShowContact(true)}>Contact the team</button>
          <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
        </div>
      </section>*/}
      <section
  ref={whoRef}
  id="who"
  className={`lp-section--padded ${visibleSections.has("who") ? "section-visible" : ""}`}
  style={{ position: "relative", overflow: "visible" }}
>
  <h1 className="lp-section-title-who title-spectacular">One system. Multiple users. Real impact.</h1>
  <p>
    TheO supports the full ecosystem of permitting — making life easier for councils, organisers, agencies, businesses,
    and citizens alike. Click below to see how each stakeholder benefits:
  </p>

  <div
    className="lp-who-grid"
    onMouseLeave={() => setActiveTitle(null)}
  >
    {personas.map((item, index) => {
      const Icon = item.icon;
      return (
        <div
          key={index}
          className="persona-card persona-spectacular"
          style={{ "--delay": item.delay }}
          onMouseEnter={() => setActiveTitle(item.title)}
          onFocus={() => setActiveTitle(item.title)}
          onBlur={() => setActiveTitle(null)}
          tabIndex={0}
        >
          <Icon className="persona-icon icon-spectacular" />
          <div className="persona-content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      );
    })}
  </div>

  <p style={{ marginTop: 20 }}>
    TheO Adapts to You - With role-based access and workflow controls, TheO delivers a tailored experience for each user type —
    while maintaining transparency, consistency, and compliance across the board.
  </p>

  <div className="lp-feature-ctas--bottom">
    <button className="btn-primary">Book a demo</button>
    <button className="btn-secondary-outline" onClick={() => setShowContact(true)}>Contact the team</button>
    <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
  </div>

  {/* Child detail panel that slides up from beneath the parent section */}
  <div className={`persona-detail-panel ${activeTitle ? "visible" : ""}`} aria-hidden={!activeTitle}>
    <div className="persona-detail-panel-inner">
      <div className="persona-detail-header">
        <h4>{activeTitle || ""}</h4>
        <button
          className="persona-detail-close"
          type="button"
          onClick={() => setActiveTitle(null)}
          aria-label="Close details"
        >
          ×
        </button>
      </div>

      <div className="persona-detail-body">
        {activeTitle ? detailsByTitle[activeTitle] : null}
      </div>
    </div>
  </div>
</section>


      {/* HOW IT WORKS */}
      <section
        ref={howRef}
        id="how"
        className={`lp-how-it-works ${visibleSections.has("how") ? "section-visible" : ""}`}
      >
      
        <h2 className="lp-section-title title-spectacular">How It Works</h2>
        <div className="lp-steps">
          {[
            {
              icon: Pencil,
              title: "1. Start Application",
              desc: "Begin your event application online.",
              delay: "0.1s",
            },
            { icon: CheckCircle, title: "2. Internal Review", desc: "Review by internal authorities.", delay: "0.2s" },
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
          ].map((step, index) => (
            <div key={index} className="lp-step step-spectacular" style={{ "--delay": step.delay }}>
              <step.icon className="lp-step-icon step-icon-spectacular" />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        
        <a href="#live-demo" className="lp-live-demo demo-link-spectacular">
          → See a Live Demo
        </a>
        <HowLink>How it works</HowLink>
      </section>
      {/*<HowItWorks howRef={{howRef}} visibleSections={{visibleSections}} />*/}

      {/* Why TheO Works Better --combined to merged section */}
      <section id="features" className="lp-works-section">
      {/* Component 1: kept exactly as provided */}
      <h1 className="lp-section-title">Why TheO Works</h1>
      <h3>Because Permits Shouldn’t Be a Puzzle.</h3>
      <p>
        Permits affect everything from public safety and business operations to community engagement and
        infrastructure planning. But for too long, outdated systems, siloed processes, and endless back-and-forth
        have made permitting slow, confusing, and inefficient.
        TheO changes that—by unifying permit workflows, simplifying compliance, and giving every stakeholder the visibility and tools they need to make smarter,
        faster decisions.
      </p>

      <div className="lp-works-grid">
        {/* Dashboard */}
        <div className="lp-card">
          <div className="lp-card-row">
            <Compass className="lp-card-icon" />
            <span className="lp-icon-title">Dashboard</span>
          </div>
          <h3>All-in-One Dashboard</h3>
          <p>Manage permits, timelines & payments in one place.</p>
        </div>

        {/* Approvals */}
        <div className="lp-card">
          <div className="lp-card-row">
            <Search className="lp-card-icon" />
            <span className="lp-icon-title">Approvals</span>
          </div>
          <h3>Transparent Approvals</h3>
          <p>Real-time tracking & stakeholder feedback.</p>
        </div>

        {/* Collaboration */}
        <div className="lp-card">
          <div className="lp-card-row">
            <MessageCircle className="lp-card-icon" />
            <span className="lp-icon-title">Collaboration</span>
          </div>
          <h3>Built for Collaboration</h3>
          <p>Seamless communication across departments.</p>
        </div>

        {/* Docs */}
        <div className="lp-card">
          <div className="lp-card-row">
            <FileText className="lp-card-icon" />
            <span className="lp-icon-title">Docs</span>
          </div>
          <h3>Instant Documentation</h3>
          <p>Auto-generated permits, compliance reports, and more.</p>
        </div>

        <div className="lp-card">
          <div className="lp-card-row">
            <Rocket className="lp-card-icon" />
            <span className="lp-icon-title">Efficiency</span>
          </div>
          <h3>Cut Processing Time</h3>
          <p>Reduces overall application time by 80%.</p>
        </div>
{/*
        <div className="lp-card">
          <div className="lp-card-row">
            <Landmark className="lp-card-icon" />
            <span className="lp-icon-title">Trusted</span>
          </div>
          <h3>Trusted Locally</h3>
          <p>Already adopted by Fingal County Council.</p>
        </div>
*/}
        <div className="lp-card">
          <div className="lp-card-row">
            <TrendingUp className="lp-card-icon" />
            <span className="lp-icon-title">Scalable</span>
          </div>
          <h3>National Scalability</h3>
          <p>Built to scale: locally, regionally & nationally</p>
        </div>
      </div>

      {/* === Appended content from Component 2 ===
          - Component 1 above was NOT modified.
          - The persona cards from Component 2 are appended below and converted to `.lp-card`
            so they visually match the first group's cards. */}


 
      <div className="lp-feature-ctas--bottom" style={{ marginTop: 20 }}>
        <button className="btn-primary" onClick={moveToWhy}>More Information</button>
        <button className="btn-secondary-outline">How it works</button>
        <button className="btn-primary">Book a Demo</button>
        <button className="btn-secondary-outline" onClick={() => setShowContact(true)}>Contact the Team</button>
        <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
      </div>
    </section>


      {/* FEATURES & BENEFITS */}
      <FeatureHighlights ref={featuresRef} visible={visibleSections.has("features")} />
      {/*<PlatformHighlightsSection />*/}
{/* 
      <section
        ref={featuresRef}
        id="features"
        className={`lp-features ${visibleSections.has("features") ? "section-visible" : ""}`}
      >
        <h2 className="lp-section-title title-spectacular">Features & Benefits</h2>
        <h4>
          Permits are central to how we use and share public space. From events and road closures to 
          street trading, signage, and temporary structures, they impact safety, operations, business, and community life. 
          But traditional permitting systems are fragmented, outdated, and hard to navigate.
          TheO replaces all of that with a smarter, unified platform that works for everyone.
        </h4>
        <div className="lp-feature-cards">
          {[
            {
              title: "A. Event Planning Made Easy",
              items: ["Smart Form Guidance", "Live Calendar", "Automated Risk Templates"],
              delay: "0.1s",
            },
            {
              title: "B. Compliance & Safety First",
              items: ["Inspection Tools", "Audit Trails", "Real-Time Messaging"],
              delay: "0.2s",
            },
            {
              title: "C. Built for Collaboration",
              items: ["Multi-agency access", "Secure Document Storage", "GDPR-Compliant Hosting"],
              delay: "0.3s",
            },
          ].map((feature, index) => (
            <div key={index} className="lp-feature-card feature-card-spectacular" style={{ "--delay": feature.delay }}>
              <h3>{feature.title}</h3>
              <ul>
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="feature-item-spectacular"
                    style={{ "--delay": `${0.1 + itemIndex * 0.1}s` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="lp-feature-ctas--bottom">
          <button className="btn-secondary-outline">Learn More</button>
        </div>

      </section>
      */}

      {/*new section under the features and benefits section */}
      {/*<PricingPage />*/}

      {/* ABOUT SECTION */}
      <section
        ref={aboutRef}
        id="about"
        className={`lp-section lp-about-section ${visibleSections.has("about") ? "section-visible" : ""}`}
      >
        <div className="lp-about">
          <div className="lp-about-text about-text-spectacular">
            <h2>About Us</h2>
            <p style={{marginBottom: 20}}>
              TheO is transforming how local governments, organisers, and the public manage shared spaces.
              Born from real-world industry experience and built in collaboration with councils and agencies, 
              TheO is Ireland’s first unified platform for multi-permit management—streamlining everything from 
              applications to approvals, payments, safety compliance, and public engagement.

              Our mission is simple: make permitting easier, safer, and smarter for everyone.

            </p>
            {/*<ul>
              <li className="about-item-spectacular" style={{ "--delay": "0.1s" }}>
                Phase 1: National rollout across Ireland
              </li>
              <li className="about-item-spectacular" style={{ "--delay": "0.2s" }}>
                Phase 2: Expansion across UK & EU
              </li>
              <li className="about-item-spectacular" style={{ "--delay": "0.3s" }}>
                Phase 3: Global integration with AI & forecasting
              </li>
            </ul>*/}
            <div className="lp-about-href about-link-spectacular">
              <a
                href="/learn-more"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/learn-more");
                }}
              >
                Learn More About Our Vision
              </a>
            </div>
          </div>
          <div className="lp-about-image about-image-spectacular">
            <img src="/images/about.jpg" alt="City hall" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        ref={ctaRef}
        className={`lp-cta ${visibleSections.has("cta") ? "section-visible" : ""}`}
      >
          <div className="cta-content">
            <img
              src="/images/logo-1.png"    // ← replace this with your real image path
              alt="Illustration: connecting people and services"
              className="cta-image"
              width="180"
              height="160"
            />
            <div className="cta-title-holder">
            <h2 className="lp-cta-title cta-title-spectacular">
              Connecting People, Permits & Public Services.
            </h2>
            </div>
            
        </div>
        <div className="lp-cta-footer cta-footer-spectacular">
          <button className="btn-demo cta-button-spectacular">Book Your Demo</button>
          <button className="btn-secondary-outline" onClick={() => setShowContact(true)}>Contact the Team</button>
          <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
            <span
              className="lp-cta-link-wrapper cta-link-spectacular"
              style={{ "--delay": "0.2s" }}
            >
              <a href="#faqs">Explore FAQs</a>
            </span>

        </div>
      </section>


      {/* FOOTER */}
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
          </nav>*/}{/** 
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
            {/*<p><PhoneCall size={16} color="#ffff" style={{ marginRight: 5}} /> +353 1 234 5678</p>*/}{/*
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
      </footer> */}
    </div>
  )
}
