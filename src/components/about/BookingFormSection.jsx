const BookingFormSection = () => (
  <section className="space-y-6" id="booking-form">
    <div className="text-center space-y-3">
      <h3 className="text-3xl font-semibold">Let's build new light together.</h3>
      <p className="text-slate-300">Share the vibe, the venue, and how you want the night to feel.</p>
    </div>
    <form className="glass-panel border border-white/10 p-6 sm:p-8 space-y-6 max-w-3xl mx-auto">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm uppercase tracking-[0.3em] text-white/70 gap-2">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
          />
        </label>
        <label className="flex flex-col text-sm uppercase tracking-[0.3em] text-white/70 gap-2">
          Email
          <input
            type="email"
            name="email"
            placeholder="hello@noatomas.com"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
          />
        </label>
      </div>
      <fieldset className="space-y-3">
        <legend className="text-sm uppercase tracking-[0.3em] text-white/70">What are we building?</legend>
        <div className="flex flex-wrap gap-4 text-white/80">
          {[
            { label: 'Live set', value: 'live' },
            { label: 'Collaboration', value: 'collaboration' },
            { label: 'Remix', value: 'remix' },
          ].map((option) => (
            <label
              key={option.value}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm"
            >
              <input type="radio" name="interest" value={option.value} className="accent-orange-400" />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex flex-col text-sm uppercase tracking-[0.3em] text-white/70 gap-2">
        Message
        <textarea
          name="message"
          rows="4"
          placeholder="Venue, date, vibe, or anything else to set the scene."
          className="rounded-3xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-orange-400 to-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-[0_20px_35px_rgba(255,126,51,0.25)] hover:-translate-y-0.5 transition"
      >
        Send request
      </button>
    </form>
  </section>
);

export default BookingFormSection;
