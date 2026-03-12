import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import clownOnMapleStreet from "./images/TheClownOnMapleStreet.jpg";
import scarecrowsCurse from "./images/TheScarecrowsCurse.jpeg";
import harvestMoonWitch from "./images/TheHarvestMoonWitch.jpg";
import vampireThatDreadedSundown from "./images/TheVampireThatDreadedSundown.jpeg";
import antiqueDoll from "./images/TheAntiqueDoll.jpeg";
import bloodMoon from "./images/BloodMoon.jpg";

import fudgeLiesAndAlibis from "./images/FudgeLiesAndAlibis.jpg";
import trufflesAndTreachery from "./images/TrufflesAndTreachery.jpg";

import christDefeatsCancer from "./images/ChristDefeatsCancer.jpg";
import christDefeatsCancer2 from "./images/ChristDefeatsCancer2.jpg";

import fridayThe13thTriviaBook from "./images/FridayThe13thTriviaBook.jpeg";
import halloweenTriviaBook from "./images/HalloweenTriviaBook.jpeg";
import halloweenTriviaBook2ndEdition from "./images/HalloweenTriviaBook2ndEdition.jpeg";
import ultimateHalloweenMovieExperience from "./images/UltimateHalloweenMovieExperience.jpg";

const initialSections = {
  talesOfHalloween: true,
  bittersweetMysteries: true,
  christDefeatsCancer: true,
  triviaBooks: true,
};

const catalogData = [
  {
    key: "talesOfHalloween",
    title: "Tales of Halloween",
    books: [
      {
        title: "The Clown on Maple Street",
        image: clownOnMapleStreet,
        to: "/books/the-clown-on-maple-street",
      },
      {
        title: "The Scarecrow's Curse",
        image: scarecrowsCurse,
        to: "/books/the-scarecrows-curse",
      },
      {
        title: "The Harvest Moon Witch",
        image: harvestMoonWitch,
        to: "/books/the-harvest-moon-witch",
      },
      {
        title: "The Vampire That Dreaded Sundown",
        image: vampireThatDreadedSundown,
        to: "/books/the-vampire-that-dreaded-sundown",
      },
      {
        title: "The Antique Doll",
        image: antiqueDoll,
        to: "/books/the-antique-doll",
      },
      {
        title: "Blood Moon",
        image: bloodMoon,
        to: "/books/blood-moon",
      },
    ],
  },
  {
    key: "bittersweetMysteries",
    title: "BitterSweet Mysteries",
    books: [
      {
        title: "Fudge, Lies, and Alibis",
        image: fudgeLiesAndAlibis,
        to: "/books/fudge-lies-and-alibis",
      },
      {
        title: "Truffles and Treachery",
        image: trufflesAndTreachery,
        to: "/books/truffles-and-treachery",
      },
    ],
  },
  {
    key: "christDefeatsCancer",
    title: "Christ Defeats Cancer",
    books: [
      {
        title: "Christ Defeats Cancer",
        image: christDefeatsCancer,
        to: "/books/christ-defeats-cancer",
      },
      {
        title: "Christ Defeats Cancer 2: The Battle Continues",
        image: christDefeatsCancer2,
        to: "/books/christ-defeats-cancer-2",
      },
    ],
  },
  {
    key: "triviaBooks",
    title: "Trivia Books",
    books: [
      {
        title: "The Ultimate Friday the 13th Trivia Book",
        image: fridayThe13thTriviaBook,
        to: "/books/friday-the-13th-trivia-book",
      },
      {
        title: "The Ultimate Halloween Trivia Book",
        image: halloweenTriviaBook,
        to: "/books/halloween-trivia-book",
      },
      {
        title: "The Ultimate Halloween Trivia Book 2nd Edition",
        image: halloweenTriviaBook2ndEdition,
        to: "/books/halloween-trivia-book-2nd-edition",
      },
      {
        title: "The Ultimate Halloween Movie Experience",
        image: ultimateHalloweenMovieExperience,
        to: "/books/ultimate-halloween-movie-experience",
      },
    ],
  },
];

function SectionToggleButton({ title, isOpen, onClick, count }) {
  return (
    <button className="catalog-toggle" onClick={onClick} type="button" aria-expanded={isOpen}>
      <span className="catalog-toggle-left">
        <span className="catalog-toggle-icon">{isOpen ? "−" : "+"}</span>
        <span className="catalog-toggle-title">{title}</span>
      </span>
      <span className="catalog-toggle-count">{count} {count === 1 ? "Book" : "Books"}</span>
    </button>
  );
}

function BookCard({ title, image, to }) {
  return (
    <article className="book-card">
      <div className="book-cover-shell">
        <img src={image} alt={title} className="book-cover" />
      </div>
      <Link to={to} className="book-title-link">
        {title}
      </Link>
    </article>
  );
}

