import React from "react";
import InteractiveMachine from "../Components/InteractiveMachine";
import SEO from "../Components/SEO";

const MachinePage = () => {
  const machineSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Advanced Medical Machine & Healthcare Equipment Rental",
    "description": "Interactive showcase of high-performance medical machinery available for rental to hospitals and surgical clinics.",
    "brand": {
      "@type": "Brand",
      "name": "Reinforce Healthcare Services"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Interactive Medical Machine Showcase & Rental Solutions"
        description="Explore advanced healthcare machinery specs, features, and rental options available for doctors and hospitals."
        keywords="medical machine showcase, hospital machine rental, healthcare equipment specs, medical device rental"
        canonical="/machine"
        jsonLd={machineSchema}
      />
      <InteractiveMachine />
    </div>
  );
};

export default MachinePage;
