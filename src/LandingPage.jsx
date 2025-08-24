"use client"

import { useState, useEffect, useRef } from "react"
import { Compass, Search, FileText } from "lucide-react"
import { Pencil, CheckCircle, Users } from "lucide-react";
//import HowItWorks from "./components/HowItWorks";
import { Link } from "react-router-dom"
import { Linkedin, Twitter } from "lucide-react"
import "./LandingPage.css"
import ScrollToTopButton from "./components/ScrollToTopButton"
import { MessageCircle, CreditCard, PhoneIncoming, Globe2, Building, Megaphone, ShieldCheck, TrendingUp, Rocket, Landmark } from "lucide-react"

export default function LandingPage() {
  const [showMore, setShowMore] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleSections, setVisibleSections] = useState(new Set())

  const sliderImages = ["/images/hero2.png", "/images/3.jpeg", "/images/music.jpg", "/images/performance.jpg"]

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
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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
  }, [])

  return (
    <div className="lp">
      <ScrollToTopButton />

      {/* NAV */}
      <header className="lp-nav">
        <div className="lp-nav-container">
          <img src="/images/logo-3.png" alt="TheO Logo" className="lp-logo logo-entrance" />
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
          <div className="lp-nav-actions">
            <Link to="/login" className="btn-outline btn-entrance" style={{ "--delay": "0.6s" }}>
              Login
            </Link>
            <Link to="/login" className="btn-solid btn-entrance" style={{ "--delay": "0.7s" }}>
              Dashboard
            </Link>
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
          {/*
          {!showMore && (
            <div className="lp-read-more read-more-spectacular" onMouseEnter={() => setShowMore(true)}>
              READ MORE
            </div>
          )}
          {showMore && (
            <div className="lp-more-text more-text-spectacular">
              <p>
                Whether you're applying for a road closure, coordinating with emergency services, or managing multiple
                permits across departments, TheO simplifies it all—automating workflows, ensuring regulatory compliance,
                and unlocking real-time collaboration. For the first time, local authorities, statutory agencies, event
                organizers, and suppliers can work from the same digital ecosystem.
              </p>
              <p>
                Built to support not only public events but also general business permitting, TheO is more than
                software—it's a scalable, future-proof infrastructure for better governance, safer events, and stronger
                community engagement. From local councils to global markets, TheO empowers smarter decision-making
                through data, transparency, and shared insight. It's not just a system—it's the solution the event
                industry has been waiting for.
              </p>
            </div>
          )}*/}
        </div>
        <div className="lp-transforming-image image-slide-spectacular">
          <img src="/images/4.jpeg" alt="Illustration of seamless event planning" />
        </div>
      </section>

      {/* WHO IT'S MADE FOR new: One system. Multiple users. Real impact. */}
      <section
        ref={whoRef}
        id="who"
        className={`lp-section--padded ${visibleSections.has("who") ? "section-visible" : ""}`}
      >
        <h1 className="lp-section-title title-spectacular">One system. Multiple users. Real impact.</h1>
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
          <button className="btn-secondary-outline">Contact the team</button>
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
      </section>
      {/*<HowItWorks howRef={{howRef}} visibleSections={{visibleSections}} />*/}

      {/* Why TheO Works Better --combined to merged section */}
     <section id="features" className="lp-works-section">
        <h1 className="lp-section-title">Why TheO Works</h1>
        <h3>Because Permits Shouldn’t Be a Puzzle.</h3>

        <div className="lp-works-grid">
          {/* Dashboard */}
          <div className="lp-card">
            <div className="lp-card-row">
              <Compass className="lp-card-icon" />
              <span className="lp-icon-title">Dashboard</span>
            </div>
            <h3>
              
              All‑in‑One Dashboard
            </h3>
            <p>Manage permits, timelines & payments in one place.</p>
          </div>

          {/* Approvals */}
          <div className="lp-card">
            <div className="lp-card-row">
              <Search className="lp-card-icon" />
              <span className="lp-icon-title">Approvals</span>
            </div>
            <h3>
              Transparent Approvals
            </h3>
            <p>Real‑time tracking & stakeholder feedback.</p>
          </div>

          {/* Collaboration */}
          <div className="lp-card">
            <div className="lp-card-row">
              <MessageCircle className="lp-card-icon" />
              <span className="lp-icon-title">Collaboration</span>
            </div>
            <h3>
              Built for Collaboration
            </h3>
            <p>Seamless communication across departments.</p>
          </div>

          {/* Docs */}
          <div className="lp-card">
            <div className="lp-card-row">
              <FileText className="lp-card-icon" />
              <span className="lp-icon-title">Docs</span>
            </div>
            <h3>
              Instant Documentation
            </h3>
            <p>Auto‑generated permits, compliance reports, and more.</p>
          </div>
        </div>

        <div className="lp-feature-ctas--bottom">
          <button className="btn-primary">See Real Results</button>
          <button className="btn-secondary-outline">Compare with Paper Process</button>
            </div>
      </section>



     {/* WHY THEO MATTERS */}
      <section className="lp-why-theo-matters" id="why-matters">
          <h3 className="lp-section-title">Why TheO Works -2</h3>
          <p className="lp-section-text">
            Paper‑based permitting systems are no longer scalable. TheO was created in direct consultation with Irish councils, emergency services, and
            stakeholders—digitising every step of the process for faster, safer and smarter planning.
          </p>

          <div className="lp-who-grid">
            <div className="persona-card">
              <Rocket className="persona-icon" />
              <div className="persona-content">
                <h3>Cut Processing Time</h3>
                <p>Reduces overall application time by 80%.</p>
              </div>
            </div>

            <div className="persona-card">
              <Landmark className="persona-icon" />
              <div className="persona-content">
                <h3>Trusted Locally</h3>
                <p>Already adopted by Fingal County Council.</p>
              </div>
            </div>

            <div className="persona-card">
              <TrendingUp className="persona-icon" />
              <div className="persona-content">
                <h3>National Scalability</h3>
                <p>Built to scale across all 31 councils in Ireland.</p>
              </div>
            </div>
          </div>
        </section>


      {/* FEATURES & BENEFITS */}
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

      {/* ABOUT SECTION */}
      <section
        ref={aboutRef}
        id="about"
        className={`lp-section lp-about-section ${visibleSections.has("about") ? "section-visible" : ""}`}
      >
        <div className="lp-about">
          <div className="lp-about-text about-text-spectacular">
            <h2>About Us</h2>
            <h4 style={{marginBottom: 20}}>
              TheO is transforming how local governments, organisers, and the public manage shared spaces.
              Born from real-world industry experience and built in collaboration with councils and agencies, 
              TheO is Ireland’s first unified platform for multi-permit management—streamlining everything from 
              applications to approvals, payments, safety compliance, and public engagement.

              Our mission is simple: make permitting easier, safer, and smarter for everyone.

            </h4>
            <ul>
              <li className="about-item-spectacular" style={{ "--delay": "0.1s" }}>
                Phase 1: National rollout across Ireland
              </li>
              <li className="about-item-spectacular" style={{ "--delay": "0.2s" }}>
                Phase 2: Expansion across UK & EU
              </li>
              <li className="about-item-spectacular" style={{ "--delay": "0.3s" }}>
                Phase 3: Global integration with AI & forecasting
              </li>
            </ul>
            <div className="lp-about-href about-link-spectacular">
              <a href="#vision">Learn More About Our Vision</a>
            </div>
          </div>
          <div className="lp-about-image about-image-spectacular">
            <img src="/images/about.jpg" alt="City hall" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaRef} className={`lp-cta ${visibleSections.has("cta") ? "section-visible" : ""}`}>
        <h2 className="lp-cta-title cta-title-spectacular">
        Connecting People, Permits & Public Services.
        </h2>
        <div className="lp-cta-footer cta-footer-spectacular">
          <button className="btn-demo cta-button-spectacular">Book Your Demo</button>
          <div className="lp-cta-links">
            <span className="lp-cta-link-wrapper cta-link-spectacular" style={{ "--delay": "0.1s" }}>
              <a href="#contact">Contact Integration Team</a>
            </span>
            <span className="lp-cta-link-wrapper cta-link-spectacular" style={{ "--delay": "0.2s" }}>
              <a href="#faqs">Explore FAQs</a>
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer footer-spectacular">
        <div className="lp-footer-container">
          <img
            src="/images/logo-white.png"
            alt="TheO Logo"
            className="lp-footer-col footer-info footer-logo-spectacular"
          />
          <nav className="lp-footer-col footer-nav">
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
          </nav>
          <div className="lp-footer-col footer-contact footer-contact-spectacular">
            <p>✉ hello@theo-platform.com</p>
            <p>📞 +353 1 234 5678</p>
            <p>💬 Live Chat</p>
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
      </footer>
    </div>
  )
}
