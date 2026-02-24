import React from "react";
import { Radio, Server, Video, Check } from "lucide-react";

const DivisionACTICT: React.FC = () => {
  const sections = [
    {
      id: "radio",
      title: "Radio Communications",
      icon: <Radio size={48} />,
      content:
        "We provide mission-critical communication systems including TETRA, DMR, and analogue radios. As Platinum Partners of Motorola Solutions, we deploy robust networks for mining, public safety, and logistics.",
      features: [
        "Two-way Radio Systems",
        "Wide Area Networks",
        "Underground Comms (Leaky Feeder)",
        "Dispatch Consoles",
      ],
    },
    {
      id: "network",
      title: "Network Infrastructure",
      icon: <Server size={48} />,
      content:
        "Building the backbone of modern enterprise. We specialize in structured cabling, fiber optics, and wireless broadband solutions designed for high availability and speed.",
      features: [
        "Fiber Optic Splicing & Termination",
        "Data Center Cabling",
        "Wireless Point-to-Point",
        "Network Audits",
      ],
    },
    {
      id: "video",
      title: "Video Surveillance",
      icon: <Video size={48} />,
      content:
        "Advanced CCTV and video analytics solutions. We secure your perimeter and assets with high-definition cameras and intelligent monitoring software.",
      features: [
        "IP Camera Systems",
        "Video Analytics (AI)",
        "Control Room Setup",
        "Remote Monitoring",
      ],
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-blue-300 font-bold tracking-wider uppercase text-sm">
            Division
          </span>
          <h1 className="text-5xl font-extrabold mt-2 mb-6">ACT-ICT</h1>
          <p className="text-xl max-w-2xl text-blue-100">
            Delivering the core of connectivity and security. We build the
            systems that keep your business communicating and secure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        {sections.map((section, idx) => (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex-1">
              <div className="inline-block p-4 bg-blue-100 text-blue-700 rounded-2xl mb-6">
                {section.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {section.content}
              </p>
              <ul className="space-y-3">
                {section.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 font-medium"
                  >
                    <Check className="text-green-500 mr-3" size={20} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <img
                src={`/images/divisions/act-ict-${idx + 1}.jpg`}
                alt={section.title}
                className="rounded-xl shadow-2xl w-full object-cover hover:scale-[1.02] transition duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DivisionACTICT;
