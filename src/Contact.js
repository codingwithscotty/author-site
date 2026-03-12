import React from "react";

const contacts = [
  {
    heading: "Personal Appearance Representation",
    intro: "To book Scotty for a convention, signing, or festival, contact his personal appearance agent:",
    name: "Jacob Marshall",
    company: "Jacob Marshall Production & Entertainment",
    locationLines: ["Redmond, Oregon 97756"],
    phone: "(213) 720-7867",
    phoneHref: "tel:+12137207867",
    email: "jacob@jmpem.com",
    emailHref: "mailto:jacob@jmpem.com",
  },
  {
    heading: "Literary Representation",
    intro: "For inquiries on book opportunities and future project requests, contact his literary agent:",
    name: "Eric Miller",
    company: "3iBooks Literary Agency",
    locationLines: ["Reno, NV 89509"],
    phone: "(773) 391-1199",
    phoneHref: "tel:+17733911199",
    email: "eric@3ibooks.com",
    emailHref: "mailto:eric@3ibooks.com",
  },
];

function ContactCard({ heading, intro, name, company, locationLines, phone, phoneHref, email, emailHref }) {
  return (
    <article className="contact-card">
      <p className="contact-card-eyebrow">Representation</p>
      <h2 className="contact-card-heading">{heading}</h2>
      <p className="contact-card-intro">{intro}</p>

      <div className="contact-card-body">
        <p className="contact-name">{name}</p>
        <p className="contact-company">{company}</p>

        {locationLines.map((line) => (
          <p key={line} className="contact-line">
            <span className="contact-icon" aria-hidden="true">📍</span>
            <span>{line}</span>
          </p>
        ))}

        <p className="contact-line">
          <span className="contact-icon" aria-hidden="true">📞</span>
          <a className="contact-link" href={phoneHref}>{phone}</a>
        </p>

        <p className="contact-line">
          <span className="contact-icon" aria-hidden="true">✉️</span>
          <a className="contact-link" href={emailHref}>{email}</a>
        </p>
      </div>
    </article>
  );
}

export default function Contact() {
  return (
    <section className="contact-page contact-page-blur">
      <style>{`
        .contact-page {
          width: min(1120px, 100%);
          margin: 0 auto;
          padding: 18px 6px 56px;
        }

        .contact-page-blur {
          animation: contactBlurIn 0.65s ease both;
        }

        .contact-card-shell {
          background: rgba(255, 251, 245, 0.9);
          border: 1px solid rgba(94, 75, 61, 0.12);
          border-radius: 28px;
          box-shadow: 0 18px 40px rgba(66, 44, 30, 0.08);
          padding: 34px;
        }

        .contact-heading-wrap {
          margin-bottom: 28px;
        }

        .contact-eyebrow {
          margin: 0 0 10px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a7654;
        }

        .contact-heading {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: 0.02em;
          color: #4a2f20;
          text-shadow: 0 2px 10px rgba(90, 57, 37, 0.08);
        }

        .contact-divider {
          width: 128px;
          height: 3px;
          margin-top: 16px;
          border-radius: 999px;
          background: linear-gradient(90deg, #8a5a3c, #d7b07b);
        }

        .contact-intro {
          margin: 0 0 28px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #5a4638;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .contact-card {
          padding: 24px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(252, 248, 241, 0.96), rgba(243, 236, 226, 0.96));
          border: 1px solid rgba(94, 75, 61, 0.1);
          box-shadow: 0 14px 24px rgba(66, 44, 30, 0.06);
        }

        .contact-card-eyebrow {
          margin: 0 0 10px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #9a7654;
        }

        .contact-card-heading {
          margin: 0 0 12px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 700;
          line-height: 1.2;
          color: #4c2f21;
        }

        .contact-card-intro {
          margin: 0 0 16px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #5a4638;
        }

        .contact-card-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-name {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #5b3724;
        }

        .contact-company {
          margin: 0 0 6px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #6a4129;
        }

        .contact-line {
          margin: 0;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.75;
          color: #5a4638;
        }

        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 22px;
          font-size: 1rem;
          line-height: 1.2;
          opacity: 0.95;
          margin-top: 1px;
        }

        .contact-link {
          color: #8a5a3c;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(138, 90, 60, 0.35);
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .contact-link:hover {
          color: #5a3925;
          border-color: rgba(90, 57, 37, 0.7);
        }

        @keyframes contactBlurIn {
          0% {
            opacity: 0;
            transform: translateY(6px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (max-width: 820px) {
          .contact-card-shell {
            padding: 24px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-card-shell">
        <div className="contact-heading-wrap">
          <p className="contact-eyebrow">Professional Contacts</p>
          <h1 className="contact-heading">Scotty's Representation</h1>
          <div className="contact-divider" />
        </div>

        <p className="contact-intro">
          For event bookings, signing opportunities, publishing discussions, and future project inquiries, please use the professional contacts below.
        </p>

        <div className="contact-grid">
          {contacts.map((contact) => (
            <ContactCard key={contact.heading} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}