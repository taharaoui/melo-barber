import React from "react";

export default function SectionHeading({ id, eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-head reveal ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
