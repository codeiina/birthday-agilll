/**
 * MUSIC PLAYER COMPONENT
 * 
 * Komponen ini adalah music player floating yang bisa memutar lagu untuk website ulang tahun.
 * 
 * CARA MENGGUNAKAN FILE LAGU:
 * 1. Simpan file lagu kamu (.mp3) di folder: /public/assets/music/
 * 2. Contoh: /public/assets/music/lagu-ultah.mp3
 * 3. Ubah path di variabel SONG_PATH di bawah ini sesuai nama file lagumu
 * 
 * CONTOH PATH:
 * - const SONG_PATH = "/assets/music/lagu-ultah.mp3";
 * - const SONG_PATH = "/assets/music/birthday-song.mp3";
 * - const SONG_PATH = "/assets/music/our-song.mp3";
 */

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ========================================
// GANTI PATH LAGU DI SINI!
// ========================================
const SONG_PATH = "/assets/music/birthday-song-agil.mp3"; // <-- UBAH SESUAI FILE LAGU KAMU

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Toggle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto play saat komponen dimount (opsional)
  // Uncomment baris di bawah jika ingin lagu auto-play
  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   }
  // }, []);

  return (
    <>
      {/* Audio element - hidden */}
      <audio 
        ref={audioRef} 
        src={SONG_PATH} 
        loop // Lagu akan diulang terus
        onEnded={() => setIsPlaying(false)}
      />

      {/* Floating Music Player */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="relative">
          {/* Main Player Button */}
          <motion.button
            onClick={togglePlay}
            className="flex items-center gap-3 bg-foreground text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              paddingRight: isExpanded ? '1.5rem' : '1rem',
              paddingLeft: isExpanded ? '1.5rem' : '1rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            {/* Icon Container */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="pause"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <Pause size={24} strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="play"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <Play size={24} strokeWidth={2} fill="white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Expanded Text */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-sm font-normal">
                    {isPlaying ? 'Now Playing' : 'Play Music'}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Music Icon - Always visible when not expanded */}
            {!isExpanded && (
              <motion.div
                animate={{ 
                  scale: isPlaying ? [1, 1.1, 1] : 1,
                }}
                transition={{ 
                  duration: 0.6,
                  repeat: isPlaying ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <Music size={20} strokeWidth={2} />
              </motion.div>
            )}
          </motion.button>

          {/* Playing indicator - animated bars */}
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -top-2 -right-2 bg-white rounded-full p-1.5 shadow-lg"
            >
              <div className="flex items-end gap-0.5 h-4 w-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="bg-foreground w-1 rounded-full"
                    animate={{ 
                      height: ['30%', '100%', '30%'],
                    }}
                    transition={{ 
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Tooltip hint - appears on first load */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: 2 }}
              className="absolute bottom-full right-0 mb-2 bg-foreground text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Volume2 size={16} strokeWidth={2} />
                <span>Klik untuk putar musik</span>
              </div>
              {/* Arrow pointing down */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
