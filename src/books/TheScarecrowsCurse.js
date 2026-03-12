import React from "react";
import scarecrowCover from "../images/TheScarecrowsCurse.jpeg";

const bookDetails = [
  { label: "Author", value: "Scotty McCoy" },
  { label: "Edited By", value: "Anthony Négron" },
  { label: "Published By", value: "Gravestone Publishing" },
  { label: "Publication Date", value: "January 10, 2025" },
  { label: "Genre", value: "Horror" },
  { label: "Pages", value: "70" },
];

export default function TheScarecrowsCurse() {
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
          text-shadow: 0 2px 10px rgba(90, 57, 37, 0.08);
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
          background: linear-gradient(180deg, rgba(252, 248, 241, 0.96), rgba(243, 236, 226, 0.96));
          border: 1px solid rgba(94, 75, 61, 0.1);
        }

        .book-meta-item {
          min-width: 0;
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
          background: linear-gradient(180deg, rgba(252, 248, 241, 0.96), rgba(243, 236, 226, 0.96));
          border: 1px solid rgba(94, 75, 61, 0.1);
          box-shadow: 0 16px 26px rgba(66, 44, 30, 0.08);
        }

        .book-cover {
          display: block;
          width: 100%;
          aspect-ratio: 2 / 3;
          object-fit: cover;
          border-radius: 18px;
          border: 1px solid rgba(94, 75, 61, 0.12);
          background: #efe2d2;
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
          border-top: 1px solid rgba(138, 90, 60, 0.16);
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.04rem;
          line-height: 1.85;
          color: #5a4638;
        }

        .book-buy-link {
          color: #8a5a3c;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(138, 90, 60, 0.4);
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .book-buy-link:hover {
          color: #5a3925;
          border-color: rgba(90, 57, 37, 0.7);
        }

        @keyframes bookBlurIn {
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

        @media (max-width: 900px) {
          .book-meta-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .book-content {
            grid-template-columns: 1fr;
          }

          .book-cover-shell {
            max-width: 320px;
          }
        }

        @media (max-width: 620px) {
          .book-card {
            padding: 24px;
          }

          .book-meta-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="book-card">
        <div className="book-heading-wrap">
          <p className="book-eyebrow">Book Details</p>
          <h1 className="book-heading">The Scarecrow&apos;s Curse</h1>
          <div className="book-divider" />
        </div>

        <div className="book-meta-grid">
          {bookDetails.map((item) => (
            <div key={item.label} className="book-meta-item">
              <p className="book-meta-label">{item.label}</p>
              <p className="book-meta-value">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="book-content">
          <div className="book-cover-shell">
            <img
              src={scarecrowCover}
              alt="The Scarecrow's Curse book cover"
              className="book-cover"
            />
          </div>

          <div>
            <h2 className="book-synopsis-title">Synopsis</h2>
            <p className="book-synopsis">{`In the heart of every community lies a tapestry woven from the threads of joy, connection, and the traditions that bind its people together. As the seasons change and the autumn leaves fall, townsfolk often gather to celebrate their shared history and the bountiful harvest, transforming their streets into a vibrant festival of laughter and love. Yet, lurking beneath the surface of merriment can lie shadows of the past—echoes of unheeded fears and unresolved darkness that, if left unacknowledged, may rise again to challenge even the strongest bonds.

"The Scarecrow’s Curse," the second novel in the "Tales of Halloween" anthology series takes readers on a chilling journey through the small Midwestern town of Briarwood, where the Harvest Festival, a cherished tradition steeped in history, harbors a sinister secret. Trapped within the very soil of the town is an ancient curse tied to a once-innocuous scarecrow, whose existence becomes a harbinger of despair and vengeance when its tale is reawakened.

As the moments of celebration unfold, the townsfolk must confront the consequences of their collective neglect, grappling with the age-old question: can hope and unity persevere in the shadow of fear? This story invites you to explore the depths of community resilience and the power of shared heritage while reminding us that the most daunting battles are often fought not simply against external forces, but against the darkness that resides within.

In this novel, journey alongside the brave souls of Briarwood as they navigate their fate against the looming specter of Old Man Wicker. Witness a poignant tale of loss, redemption, and the haunting legacy of choices made—or avoided. As the clock ticks and shadows gather, prepare to face the harrowing consequences of despair entwined with the beauty of human connection.

Welcome to the small, suburban town of Briarwood, where the echoes of the past shape the present and the future seems forever uncertain.`}</p>
          </div>
        </div>

        <p className="book-buy">
          To purchase <strong>The Scarecrow&apos;s Curse</strong>, visit its listing on&nbsp;
          <a
            href="https://www.amazon.com/dp/B0DMPG9VN9"
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