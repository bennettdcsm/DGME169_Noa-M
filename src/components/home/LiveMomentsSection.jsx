import SectionHeader from '../SectionHeader';

const LiveMomentsSection = ({ shows = [] }) => (
  <section className="space-y-6" id="events">
    <SectionHeader
      title="Live moments"
      description="Every set is a pulse of light cutting through the dark: intimate, human, alive."
    />
    <div className="grid gap-6 md:grid-cols-3">
      {shows.map((show) => (
        <article
          key={`${show.city}-${show.date}`}
          className="glass-panel flex flex-col gap-3 border border-white/10 p-6 text-slate-100 transition hover:-translate-y-1 hover:border-white/30"
        >
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-white/70">{show.date}</span>
          <h3 className="text-xl font-semibold">{show.city}</h3>
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">{show.venue}</p>
          <p className="text-slate-300">{show.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default LiveMomentsSection;
