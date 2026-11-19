import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/mining", label: "Mining" },
  { to: "/contact", label: "Contact us" },
];

const NotFound: React.FC = () => (
  <div
    className="pt-40 pb-24 px-4 min-h-[70vh] flex items-center"
    style={{ backgroundColor: "var(--bg-primary)" }}
  >
    <div className="max-w-2xl mx-auto text-center">
      <p className="font-display text-7xl text-[color:var(--accent-text)]">404</p>
      <h1 className="font-display text-4xl sm:text-5xl mt-2 mb-4" style={{ color: "var(--text-heading)" }}>
        Page not found
      </h1>
      <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
        The page you are looking for doesn't exist or has moved. Try one of these:
      </p>
      <ul className="flex flex-wrap justify-center gap-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="inline-block px-5 py-3 rounded-lg border font-semibold hover:border-[color:var(--accent-text)]"
              style={{ borderColor: "var(--border-color)", color: "var(--text-primary)" }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default NotFound;
