const HERO_VARIANT_CLASS = {
  default: 'hero-visual-default',
  about: 'hero-visual-about',
  gallery: 'hero-visual-gallery',
};

export default function HeroSection({ tagline, title, description, ctas = [], variant = 'default' }) {
  const visualClass = HERO_VARIANT_CLASS[variant] ?? HERO_VARIANT_CLASS.default;

  return (
    <section className="grid min-h-[70vh] grid-cols-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-6">
        {tagline && <p className="text-xs uppercase tracking-[0.5em] text-white/70">{tagline}</p>}
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">{title}</h1>
        {description && <p className="text-lg leading-relaxed text-slate-300">{description}</p>}
        {ctas.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {ctas.map(({ label, href, variant: ctaVariant = 'primary' }) => (
              <a
                key={label}
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noreferrer noopener' : undefined}
                className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] transition ${
                  ctaVariant === 'secondary'
                    ? 'border border-white/40 text-white hover:border-white/70'
                    : 'bg-gradient-to-r from-orange-400 to-blue-500 text-slate-900 shadow-[0_20px_35px_rgba(255,126,51,0.25)] hover:-translate-y-0.5'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className={`hero-visual-base ${visualClass}`} aria-hidden="true" />
    </section>
  );
}
