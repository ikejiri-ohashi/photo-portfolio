"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { photos } from "./photos";

export default function PhotoGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            className="group relative overflow-hidden bg-[var(--border)] aspect-square cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]"
            onClick={() => open(index)}
            aria-label={`${photo.alt}を拡大表示`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized={photo.src.startsWith("https://placehold")}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          photo={photos[activeIndex]}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
