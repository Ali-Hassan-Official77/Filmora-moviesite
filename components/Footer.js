import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid md:grid-cols-[1.6fr_1fr_1fr] gap-12">
        <div>
          <Logo />
          <p className="footer-copy">
            Filmora is a warm, cinematic way to explore popular, trending,
            top-rated and upcoming films — with a personal watch list kept
            right on your device.
          </p>
          <p className="tmdb-note">
            Movie metadata and artwork are supplied through the TMDB API.
            Filmora is not endorsed or certified by TMDB.
          </p>
        </div>

        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            <Link href="/">Discover</Link>
            <Link href="/watchlist">My Watch List</Link>
            <Link href="/genre/28">Action</Link>
            <Link href="/genre/18">Drama</Link>
          </div>
        </div>

        <div>
          <p className="footer-label">Data & access</p>
          <div className="footer-links">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            >
              The Movie Database
            </a>
            <Link href="/search">Movie search</Link>
            <Link href="/watchlist">Local watch list</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Filmora. All rights reserved.</span>
          <span>Cinema discovery, warm on every screen.</span>
        </div>
      </div>
    </footer>
  );
}