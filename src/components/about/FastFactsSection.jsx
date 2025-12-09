import SectionHeader from '../SectionHeader';

const FastFactsSection = ({ facts = [] }) => (
  <section className="space-y-6">
    <SectionHeader title="Fast facts" description="Quick pulses on the sound, shows, and momentum right now." />
    <div className="grid gap-6 md:grid-cols-3">
      {facts.map((fact) => (
        <article
          key={fact.label}
          className="glass-panel flex flex-col gap-3 border border-white/10 p-6 text-slate-100 transition hover:-translate-y-1 hover:border-white/30"
        >
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-white/70">{fact.label}</span>
          <h3 className="text-xl font-semibold">{fact.title}</h3>
          <p className="text-slate-300">{fact.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default FastFactsSection;
