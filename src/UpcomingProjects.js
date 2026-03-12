import React from "react";
import { Link } from "react-router-dom";
import coverComingSoon from "./images/CoverComingSoon.png";

const upcomingBooks = [
  {
    title: "The Haunted House",
    to: "/books/the-haunted-house",
  },
  {
    title: "A Shard of Sweetness",
    to: "/books/a-shard-of-sweetness",
  },
];

function UpcomingBookCard({ title, to }) {
  return (
    <article className="upcoming-book-card">
      <div className="upcoming-book-cover-shell">
        <img src={coverComingSoon} alt={`${title} cover coming soon`} className="upcoming-book-cover" />
      </div>
      <Link to={to} className="upcoming-book-link">
        {title}
      </Link>
    </article>
  );
}

export default function UpcomingProjects() {
  return (
    <section className="upcoming-page upcoming-page-blur">
      <style>{`
        .upcoming-page {
          width: min(1120px, 100%);
          margin: 0 auto;
          padding: 18px 6px 56px;
        }

        .upcoming-page-blur {
          animation: upcomingBlurIn 0.65s ease both;
        }

        .upcoming-card {
          background: rgba(255, 251, 245, 0.9);
          border: 1px solid rgba(94, 75, 61, 0.12);
          border-radius: 28px;
          box-shadow: 0 18px 40px rgba(66, 44, 30, 0.08);
          padding: 34px;
        }

        .upcoming-heading-wrap {
          margin-bottom: 28px;
        }

        .upcoming-eyebrow {
          margin: 0 0 10px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a7654;
        }

        .upcoming-heading {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: 0.02em;
          color: #4a2f20;
          text-shadow: 0 2px 10px rgba(90, 57, 37, 0.08);
        }

        .upcoming-divider {
          width: 122px;
          height: 3px;
          margin-top: 16px;
          border-radius: 999px;
          background: linear-gradient(90deg, #8a5a3c, #d7b07b);
        }

        .upcoming-intro {
          margin: 0 0 28px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #5a4638;
        }

        .upcoming-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 220px));
          gap: 28px 26px;
          justify-content: start;
        }

        .upcoming-book-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .upcoming-book-cover-shell {
          width: 100%;
          padding: 12px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(252, 248, 241, 0.96), rgba(243, 236, 226, 0.96));
          border: 1px solid rgba(94, 75, 61, 0.1);
          box-shadow: 0 16px 26px rgba(66, 44, 30, 0.08);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .upcoming-book-card:hover .upcoming-book-cover-shell {
          transform: translateY(-4px);
          box-shadow: 0 20px 30px rgba(66, 44, 30, 0.12);
        }

        .upcoming-book-cover {
          display: block;
          width: 100%;
          aspect-ratio: 2 / 3;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid rgba(94, 75, 61, 0.12);
          background: #efe2d2;
        }

        .upcoming-book-link {
          margin-top: 14px;
          max-width: 220px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.02rem;
          font-weight: 700;
          line-height: 1.45;
          color: #5a3925;
          text-decoration: none;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .upcoming-book-link:hover {
          color: #8a5a3c;
          transform: translateY(-1px);
        }

        @keyframes upcomingBlurIn {
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

        @media (max-width: 760px) {
          .upcoming-card {
            padding: 24px;
          }

          .upcoming-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 22px 16px;
          }
        }
      `}</style>

      <div className="upcoming-card">
        <div className="upcoming-heading-wrap">
          <p className="upcoming-eyebrow">In Development</p>
          <h1 className="upcoming-heading">Upcoming Book Projects</h1>
          <div className="upcoming-divider" />
        </div>

        <p className="upcoming-intro">
          Below is a look at current book projects in development. Cover art has not yet been officially revealed, but these titles are presently being worked on and will be updated here as more details become available.
        </p>

        <div className="upcoming-grid">
          {upcomingBooks.map((book) => (
            <UpcomingBookCard key={book.title} title={book.title} to={book.to} />
          ))}
        </div>
      </div>
    </section>
  );
}