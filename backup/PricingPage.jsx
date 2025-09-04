"use client"

import { useState } from "react"
import "./PricingPage.css"

const userTypes = ["Local Authorities", "Businesses", "Event Organisers", "Construction", "Stakeholders", "Vendors"]

const pricingData = {
  "Local Authorities": {
    description: "Flexible and scalable pricing tailored to council size and needs",
    tiers: [
      {
        name: "Basic",
        price: "€5,000",
        period: "/year",
        description: "Small local authorities",
        features: ["Core permitting tools", "Dashboard access", "Compliance tracking", "Basic support"],
        popular: false,
      },
      {
        name: "Standard",
        price: "€10,000",
        period: "/year",
        description: "Mid-sized local authorities",
        features: ["Multi-department workflows", "Permit analytics", "Shared stakeholder access", "Priority support"],
        popular: true,
      },
      {
        name: "Premium",
        price: "€20,000",
        period: "/year",
        description: "Large city and county councils",
        features: ["Full access", "API integration", "Custom workflows", "Dedicated support"],
        popular: false,
      },
    ],
    userRoles: [
      { role: "Administrator", price: "€2,000", description: "Core account managers" },
      { role: "Approver", price: "€750", description: "Planning Officers, Fire Officers" },
      { role: "Funder", price: "€500", description: "Arts, Culture, Community Officers" },
      { role: "Viewer", price: "€250", description: "View & comment-only access" },
    ],
  },
  Businesses: {
    description: "Smart access to permits, planning, and opportunity",
    tiers: [
      {
        name: "Basic",
        price: "€500",
        period: "/year",
        description: "Small businesses with occasional permits",
        features: ["Single dashboard", "Guided applications", "Public notices access", "Basic support"],
        popular: false,
      },
      {
        name: "Standard",
        price: "€2,500",
        period: "/year",
        description: "Medium businesses with regular permits",
        features: ["Multi-permit access", "Tracking & insights", "Planning data", "Priority support"],
        popular: true,
      },
      {
        name: "Premium",
        price: "€5,000",
        period: "/year",
        description: "Large businesses needing frequent permits",
        features: ["Unlimited permit access", "Impact mapping", "Calendar integration", "Dedicated support"],
        popular: false,
      },
    ],
  },
  "Event Organisers": {
    description: "All your permits. One application. Total oversight.",
    tiers: [
      {
        name: "Basic",
        price: "€500",
        period: "/year",
        description: "Local or low-volume organisers",
        features: ["Guided permit submission", "Document uploads", "Calendar sync", "Basic support"],
        popular: false,
      },
      {
        name: "Standard",
        price: "€1,500",
        period: "/year",
        description: "Medium-sized promoters",
        features: ["Multi-permit application", "Document storage", "EMP generator", "Stakeholder tools"],
        popular: true,
      },
      {
        name: "Premium",
        price: "€5,000",
        period: "/year",
        description: "Large-scale organisers",
        features: ["Unlimited applications", "EMP automation", "Document reuse", "Full team dashboard"],
        popular: false,
      },
      {
        name: "Ultra",
        price: "€20,000",
        period: "/year",
        description: "Large scale promoters",
        features: ["Multi-region permits", "Stakeholder coordination", "API access", "Advanced reporting"],
        popular: false,
      },
    ],
  },
  Construction: {
    description: "Build smarter. Comply faster. Avoid delays.",
    tiers: [
      {
        name: "Basic",
        price: "€500",
        period: "/year",
        description: "Local contractors with occasional works",
        features: ["Guided workflows", "Document uploads", "Local visibility", "Basic support"],
        popular: false,
      },
      {
        name: "Standard",
        price: "€2,500",
        period: "/year",
        description: "Mid-sized contractors",
        features: ["Traffic management uploads", "Permit calendar", "Renewal notifications", "Priority support"],
        popular: true,
      },
      {
        name: "Premium",
        price: "€5,000",
        period: "/year",
        description: "Large construction firms",
        features: ["Unlimited submissions", "Multi-zone visibility", "Document storage", "Risk alerts"],
        popular: false,
      },
    ],
  },
  Stakeholders: {
    description: "Early access. Coordinated response. National oversight.",
    tiers: [
      {
        name: "National Access",
        price: "€5,000",
        period: "/year",
        description: "HSE, Gardaí, Transportation Authorities",
        features: ["National visibility", "Event risk flagging", "Inspection scheduling", "Interagency coordination"],
        popular: true,
      },
      {
        name: "Voluntary Services",
        price: "€1,000",
        period: "/year",
        description: "Order of Malta, Red Cross, Civil Defence",
        features: ["Site maps access", "Risk data", "Real-time updates", "Deployment preparation"],
        popular: false,
      },
    ],
  },
  Vendors: {
    description: "Be found. Be verified. Get booked.",
    tiers: [
      {
        name: "Basic",
        price: "€500",
        period: "/year",
        description: "Minimal marketplace visibility",
        features: ["Basic listing", "Document verification", "Inquiry management", "Profile setup"],
        popular: false,
      },
      {
        name: "Standard",
        price: "€1,000",
        period: "/year",
        description: "Active event suppliers",
        features: ["Standard marketplace listing", "Profile branding", "Document uploads", "Priority support"],
        popular: true,
      },
      {
        name: "Premium",
        price: "€3,000",
        period: "/year",
        description: "High-demand suppliers",
        features: ["Top-tier listing", "Search prioritisation", "Dashboard access", "Planning tools"],
        popular: false,
      },
      {
        name: "Ultra",
        price: "€5,000",
        period: "/year",
        description: "International suppliers",
        features: ["Premium functionality", "Analytics access", "Multi-region support", "Organiser tools"],
        popular: false,
      },
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
                <button className={`cta-button ${tier.popular ? "primary" : "secondary"}`}>Get Started</button>
              </div>
            </div>
          ))}
        </div>

        {/* User Roles Section (for Local Authorities) */}
        {selectedUserType === "Local Authorities" && currentData.userRoles && (
          <div className="user-roles-section">
            <h3 className="subsection-title">Individual User Subscriptions</h3>
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

        {/* Add-ons Section */}
        <div className="addons-section">
          <h3 className="subsection-title">Training & Add-ons</h3>
          <div className="addons-grid">
            <div className="addon-item">
              <h4 className="addon-name">Online Staff Training</h4>
              <p className="addon-price">€500 per one-hour session</p>
            </div>
            <div className="addon-item">
              <h4 className="addon-name">White-Label Customisation</h4>
              <p className="addon-price">Contact for tailored quote</p>
            </div>
            <div className="addon-item">
              <h4 className="addon-name">API Access & Integration</h4>
              <p className="addon-price">Included with Premium or add-on</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
