"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import Reveal from "@/components/Reveal";

export default function MovieRow({
  title,
  subtitle,
  movies,
  priority = false,
}) {
  const ref = useRef(null);
  if (!movies?.length) return null;

  const move = (dir) =>
    ref.current?.scrollBy({
      left: dir * ref.current.clientWidth * 0.82,
      behavior: "smooth",
    });

  return (
    <section className="py-9 sm:py-12">
      <Reveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => move(-1)} className="row-nav-btn" aria-label="Scroll left">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => move(1)} className="row-nav-btn" aria-label="Scroll right">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Reveal>

      <div
        ref={ref}
        className="row-scroll flex gap-4 overflow-x-auto px-5 sm:px-8 pb-2 snap-x snap-mandatory"
      >
        {movies.map((m, i) => (
          <div
            key={m.id}
            className="snap-start shrink-0 w-[150px] sm:w-[170px] lg:w-[190px]"
          >
            <MovieCard movie={m} priority={priority && i < 4} />
          </div>
        ))}
      </div>
    </section>
  );
}