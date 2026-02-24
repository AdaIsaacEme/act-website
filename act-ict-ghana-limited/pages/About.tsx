import React from "react";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            About ACT-ICT Ghana
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in delivering world-class technology and
            engineering solutions in West Africa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Company Background
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                ACT-ICT Ghana Limited was established with a clear mandate: to
                bridge the technological gap in the region by providing superior
                Engineering, IT, Security, and Electrical solutions.
              </p>
              <p>
                Over the years, we have grown into a powerhouse of innovation,
                partnering with global giants like Motorola Solutions, CISCO,
                and BEKA Schréder to bring state-of-the-art infrastructure to
                Ghana. Our commitment to quality and excellence has earned us
                the trust of major government and private sector entities.
              </p>
              <p>
                From complex radio communication networks in remote mining areas
                to sophisticated security surveillance in urban centers, ACT-ICT
                delivers reliability where it matters most.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <img
              src="/images/about/cisco-router-hack.jpg"
              alt="Strategic Partnership"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                console.error(
                  "Failed to load image from /images/about/cisco-router-hack.jpg",
                );
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide innovative, reliable, and sustainable technological
              solutions that empower businesses and communities to thrive in a
              connected world.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the premier technology infrastructure provider in West
              Africa, known for engineering excellence and uncompromising
              quality.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Experts",
                desc: "Our team consists of certified engineers and technicians trained by our global partners.",
              },
              {
                title: "Global Partnerships",
                desc: "Direct access to world-class technology through platinum partnerships.",
              },
              {
                title: "Proven Track Record",
                desc: "Successfully delivered complex projects for top-tier clients across various industries.",
              },
            ].map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
