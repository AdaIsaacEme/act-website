import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useContent } from "../context/ContentContext";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedWrapper from "../components/AnimatedWrapper";
import AnimatedButton from "../components/AnimatedButton";
import AnimatedLink from "../components/AnimatedLink";

interface ProjectModalData {
  heading: string;
  intro: string;
  solutionsTitle: string;
  solutions: string[];
}

const projectModalData: Record<string, ProjectModalData> = {
  "1": {
    heading:
      "UG Medical Centre \u2014 Enterprise ICT Infrastructure Deployment",
    intro:
      "We delivered an end-to-end IT and telecommunications backbone for the 65,000 sqm University of Ghana Medical Centre. The brief covered everything from the structured cabling in the walls to the systems clinicians and administrators rely on every day, delivered on a construction timeline running alongside the rest of the project.",
    solutionsTitle: "Key Solutions Delivered",
    solutions: [
      "Site-wide structured cabling and network design across all buildings on the 65,000 sqm Medical centre.",
      "Data Center Infrastructure: Turnkey installation of a high-density, energy-efficient enterprise data center built for 24/7 reliability.",
      "Cisco Core Networking: Enterprise-grade passive and active Cisco network deployment to cover high-speed data transmission across all hospital wings.",
      "Avaya IP Telephony: Fully integrated IP voice communication system connecting medical staff, administrative offices, and emergency departments.",
    ],
  },
  "2": {
    heading: "Nationwide Automatic Weather Stations Deployment",
    intro:
      "ACT ICT supplied and installed a network of automatic weather stations at sites across Ghana, replacing manual and inconsistent readings with continuous, real-time data collection.",
    solutionsTitle: "Key Solutions Delivered",
    solutions: [
      "Site surveys and station placement across multiple locations nationwide",
      "Supply and installation of automated weather sensor equipment",
      "Sensor calibration and commissioning",
      "Integration into a remote monitoring and data-logging setup",
    ],
  },
  "3": {
    heading: "Underground Leaky Feeder Communications System",
    intro:
      "Underground mining environments present harsh obstacles for radio waves. We engineered and deployed a heavy-duty Leaky Feeder system to deliver complete, uninterrupted radio coverage throughout complex underground tunnel networks.",
    solutionsTitle: "Key Solutions Delivered",
    solutions: [
      "Integration with existing radio communication systems",
      "Coaxial Cable Infrastructure: Continuous radiant cable installation along haulage drifts, stopes, and shafts.",
      "Multi-Channel Voice & Data: Low-latency VHF/UHF voice channels combined with telemetry data support for underground machinery.",
      "Headend & Line Amplifiers: High-grade inline signal boosters ensuring crystal-clear clarity across miles of subterranean tunnels.",
    ],
  },
  "5": {
    heading: "Persistent Aerial Surveillance via RT Tactical Aerostat",
    intro:
      "To combat perimeter breaches and monitor vast mining concessions, we deployed an RT Skystar Tactical Aerostat tethered balloon system, delivering an eye-in-the-sky vantage point for comprehensive site security.",
    solutionsTitle: "Key Solutions Provided",
    solutions: [
      "Elevated Surveillance: Continuous airborne deployment reaching up to 1,000 feet, featuring up to 72 hours of persistent flight endurance per cycle.",
      "Advanced Electro-Optical Payloads: Integrated long-range day/night thermal cameras with auto-tracking capabilities.",
      "Mobile Command Trailer: Direct tether-line power delivery and real-time video feed integration into the central command and control center.",
      "Operator training and handover.",
    ],
  },
  "6": {
    heading: "Smart Perimeter Intrusion Detection System",
    intro:
      "ACT ICT installed a perimeter intrusion detection fence around mine site boundaries, adding a physical and sensor-based first line of defense against unauthorized entry.",
    solutionsTitle: "Key Solutions Delivered",
    solutions: [
      "Fiber-Optic Sensing Cables: High-sensitivity sensor cables mounted along physical chain-link/anti-climb fencing to detect cutting, climbing, or tampering.",
      "Zone-Based Alerting: Instant spatial pinpointing of intrusion attempts mapped onto geographic GIS interfaces.",
      "CCTV Preset Triggering: Automatic pan-tilt-zoom (PTZ) camera integration that automatically focuses on the exact fence zone where an alert sounds.",
    ],
  },
  "7": {
    heading:
      "Zambia Maina Soko Military Hospital \u2014 Critical Health Infrastructure",
    intro:
      "For a 350-bed military hospital in Zambia, ACT ICT delivered the complete data, voice, and data center infrastructure needed to run a facility of that scale \u2014 from the cabling in every ward to the servers behind it.",
    solutionsTitle: "Key Solutions Provided",
    solutions: [
      "Schneider Electric Modular Data Center: High-availability server room equipped with precision cooling, fire suppression, and redundant UPS backup power.",
      "Enterprise Cisco Network: High-bandwidth active switching and passive structured cabling connecting all operational departments.",
      "500+ Extension Avaya Telephony: Scalable IP voice communication matrix for clinical teams, administration, and emergency dispatch.",
    ],
  },
  "9": {
    heading: "Rugged Underground Mining CCTV System",
    intro:
      "ACT ICT designed, installed, and maintains an IP CCTV system built to hold up underground while giving control rooms visibility into tunnel activity.",
    solutionsTitle: "Key Solutions Provided",
    solutions: [
      "Heavy-Duty Enclosures: IP67/IK10 vandal-resistant and corrosion-proof camera housings engineered for severe environments.",
      "Ultra-Low Light & Infrared Imaging: High-contrast sensors providing clear video feeds in pitch-black underground haulage ways and crusher stations.",
      "Fiber Network Backhaul: Ruggedized fiber-optic backbones streaming HD video feeds straight to surface control rooms with minimal latency.",
    ],
  },
  "11": {
    heading: "Mission-Critical Industrial TETRA Radio Network",
    intro:
      "ACT ICT designed and deployed a full TETRA digital radio network to give mining operations a dedicated, mission-critical communications layer, separate from general-purpose networks.",
    solutionsTitle: "Key Solutions Provided",
    solutions: [
      "Base Station Infrastructure: High-power base stations mounted in climate-controlled outdoor enclosures with backup power resilience.",
      "Group Call & Emergency Alerting: Instant group communications, priority channel queuing, and integrated \u201cMan-Down\u201d emergency distress features.",
      "Dispatch Console Integration: Centralized dispatcher software for live tracking, call recording, and channel management.",
    ],
  },
  "12": {
    heading: "Intelligent  CCTV Solutions",
    intro:
      "ACT ICT delivers end-to-end CCTV systems tailored for mining operations, businesses, government institutions, schools, hospitals, and residential developments, ensuring reliable monitoring in every environment.",
    solutionsTitle: "Key Solutions Provided",
    solutions: [
      "Enterprise-Grade Video Surveillance: HD, 4K, and PTZ IP cameras with wide-area coverage, day/night performance, and weather-resistant designs for indoor and outdoor installations.",
      "AI-Powered Security & Analytics: Smart detection features including perimeter protection, object tracking, facial recognition, vehicle identification, and automated security alerts.",
      "Centralized Monitoring & Storage: Integrated Video Management Systems (VMS), secure recording, remote viewing, and scalable network infrastructure for efficient security management across single or multiple locations.",
    ],
  },
};

