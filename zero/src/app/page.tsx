import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import StoryManager from '@/components/StoryManager';
import PhotoGallery from '@/components/PhotoGallery';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />

      <main>
        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>

        {/* About Section */}
        <About />

        {/* Stories Section */}
        <StoryManager />

        {/* Gallery Section */}
        <PhotoGallery />

        {/* Footer */}
        <footer
          className="py-12 text-center"
          style={{
            background: 'rgba(15, 15, 30, 0.5)',
            borderTop: '1px solid rgba(0, 240, 255, 0.2)'
          }}
        >
          <div className="cyber-container">
            <div className="space-y-4">
              <div className="flex justify-center gap-6 mb-6">
                <a
                  href="#home"
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--cyber-cyan)' }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--cyber-cyan)' }}
                >
                  About
                </a>
                <a
                  href="#stories"
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--cyber-cyan)' }}
                >
                  Stories
                </a>
                <a
                  href="#gallery"
                  className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--cyber-cyan)' }}
                >
                  Gallery
                </a>
              </div>

              <div
                className="h-px w-32 mx-auto mb-4"
                style={{ background: 'var(--gradient-cyber)' }}
              />

              <p
                className="text-2xl font-bold mb-2 text-gradient"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                LUCY
              </p>

              <p className="text-sm opacity-60">
                Cyberpunk: Edgerunners Archive
              </p>

              <p className="text-xs opacity-40 mt-4">
                Created with 💙 for all Lucy fans
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
