const footerLinks = [
  { label: 'SoundCloud', href: 'https://soundcloud.com/noatomas' },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/7BR8CzNSc4JYz6FHyrdxn7?si=Tlq45nsuS0ygrQN3ZS1Eww' },
  { label: 'Instagram', href: 'https://www.instagram.com/thenoatomas/' },
  { label: 'YouTube', href: 'https://www.youtube.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-white/70 sm:px-8 lg:px-24 space-y-4">
      <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.35em]">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-white/35 px-4 py-2 transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="text-[0.75rem] uppercase tracking-[0.35em]">© {year} Noa Tomas · Light through sound.</div>
    </footer>
  );
}
