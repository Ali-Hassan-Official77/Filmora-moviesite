"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Play,
  Star,
} from "lucide-react";
import { tmdbImage } from "@/lib/tmdb";
import { formatRating, formatYear } from "@/lib/utils";
import LikeButton from "@/components/LikeButton";

export default function Hero({ movies = [] }) {
  const slides = useMemo(
    () => movies.filter((m) => m?.backdrop_path).slice(0, 8),
    [movies]
  );

  const [active, setActive] = useState(0);
  const movie = slides[active];

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(
      () => setActive((c) => (c + 1) % slides.length),
      6500
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!movie) return <section className="hero-shell" />;

  const backdrop = tmdbImage(movie.backdrop_path, "original");
  const poster = tmdbImage(movie.poster_path, "w500");

  const previous = () =>
    setActive((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setActive((c) => (c + 1) % slides.length);

  return (
    <section className="hero-shell">
      <AnimatePresence mode="wait">
        <motion.div
          key={movie.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 8, ease: "linear" },
          }}
        >
          <img
            src={backdrop}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="hero-vignette" />
          <div className="hero-grain" />
        </motion.div>
      </AnimatePresence>

      {/* Ambient glow */}
      <motion.div
        key={`glow-${movie.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-none absolute -right-40 top-1/4 h-[440px] w-[440px] rounded-full bg-[var(--f-primary)] opacity-[0.08] blur-[140px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1500px] items-end px-5 pb-28 pt-32 sm:min-h-[720px] sm:px-8 sm:pb-32 lg:min-h-[760px] lg:px-12 xl:px-16">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_310px] xl:grid-cols-[minmax(0,1fr)_350px] xl:gap-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="mb-5 flex flex-wrap items-center gap-4">
                <div className="hero-eyebrow">
                  <span className="hero-pulse" />
                  Featured tonight
                </div>
                <span className="hero-meta-chip">
                  {formatYear(movie.release_date)}
                </span>
                <span className="hero-meta-chip">
                  <Star size={13} fill="currentColor" className="text-[var(--f-primary)]" />
                  {formatRating(movie.vote_average)}
                </span>
              </div>

              <h1 className="hero-title">{movie.title}</h1>

              <p className="hero-copy">
                {movie.overview ||
                  "Discover what the world is watching right now."}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href={`/movie/${movie.id}`} className="btn-primary group h-12 px-5 text-sm">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-black/85 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <Play size={13} fill="currentColor" />
                  </span>
                  Watch now
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <LikeButton
                  movie={movie}
                  className="group h-12 gap-2.5 rounded-full border border-[var(--f-line-2)] bg-[color-mix(in_srgb,var(--f-surface)_55%,transparent)] px-5 text-sm font-semibold text-[var(--f-text)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--f-primary)] hover:text-[var(--f-primary)]"
                >
                  <Heart
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="hidden xs:inline sm:inline">
                    Save to list
                  </span>
                </LikeButton>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${movie.id}`}
              initial={{ opacity: 0, y: 25, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -15, x: 15 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="hidden lg:block"
            >
              <div className="group relative">
                <div className="hero-card">
                  <div className="hero-card-poster">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={poster || backdrop}
                        src={poster || backdrop}
                        alt={movie.title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.55 }}
                      />
                    </AnimatePresence>
                    <div className="hero-card-shade" />

                    <div className="absolute left-4 top-4">
                      <span className="hero-badge">NOW STREAMING</span>
                    </div>

                    <div className="absolute inset-x-4 bottom-4">
                      <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
                        Filmora pick
                      </p>
                      <h2 className="line-clamp-2 text-lg font-bold leading-tight tracking-[-0.02em] text-white">
                        {movie.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile poster */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`mobile-${movie.id}`}
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.5 }}
          className="absolute right-4 top-28 z-10 block w-[104px] sm:right-8 sm:top-32 sm:w-[125px] lg:hidden"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[var(--f-line-2)] bg-[color-mix(in_srgb,var(--f-surface)_55%,transparent)] p-1.5 shadow-2xl backdrop-blur-xl">
            <img
              src={poster || backdrop}
              alt={movie.title}
              className="aspect-[3/4.2] w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-7 left-5 right-5 z-20 flex items-center justify-between sm:bottom-9 sm:left-8 sm:right-8 lg:left-12 lg:right-12 xl:left-16 xl:right-16">
        <div className="flex min-w-[72px] items-center gap-2">
          <span className="text-xs font-bold tracking-[0.16em] text-[var(--f-text)]">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-5 bg-[var(--f-line-2)]" />
          <span className="text-[10px] font-medium tracking-[0.12em] text-[var(--f-faint)]">
            {String(Math.max(slides.length, 1)).padStart(2, "0")}
          </span>
        </div>

        <div className="hidden items-center gap-1.5 sm:flex">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show ${item.title}`}
              onClick={() => setActive(index)}
              className="flex h-7 items-center justify-center"
            >
              <span
                className={`hero-dot ${index === active ? "active" : ""}`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous movie"
            className="hero-nav-btn"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next movie"
            className="hero-nav-btn"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-[var(--f-line)]">
        <motion.div
          key={movie.id}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6.5, ease: "linear" }}
          className="h-full bg-gradient-to-r from-[var(--f-primary)] to-[var(--f-violet)]"
        />
      </div>
    </section>
  );
}