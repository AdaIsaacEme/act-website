import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Send } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const BASE_WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=233577700555&text=Hello+ACT-ICT+Ghana%2C+I%27d+like+to+enquire+about+your+services.&type=phone_number&app_absent=0";

const DEFAULT_MESSAGE =
  "Hello ACT-ICT Ghana, I'd like to enquire about your services.";

const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  // Generate timestamp (SSR-safe, client-side only)
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setTimestamp(formatter.format(new Date()));
  }, []);

  // Handle Esc key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setMessage("");
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isOpen]);

  // Focus textarea when panel opens
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessage("");
    if (fabRef.current) {
      fabRef.current.focus();
    }
  };

  const handleSend = () => {
    const userMessage = message.trim() || DEFAULT_MESSAGE;

    try {
      const url = new URL(BASE_WHATSAPP_URL);
      url.searchParams.set("text", userMessage);
      window.location.href = url.toString();
    } catch (error) {
      console.error("Error creating WhatsApp URL:", error);
      const fallbackUrl = `https://api.whatsapp.com/send/?phone=233577700555&text=${encodeURIComponent(userMessage)}&type=phone_number&app_absent=0`;
      window.location.href = fallbackUrl;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <>
      {/* Floating Action Button (FAB) - Hidden when panel is open */}
      {!isOpen && (
        <button
          ref={fabRef}
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform duration-200 ease-out flex items-center justify-center"
          aria-label="Open chat"
          type="button"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </button>
      )}

      {/* Chat Panel Backdrop + Container */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:justify-end p-4 pointer-events-none md:pb-6 md:pr-6">
          {/* Panel */}
          <div
            className={`bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto w-full max-w-sm max-h-[85vh] md:max-h-[520px] ${
              prefersReducedMotion ? "" : "animate-slide-up-fade"
            }`}
            role="dialog"
            aria-modal="false"
            aria-labelledby="whatsapp-panel-title"
          >
            {/* Header */}
            <div className="bg-[#2596be] px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                {/* Logo Avatar */}
                <div className="w-9 h-9 rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src="/images/logo/act-ict-logo.png"
                    alt="ACT-ICT Ghana"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <h2
                  id="whatsapp-panel-title"
                  className="text-white font-semibold text-base"
                >
                  Have a question?
                </h2>
              </div>
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="text-white hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
                aria-label="Close chat"
                type="button"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto bg-white p-4 space-y-3">
              {/* Welcome Message Row */}
              <div className="flex gap-2 items-end">
                {/* Logo Avatar */}
                <div className="w-7 h-7 rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src="/images/logo/act-ict-logo.png"
                    alt="ACT-ICT Ghana"
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                {/* Bubble */}
                <div className="bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-tl-sm px-3 py-2 max-w-xs">
                  <p>
                    Enter your question below and a representative will get
                    right back to you.
                  </p>
                </div>
              </div>

              {/* Timestamp */}
              {timestamp && (
                <div className="text-right pr-2">
                  <span className="text-xs text-gray-500">{timestamp}</span>
                </div>
              )}
            </div>

            {/* Input Row */}
            <div className="border-t border-gray-200 px-3 py-3 bg-white flex-shrink-0">
              <div className="flex items-end gap-2 mb-3">
                {/* Input Pill Container */}
                <div className="flex-1 relative bg-gray-100 rounded-full px-5 py-3 flex items-center">
                  <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message"
                    className="flex-1 bg-transparent outline-none resize-none text-base placeholder-gray-500 max-h-24"
                    rows={2}
                    aria-label="Message input"
                  />
                </div>

                {/* Send Button */}
                <button
                  onClick={handleSend}
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    message.trim()
                      ? "bg-[#2596be] text-white hover:bg-[#1e7aa8]"
                      : "bg-gray-300 text-gray-600"
                  }`}
                  aria-label="Send message"
                  type="button"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Footer */}
              <div className="text-center text-xs text-gray-500 pb-1">
                <span>Powered by </span>
                <span className="text-[#2596be] font-medium">
                  ACT-ICT Ghana
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slide-up-fade {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .animate-slide-up-fade {
            animation: slide-up-fade 0.25s ease-out;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;
