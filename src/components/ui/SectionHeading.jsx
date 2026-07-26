import React from "react";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-head reveal ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
