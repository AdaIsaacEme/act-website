import React from 'react';

const AwardsTicker: React.FC = () => {
  const awards = [
    '🏆 Telecom Engineering Company of the Year 2017',
    '🥇 Ghana\'s Most Outstanding ICT Solutions 2019 – tmt Magazine',
    '🏅 ICT Solutions Provider of the Year 2021 – African Excellence Awards',
    '⭐ Motorola Solutions Platinum Partner',
    '🌍 Operating since 2011 across Ghana & West Africa',
  ];

  return (
    <div className="bg-[#00A8E8] text-white py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...awards, ...awards].map((award, idx) => (
          <div key={idx} className="flex items-center space-x-4 px-8 flex-shrink-0">
            <span className="text-sm font-semibold">{award}</span>
            <span className="text-lg">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsTicker;
