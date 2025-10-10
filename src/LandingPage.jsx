"use client"

import { useState, useEffect, useRef } from "react"
import React from "react";
import { 
  Compass, 
  Search, 
  FileText,
  Building,
  Megaphone,
  ShieldCheck,
  Users,
  CreditCard,
  PhoneIncoming,
  Globe2,
  Tool,
  Check,
  X, } from "lucide-react"
import { Pencil, CheckCircle } from "lucide-react";
import { useNavigationType, useNavigate } from "react-router-dom";
//import HowItWorks from "./components/HowItWorks";
import { Link } from "react-router-dom"
//import { Linkedin, Twitter } from "lucide-react"
import "./LandingPage.css"
import ScrollToTopButton from "./components/ScrollToTopButton"
import HowLink from "./components/HowLink";
//import PricingPage from "./components/PricingPage";
import FeatureHighlights from "./components/FeatureHighlights";
import FloatingMenu from "./components/FOB"
import ContactUs from "./components/ContactUs";
import UpdatedFooter from "./components/UpdatedFooter";

//import PlatformHighlightsSection from "./components/PlatformHighlightsSection";
import { MessageCircle, TrendingUp, Rocket, ToolCase } from "lucide-react";


export default function LandingPage() {
  const [activeTitle, setActiveTitle] = useState(null); // hovered/focused card
  const [modalTitle, setModalTitle] = useState(null); // title shown in modal (null = closed)
  const prevFocusRef = useRef(null);
  const modalRef = useRef(null);
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

        <h5>Flexible Options for Every Council</h5>
        <p>Whether you're a small team with a paper-based system or a large 
        metropolitan council with digital infrastructure, TheO adapts to your
         scale and goals</p>
  
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

        <h5>who It's For</h5>
        <ul>
          <li>cafés, bars, restaurants</li>
          <li>Retail stores and shopping centres</li>
          <li>Independent vendors and pop-ups</li>
          <li>Food trucks and mobile providers</li>
          <li>Logistics and delivery teams</li>
        </ul>

        <h5>ready to Get Started?</h5>
        <ol>
          <li>Create your free business profile on TheO</li>
          <li>Browse upcoming events, works, and opportunities</li>
          <li>Apply for permits and manage your applications at one place</li>
        </ol>
  
        <p>→ <strong>[Sign Up Now]</strong> • <strong>[Try our Demo for Your Business]</strong></p>
        <p>For larger commercial operators or organizations managing multiple locations, TheO offers tailored enterprise solutions. Contact us at <a href="mailto:business@theo-platform.com">business@theo-platform.com</a> to learn more.</p>
        <p><strong>TheO makes local planning work for you.</strong></p>
      </>
    ),
  
    "Statutory Agencies": (
      <>
        <h4>TheO for Statutory Agencies</h4>
        <p><strong>Early Access. Clear Oversight. Smarter Planning.</strong></p>
        <p>
          TheO gives statutory agencies a direct view into upcoming events, works, and permit applications
          that affect public safety, mobility, and compliance. Instead of 
          chasing emails or waiting on late notifications, you’ll get 
          immediate access to what matters — enabling faster, more 
          coordinated decisions.
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
          <li>Local authority departments (e.g. planning, transport, emergency response)</li>
        </ul>

        <h5>TheO Enables You To:</h5>
        <ul>
          <li>Identify high-risk activities early and provide preemptive guidance</li>
          <li>Track permit activity by date, region, risk level, or event type</li>
          <li>Collaborate with multiple agencies and applicants in one place</li>
          <li>Set or enforce conditional approvals (e.g. security, crowd control, first aid)</li>
          <li>Contribute to post-event reporting and continuous improvement</li>
        </ul>
  
        <h5>Key Features for Statutory Reviewers</h5>
        <ul>
          <li><strong>Stakeholder Tagging:</strong> Automatically alerted when an application involves your remit</li>
          <li><strong>Smart Forms:</strong> Ensure organisers answer the right questions and submit the correct files</li>
          <li><strong>Permit Timeline View:</strong> See what is happening, when, and where in real time.</li>
          <li><strong>Audit Trail: </strong> Every comment, condition, and decision is logged and timestamped.</li>
          <li><strong>Secure, Role-Based Access:</strong> Only see what’s relevant to your agency or jurisdiction</li>
        </ul>

        <h5>Benefits</h5>
        <ul>
          <li>Reduce communication delays and manual chasing.</li>
          <li>Improve consistency in how permits are reviewed and conditions applied.</li>
          <li>Strenghten safety outcomes through earlier intervention.</li>
          <li>Free up resources with centralised & trackable processes.</li>
          <li>Better coordination acress local and national teams.</li>
        </ul>

        <h5>How to Get Started</h5>
        <ol>
          <li>Request a secure statutory agency account from TheO admin Team.</li>
          <li>Define your regional coverage and review criteria.</li>
          <li>Begin receiving alets and reviewing permits in real time.</li>
          <li>Log feedback and collaboration with other agencies.</li>
          <li>Monitor ativity across your area and contribute to strategic planning</li>
        </ol>

        <p>→ <strong>[Request Access]</strong> • <strong>[Schedule a Walkthrough]</strong></p>
        <p>For national departments or cross-jurisdictional agencies, TheO can 
        provide aggregateeed dashboards and custom data access. Contact <a href="mailto:hello@the-O.io">hello@the-O.io</a> to learn more.</p>
        <p><strong>TheO puts public safety at the centre of every plan.</strong></p>
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
        Voluntary services like Civil Defence, Order of Malta, the Red 
        Cross, and other first aid or support teams play a vital role in 
        the safety and success of public events. TheO ensures your teams 
        are included in the planning process with early visibility and 
        access to critical information.
        </p>
  
        <h5>Why Voluntary Services Use TheO</h5>
        <ul>
          <li><strong>Advance Notice</strong> Get notified when an event or public activity may require your support.</li>
          <li><strong>Access to key documents:</strong> View event plans, site maps, risk assessments, and emergency procedures.</li>
          <li><strong>Defined Roles</strong> See where your services are expected and what level of support is requested</li>
          <li><strong>Improved Coordination:</strong> Communicate directly with organisers and emergency services</li>
          <li><strong>Efficient Deployment:</strong> Use location and timing data to assign resources where they’re needed most</li>
        </ul>
  
        <h5>What You Can Do in TheO</h5>
        <ul>
          <li>View upcoming events requiring voluntary medical or safety support</li>
          <li>Access logistical and safety documentation</li>
          <li>Confirm availability and provide feedback in-platform</li>
          <li>Use location and timing data to assign resources where they’re needed most</li>
          <li>Support after-action reviews via shared reporting</li>
        </ul>
  
        <h5>Key Features for Voluntary Services</h5>
        <ul>
          <li><strong>Stakeholder Alerts:</strong> Be tagged on relevant applications for your region.</li>
          <li><strong>Duty Planning Tools: </strong> See shift times, locations, and estimated attendance.</li>
          <li><strong>Centralised Access: </strong> No more chasing emails or piecing together event info.</li>
          <li><strong>Real-Time Changes: </strong> Stay updated on weather plans, location changes, or last-minute decisions.</li>
          <li><strong>Post-Event Notes: </strong> Upload or review incident reports to support continuous improvement</li>
        </ul>

        <h5>Who is it for</h5>
        <ul>
          <li>Civil defence</li>
          <li>Order of malta</li>
          <li>Irish Red Cross</li>
          <li>First aid volunteers</li>
          <li>Crowd and welfare support teams</li>
        </ul>

        <h5>Benefits</h5>
        <ul>
          <li>Improve preparedness and reduce gaps in medical or safety coverage</li>
          <li>Strengthen relationships with organisers and local authorities</li>
          <li>Ensure clear roles and expectations in advance</li>
          <li>Improve volunteer experience through structured planning</li>
          <li>Contribute meaningfully to public safety outcomes</li>
        </ul>

        <h5>How to Get Started</h5>
        <ol>
          <li>Request a secure voluntary services login from TheO support team</li>
          <li>Define your regional coverage and service capacity</li>
          <li>Begin receiving alerts for events or activities needing your involvement</li>
          <li>Access key documentation and liaise with stakeholders in one platform</li>
          <li>Support event delivery and contribute to post-event reporting</li>
        </ol>

        <p>→ <strong>[Request Access for Your Team]</strong> • <strong>[Schedule a Briefing or Demo]</strong></p>
        <p>For regional or national volunteer organisations, TheO offers aggregated reporting tools and historical access to activity records. Contact <a href="mailto:hello@the-O.io">hello@the-O.io</a> to get started.</p>
        <p><strong>With TheO, your team is informed, integrated, and ready to serve.</strong></p>
      </>
    ),
  //info added till here
    "Vendors": (
      <>
        <h4>TheO for Vendors & Service Providers</h4>
        <p><strong>Be Visible. Get Booked. Grow Your Business.</strong></p>
        <p>
        TheO helps vendors and service providers connect with organisers and local authorities looking for trusted suppliers. Whether you provide staging, fencing, catering, medical cover, signage, traffic management, or any other support services—TheO gives you a central place to showcase your offering, manage credentials, and win more work.
        </p>
  
        <h5>Why Vendors Use TheO</h5>
        <ul>
          <li><strong>Dedicated Marketplace:</strong> List your services in a verified, searchable vendor directory viewed by organisers and councils</li>
          <li><strong>Centralised Profile:</strong> Upload insurance, certifications, company info, and service categories in one place</li>
          <li><strong>Easy Bookings:</strong> Respond to vendor call-outs or be contacted directly by organisers</li>
          <li><strong>Built-in Credibility:</strong> Be seen as a compliant, approved vendor through verified documentation</li>
          <li><strong>Save Time:</strong>Reuse uploaded documents across jobs and permit types</li>
        </ul>

        <h5>What you can do at TheO</h5>
        <ul>
          <li>Create a public or private vendor profile.</li>
          <li>List your services (e.g. security, barriers, AV, sanitation, lighting, signage, traffic plans, food trucks, etc.)</li>
          <li>Upload and update ket documents: insurance certs, company registration, health & safety statements, relevant qualifications.</li>
          <li>Track interest or bookings through your dashboard</li>
          <li>Receive notifications when event organisers or councils search for your category</li>
        </ul>

        <h5>Marketplace Categories</h5>
        <ul>
          <li>Infrastructure (stages, tents, fencing. toilets)</li>
          <li>Traffic & Safety (marshals, stewards, TM plans)</li>
          <li>Health & Medical (first aid, defib hire, medics)</li>
          <li>Equipment (Av, lighting, signage, power)</li>
          <li>Catering (food vendors, beverage stands)</li>
          <li>Sustainability (recycling, water refill stations)</li>
          <li>General Support (cleaning, waste removal, photography)</li>
        </ul>

        <h5>Key Features for Vendors</h5>
        <ul>
          <li><strong>Verified Status: </strong>Vendors with up-to-date documentation appear as “verified” to organisers and councils</li>
          <li><strong>Quick Quotes & Inquiries: </strong>Organisers can contact you directly from your listing</li>
          <li><strong>Smart Filters: </strong>Find opportunities by event type, location, or required services</li>
          <li><strong>Mobile Friendly: </strong>Manage your vendor profile on the go</li>
          <li><strong>Activity Log: </strong>Keep track of interest, inquiries, and bookings in one simple view</li>
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
        TheO empowers citizens by making local activities more transparent, accessible, and easier to engage with. Whether you want to check for road closures, participate in public consultations, or simply understand what’s happening in your area—TheO puts real-time information in your hands.</p>
  
        <h5>Why the Public Uses TheO</h5>
        <ul>
          <li><strong>Live Local Info:</strong> View approved events, roadworks, and other public activities in your area</li>
          <li><strong>Alerts & Disruptions: </strong>nGet notified about road closures, noise notices, and crowd events</li>
          <li><strong>Transparency: </strong>See what permits have been issued and what’s pending</li>
          <li><strong>Public Participation: </strong>Submit observations or feedback as part of the consultation process</li>
          <li><strong>Confidence in Safety: </strong>Trust that permitted activities have gone through proper review</li>
        </ul>
  
        <h5>What You Can Do with TheO</h5>
        <ul>
          <li>Search events/works by date, location, or type</li>
          <li>Access permit summaries and responsible parties</li>
          <li>Check impact notifications (noise, traffic, diversions)</li>
          <li>Read public notices issued by local authorities</li>
          <li>Participate in open consultations and make formal submissions</li>
          <li>Subscribe to alerts for your neighbourhood or route</li>
        </ul>
  
        <h5>key Features</h5>
        <ul>
          <li><strong>Interactive Public Calendar: </strong>View daily, weekly, or monthly activity in your area. Get notified when events you are interested in are planned</li>
          <li><strong>Map-Based Search: </strong>See what’s planned near your home, school, or commute</li>
          <li><strong>Consultation Alerts: </strong>Get notified when the public is invited to comment</li>
          <li><strong>Mobile-Friendly Access: </strong>Stay informed on the go via any device</li>
          <li><strong>Privacy-Respecting:</strong>No sign-up required to view or access public data</li>
        </ul>

        <h5>Benefits</h5>
        <ol>
          <li>Avoid unnecessary disruptions to your day</li>
          <li>Make your voice heard in local planning decisions</li>
          <li>Build community awareness and engagement</li>
          <li>Understand who is responsible for public activities near you</li>
          <li>Foster greater trust between residents and local authorities</li>
        </ol>

        <h5>Who It's For</h5>
        <ul>
          <li>Residents of all ages and backgrounds</li>
          <li>Commuters and transport users</li>
          <li>Parents, teachers, and community leaders</li>
          <li>Concerned citizens who want better local transparency</li>
        </ul>

        <h5>How to Start Using TheO</h5>
        <ol>
          <li>Visit your local council’s TheO public portal</li>
          <li>Search your area or upcoming date range</li>
          <li>Subscribe to receive alerts or updates</li>
          <li>Participate in open consultations when relevant</li>
        </ol>
        <p>→ <strong>[View What’s Happening Near Me]</strong> • <strong>[Submit an Observation or Comment]</strong></p>
        <p><strong>TheO helps build informed, connected, and empowered communities.</strong></p>
      </>
    ),
  };

  const personaSummaries = {
    "Local Authorities": [
      "Fast onboarding: discovery → config → go-live",
      "Provide list of permit types, workflows & stakeholders",
      "Decide integrations (CRM, GIS) and data protection needs",
    ],
    "Event Organisers & Businesses": [
      "Find events/works nearby and apply for permits",
      "Upload docs, track progress, and receive instant updates",
      "Access vendor marketplace and demo account",
    ],
    "Statutory Agencies": [
      "Receive real-time alerts for permit reviews",
      "Centralised access to applications, maps and docs",
      "Add conditions, comments and audit trails",
    ],
    "State Agencies": [
      "Live visibility of events impacting transport/network",
      "Hotspot mapping and early notifications",
      "Role-specific alerts and exportable dashboards",
    ],
    "Voluntary Services": [
      "Advance notice for events needing support",
      "Access site maps, risk assessments and schedules",
      "Confirm availability and provide feedback",
    ],
    "Vendors": [
      "Dedicated marketplace & verified vendor profiles",
      "Upload insurance/certificates and get booked",
      "Reuse documents across permits to save time",
    ],
    "Emergency Services": [
      "Immediate notifications for safety-impacting permits",
      "Access event details, maps and emergency plans",
      "Coordinate directly with organisers and councils",
    ],
    "Public": [
      "See approved events, closures and local alerts",
      "Submit observations or comments on proposals",
      "No sign-up required to view public information",
    ],
  };

  function openModalFor(title) {
    // store current focused element to restore focus when modal closes
    prevFocusRef.current = document.activeElement;
    setModalTitle(title);
    // optional: close hover summary to avoid visual duplication
    // setActiveTitle(null);
    // after modal opens focus handled in effect below
  }

  function closeModal() {
    setModalTitle(null);
    // return focus to previous element
    if (prevFocusRef.current && typeof prevFocusRef.current.focus === "function") {
      prevFocusRef.current.focus();
    }
  }

  // handle Escape and focus-trap/tab-cycling when modal open
  useEffect(() => {
    if (!modalTitle) return;

    const KEY_TAB = 9;
    function onKey(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      } else if (e.keyCode === KEY_TAB) {
        // basic focus trap: keep focus inside modal
        const focusable = modalRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }
    // after modal opens, focus the modal container or its first focusable
    setTimeout(() => {
      if (modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable && focusable.length) {
          focusable[0].focus();
        } else {
          modalRef.current.focus();
        }
      }
    }, 0);
    window.addEventListener("keydown", onKey);
    // prevent background scroll
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = originalOverflow || "";
    };

  }, [modalTitle]);

    // small helper to generate slug (if needed elsewhere)
    function slugFromTitle(title = "") {
      return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    }


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
        <Link to="/">
          <img src="/images/logo-3.png" alt="TheO Logo" className="lp-logo logo-entrance" /></Link>
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

      {/* HERO 
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
      </section>*/}
      <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="2000" // 2 seconds per slide
    >
      <div className="carousel-inner">
        {sliderImages.map((img, index) => (
          <div
            key={img}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "400px", // adjust to your hero height
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Your original hero content */}
            <div className="lp-hero-content d-flex flex-column justify-content-center align-items-center">
              <h1 className="hero-title">
                What permit(s) can we help you with?
              </h1>
              <p className="hero-subtitle">
                Access permit information and apply online - all from here
              </p>
              <input
                type="text"
                placeholder="Search…"
                className="lp-search-bar"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

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
          <p>TheO is a multi-permit platform for businesses, events, works, and trading, designed to streamline workflows, reduce risk, and ensure smarter governance.</p>
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
        {personas.map((item) => {
          const Icon = item.icon;
          const isActive = activeTitle === item.title;
          return (
            <div
              key={item.title}
              className={`persona-card persona-spectacular ${isActive ? "active" : ""}`}
              style={{ ["--delay"]: item.delay }}
              onMouseEnter={() => setActiveTitle(item.title)}
              onFocus={() => setActiveTitle(item.title)}
              onBlur={() => setActiveTitle(null)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveTitle((prev) => (prev === item.title ? null : item.title));
                }
              }}
              aria-pressed={isActive}
              aria-label={item.title}
            >
              <Icon className="persona-icon icon-spectacular" />
              <div className="persona-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}

        {/* Hover panel (kept as your existing class; shows summaries) */}
        {activeTitle && (
          <aside
            className="persona-hover-panel"
            role="dialog"
            aria-labelledby="persona-hover-title"
            onMouseEnter={() => {}}
            onMouseLeave={() => setActiveTitle(null)}
          >
            <div className="panel-header">
              <Compass size={18} style={{ marginRight: 10 }} />
              <h4 id="persona-hover-title">{activeTitle}</h4>
            </div>

            <ul className="panel-list" aria-live="polite">
              {(personaSummaries[activeTitle] || []).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="panel-actions">
              {/* KEEP btn-readmore class (you said no change needed for this button) */}
              <button
                className="btn-readmore"
                onClick={() => openModalFor(activeTitle)}
                aria-label={`Read more about ${activeTitle}`}
              >
                Read more
              </button>
            </div>

            {/**<div className="panel-footer">Quick summary — for full details click <strong>Read more</strong>.</div> */}
          </aside>
        )}
      </div>

      {/* ---------- Modal (renders when modalTitle is set) ---------- */}
      {modalTitle && (
        <div className="pxh-modal-backdrop" role="presentation" onMouseDown={(e) => {
          // close when clicking outside the modal content
          if (e.target.classList && e.target.classList.contains("pxh-modal-backdrop")) {
            closeModal();
          }
        }}>
          <div
            className="pxh-modal-wrap"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pxh-modal-title"
            ref={modalRef}
            tabIndex={-1}
          >
            <header className="pxh-modal-header">
              <div className="pxh-modal-title-row">
                <Compass size={20} style={{ marginRight: 10 }} />
                <h2 id="pxh-modal-title">{modalTitle}</h2>
              </div>
              <button
                className="pxh-close-btn"
                onClick={closeModal}
                aria-label="Close details modal"
              >
                <X size={18} />
              </button>
            </header>

            <div className="pxh-modal-body">
              {/* content area: long content is scrollable */}
              <div className="pxh-modal-content">
                {detailsByTitle[modalTitle] || <p>No details available.</p>}
              </div>
            </div>

            <div className="pxh-modal-footer">
              <div className="pxh-footer-actions">
                <button className="pxh-btn-secondary" onClick={() => {
                  // example: close modal and maybe open a contact or trial flow
                  closeModal();
                }}>Close</button>

                <a
                  className="pxh-btn-primary"
                  
                  onClick={(e) => {
                     setShowContact(true)
                  }}
                >
                  Contact us about {modalTitle}
                </a>
                <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
              </div>
            </div>
          </div>
        </div>
      )}{/**href={`/personas/${slugFromTitle(modalTitle)}#contact`} */}

        <p style={{ marginTop: 20 }}>
          TheO Adapts to You - With role-based access and workflow controls, TheO delivers a tailored experience for each user type —
          while maintaining transparency, consistency, and compliance across the board.
        </p>

        <div className="lp-feature-ctas--bottom">
          {/*<button className="btn-primary">Book a demo</button>*/}
          <button className="btn-secondary-outline" onClick={() => setShowContact(true)}>Contact the team</button>
          <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
        </div>

        {/* Child detail panel that slides up from beneath the parent section 
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
        </div>*/}
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
        {/** 
        <a href="#live-demo" className="lp-live-demo demo-link-spectacular">
          → See a Live Demo
        </a>*/}
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
        <button className="btn-secondary-outline" onClick={moveToWhy}>Why it works</button>
        <Link to="/how-it-works" className="btn-secondary-outline">How it works</Link>
        {/*<button className="btn-primary">Book a Demo</button>*/}
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
              src="/images/blue.png"    // ← replace this with your real image path
              alt="Illustration: connecting people and services"
              className="cta-image"
              width="180"
              height="160"
            />
            <h2 className="lp-cta-title cta-title-spectacular">
              Connecting People, Permits & Public Services.
            </h2>

            
        </div>
        {/**<div className="lp-cta-footer cta-footer-spectacular">
          {/*<button className="btn-demo cta-button-spectacular">Book Your Demo</button>
          <button className="btn-secondary-outline" onClick={() => setShowContact(true)}>Contact the Team</button>
          <ContactUs isOpen={showContact} onClose={() => setShowContact(false)} />
            <span
              className="lp-cta-link-wrapper cta-link-spectacular"
              style={{ "--delay": "0.2s" }}
            >
              <a href="#faqs">Explore FAQs</a>
            </span>

        </div> */}
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
