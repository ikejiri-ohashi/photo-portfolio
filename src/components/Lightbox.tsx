"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { Photo } from "./photos";

type Props = {
  photo: Photo;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ photo, onClose, onPrev, onNext }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="lightbox-enter fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl font-light leading-none transition-colors"
        onClick={onClose}
        aria-label="閉じる"
      >
        &times;
      </button>

      {/* Prev button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-light px-3 py-6 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="前の写真"
      >
        &#8249;
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="object-contain max-w-[90vw] max-h-[90vh] w-auto h-auto"
          priority
          unoptimized={photo.src.startsWith("https://placehold")}
        />
        <p className="mt-3 text-center text-xs tracking-widest uppercase text-white/40">
          {photo.alt}
        </p>
      </div>

      {/* Next button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-light px-3 py-6 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="次の写真"
      >
        &#8250;
      </button>
    </div>
  );
}
