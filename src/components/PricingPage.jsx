"use client"

import { useState } from "react"
import "./PricingPage.css"

const userTypes = ["Local Authorities", "Businesses", "Event Organisers", "Construction", "Stakeholders", "Vendors"]

const pricingData = {
  "Local Authorities": {
    description: "Flexible and scalable pricing tailored to council size and needs",
    subheading: "Role-based access control with comprehensive permitting oversight",
    tiers: [
      {
        name: "Basic",
        price: "€5,000",
        period: "/year",
        description: "Small local authorities (up to 50,000 population)",
        features: [
          "Core permitting tools",
          "Dashboard access",
          "Compliance tracking",
          "Basic support",
          "Document management",
          "Public consultation tools",
          "Basic reporting",
        ],
        popular: false,
      },
      {
        name: "Standard",
        price: "€10,000",
        period: "/year",
        description: "Mid-sized local authorities (50,000-200,000 population)",
        features: [
          "Multi-department workflows",
          "Permit analytics",
          "Shared stakeholder access",
          "Priority support",
          "Advanced reporting",
          "Integration capabilities",
          "Custom workflows",
          "Training included",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "€20,000",
        period: "/year",
        description: "Large city and county councils (200,000+ population)",
        features: [
          "Full access",
          "API integration",
          "Custom workflows",
          "Dedicated support",
          "White-label options",
          "Advanced analytics",
          "Multi-site management",
          "24/7 support",
        ],
        popular: false,
      },
    ],
    userRoles: [
      { role: "Administrator", price: "€2,000", description: "Core account managers with full system access" },
      { role: "Approver", price: "€750", description: "Planning Officers, Fire Officers with approval rights" },
      { role: "Funder", price: "€500", description: "Arts, Culture, Community Officers with funding oversight" },
      { role: "Viewer", price: "€250", description: "View & comment-only access for stakeholders" },
    ],
    addons: [
      {
        name: "Online Staff Training",
        price: "€500 per session",
        description: "Comprehensive one-hour training sessions",
      },
      { name: "White-Label Customisation", price: "From €2,000", description: "Custom branding and interface design" },
      {
        name: "API Access & Integration",
        price: "Included with Premium",
        description: "Full API access for system integration",
      },
      { name: "Advanced Analytics Package", price: "€1,500/year", description: "Enhanced data analysis and reporting" },
      { name: "Multi-language Support", price: "€500 per language", description: "Additional language packs" },
    ],
  },
  Businesses: {
    description: "Smart access to permits, planning, and opportunity",
    subheading: "Streamlined business operations with comprehensive permit management",
    tiers: [
      {
        name: "Sole Trader",
        price: "€200",
        period: "/year",
        description: "Individual businesses with minimal permit needs",
        features: [
          "Single user access",
          "Basic permit applications",
          "Document storage",
          "Email support",
          "Public notices access",
        ],
        popular: false,
      },
      {
        name: "Small Business",
        price: "€500",
        period: "/year",
        description: "Small businesses with occasional permits (1-10 employees)",
        features: [
          "Up to 3 users",
          "Guided applications",
          "Public notices access",
          "Basic support",
          "Calendar integration",
          "Document templates",
        ],
        popular: false,
      },
      {
        name: "Standard",
        price: "€2,500",
        period: "/year",
        description: "Medium businesses with regular permits (10-50 employees)",
        features: [
          "Up to 10 users",
          "Multi-permit access",
          "Tracking & insights",
          "Planning data",
          "Priority support",
          "Advanced reporting",
          "Team collaboration",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "€5,000",
        period: "/year",
        description: "Large businesses needing frequent permits (50+ employees)",
        features: [
          "Unlimited users",
          "Unlimited permit access",
          "Impact mapping",
          "Calendar integration",
          "Dedicated support",
          "API access",
          "Custom workflows",
          "Advanced analytics",
        ],
        popular: false,
      },
    ],
    organisationFeatures: [
      "Multi-location management",
      "Centralised billing",
      "Group reporting",
      "Bulk permit applications",
      "Corporate dashboard",
    ],
    addons: [
      { name: "Additional User Licenses", price: "€50 per user/year", description: "Extra team member access" },
      { name: "Priority Processing", price: "€200 per application", description: "Fast-track permit processing" },
      { name: "Compliance Monitoring", price: "€1,000/year", description: "Automated compliance tracking" },
      { name: "Custom Integrations", price: "From €2,000", description: "Bespoke system integrations" },
    ],
  },
  "Event Organisers": {
    description: "All your permits. One application. Total oversight.",
    subheading: "Comprehensive event management with integrated permit coordination",
    tiers: [
      {
        name: "One-off Events",
        price: "€200",
        period: "/event",
        description: "Single event organisers",
        features: [
          "Single event permit",
          "Basic EMP template",
          "Document uploads",
          "Email support",
          "Stakeholder notifications",
        ],
        popular: false,
        includedTools: ["Basic EMP Generator", "Document Storage", "Email Notifications"],
      },
      {
        name: "Local Organiser",
        price: "€500",
        period: "/year",
        description: "Local or low-volume organisers (1-5 events/year)",
        features: [
          "Up to 5 events/year",
          "Guided permit submission",
          "Document uploads",
          "Calendar sync",
          "Basic support",
          "Template library",
        ],
        popular: false,
        includedTools: ["EMP Generator", "Calendar Integration", "Template Library", "Basic Analytics"],
      },
      {
        name: "Standard",
        price: "€1,500",
        period: "/year",
        description: "Medium-sized promoters (5-20 events/year)",
        features: [
          "Up to 20 events/year",
          "Multi-permit application",
          "Document storage",
          "EMP generator",
          "Stakeholder tools",
          "Risk assessment tools",
          "Team collaboration",
        ],
        popular: true,
        includedTools: [
          "Advanced EMP Generator",
          "Risk Assessment",
          "Stakeholder Portal",
          "Team Dashboard",
          "Event Analytics",
        ],
      },
      {
        name: "Premium",
        price: "€5,000",
        period: "/year",
        description: "Large-scale organisers (20+ events/year)",
        features: [
          "Unlimited events",
          "Unlimited applications",
          "EMP automation",
          "Document reuse",
          "Full team dashboard",
          "Advanced analytics",
          "Priority support",
        ],
        popular: false,
        includedTools: [
          "Full EMP Automation",
          "Advanced Analytics",
          "Multi-site Management",
          "API Access",
          "Custom Workflows",
        ],
      },
      {
        name: "Ultra",
        price: "€20,000",
        period: "/year",
        description: "International/festival promoters",
        features: [
          "Multi-region permits",
          "Stakeholder coordination",
          "API access",
          "Advanced reporting",
          "White-label options",
          "Dedicated account manager",
          "24/7 support",
        ],
        popular: false,
        includedTools: [
          "Enterprise Suite",
          "Multi-region Support",
          "Advanced Integrations",
          "Custom Branding",
          "Dedicated Support",
        ],
      },
    ],
    addons: [
      { name: "Additional Events", price: "€50 per event", description: "Extra events beyond plan limits" },
      { name: "Premium EMP Templates", price: "€200 per template", description: "Industry-specific EMP templates" },
      {
        name: "Stakeholder Coordination Service",
        price: "€500 per event",
        description: "Managed stakeholder communication",
      },
      {
        name: "Risk Assessment Consultation",
        price: "€1,000 per event",
        description: "Professional risk assessment review",
      },
      { name: "Event Insurance Integration", price: "€300/year", description: "Direct insurance provider connections" },
    ],
  },
  Construction: {
    description: "Build smarter. Comply faster. Avoid delays.",
    subheading: "Comprehensive construction permit management with compliance tracking",
    tiers: [
      {
        name: "Basic",
        price: "€500",
        period: "/year",
        description: "Local contractors with occasional works (1-5 projects/year)",
        features: [
          "Up to 5 projects/year",
          "Guided workflows",
          "Document uploads",
          "Local visibility",
          "Basic support",
          "Compliance checklists",
        ],
        popular: false,
        useCases: ["Small renovations", "Minor roadworks", "Residential projects"],
      },
      {
        name: "Standard",
        price: "€2,500",
        period: "/year",
        description: "Mid-sized contractors (5-20 projects/year)",
        features: [
          "Up to 20 projects/year",
          "Traffic management uploads",
          "Permit calendar",
          "Renewal notifications",
          "Priority support",
          "Team collaboration",
          "Progress tracking",
        ],
        popular: true,
        useCases: ["Commercial construction", "Infrastructure projects", "Multi-site operations"],
      },
      {
        name: "Premium",
        price: "€5,000",
        period: "/year",
        description: "Large construction firms (20+ projects/year)",
        features: [
          "Unlimited projects",
          "Unlimited submissions",
          "Multi-zone visibility",
          "Document storage",
          "Risk alerts",
          "Advanced analytics",
          "API integration",
        ],
        popular: false,
        useCases: ["Major infrastructure", "Multi-regional projects", "Complex developments"],
      },
      {
        name: "Enterprise",
        price: "€15,000",
        period: "/year",
        description: "National construction companies",
        features: [
          "Multi-region access",
          "Enterprise dashboard",
          "Custom workflows",
          "Dedicated support",
          "White-label options",
          "Advanced reporting",
          "24/7 support",
        ],
        popular: false,
        useCases: ["National infrastructure", "Government contracts", "International projects"],
      },
    ],
    addons: [
      { name: "Additional Projects", price: "€25 per project", description: "Extra projects beyond plan limits" },
      {
        name: "Environmental Impact Assessment",
        price: "€500 per assessment",
        description: "Professional EIA support",
      },
      {
        name: "Traffic Management Planning",
        price: "€300 per plan",
        description: "Specialist traffic management advice",
      },
      { name: "Health & Safety Compliance", price: "€1,000/year", description: "Enhanced H&S tracking and reporting" },
      {
        name: "Equipment Tracking Integration",
        price: "€200/year",
        description: "Connect with equipment management systems",
      },
    ],
  },
  Stakeholders: {
    description: "Early access. Coordinated response. National oversight.",
    subheading: "Comprehensive stakeholder coordination with real-time visibility",
    tiers: [
      {
        name: "National Access",
        price: "€5,000",
        period: "/year",
        description: "HSE, Gardaí, Transportation Authorities",
        features: [
          "National visibility",
          "Event risk flagging",
          "Inspection scheduling",
          "Interagency coordination",
          "Real-time alerts",
          "Advanced reporting",
          "Priority notifications",
        ],
        popular: true,
        benefits: [
          "Early event notification",
          "Risk assessment access",
          "Resource planning tools",
          "Multi-agency coordination",
          "Historical data access",
        ],
      },
      {
        name: "Regional Access",
        price: "€2,500",
        period: "/year",
        description: "Regional emergency services and authorities",
        features: [
          "Regional visibility",
          "Event notifications",
          "Basic reporting",
          "Coordination tools",
          "Document access",
        ],
        popular: false,
        benefits: [
          "Regional event oversight",
          "Coordination with local authorities",
          "Resource allocation planning",
          "Emergency response preparation",
        ],
      },
      {
        name: "Voluntary Services",
        price: "€1,000",
        period: "/year",
        description: "Order of Malta, Red Cross, Civil Defence",
        features: [
          "Site maps access",
          "Risk data",
          "Real-time updates",
          "Deployment preparation",
          "Event notifications",
          "Basic coordination tools",
        ],
        popular: false,
        benefits: ["Event preparation support", "Risk awareness", "Deployment coordination", "Resource planning"],
      },
      {
        name: "Community Groups",
        price: "€250",
        period: "/year",
        description: "Local community groups and residents associations",
        features: ["Local event visibility", "Community notifications", "Feedback submission", "Basic reporting"],
        popular: false,
        benefits: ["Community awareness", "Input opportunities", "Local coordination"],
      },
    ],
    addons: [
      { name: "Advanced Analytics Package", price: "€1,500/year", description: "Enhanced data analysis and reporting" },
      { name: "Custom Alert Configuration", price: "€500/year", description: "Tailored notification systems" },
      { name: "Training & Onboarding", price: "€1,000 per session", description: "Comprehensive staff training" },
      { name: "API Integration Support", price: "€2,000", description: "Custom system integrations" },
      { name: "24/7 Emergency Access", price: "€2,000/year", description: "Round-the-clock system access" },
    ],
  },
  Vendors: {
    description: "Be found. Be verified. Get booked.",
    subheading: "Comprehensive marketplace presence with verified credentials",
    tiers: [
      {
        name: "Basic",
        price: "€500",
        period: "/year",
        description: "New vendors with minimal marketplace presence",
        features: [
          "Basic listing",
          "Document verification",
          "Inquiry management",
          "Profile setup",
          "Basic search visibility",
        ],
        popular: false,
        includedFeatures: [
          "Company profile page",
          "Basic service listings",
          "Document upload (5 docs)",
          "Inquiry notifications",
          "Basic support",
        ],
      },
      {
        name: "Standard",
        price: "€1,000",
        period: "/year",
        description: "Active event suppliers seeking regular bookings",
        features: [
          "Enhanced listing",
          "Profile branding",
          "Document uploads",
          "Priority support",
          "Featured placement",
          "Customer reviews",
        ],
        popular: true,
        includedFeatures: [
          "Enhanced company profile",
          "Branded service pages",
          "Document upload (20 docs)",
          "Review management",
          "Analytics dashboard",
          "Priority support",
        ],
      },
      {
        name: "Premium",
        price: "€3,000",
        period: "/year",
        description: "High-demand suppliers with established reputation",
        features: [
          "Top-tier listing",
          "Search prioritisation",
          "Dashboard access",
          "Planning tools",
          "Advanced analytics",
          "Lead generation tools",
        ],
        popular: false,
        includedFeatures: [
          "Premium marketplace placement",
          "Advanced analytics suite",
          "Lead management system",
          "Custom branding options",
          "Priority customer support",
          "Integration capabilities",
        ],
      },
      {
        name: "Ultra",
        price: "€5,000",
        period: "/year",
        description: "International suppliers and major service providers",
        features: [
          "Premium functionality",
          "Analytics access",
          "Multi-region support",
          "Organiser tools",
          "API access",
          "White-label options",
        ],
        popular: false,
        includedFeatures: [
          "Enterprise marketplace presence",
          "Multi-region visibility",
          "Advanced integration tools",
          "Dedicated account management",
          "Custom workflow tools",
          "24/7 priority support",
        ],
      },
    ],
    optionalServices: [
      { name: "Featured Listing Boost", price: "€200/month", description: "Enhanced visibility in search results" },
      { name: "Professional Photography", price: "€500 one-time", description: "Professional service photography" },
      { name: "Marketing Content Creation", price: "€300/month", description: "Professional marketing materials" },
      { name: "Lead Generation Plus", price: "€150/month", description: "Advanced lead generation tools" },
      { name: "Multi-language Support", price: "€100 per language/year", description: "Additional language options" },
      { name: "Insurance Verification", price: "€200/year", description: "Automated insurance status verification" },
    ],
  },
}

const CheckIcon = () => (
  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
)

export default function PricingPage() {
  const [selectedUserType, setSelectedUserType] = useState("Local Authorities")

  const currentData = pricingData[selectedUserType]

  return (
    <div className="pricing-page">
      {/* Header */}
      <div className="header">
        <div className="container">
          <h1 className="main-title">Flexible Plans. Scalable Value.</h1>
          <p className="main-subtitle">
            Whether you're a local authority managing hundreds of permits or a vendor offering one service, TheO has a
            pricing model that matches your needs and grows with you.
          </p>
          <div className="enhanced-subtitle">
            <p>
              Designed for Every User: TheO offers scalable pricing tailored to the unique needs of local authorities,
              public agencies, businesses, organisers, and suppliers.
            </p>
          </div>
        </div>
      </div>

      {/* User Type Navigation */}
      <div className="container">
        <div className="user-type-nav">
          {userTypes.map((type) => (
            <button
              key={type}
              className={`nav-button ${selectedUserType === type ? "active" : ""}`}
              onClick={() => setSelectedUserType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Current Selection Header */}
        <div className="section-header">
          <h2 className="section-title">{selectedUserType}</h2>
          <p className="section-description">{currentData.description}</p>
          {currentData.subheading && <p className="section-subheading">{currentData.subheading}</p>}
        </div>

        {/* Pricing Tiers */}
        <div className="pricing-grid">
          {currentData.tiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.popular ? "popular" : ""}`}>
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              <div className="card-header">
                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-description">{tier.description}</p>
                <div className="price-container">
                  <span className="price">{tier.price}</span>
                  <span className="period">{tier.period}</span>
                </div>
              </div>
              <div className="card-content">
                <ul className="features-list">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {tier.includedTools && (
                  <div className="included-tools">
                    <h4 className="tools-title">Included Tools:</h4>
                    <ul className="tools-list">
                      {tier.includedTools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="tool-item">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {tier.useCases && (
                  <div className="use-cases">
                    <h4 className="use-cases-title">Ideal for:</h4>
                    <ul className="use-cases-list">
                      {tier.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="use-case-item">
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {tier.benefits && (
                  <div className="benefits">
                    <h4 className="benefits-title">Key Benefits:</h4>
                    <ul className="benefits-list">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="benefit-item">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {tier.includedFeatures && (
                  <div className="included-features">
                    <h4 className="included-features-title">What's Included:</h4>
                    <ul className="included-features-list">
                      {tier.includedFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="included-feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className={`cta-button ${tier.popular ? "primary" : "secondary"}`}>Get Started</button>
              </div>
            </div>
          ))}
        </div>

        {/* User Roles Section (for Local Authorities) */}
        {selectedUserType === "Local Authorities" && currentData.userRoles && (
          <div className="user-roles-section">
            <h3 className="subsection-title">Individual User Subscriptions</h3>
            <p className="subsection-description">Role-based access control for precise permission management</p>
            <div className="roles-grid">
              {currentData.userRoles.map((role, index) => (
                <div key={index} className="role-card">
                  <div className="role-header">
                    <h4 className="role-name">{role.role}</h4>
                    <div className="role-price">{role.price}/year</div>
                  </div>
                  <div className="role-content">
                    <p className="role-description">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedUserType === "Businesses" && currentData.organisationFeatures && (
          <div className="organisation-section">
            <h3 className="subsection-title">Business Organisation Subscription</h3>
            <p className="subsection-description">Enhanced features for multi-location and enterprise businesses</p>
            <div className="organisation-features">
              {currentData.organisationFeatures.map((feature, index) => (
                <div key={index} className="organisation-feature">
                  <CheckIcon />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="addons-section">
          <h3 className="subsection-title">
            {selectedUserType === "Vendors" ? "Optional Services" : "Training & Add-ons"}
          </h3>
          <div className="addons-grid">
            {(currentData.addons || currentData.optionalServices || []).map((addon, index) => (
              <div key={index} className="addon-item">
                <h4 className="addon-name">{addon.name}</h4>
                <p className="addon-price">{addon.price}</p>
                <p className="addon-description">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
