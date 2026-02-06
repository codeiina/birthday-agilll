import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onViewMemories: () => void;
}

export function HeroSection({ onViewMemories }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-gradient-to-b from-white via-secondary/50 to-white">
      {/* Animated background subtle patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              opacity: 0.05
            }}
            animate={{ 
              y: -100,
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            <Heart 
              className="text-foreground" 
              size={20 + Math.random() * 20}
              strokeWidth={1}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sparkles decoration */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="p-4 rounded-full bg-muted">
            <Sparkles className="text-foreground" size={40} strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl mb-6 text-foreground tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Happy Birthday
        </motion.h1>

        {/* Subtitle with heart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-foreground/70 flex items-center justify-center gap-2 flex-wrap mb-4">
            <span>Muhammad Ragil Pujawan</span>
            <Heart className="text-foreground inline" size={24} strokeWidth={1.5} />
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Hari ini adalah hari spesial agil, aku bikin website ini
            untuk mengingat dan menjadi kado spesial dari niniss :D
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            onClick={onViewMemories}
            className="group relative px-10 py-4 bg-foreground text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3 font-normal">
              <Heart size={20} strokeWidth={1.5} />
              Lihat Kenangan
              <Sparkles size={20} strokeWidth={1.5} />
            </span>
          </motion.button>
        </motion.div>

        {/* Decorative text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-sm text-muted-foreground italic"
        >
          Made with love, just for you
        </motion.p>
      </div>
    </section>
  );
}