export default function Books() {
  const [openSections, setOpenSections] = useState(initialSections);

  const sections = useMemo(() => catalogData, []);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="catalog-page catalog-page-blur">
      <style>{`
        .catalog-page {
          width: min(1120px, 100%);
          margin: 0 auto;
          padding: 18px 6px 56px;
        }

        .catalog-page-blur {
          animation: catalogBlurIn 0.65s ease both;
        }

        .catalog-card {
          background: rgba(255, 251, 245, 0.9);
          border: 1px solid rgba(94, 75, 61, 0.12);
          border-radius: 28px;
          box-shadow: 0 18px 40px rgba(66, 44, 30, 0.08);
          padding: 34px;
        }

        .catalog-heading-wrap {
          margin-bottom: 28px;
        }

        .catalog-eyebrow {
          margin: 0 0 10px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a7654;
        }

        .catalog-heading {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: 0.02em;
          color: #4a2f20;
          text-shadow: 0 2px 10px rgba(90, 57, 37, 0.08);
        }

        .catalog-divider {
          width: 104px;
          height: 3px;
          margin-top: 16px;
          border-radius: 999px;
          background: linear-gradient(90deg, #8a5a3c, #d7b07b);
        }

        .catalog-section {
          margin-bottom: 20px;
          border: 1px solid rgba(112, 82, 60, 0.12);
          border-radius: 22px;
          overflow: hidden;
          background: rgba(255, 253, 249, 0.74);
        }

        .catalog-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 22px;
          border: none;
          background: linear-gradient(180deg, rgba(252, 247, 240, 0.96), rgba(247, 239, 229, 0.96));
          cursor: pointer;
          text-align: left;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .catalog-toggle:hover {
          background: linear-gradient(180deg, rgba(250, 242, 232, 0.98), rgba(243, 233, 220, 0.98));
        }

        .catalog-toggle-left {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .catalog-toggle-icon {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #7b4d33, #b78956);
          color: #fffaf4;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 8px 14px rgba(123, 77, 51, 0.18);
        }

        .catalog-toggle-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.25rem, 2vw, 1.7rem);
          font-weight: 700;
          color: #4f3122;
          letter-spacing: 0.01em;
        }

        .catalog-toggle-count {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: #8a674a;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          flex-shrink: 0;
        }

        .catalog-panel {
          padding: 24px 24px 28px;
          animation: catalogPanelBlurIn 0.35s ease both;
        }

        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 28px 24px;
        }

        .book-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .book-cover-shell {
          width: 100%;
          max-width: 185px;
          padding: 12px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(252, 248, 241, 0.96), rgba(243, 236, 226, 0.96));
          border: 1px solid rgba(94, 75, 61, 0.1);
          box-shadow: 0 16px 26px rgba(66, 44, 30, 0.08);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .book-card:hover .book-cover-shell {
          transform: translateY(-4px);
          box-shadow: 0 20px 30px rgba(66, 44, 30, 0.12);
        }

        .book-cover {
          display: block;
          width: 100%;
          aspect-ratio: 2 / 3;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid rgba(94, 75, 61, 0.12);
          background: #efe2d2;
        }

        .book-title-link {
          margin-top: 14px;
          max-width: 210px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.45;
          color: #5a3925;
          text-decoration: none;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .book-title-link:hover {
          color: #8a5a3c;
          transform: translateY(-1px);
        }

        .catalog-footer-note {
          margin: 18px 4px 0;
          padding-top: 10px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.04rem;
          line-height: 1.85;
          color: #5a4638;
        }

        .catalog-footer-link {
          color: #8a5a3c;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(138, 90, 60, 0.4);
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .catalog-footer-link:hover {
          color: #5a3925;
          border-color: rgba(90, 57, 37, 0.7);
        }

        @keyframes catalogBlurIn {
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

        @keyframes catalogPanelBlurIn {
          0% {
            opacity: 0;
            transform: translateY(6px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (max-width: 760px) {
          .catalog-card {
            padding: 24px;
          }

          .catalog-toggle {
            align-items: flex-start;
            flex-direction: column;
          }

          .catalog-toggle-count {
            padding-left: 44px;
          }

          .catalog-panel {
            padding: 20px 18px 24px;
          }

          .catalog-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 22px 16px;
          }
        }
      `}</style>

      <div className="catalog-card">
        <div className="catalog-heading-wrap">
          <p className="catalog-eyebrow">Official Library</p>
          <h1 className="catalog-heading">Book Catalog</h1>
          <div className="catalog-divider" />
        </div>

        {sections.map((section) => {
          const isOpen = openSections[section.key];

          return (
            <div className="catalog-section" key={section.key}>
              <SectionToggleButton
                title={section.title}
                count={section.books.length}
                isOpen={isOpen}
                onClick={() => toggleSection(section.key)}
              />

              {isOpen && (
                <div className="catalog-panel">
                  <div className="catalog-grid">
                    {section.books.map((book) => (
                      <BookCard
                        key={book.title}
                        title={book.title}
                        image={book.image}
                        to={book.to}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <p className="catalog-footer-note">
          To explore book projects Scotty is currently developing, visit the{" "}
          <Link to="/upcoming-projects" className="catalog-footer-link">
            Upcoming Projects page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}