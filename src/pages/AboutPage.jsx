import HeroSection from '../components/HeroSection';
import facts from '../data/facts.json';
import AboutStorySection from '../components/about/AboutStorySection';
import FastFactsSection from '../components/about/FastFactsSection';
import BookingFormSection from '../components/about/BookingFormSection';

export default function AboutPage() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <HeroSection
        tagline="Origin story"
        title="Soundtracking main-stage moments with melodic fire."
        description="Raised in Malmö, Sweden and now rooted in the Bay Area, Noa Tomas channels big room and progressive house energy with sweeping pads, emotional hooks, and drops built for that collective breath before the lights explode."
        variant="about"
      />

      <AboutStorySection />
      <FastFactsSection facts={facts} />
      <BookingFormSection />
    </div>
  );
}
