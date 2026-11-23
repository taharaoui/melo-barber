import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading.jsx";

export default function FAQ({ faq }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Questions fréquentes"
          description="Tout ce qu’il faut savoir avant votre prochaine visite."
        />

        <div className="faq-list">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="faq-answer"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
