import React from "react";

const appearances = [
  {
    date: "March 27 - 28, 2026",
    title: "Hollywood Comic Con",
    venue: "Hollywood Casino",
    addressLine1: "777 Hollywood Blvd",
    addressLine2: "Grantville, PA 17028",
    startDate: "2026-03-27",
    endDate: "2026-03-28",
  },
  {
    date: "July 18, 2026",
    title: "Christmas in July and Summerween Mini Con",
    venue: "The Ballroom Banquet Hall & Event Venue",
    addressLine1: "222 B. Arsenal Rd",
    addressLine2: "York, PA 17402",
    startDate: "2026-07-18",
    endDate: "2026-07-18",
  },
  {
    date: "October 24 - 25, 2026",
    title: "Frightreads Book Festival",
    venue: "Howard County Fairgrounds",
    addressLine1: "2210 Fairgrounds Rd",
    addressLine2: "West Friendship, MD 21794",
    startDate: "2026-10-24",
    endDate: "2026-10-25",
  },
];

function formatGoogleDateRange(startDate, endDate) {
  const start = `${startDate.replace(/-/g, "")}T100000`;

  const endObj = new Date(endDate);
  endObj.setDate(endObj.getDate() + 1);
  const endPlusOne = endObj.toISOString().slice(0, 10).replace(/-/g, "");
  const end = `${endPlusOne}T180000`;

  return `${start}/${end}`;
}

