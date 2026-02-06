import { motion } from 'motion/react';
import { Heart, Sparkles, Cake } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Decorative icons */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="text-foreground" size={32} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="text-foreground" size={32} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Cake className="text-foreground" size={32} strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* Main message */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border mb-8">
            <h3 className="text-3xl md:text-4xl mb-4 text-foreground tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Happy Birthday, Sayang!
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Terima kasih sudah hadir dan memilih aku sebagai bagian dari ceritamu.
            </p>
          </div>

          {/* Signature */}
          <div className="space-y-4">
            <p className="text-xl text-foreground/80 italic">
              With all my love,
            </p>
            <div className="flex items-center justify-center gap-2">
              <Heart className="text-foreground" size={24} strokeWidth={1.5} />
              <p className="text-2xl text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Love
              </p>
              <Heart className="text-foreground" size={24} strokeWidth={1.5} />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Made with love © {currentYear}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Created specially for your special day
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}