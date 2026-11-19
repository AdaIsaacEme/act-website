import React from "react";

const AwardsTicker: React.FC = () => {
  const awards = [
    "🏆 Telecom Engineering Company of the Year 2017",
    "🥇 Ghana's Most Outstanding ICT Solutions 2019 – tmt Magazine",
    "🏅 ICT Solutions Provider of the Year 2021 – African Excellence Awards",
    "⭐ Motorola Solutions Platinum Partner",
    "🌍 Operating since 2011 in Ghana and across Africa",
  ];

  return (
    <div className="bg-brand text-white py-3 overflow-hidden marquee" aria-label="Awards and recognition">
      <ul className="flex whitespace-nowrap animate-scroll w-max">
        {[...awards, ...awards].map((award, idx) => (
          <li
            key={idx}
            aria-hidden={idx >= awards.length ? true : undefined}
            className="flex items-center space-x-4 px-8 flex-shrink-0"
          >
            <span className="text-sm font-semibold">{award}</span>
            <span className="text-lg" aria-hidden="true">•</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AwardsTicker;
