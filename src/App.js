import React, { useEffect, useMemo, useState } from "react";
import scotty from "./images/Scotty.png";
import {
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

// Pages
import About from "./About";
import Books from "./Books";
import UpcomingProjects from "./UpcomingProjects";
import Appearances from "./Appearances";
import Contact from "./Contact";

// Books
import TheClownOnMapleStreet from "./books/TheClownOnMapleStreet";
import TheScarecrowsCurse from "./books/TheScarecrowsCurse";
import TheHarvestMoonWitch from "./books/TheHarvestMoonWitch";
import TheVampireThatDreadedSundown from "./books/TheVampireThatDreadedSundown";
import TheAntiqueDoll from "./books/TheAntiqueDoll";
import BloodMoon from "./books/BloodMoon";
import TheHauntedHouse from "./books/TheHauntedHouse";
import FudgeLiesAndAlibis from "./books/FudgeLiesAndAlibis";
import TrufflesAndTreachery from "./books/TrufflesAndTreachery";
import AShardOfSweetness from "./books/AShardOfSweetness";
import ChristDefeatsCancer from "./books/ChristDefeatsCancer";
import ChristDefeatsCancer2 from "./books/ChristDefeatsCancer2";
import FridayThe13thTriviaBook from "./books/FridayThe13thTriviaBook";
import HalloweenTriviaBook from "./books/HalloweenTriviaBook";
import HalloweenTriviaBook2ndEdition from "./books/HalloweenTriviaBook2ndEdition";
import UltimateHalloweenMovieExperience from "./books/UltimateHalloweenMovieExperience";

const navItems = [
  { label: "Home", to: "/home" },
  { label: "About the Author", to: "/about" },
  { label: "Books", to: "/books" },
  { label: "Upcoming Projects", to: "/upcoming-projects" },
  { label: "Appearances", to: "/appearances" },
  { label: "Contact", to: "/contact" },
];

const EXIT_DURATION = 320;

function GlobalStyles() {
  return (
    <style>{`
      * {
        box-sizing: border-box;
      }

      html, body, #root {
        margin: 0;
        min-height: 100%;
        font-family: Georgia, "Times New Roman", serif;
        background:
          radial-gradient(circle at top left, rgba(212, 183, 135, 0.22), transparent 28%),
          linear-gradient(180deg, #f8f3eb 0%, #f2e8dc 48%, #eadfce 100%);
        color: #2f241c;
      }

      body {
        min-height: 100vh;
        overflow-x: hidden;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .site-shell {
        min-height: 100vh;
        position: relative;
      }

      .top-header {
        position: sticky;
        top: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 22px 42px;
        background: rgba(250, 245, 238, 0.88);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(88, 59, 39, 0.12);
        box-shadow: 0 8px 24px rgba(70, 46, 30, 0.08);
      }

      .brand {
        font-family: "Brush Script MT", "Lucida Handwriting", cursive;
        font-size: clamp(2rem, 3vw, 3.2rem);
        color: #5a3925;
        letter-spacing: 0.02em;
        white-space: nowrap;
        animation: signatureEntrance 1.4s ease-out both;
        text-shadow: 0 2px 10px rgba(90, 57, 37, 0.12);
      }

      .nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        flex-wrap: wrap;
      }

      .nav-link {
        position: relative;
        padding: 10px 14px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.98rem;
        font-weight: 600;
        color: #5e4b3d;
        border-radius: 999px;
        transition: color 0.28s ease, transform 0.28s ease, background 0.28s ease;
        overflow: hidden;
      }

      .nav-link::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 999px;
        background: linear-gradient(90deg, rgba(139, 94, 60, 0.14), rgba(183, 146, 93, 0.22));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
        z-index: -1;
      }

      .nav-link::after {
        content: "";
        position: absolute;
        left: 14px;
        right: 14px;
        bottom: 6px;
        height: 2px;
        background: linear-gradient(90deg, #8a5a3c, #d0a96f);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease;
      }

      .nav-link:hover {
        color: #3f291b;
        transform: translateY(-1px);
      }

      .nav-link:hover::before,
      .nav-link:hover::after {
        transform: scaleX(1);
      }

      .nav-link.active {
        color: #fffaf4;
        background: linear-gradient(135deg, #7b4d33, #b78956);
        box-shadow: 0 10px 18px rgba(123, 77, 51, 0.22);
      }

      .nav-link.active::after,
      .nav-link.active::before {
        transform: scaleX(0);
      }

      .page-wrap {
        width: min(1220px, calc(100% - 40px));
        margin: 0 auto;
        padding: 54px 0 70px;
      }

      .page-transition {
        will-change: opacity, filter, transform;
      }

      .page-transition.entering {
        animation: pageBlurIn 0.45s ease both;
      }

      .page-transition.exiting {
        animation: pageBlurOut 0.32s ease both;
      }

      .hero-card {
        display: grid;
        grid-template-columns: minmax(280px, 380px) 1fr;
        gap: 38px;
        align-items: start;
        background: rgba(255, 251, 245, 0.84);
        border: 1px solid rgba(94, 75, 61, 0.12);
        border-radius: 28px;
        padding: 34px;
        box-shadow: 0 18px 40px rgba(66, 44, 30, 0.1);
      }

      .photo-frame {
        position: relative;
        width: 100%;
        perspective: 1400px;
        overflow: visible;
      }

      .photo-frame::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 22px;
        background: linear-gradient(135deg, #6f4932 0%, #b78956 60%, #e6cda7 100%);
        transform-origin: left center;
        transform: rotateY(0deg);
        animation: coverOpen 1.6s cubic-bezier(.22,1,.36,1) forwards;
        z-index: 2;
        box-shadow: 0 22px 34px rgba(66, 44, 30, 0.2);
        backface-visibility: hidden;
        pointer-events: none;
      }

      .photo-frame::after {
        content: "";
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 14px;
        width: 8px;
        border-radius: 12px;
        background: linear-gradient(180deg, #3e2a1e, #8b5c3b);
        z-index: 3;
        animation: spineFade 1.6s forwards;
        pointer-events: none;
      }

      .author-photo {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        border-radius: 22px;
        border: 1px solid rgba(94, 75, 61, 0.16);
        box-shadow: 0 16px 30px rgba(66, 44, 30, 0.12);
        background: #efe2d2;
        opacity: 1;
      }

      .eyebrow {
        margin: 0 0 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.82rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #a0734c;
      }

      .hero-title {
        margin: 0 0 18px;
        font-size: clamp(2rem, 3.2vw, 3.4rem);
        line-height: 1.08;
        color: #3e2a1e;
      }

      .hero-copy {
        font-size: 1.08rem;
        line-height: 1.95;
        color: #49372b;
      }

      .hero-copy p {
        margin: 0 0 18px;
      }

      .signature-label {
        margin-top: 28px;
        font-size: 1rem;
        color: #6a5343;
      }

      .signature-name {
        margin-top: 6px;
        font-family: "Brush Script MT", "Lucida Handwriting", cursive;
        font-size: clamp(2.2rem, 4vw, 3.4rem);
        color: #6c4127;
        line-height: 1;
        transform: rotate(-4deg);
        display: inline-block;
        text-shadow: 0 4px 14px rgba(108, 65, 39, 0.14);
      }

      .blank-page {
        min-height: 280px;
      }

      @keyframes signatureEntrance {
        0% {
          opacity: 0;
          transform: translateY(-18px) scale(0.92) rotate(-5deg);
          filter: blur(4px);
        }
        55% {
          opacity: 1;
          transform: translateY(2px) scale(1.03) rotate(1.5deg);
          filter: blur(0);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1) rotate(0);
          filter: blur(0);
        }
      }

      @keyframes coverOpen {
        0% {
          transform: rotateY(0deg);
          opacity: 1;
        }
        65% {
          transform: rotateY(-78deg);
          opacity: 1;
        }
        100% {
          transform: rotateY(-110deg);
          opacity: 0;
        }
      }

      @keyframes spineFade {
        0% {
          opacity: 1;
        }
        72% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes pageBlurIn {
        0% {
          opacity: 0;
          transform: translateY(6px);
          filter: blur(10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
      }

      @keyframes pageBlurOut {
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

      @media (max-width: 1080px) {
        .top-header {
          flex-direction: column;
          align-items: flex-start;
          padding: 20px 24px;
        }

        .nav {
          width: 100%;
          justify-content: flex-start;
        }
      }

      @media (max-width: 820px) {
        .page-wrap {
          width: min(100% - 24px, 1220px);
          padding-top: 26px;
        }

        .hero-card {
          grid-template-columns: 1fr;
          padding: 24px;
          gap: 24px;
        }
      }

      @media (max-width: 560px) {
        .brand {
          white-space: normal;
          line-height: 1;
        }

        .nav-link {
          font-size: 0.92rem;
          padding: 9px 12px;
        }

        .hero-copy {
          font-size: 1rem;
        }
      }
    `}</style>
  );
}

function Header({ onNavigateStart }) {
  return (
    <header className="top-header">
      <div className="brand">Scotty McCoy, Author</div>

      <nav className="nav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={(event) => onNavigateStart(event, item.to)}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function Layout({ children, isExiting, routeKey, onNavigateStart }) {
  const transitionClass = useMemo(() => {
    if (isExiting) return "page-transition exiting";
    return `page-transition entering route-${routeKey}`;
  }, [isExiting, routeKey]);

  return (
    <div className="site-shell">
      <Header onNavigateStart={onNavigateStart} />
      <main key={routeKey} className={`page-wrap ${transitionClass}`}>
        {children}
      </main>
    </div>
  );
}

function HomePage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <section className="hero-card">
        <div className="photo-frame">
          <img
            src={scotty}
            alt="Author Scotty McCoy"
            className="author-photo"
          />
        </div>

        <div>
          <p className="eyebrow">Welcome</p>
          <h1 className="hero-title">
            Stories across genres, crafted to connect with every kind of reader.
          </h1>

          <div className="hero-copy">
            <p>
              Welcome to the official website of <strong>Scotty McCoy</strong>, a
              published and best-selling author whose body of work spans more than a
              dozen titles across multiple genres.
            </p>

            <p>
              From horror, fantasy, romance, and mystery to trivia and autobiographical
              writing, Scotty McCoy’s work reflects a passion for storytelling in many
              forms. This site is your place to explore current and upcoming projects,
              discover published books, and learn more about future appearances and
              events.
            </p>

            <p>
              Readers are warmly invited to browse the site and attend an event whenever
              Scotty is appearing nearby. For those unable to make it to a signing, his
              books can also be found through major retailers including Amazon, Walmart,
              Barnes & Noble, and other booksellers.
            </p>

            <div className="signature-label">Sincerely,</div>
            <div className="signature-name">Scotty McCoy</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function AboutPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <About />
    </Layout>
  );
}

function BooksPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <Books />
    </Layout>
  );
}

function UpcomingProjectsPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <UpcomingProjects />
    </Layout>
  );
}

function AppearancesPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <Appearances />
    </Layout>
  );
}

function ContactPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <Contact />
    </Layout>
  );
}

function TheClownOnMapleStreetPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <TheClownOnMapleStreet />
    </Layout>
  );
}

function TheScarecrowsCursePage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <TheScarecrowsCurse />
    </Layout>
  );
}

function TheHarvestMoonWitchPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <TheHarvestMoonWitch />
    </Layout>
  );
}

function TheVampireThatDreadedSundownPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <TheVampireThatDreadedSundown />
    </Layout>
  );
}

function TheAntiqueDollPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <TheAntiqueDoll />
    </Layout>
  );
}

function BloodMoonPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <BloodMoon />
    </Layout>
  );
}

function TheHauntedHousePage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <TheHauntedHouse />
    </Layout>
  );
}

function FudgeLiesAndAlibisPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <FudgeLiesAndAlibis />
    </Layout>
  );
}

function TrufflesAndTreacheryPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <TrufflesAndTreachery />
    </Layout>
  );
}

function AShardOfSweetnessPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <AShardOfSweetness />
    </Layout>
  );
}

function ChristDefeatsCancerPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <ChristDefeatsCancer />
    </Layout>
  );
}

