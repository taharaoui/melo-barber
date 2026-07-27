import React from "react";

export default function NavActionButton({ href, className = "", children, onClick, ...props }) {
  return (
    <a href={href} className={`nav-cta ${className}`.trim()} onClick={onClick} {...props}>
      {children}
    </a>
  );
}
