import SectionHeader from '../SectionHeader';

const RecentReleasesSection = ({ releases = [] }) => (
  <section className="space-y-6" id="music">
    <SectionHeader
      title="Recent releases"
      description="Waveforms carved from color. Each track is a flare of connection and warmth."
    />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...releases]
        .slice()
        .reverse()
        .slice(0, 3)
        .map((release) => (
          <a
            key={release.title}
            href={release.url}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-panel flex flex-col gap-3 border border-white/10 p-6 text-slate-100 transition hover:-translate-y-1 hover:border-white/30"
          >
            <span className="text-[0.7rem] uppercase tracking-[0.4em] text-white/70">{release.meta}</span>
            <h3 className="text-xl font-semibold hover:underline">{release.title}</h3>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">{release.genre}</p>
            <p className="text-slate-300">Latest drop direct from SoundCloud.</p>
          </a>
        ))}
    </div>
  </section>
);

export default RecentReleasesSection;
