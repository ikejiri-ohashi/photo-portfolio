export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-xs tracking-widest uppercase text-[var(--muted)]">
        &copy; {new Date().getFullYear()} Takeshi&apos;s Photo. All rights reserved.
      </div>
    </footer>
  );
}
