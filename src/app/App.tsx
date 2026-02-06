import { useState, useRef } from 'react';
import { HeroSection } from './components/hero-section';
import { PhotoCarousel } from './components/photo-carousel';
import { MessageSection } from './components/message-section';
import { LoveQuotes } from './components/love-quotes';
import { Footer } from './components/footer';
import { MusicPlayer } from './components/music-player';

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleViewMemories = () => {
    setShowContent(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onViewMemories={handleViewMemories} />
      
      {showContent && (
        <div ref={contentRef} className="space-y-0">
          <PhotoCarousel />
          <MessageSection />
          <LoveQuotes />
          <Footer />
        </div>
      )}

      {/* Music Player - Floating */}
      <MusicPlayer />
    </div>
  );
}