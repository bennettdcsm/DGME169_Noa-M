import HeroSection from '../components/HeroSection';
import releases from '../data/releases.json';
import shows from '../data/shows.json';
import RecentReleasesSection from '../components/home/RecentReleasesSection';
import LiveMomentsSection from '../components/home/LiveMomentsSection';
import StorySection from '../components/home/StorySection';
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <HeroSection
        tagline="Light · Sound · Emotion"
        title="Melodic stories that turn sound into shared elevation."
        description="Noa Tomas blends cinematic synth work, shimmering vocals, and glowing bass lines to bottle the feeling of golden hour just before the drop hits."
        ctas={[
          {
            label: 'Listen',
            href: 'https://soundcloud.com/noatomas',
            variant: 'primary',
          },
          {
            label: 'Book a show',
            href: '/about#booking-form',
            variant: 'secondary',
          },
        ]}
        variant="default"
      />

      <RecentReleasesSection releases={releases} />
      <LiveMomentsSection shows={shows} />
      <StorySection />
      <ContactSection />
    </div>
  );
}
