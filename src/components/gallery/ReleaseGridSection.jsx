import SectionHeader from '../SectionHeader';

const ReleaseGridSection = ({ releases = [] }) => (
  <section className="space-y-6" id="music">
    <SectionHeader
      title="Music"
      description="Singles straight from the studio. Each sleeve hints at the mood, drop, and glow of the track."
    />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...releases].slice().reverse().map((release) => (
        <article
          key={release.title}
          className="group flex flex-col overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/85 shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:border-white/30"
        >
          <figure className="aspect-square overflow-hidden">
            <img
              src={release.image}
              alt={`${release.title} cover art`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </figure>
          <div className="border-t border-white/5 px-6 py-5">
            <h3 className="text-lg font-semibold">
              <a href={release.url} target="_blank" rel="noreferrer noopener" className="hover:underline">
                {release.title}
              </a>
            </h3>
            <p className="text-sm text-slate-300">{release.meta ?? release.genre}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ReleaseGridSection;
