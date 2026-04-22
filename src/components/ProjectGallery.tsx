"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(
    () => setActive((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length],
  );

  const next = useCallback(
    () => setActive((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length],
  );

  const openLightbox = useCallback(() => setLightbox(true), []);
  const closeLightbox = useCallback(() => setLightbox(false), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, closeLightbox]);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className="space-y-4">
        {/* Main slider */}
        <div className="group relative aspect-16/10 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
          {/* Sliding track */}
          <div
            className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={openLightbox}
                aria-label="Ver imagen completa"
                className="relative h-full w-full shrink-0 cursor-zoom-in"
              >
                <Image
                  src={src}
                  alt={`${alt} - imagen ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority={i === 0}
                />
              </button>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/90 p-2 text-zinc-700 opacity-0 shadow-md backdrop-blur transition duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/90 p-2 text-zinc-700 opacity-0 shadow-md backdrop-blur transition duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute right-3 bottom-3 rounded-md bg-black/60 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
            {active + 1} / {images.length}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-black/10">
            <div
              className="h-full bg-zinc-900 transition-all duration-500 ease-out"
              style={{ width: `${((active + 1) / images.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={`relative aspect-square overflow-hidden rounded-md border transition-all duration-300 ${
                i === active
                  ? "scale-105 border-zinc-900 shadow-md ring-2 ring-zinc-900 ring-offset-1"
                  : "border-zinc-200 opacity-60 hover:scale-105 hover:border-zinc-400 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-fade fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Cerrar"
            className="absolute top-4 right-4 z-20 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
            className="absolute left-4 z-20 rounded-full bg-white/10 p-3 text-white transition hover:scale-110 hover:bg-white/20"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
            className="absolute right-4 z-20 rounded-full bg-white/10 p-3 text-white transition hover:scale-110 hover:bg-white/20"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Sliding track */}
          <div
            className="lightbox-zoom relative h-full w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {images.map((src, i) => (
                <div
                  key={src}
                  className="flex h-full w-full shrink-0 items-center justify-center px-10"
                >
                  <Image
                    src={src}
                    alt={`${alt} - imagen ${i + 1}`}
                    width={1920}
                    height={1200}
                    className="max-h-[90vh] w-auto max-w-[92vw] rounded-lg object-contain shadow-2xl"
                    priority={i === active}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Counter */}
          <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
