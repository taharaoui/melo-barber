import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading.jsx";

export default function Pricing({ pricing }) {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des offres premium sans compromis"
          description="Chaque formule est pensée pour fournir un résultat net, durable et adapté à votre rythme de vie."
        />

        <div className="pricing-grid">
          {pricing.map((plan, index) => (
            <motion.article
              key={plan.id}
              className={`pricing-card ${plan.highlight ? "popular" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
            >
              {plan.highlight ? <span className="pricing-badge">Le plus demandé</span> : null}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="pricing-price">{plan.price}</div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#booking" className="btn-primary">Réserver</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
