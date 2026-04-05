import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg tracking-widest uppercase text-[var(--foreground)] hover:opacity-60 transition-opacity"
        >
          Takeshi&apos;s Photo
        </Link>
        <nav>
          <Link
            href="/about"
            className="text-sm tracking-wider uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
