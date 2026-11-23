import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Icon from "./ui/Icon.jsx";
import { business } from "../data/business.js";

const ELFSIGHT_SRC = "https://elfsightcdn.com/platform.js";
const WIDGET_CLASS = "elfsight-app-c661c44c-1325-48fc-b78c-ffff61fb2005";
const TIMEOUT_MS = 10_000;

export default function Testimonials() {
  const widgetRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    const widget = container.querySelector(`.${WIDGET_CLASS}`);
    const isRendered = () => widget && widget.childElementCount > 0;

    // Le widget est prêt dès qu'Elfsight injecte du contenu.
    const mo = new MutationObserver(() => {
      if (isRendered()) {
        setStatus("ready");
        mo.disconnect();
      }
    });
    mo.observe(widget, { childList: true, subtree: true });

    let script = document.querySelector(`script[src="${ELFSIGHT_SRC}"]`);
    const onError = () => setStatus((s) => (s === "ready" ? s : "error"));
    if (!script) {
      script = document.createElement("script");
      script.src = ELFSIGHT_SRC;
      script.async = true;
      script.setAttribute("data-elfsight-platform", "true");
      document.body.appendChild(script);
    }
    script.addEventListener("error", onError);

    // Le widget est en chargement différé : le délai ne démarre qu'une fois la section visible.
    let timer;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      timer = setTimeout(() => {
        if (!isRendered()) onError();
      }, TIMEOUT_MS);
    });
    io.observe(container);

    return () => {
      mo.disconnect();
      io.disconnect();
      clearTimeout(timer);
      script.removeEventListener("error", onError);
    };
  }, []);

  const { rating } = business;

  return (
    <section className="testimonials section section--dark" id="temoignages" aria-labelledby="testimonials-title">
      <div className="wrap">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Avis clients"
          title="Ce qu'en disent nos clients"
          description="Des clients réguliers, des résultats constants et une réputation bâtie sur la précision et le confort."
        />

        <div className={`testimonials-embed reveal is-${status}`} ref={widgetRef} aria-busy={status === "loading"}>
          <div className={WIDGET_CLASS} data-elfsight-app-lazy hidden={status === "error"}></div>

          {status === "error" ? (
            <div className="reviews-fallback">
              <p className="reviews-fallback__score">
                {rating.value.toLocaleString("fr-CA", { minimumFractionDigits: 1 })}
                <span>/5</span>
              </p>
              <div>
                <span className="reviews-fallback__stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={16} />)}
                </span>
                <p>
                  {rating.count} avis clients · {rating.source}
                </p>
                <p className="reviews-fallback__note">Les avis n'ont pas pu se charger ici.</p>
              </div>
              <a className="link-arrow" href={rating.url} target="_blank" rel="noreferrer">
                Lire les avis <Icon name="external" size={16} />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
