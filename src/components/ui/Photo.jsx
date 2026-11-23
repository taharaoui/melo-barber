import React, { useState } from "react";
import monogram from "../../assets/monogram.svg";

// Image responsive (srcset) avec état de secours si le fichier ne charge pas.
export default function Photo({ image, alt, sizes = "100vw", className = "", loading = "lazy", priority = false }) {
  const [failed, setFailed] = useState(!image);

  if (failed) {
    return (
      <div className={`photo-fallback ${className}`.trim()} role={alt ? "img" : undefined} aria-label={alt || undefined}>
        <img src={monogram} alt="" aria-hidden="true" width="56" height="56" />
      </div>
    );
  }

  return (
    <img
      className={className}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={priority ? "eager" : loading}
      fetchpriority={priority ? "high" : undefined}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
