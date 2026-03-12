import React from "react";
import fudgeCover from "../images/FudgeLiesAndAlibis.jpg";

const bookDetails = [
  { label: "Author", value: "Scotty McCoy" },
  { label: "Edited By", value: "Charles Rosenay" },
  { label: "Published By", value: "Black Lantern Press" },
  { label: "Publication Date", value: "August 17, 2025" },
  { label: "Genre", value: "Romance, Mystery" },
  { label: "Pages", value: "95" },
];

export default function FudgeLiesAndAlibis() {
  return (
    <section className="book-page book-page-blur">
      <style>{`
        .book-page {
          width: min(1120px, 100%);
          margin: 0 auto;
          padding: 18px 6px 56px;
        }

        .book-page-blur {
          animation: bookBlurIn 0.65s ease both;
        }

        .book-card {
          background: rgba(255, 251, 245, 0.9);
          border: 1px solid rgba(94, 75, 61, 0.12);
          border-radius: 28px;
          box-shadow: 0 18px 40px rgba(66, 44, 30, 0.08);
          padding: 34px;
        }

        .book-heading-wrap {
          margin-bottom: 22px;
        }

        .book-eyebrow {
          margin: 0 0 10px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a7654;
        }

        .book-heading {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: 0.02em;
          color: #4a2f20;
        }

        .book-divider {
          width: 132px;
          height: 3px;
          margin-top: 16px;
          border-radius: 999px;
          background: linear-gradient(90deg, #8a5a3c, #d7b07b);
        }

        .book-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px 18px;
          margin: 0 0 28px;
          padding: 18px 20px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(252,248,241,0.96), rgba(243,236,226,0.96));
          border: 1px solid rgba(94,75,61,0.1);
        }

        .book-meta-label {
          margin: 0 0 4px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9a7654;
        }

        .book-meta-value {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.02rem;
          font-weight: 700;
          line-height: 1.45;
          color: #4f3122;
        }

        .book-content {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 32px;
          align-items: start;
        }

        .book-cover-shell {
          padding: 14px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(252,248,241,0.96), rgba(243,236,226,0.96));
          border: 1px solid rgba(94,75,61,0.1);
        }

        .book-cover {
          width: 100%;
          aspect-ratio: 2 / 3;
          object-fit: cover;
          border-radius: 18px;
        }

        .book-synopsis-title {
          margin: 0 0 14px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.5rem, 2.4vw, 2rem);
          font-weight: 700;
          color: #4c2f21;
        }

        .book-synopsis {
          margin: 0;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.05rem;
          line-height: 1.9;
          color: #5a4638;
          white-space: pre-line;
        }

        .book-buy {
          margin-top: 30px;
          padding-top: 18px;
          border-top: 1px solid rgba(138,90,60,0.16);
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.04rem;
          line-height: 1.85;
          color: #5a4638;
        }

        .book-buy-link {
          color: #8a5a3c;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(138,90,60,0.4);
        }

        @keyframes bookBlurIn {
          0% { opacity:0; transform:translateY(6px); filter:blur(8px);} 
          100% { opacity:1; transform:translateY(0); filter:blur(0);} 
        }
      `}</style>

      <div className="book-card">
        <div className="book-heading-wrap">
          <p className="book-eyebrow">Book Details</p>
          <h1 className="book-heading">Fudge, Lies, and Alibis</h1>
          <div className="book-divider" />
        </div>

        <div className="book-meta-grid">
          {bookDetails.map((item) => (
            <div key={item.label}>
              <p className="book-meta-label">{item.label}</p>
              <p className="book-meta-value">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="book-content">
          <div className="book-cover-shell">
            <img
              src={fudgeCover}
              alt="Fudge, Lies, and Alibis book cover"
              className="book-cover"
            />
          </div>

          <div>
            <h2 className="book-synopsis-title">Synopsis</h2>
            <p className="book-synopsis">{`In the quaint town of Rosewood, the annual Great Fudge-Off is the sweetest event of the year—until a contestant considered a high candidate at winning this year’s competition drops dead after tasting a poisoned fudge sample. All signs point to Rosewood Confectionery, the beloved local candy shop owned by Nora Maple, with her best friend, Briana Dawson, helping run the shop. Refusing to let their shop take the fall, Nora teams up with town newcomer and pretty boy, Javier Wren, to uncover the truth.

As suspects pile up and secrets unravel—including lies, jealousy, and a past full of poison—Nora must race to solve the murder before the killer strikes again.

With heart, humor, and a dash of romance, Fudge, Lies, and Alibis is a cozy mystery packed with small-town charm and a deadly twist.`}</p>
          </div>
        </div>

        <p className="book-buy">
          To purchase <strong>Fudge, Lies, and Alibis</strong>, visit its listing on&nbsp;
          <a
            href="https://www.amazon.com/dp/B0FK3SN6ZN"
            target="_blank"
            rel="noopener noreferrer"
            className="book-buy-link"
          >
            Amazon
          </a>
          .
        </p>
      </div>
    </section>
  );
}