import React, { useEffect, useRef } from "react";

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
    <section className="testimonials" id="temoignages" aria-labelledby="testimonials-title">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Avis clients</span>
          <h2 id="testimonials-title">La preuve du savoir-faire</h2>
          <p>Des clients réguliers, des résultats constants et une réputation bâtie sur la précision, le confort et la qualité.</p>
        </div>

        <div className="testimonials-embed reveal" ref={widgetRef}>
          <div className="elfsight-app-c661c44c-1325-48fc-b78c-ffff61fb2005" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
