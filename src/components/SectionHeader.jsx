export default function SectionHeader({ title, description }) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
      <p className="text-xs uppercase tracking-[0.4em] text-white/70">{title}</p>
      {description && <p className="max-w-2xl text-slate-300">{description}</p>}
    </div>
  );
}
