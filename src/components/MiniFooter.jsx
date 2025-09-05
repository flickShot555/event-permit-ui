// src/components/LPFooter.jsx
import React, { useEffect } from "react";
import { Mail, PhoneCall, MessageSquare, Linkedin, Twitter } from "lucide-react";

/**
 * LPFooter
 *
 * Props:
 * - logoSrc (string)
 * - logoAlt (string)
 * - navLinks (array of { label, href, delay })
 * - contact (object { email, phone, liveChatLabel })
 * - socialLinks (array of { href, type: 'linkedin'|'twitter', delay })
 * - className (string)
 */
export default function LPFooter({
  logoSrc = "/images/logo-3.png",
  logoAlt = "TheO Logo",
  navLinks = [
    { label: "Home", href: "#home", delay: "0.1s" },
    { label: "How it Works", href: "#how", delay: "0.2s" },
    { label: "Features", href: "#features", delay: "0.3s" },
    { label: "About", href: "#about", delay: "0.4s" },
    { label: "Get Started", href: "#start", delay: "0.5s" },
  ],
  contact = {
    email: "hello@theo-platform.com",
    phone: "+353 1 234 5678",
    liveChatLabel: "Live Chat",
  },
  socialLinks = [
    { href: "#", type: "linkedin", delay: "0.1s" },
    { href: "#", type: "twitter", delay: "0.2s" },
  ],
  className = "",
}) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("lp-footer-styles")) return;

    const style = document.createElement("style");
    style.id = "lp-footer-styles";
    style.innerHTML = `
.comp-footer {
  background: #324858;
  color: #f7fafc;
  padding: 24px 0;
}

.comp-footer-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1%;
  gap: 25px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: space-between;
}

.footer-info {
  padding-left: 30px;
  padding-right: 30px;
  text-align: left;
  height: 46px;
}

.footer-info p {
  margin: 0;
  font-size: 0.875rem;
  color: #f7fafc;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  align-items: center;
}

.footer-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: transform 0.3s ease, opacity 0.25s ease;
  opacity: 0.95;
}

.footer-nav a:hover {
  text-decoration: none;
  transform: scale(1.5);
}

.comp-nav-links {
  display: flex;
  gap: 30px;
  position: relative;
  text-decoration: none;
  color: #0000;
}

.comp-nav-links a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  transition: transform 0.3s ease;
}

.comp-nav-links a:hover {
  transform: scale(1.3);
  
}

.comp-nav-links a::after {
  text-decoration: none !important;
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #96bbbb;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.comp-nav-links a:hover::after {
  transform: scaleX(1);
}

.comp-nav-actions {
  display: flex;
  gap: 10px;
}
/*.comp-nav-link-entrance {
  animation: navLinkSpectacular 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) calc(0.5s + var(--delay)) both;
}*/
.comp-footer-contact {
  text-align: right;
  line-height: 1.4;
  padding-left: 25%;
  padding-right: 0;
}

.comp-footer-contact p {
  margin: 4px 0;
  font-size: 0.875rem;
  color: #f7fafc;
}

.comp-social {
  margin-top: 8px;
  display: inline-flex;
  gap: 12px;
  justify-content: flex-end;
  padding-right: 25px;
}

.comp-social a {
  transition: transform 0.3s ease, opacity 0.25s ease;
  display: inline-flex;
  align-items: center;
}

.comp-social a:hover { transform: scale(1.2); opacity: 0.95; }

.comp-footer-col { display: flex; flex-direction: column; gap: 0; align-items: flex-start; }
.footer-spectacular .comp-footer-contact-spectacular {
  animation: footerContactSpectacular 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s forwards;
}


.comp-footer-contact-spectacular {
  
  transform: translateX(40px) rotateY(20deg);
}



.comp-social-spectacular {
  color: white
  /*transform: scale(0.5) rotate(-180deg);*/
}

/* logo */
.footer-logo-spectacular { max-height: 46px; object-fit: contain; }

/* responsive */
@media (max-width: 880px) {
  .comp-footer-container {
    grid-template-columns: 1fr;
    text-align: left;
    gap: 12px;
  }
  .comp-footer-contact { text-align: left; }
  .lp-social { justify-content: flex-start; padding-right: 0; }
  .footer-nav { justify-content: flex-start; gap: 12px; flex-wrap: wrap; }
}
    `;
    document.head.appendChild(style);
  }, []);

  const renderSocialIcon = (type) => {
    const props = { size: 18, color: "#ffff" };
    if (type === "linkedin") return <Linkedin {...props} />;
    if (type === "twitter") return <Twitter {...props} />;
    // fallback
    return <Linkedin {...props} />;
  };

  return (
    <footer className={`comp-footer ${className}`}>
      <div className="comp-footer-container">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="comp-footer-col footer-info footer-logo-spectacular"
        />

        <nav className="comp-nav-links footer-nav" aria-label="Footer navigation">
          {navLinks.map((nl, i) => (
            <a
              key={nl.label + i}
              href={nl.href}
              className="comp-nav-link-entrance"
              style={{ ["--delay"]: nl.delay || `${(i + 1) * 0.1}s` }}
            >
              {nl.label}
            </a>
          ))}
        </nav>

        <div className="comp-footer-col comp-footer-contact comp-footer-contact-spectacular" aria-label="Contact">
          <p>
            <Mail size={16} color="#ffff" style={{ marginRight: 8 }} />
            <a href={`mailto:${contact.email}`} style={{ color: "inherit", textDecoration: "none" }}>
              {contact.email}
            </a>
          </p>
          <p>
            <PhoneCall size={16} color="#ffff" style={{ marginRight: 8 }} />
            <a href={`tel:${contact.phone}`} style={{ color: "inherit", textDecoration: "none" }}>
              {contact.phone}
            </a>
          </p>
          <p>
            <MessageSquare size={16} color="#ffff" style={{ marginRight: 8 }} />
            <span style={{ color: "inherit" }}>{contact.liveChatLabel}</span>
          </p>

          <div className="comp-social" aria-label="Social links">
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                className="comp-social-spectacular"
                style={{ ["--delay"]: s.delay || `${(idx + 1) * 0.1}s` }}
                aria-label={s.type}
              >
                {renderSocialIcon(s.type)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
