import React from "react";
import scotty from "./images/Scotty.png";

export default function About() {
  return (
    <section className="about-page about-page-blur">
      <style>{`
        .about-page {
          width: min(1040px, 100%);
          margin: 0 auto;
          padding: 18px 6px 46px;
        }

        .about-page-blur {
          animation: aboutPageBlurIn 0.65s ease both;
        }

        .about-card {
          background: rgba(255, 251, 245, 0.88);
          border: 1px solid rgba(94, 75, 61, 0.12);
          border-radius: 28px;
          box-shadow: 0 18px 40px rgba(66, 44, 30, 0.08);
          padding: 34px;
        }

        .about-top {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 30px;
          align-items: start;
          margin-bottom: 18px;
        }

        .about-portrait-wrap {
          position: relative;
        }

        .about-portrait-wrap::before {
          content: "Author Portrait";
          position: absolute;
          left: 14px;
          top: 14px;
          z-index: 2;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(74, 47, 32, 0.82);
          color: #fff8f0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .about-portrait {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 22px;
          border: 1px solid rgba(94, 75, 61, 0.16);
          box-shadow: 0 16px 30px rgba(66, 44, 30, 0.12);
          display: block;
          background: #efe2d2;
        }

        .about-heading {
          margin: 2px 0 12px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 4vw, 3.7rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: 0.02em;
          color: #4a2f20;
          text-shadow: 0 2px 10px rgba(90, 57, 37, 0.08);
        }

        .about-subheading {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.84rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a7654;
        }

        .about-divider {
          width: 90px;
          height: 3px;
          margin: 18px 0 0;
          border-radius: 999px;
          background: linear-gradient(90deg, #8a5a3c, #d7b07b);
        }

        .about-body {
          margin: 0 0 18px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.08rem;
          line-height: 1.92;
          color: #5a4638;
        }

        .about-body a {
          color: #8a5a3c;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid rgba(138, 90, 60, 0.4);
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .about-body a:hover {
          color: #5a3925;
          border-color: rgba(90, 57, 37, 0.7);
        }

        .book-title {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 700;
          color: #4c2e21;
          letter-spacing: 0.01em;
        }

        .series-title {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 700;
          color: #73492f;
        }

        .signature-flourish-wrap {
          margin-top: 24px;
          padding-top: 22px;
          border-top: 1px solid rgba(138, 90, 60, 0.16);
          text-align: center;
        }

        .signature-flourish-name {
          font-family: "Brush Script MT", "Lucida Handwriting", cursive;
          font-size: clamp(2.3rem, 4vw, 3.3rem);
          color: #6c4127;
          line-height: 1;
          display: inline-block;
          transform: rotate(-3deg);
          text-shadow: 0 4px 14px rgba(108, 65, 39, 0.12);
          margin-bottom: 8px;
        }

        .signature-flourish-svg {
          display: block;
          width: min(260px, 70%);
          height: 20px;
          margin: 0 auto;
        }

        .signature-flourish-path {
          fill: none;
          stroke: #b27e56;
          stroke-width: 2.2;
          stroke-linecap: round;
          opacity: 0.9;
        }

        @keyframes aboutPageBlurIn {
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

        @keyframes aboutPageBlurOut {
          0% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-4px);
            filter: blur(8px);
          }
        }

        @media (max-width: 760px) {
          .about-card {
            padding: 24px;
          }

          .about-top {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .about-portrait-wrap {
            max-width: 260px;
          }
        }
      `}</style>

      <div className="about-card">
        <div className="about-top">
          <div className="about-portrait-wrap">
            <img src={scotty} alt="Scotty McCoy" className="about-portrait" />
          </div>

          <div>
            <p className="about-subheading">Author Biography</p>
            <h1 className="about-heading">About Scotty</h1>
            <div className="about-divider" />
          </div>
        </div>

        <p className="about-body">
          Born on December 6, 1989, Scotty McCoy discovered early in life that storytelling would become one of his greatest passions. With an energetic imagination and a natural talent for narrative, he often credits his high school English teacher, Joann Hoppel, for recognizing and nurturing his ability to write. Through encouragement and mentorship, that early spark evolved into a lifelong dedication to crafting engaging and imaginative works.
        </p>

        <p className="about-body">
          Scotty released his first book in February 2016, a trivia guide dedicated to the Friday the 13th film series—something he fondly describes as a "love letter" to the franchise. He followed this with another trivia book focused on the Halloween film series in June 2017. While these early works celebrated his love for classic horror cinema, his writing soon took on a deeper and more personal direction when his father was diagnosed with terminal brain cancer. During this difficult time, Scotty wrote two autobiographical works, <span className="book-title">Christ Defeats Cancer</span> and <span className="book-title">Christ Defeats Cancer 2: The Battle Continues</span>, sharing a powerful story of faith, perseverance, and personal reflection.
        </p>

        <p className="about-body">
          After taking several years away from publishing, Scotty returned to writing and was later signed with 3iBooks while being represented by literary agent Eric Miller. Through that partnership, his book <span className="book-title">The Ultimate Halloween Movie Experience</span> was published through BearManor Media, further expanding his presence within the horror and film enthusiast community.
        </p>

        <p className="about-body">
          Scotty later partnered with personal appearance agent Jacob Marshall of Jacob Marshall Production & Entertainment, who now represents him for book signings, convention appearances, and other public events. During this period, Scotty also began developing his <span className="series-title">Tales of Halloween</span> anthology series—an expanding collection of horror stories centered around the spirit and mythology of Halloween. Titles currently released in that series include <span className="book-title">The Clown on Maple Street</span>, <span className="book-title">The Scarecrow's Curse</span>, <span className="book-title">The Harvest Moon Witch</span>, <span className="book-title">The Vampire That Dreaded Sundown</span>, <span className="book-title">The Antique Doll</span>, and <span className="book-title">Blood Moon</span>.
        </p>

        <p className="about-body">
          More recently, Scotty expanded into the romance and murder mystery genre with two novels—<span className="book-title">Fudge, Lies, and Alibis</span> and <span className="book-title">Truffles and Treachery</span>. These titles form part of the <span className="series-title">BitterSweet Mysteries</span> series, blending suspense, romance, and intrigue into a distinctive storytelling style.
        </p>

        <p className="about-body">
          Scotty is currently working on several upcoming titles. He continues to expand the <span className="series-title">Tales of Halloween</span> anthology series while also preparing a final installment in the <span className="series-title">BitterSweet Mysteries</span> collection. Readers can explore all currently released titles on the Books page, while upcoming projects and works in development can be found on the Upcoming Projects page.
        </p>

        <p className="about-body">
          The best place to discover and purchase Scotty's books is through <a href="https://www.amazon.com/stores/Scotty-McCoy/author/B01C21VZ8U" target="_blank" rel="noopener noreferrer">Amazon</a>. Readers who purchase a copy online are welcome to bring their books to one of Scotty's personal appearances or book signings to have them autographed. For those attending an event without a copy, books are often available for purchase and signing directly at the appearance.
        </p>

        <div className="signature-flourish-wrap">
          <div className="signature-flourish-name">Scotty McCoy</div>
          <svg className="signature-flourish-svg" viewBox="0 0 260 20" aria-hidden="true">
            <path
              className="signature-flourish-path"
              d="M4 10 C 32 2, 54 2, 78 10 S 122 18, 146 10 S 196 2, 222 10 S 242 18, 256 10"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}