function ChristDefeatsCancer2Page({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <ChristDefeatsCancer2 />
    </Layout>
  );
}

function FridayThe13thTriviaBookPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <FridayThe13thTriviaBook />
    </Layout>
  );
}

function HalloweenTriviaBookPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <HalloweenTriviaBook />
    </Layout>
  );
}

function HalloweenTriviaBook2ndEditionPage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <HalloweenTriviaBook2ndEdition />
    </Layout>
  );
}

function UltimateHalloweenMovieExperiencePage({ isExiting, routeKey, onNavigateStart }) {
  return (
    <Layout isExiting={isExiting} routeKey={routeKey} onNavigateStart={onNavigateStart}>
      <UltimateHalloweenMovieExperience />
    </Layout>
  );
}

function AnimatedAppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isExiting) {
      setDisplayLocation(location);
    }
  }, [location, isExiting]);

  const handleNavigateStart = (event, to) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      location.pathname === to
    ) {
      return;
    }

    event.preventDefault();
    setIsExiting(true);

    window.setTimeout(() => {
      setDisplayLocation({ ...location, pathname: to });
      navigate(to);
      setIsExiting(false);
    }, EXIT_DURATION);
  };

  const routeProps = {
    isExiting,
    routeKey: displayLocation.pathname.replace(/\//g, "-") || "home",
    onNavigateStart: handleNavigateStart,
  };

return (
  <Routes location={displayLocation}>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<HomePage {...routeProps} />} />
    <Route path="/about" element={<AboutPage {...routeProps} />} />
    <Route path="/books" element={<BooksPage {...routeProps} />} />
    <Route
      path="/books/the-clown-on-maple-street"
      element={<TheClownOnMapleStreetPage {...routeProps} />}
    />
    <Route
      path="/books/the-scarecrows-curse"
      element={<TheScarecrowsCursePage {...routeProps} />}
    />
    <Route
      path="/books/the-harvest-moon-witch"
      element={<TheHarvestMoonWitchPage {...routeProps} />}
    />
    <Route
      path="/books/the-vampire-that-dreaded-sundown"
      element={<TheVampireThatDreadedSundownPage {...routeProps} />}
    />
    <Route
      path="/books/the-antique-doll"
      element={<TheAntiqueDollPage {...routeProps} />}
    />
    <Route
      path="/books/blood-moon"
      element={<BloodMoonPage {...routeProps} />}
    />
    <Route
      path="/books/the-haunted-house"
      element={<TheHauntedHousePage {...routeProps} />}
    />
    <Route
      path="/books/fudge-lies-and-alibis"
      element={<FudgeLiesAndAlibisPage {...routeProps} />}
    />
    <Route
      path="/books/truffles-and-treachery"
      element={<TrufflesAndTreacheryPage {...routeProps} />}
    />
    <Route
      path="/books/a-shard-of-sweetness"
      element={<AShardOfSweetnessPage {...routeProps} />}
    />
    <Route
      path="/books/christ-defeats-cancer"
      element={<ChristDefeatsCancerPage {...routeProps} />}
    />
    <Route
      path="/books/christ-defeats-cancer-2"
      element={<ChristDefeatsCancer2Page {...routeProps} />}
    />
    <Route
      path="/books/friday-the-13th-trivia-book"
      element={<FridayThe13thTriviaBookPage {...routeProps} />}
    />
    <Route
      path="/books/halloween-trivia-book"
      element={<HalloweenTriviaBookPage {...routeProps} />}
    />
    <Route
      path="/books/halloween-trivia-book-2nd-edition"
      element={<HalloweenTriviaBook2ndEditionPage {...routeProps} />}
    />
    <Route
      path="/books/ultimate-halloween-movie-experience"
      element={<UltimateHalloweenMovieExperiencePage {...routeProps} />}
    />
    <Route
      path="/upcoming-projects"
      element={<UpcomingProjectsPage {...routeProps} />}
    />
    <Route path="/appearances" element={<AppearancesPage {...routeProps} />} />
    <Route path="/contact" element={<ContactPage {...routeProps} />} />
  </Routes>
);
}

function AppRoutes() {
  return (
    <>
      <GlobalStyles />
      <AnimatedAppRoutes />
    </>
  );
}

export default function App() {
  return <AppRoutes />;
}