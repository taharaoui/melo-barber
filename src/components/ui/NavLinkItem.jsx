import React from "react";

export default function NavLinkItem({ href, label, onClick }) {
  return (
    <li>
      <a href={href} onClick={onClick}>
        {label}
      </a>
    </li>
  );
}