function createGoogleCalendarUrl(event) {
  const location = `${event.venue}, ${event.addressLine1}, ${event.addressLine2}`;
  const details = `See Scotty McCoy at ${event.title}.`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: formatGoogleDateRange(event.startDate, event.endDate),
    details,
    location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function downloadICS(event) {
  const formatDateForICS = (dateString, hour, minute) => {
    const date = new Date(`${dateString}T00:00:00`);
    date.setHours(hour, minute, 0, 0);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = "00";

    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
  };

  const endDateObj = new Date(`${event.endDate}T00:00:00`);
  endDateObj.setDate(endDateObj.getDate() + 1);
  const endYear = endDateObj.getFullYear();
  const endMonth = String(endDateObj.getMonth() + 1).padStart(2, "0");
  const endDay = String(endDateObj.getDate()).padStart(2, "0");

  const fileName = event.title.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const location = `${event.venue}, ${event.addressLine1}, ${event.addressLine2}`;
  const uid = `${fileName}@scottymccoyauthor.com`;
  const stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Scotty McCoy//Author Site//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${formatDateForICS(event.startDate, 10, 0)}`,
    `DTEND:${endYear}${endMonth}${endDay}T180000`,
    `SUMMARY:${event.title}`,
    `LOCATION:${location}`,
    `DESCRIPTION:See Scotty McCoy at ${event.title}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function AppearanceCard({ event }) {
  const { date, title, venue, addressLine1, addressLine2 } = event;

  return (
    <article className="appearance-card">
      <div className="appearance-date-wrap">
        <div className="appearance-date">
          {date}
        </div>
      </div>

      <div className="appearance-details">
        <h2 className="appearance-title">{title}</h2>
        <p className="appearance-line appearance-venue">
          <span className="appearance-location-icon">📍</span>
          {venue}
        </p>
        <p className="appearance-line">
          <span className="appearance-location-icon">📍</span>
          {addressLine1}
        </p>
        <p className="appearance-line">
          <span className="appearance-location-icon">📍</span>
          {addressLine2}
        </p>

        <div className="appearance-actions">
          <a
            href={createGoogleCalendarUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            className="appearance-action-button"
          >
            Add to Google Calendar
          </a>
          <button
            type="button"
            className="appearance-action-button appearance-action-button-secondary"
            onClick={() => downloadICS(event)}
          >
            Download for Apple / Outlook
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Appearances() {
  return (
    <section className="appearances-page appearances-page-blur">
      <style>{`
        .appearances-page {
          width: min(1100px, 100%);
          margin: 0 auto;
          padding: 18px 6px 56px;
        }

        .appearances-page-blur {
          animation: appearancesBlurIn 0.65s ease both;
        }

        .appearances-card {
          background: rgba(255, 251, 245, 0.9);
          border: 1px solid rgba(94, 75, 61, 0.12);
          border-radius: 28px;
          box-shadow: 0 18px 40px rgba(66, 44, 30, 0.08);
          padding: 34px;
        }

        .appearances-heading-wrap {
          margin-bottom: 28px;
        }

        .appearances-eyebrow {
          margin: 0 0 10px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a7654;
        }

        .appearances-heading {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: 0.02em;
          color: #4a2f20;
          text-shadow: 0 2px 10px rgba(90, 57, 37, 0.08);
        }

        .appearances-divider {
          width: 128px;
          height: 3px;
          margin-top: 16px;
          border-radius: 999px;
          background: linear-gradient(90deg, #8a5a3c, #d7b07b);
        }

        .appearances-intro {
          margin: 0 0 28px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #5a4638;
        }

        .appearances-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .appearance-card {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 22px;
          align-items: stretch;
          padding: 22px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(252, 248, 241, 0.96), rgba(243, 236, 226, 0.96));
          border: 1px solid rgba(94, 75, 61, 0.1);
          box-shadow: 0 14px 24px rgba(66, 44, 30, 0.06);
        }

        .appearance-date-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          border-radius: 20px;
          background: linear-gradient(135deg, #7b4d33, #b78956);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.16);
        }

        .appearance-date {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.2rem, 2vw, 1.7rem);
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: 0.02em;
          color: #fffaf4;
          text-align: center;
          text-shadow: 0 2px 8px rgba(74, 47, 32, 0.18);
        }

        .appearance-date-icon {
          font-size: 1.2rem;
          line-height: 1;
          opacity: 0.95;
        }

        .appearance-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .appearance-title {
          margin: 0 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.45rem, 2.4vw, 2rem);
          font-weight: 700;
          line-height: 1.2;
          color: #4c2f21;
        }

        .appearance-line {
          margin: 0 0 6px;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: #5a4638;
        }

        .appearance-location-icon {
          margin-right: 8px;
          font-size: 1rem;
          opacity: 0.9;
        }

        .appearance-venue {
          font-weight: 700;
          color: #6a4129;
        }

        .appearance-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
        }

        .appearance-action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          background: linear-gradient(135deg, #7b4d33, #b78956);
          color: #fffaf4;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 18px rgba(123, 77, 51, 0.16);
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }

        .appearance-action-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 14px 22px rgba(123, 77, 51, 0.2);
        }

        .appearance-action-button-secondary {
          background: linear-gradient(135deg, #5c4334, #8c6b55);
        }

        .appearances-empty {
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1.08rem;
          line-height: 1.9;
          color: #5a4638;
          margin: 18px 0 4px;
        }

        @keyframes appearancesBlurIn {
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
          .appearances-card {
            padding: 24px;
          }

          .appearance-card {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 18px;
          }

          .appearance-date-wrap {
            justify-content: flex-start;
          }

          .appearance-date {
            text-align: left;
            justify-content: flex-start;
          }
        }
      `}</style>

      <div className="appearances-card">
        <div className="appearances-heading-wrap">
          <p className="appearances-eyebrow">Events & Signings</p>
          <h1 className="appearances-heading">Upcoming Appearances</h1>
          <div className="appearances-divider" />
        </div>

        <p className="appearances-intro">
          Below are upcoming appearances, conventions, and festival events where readers can connect with Scotty in person.
        </p>

        {appearances.length === 0 ? (
          <p className="appearances-empty">
            Scotty doesn't currently have any events or signings scheduled. Check back later to see if Scotty is in a city near you!
          </p>
        ) : (
          <div className="appearances-list">
            {appearances.map((event) => (
              <AppearanceCard key={`${event.date}-${event.title}`} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}