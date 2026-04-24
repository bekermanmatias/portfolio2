"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.5;

export function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const zoomStageRef = useRef<HTMLDivElement>(null);

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

  const resetZoom = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, Math.round((z + ZOOM_STEP) * 10) / 10));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const nextZoom = Math.max(
        MIN_ZOOM,
        Math.round((z - ZOOM_STEP) * 10) / 10,
      );
      if (nextZoom === 1) setOffset({ x: 0, y: 0 });
      return nextZoom;
    });
  }, []);

  const toggleZoom = useCallback(() => {
    setZoom((z) => (z > 1 ? 1 : 2));
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    resetZoom();
  }, [active, lightbox, resetZoom]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next, closeLightbox, zoomIn, zoomOut, resetZoom]);

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

  useEffect(() => {
    const el = zoomStageRef.current;
    if (!el || !lightbox) return;

    let lastDistance = 0;
    let lastX = 0;
    let lastY = 0;
    let mode: "none" | "pinch" | "pan" = "none";
    let lastTapAt = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        mode = "pinch";
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastDistance = Math.hypot(dx, dy);
      } else if (e.touches.length === 1) {
        mode = "pan";
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (mode === "pinch" && e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.hypot(dx, dy);
        if (lastDistance > 0) {
          const delta = distance / lastDistance;
          setZoom((z) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z * delta)));
        }
        lastDistance = distance;
      } else if (mode === "pan" && e.touches.length === 1) {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        setZoom((currentZoom) => {
          if (currentZoom > 1) {
            e.preventDefault();
            const dx = x - lastX;
            const dy = y - lastY;
            setOffset((o) => ({ x: o.x + dx, y: o.y + dy }));
          }
          return currentZoom;
        });
        lastX = x;
        lastY = y;
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) lastDistance = 0;

      if (e.touches.length === 0 && e.changedTouches.length === 1) {
        const now = Date.now();
        if (now - lastTapAt < 300) {
          toggleZoom();
          lastTapAt = 0;
        } else {
          lastTapAt = now;
        }
      }

      if (e.touches.length === 0) mode = "none";
    };

    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [lightbox, toggleZoom]);

  useEffect(() => {
    const el = zoomStageRef.current;
    if (!el || !lightbox) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 1.1 : 0.9;
      setZoom((z) => {
        const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z * delta));
        if (next === 1) setOffset({ x: 0, y: 0 });
        return next;
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [lightbox]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || zoom <= 1) return;
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const onMouseUp = () => setDragging(false);

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

          {/* Zoom stage */}
          <div
            ref={zoomStageRef}
            className="lightbox-zoom relative h-full w-full touch-none select-none overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onDoubleClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
            style={{
              cursor:
                zoom > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in",
            }}
          >
            <div
              className="flex h-full w-full items-center justify-center"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transition: dragging ? "none" : "transform 200ms ease-out",
                transformOrigin: "center center",
              }}
            >
              <Image
                src={images[active]}
                alt={`${alt} - imagen ${active + 1}`}
                width={1920}
                height={1200}
                className="max-h-[90vh] w-auto max-w-[92vw] rounded-lg object-contain shadow-2xl"
                priority
                draggable={false}
              />
            </div>
          </div>

          {/* Zoom controls */}
          <div
            className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-white backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              aria-label="Zoom out"
              className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
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
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>

            <button
              onClick={resetZoom}
              className="min-w-[44px] px-2 text-xs font-semibold tracking-wide transition hover:text-white/80"
              aria-label="Reset zoom"
            >
              {Math.round(zoom * 100)}%
            </button>

            <button
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              aria-label="Zoom in"
              className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
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
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>

            <div className="mx-1 h-5 w-px bg-white/20" />

            <span className="pr-2 text-xs font-medium text-white/80">
              {active + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
