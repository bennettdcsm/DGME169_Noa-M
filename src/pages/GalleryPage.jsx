import HeroSection from '../components/HeroSection';
import releases from '../data/releases.json';
import ReleaseGridSection from '../components/gallery/ReleaseGridSection';

export default function GalleryPage() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <HeroSection
        tagline="Discography"
        title="Songs built from light, bass, and emotion."
        description="Every tile is a song — artwork, story, and energy distilled into one frame. Scroll to feel the palette and mood of each release."
        variant="gallery"
      />

      <ReleaseGridSection releases={releases} />
    </div>
  );
}
