import React, { useEffect, useRef } from "react";
import SectionHeading from "./ui/SectionHeading.jsx";

export default function Testimonials() {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.setAttribute("data-elfsight-platform", "true");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="testimonials section section--dark" id="temoignages" aria-labelledby="testimonials-title">
      <div className="wrap">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Avis clients"
          title="Ce qu'en disent nos clients"
          description="Des clients réguliers, des résultats constants et une réputation bâtie sur la précision et le confort."
        />

        <div className="testimonials-embed reveal" ref={widgetRef}>
          <div className="elfsight-app-c661c44c-1325-48fc-b78c-ffff61fb2005" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