const Projects: React.FC = () => {
  const { projects } = useContent();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const activeModal = selectedProjectId
    ? projectModalData[selectedProjectId]
    : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProjectId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProjectId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProjectId]);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const categoryColors: { [key: string]: string } = {
    Infrastructure: "#00A8E8",
    Communications: "#F59E0B",
    Security: "#EF4444",
    Engineering: "#10B981",
  };

  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
        paddingBottom: "5rem",
      }}
      className="pt-28 sm:pt-32"
    >
      {/* Header Section with Banner */}
      <ScrollReveal slideDistance={30}>
        <div
          className="relative overflow-hidden"
          style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
            marginBottom: "4rem",
          }}
        >
          <img
            src="/images/projects/projects-banner.png"
            alt="Our Projects"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              Our Projects
            </h1>
            <p className="text-lg text-white/80">
              Showcasing excellence in execution across Ghana and West Africa.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <ScrollReveal slideDistance={20} delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <AnimatedButton
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 btn-lift ${
                  filter === cat
                    ? "bg-[#00A8E8] text-white shadow-lg shadow-[#00A8E8]/50 scale-105"
                    : ""
                }`}
                style={
                  filter !== cat
                    ? {
                        backgroundColor: "var(--bg-surface)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-secondary)",
                      }
                    : undefined
                }
                hoverScale={1.05}
              >
                {cat}
              </AnimatedButton>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggeredGrid
          fromDirection="alternating"
          staggerDelay={0.07}
          containerDelay={0.2}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              onClick={() => setSelectedProjectId(project.id)}
              className="group rounded-xl overflow-hidden hover:border-[#00A8E8] transition-all duration-300 hover:shadow-lg hover:shadow-[#00A8E8]/20 flex flex-col h-full will-change-transform cursor-pointer"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-color)",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#060F1E] will-change-transform grid">
                <AnimatedWrapper hoverScale={1.06} transitionDuration={0.4}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover will-change-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </AnimatedWrapper>
                <div className="absolute inset-0 bg-[#0A1628]/30 group-hover:bg-[#0A1628]/10 transition-all duration-300" />

                {/* Category Badge */}
                <div
                  className="absolute top-4 left-4 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor:
                      categoryColors[project.category] || "#00A8E8",
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3
                  className="font-display text-xl font-black mb-2 group-hover:text-[#00A8E8] transition-all duration-300"
                  style={{ color: "var(--text-heading)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
                <span className="mt-4 text-[#00A8E8] text-sm font-semibold flex items-center self-start group-hover:text-[#0090CC] transition-colors duration-200">
                  View project details <ArrowRight className="ml-1" size={14} />
                </span>
              </div>

              {/* Bottom Border Hover Effect */}
              <div className="h-1 bg-gradient-to-r from-[#00A8E8] via-[#0090CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </StaggeredGrid>

        {/* CTA Section */}
        <ScrollReveal slideDistance={25} delay={0.3}>
          <div
            className="rounded-xl p-12 text-center"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
            }}
          >
            <h3
              className="font-display text-3xl mb-4"
              style={{ color: "var(--text-heading)" }}
            >
              More Projects on Request
            </h3>
            <p
              className="mb-6 max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              We have completed 100+ projects across Ghana and West Africa.
              Contact us for a full portfolio of our engineering excellence and
              proven track record.
            </p>
            <AnimatedButton
              onClick={() => navigate("/contact")}
              className="inline-flex justify-center items-center px-8 py-3 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#00A8E8]/50 btn-lift"
              hoverScale={1.04}
            >
              Get in Touch{" "}
              <ArrowRight className="ml-2 flex-shrink-0" size={16} />
            </AnimatedButton>
          </div>
        </ScrollReveal>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProjectId && activeModal && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProjectId(null)}
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
            >
              <div
                className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl p-6 sm:p-8 pointer-events-auto shadow-2xl border"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#00A8E8]/10 text-[#00A8E8] hover:bg-[#00A8E8]/20 transition-colors duration-200"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                {/* Heading */}
                <h2
                  className="font-display text-xl sm:text-2xl font-black mb-4 pr-10 leading-snug"
                  style={{ color: "var(--text-heading)" }}
                >
                  {activeModal.heading}
                </h2>

                {/* Accent line */}
                <div className="w-16 h-1 bg-[#00A8E8] rounded-full mb-6" />

                {/* Intro */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {activeModal.intro}
                </p>

                {/* Solutions list */}
                <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[#00A8E8]">
                  {activeModal.solutionsTitle}:
                </p>
                <ul className="space-y-3">
                  {activeModal.solutions.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#00A8E8] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
