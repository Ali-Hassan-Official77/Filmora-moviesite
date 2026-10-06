import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 pt-16">
      <p className="font-display italic text-[var(--f-primary)] text-lg mb-3">
        Intermission
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-[var(--f-text)] mb-4">
        Scene not found
      </h1>
      <p className="text-[var(--f-muted)] max-w-md mb-8">
        The film you&rsquo;re looking for isn&rsquo;t on this reel. It may have
        been retired or the link may be off.
      </p>
      <Link href="/" className="btn-primary">
        Back to Filmora
      </Link>
    </div>
  );
}