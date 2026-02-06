import { motion } from 'motion/react';
import { Quote, Heart } from 'lucide-react';

const quotes = [
  {
    text: 'Di hari ulang tahunmu ini, aku cuma mau kamu tau.. mencintaimu adalah hal terbaik yang pernah aku lakukan',
    author: 'Dari aku yang selalu jatuh cinta'
  },
  {
    text: 'Selamat ulang tahun untuk seseorang yang setiap harinya selalu aku doakan',
    author: 'Aku'
  },
  {
    text: 'Ulang tahunmu bukan cuma tentang hari lahirmu, tapi tentang betapa bersyukurnya aku memiliki kamu',
    author: 'Dengan sepenuh hati'
  },
];

export function LoveQuotes() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-muted">
              <Quote className="text-foreground" size={40} strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Special Notes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-muted/50 rounded-2xl p-8 md:p-12 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border relative overflow-hidden group">
                {/* Decorative quote mark */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote size={30} className="text-foreground" strokeWidth={1} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-foreground italic mb-6 text-center leading-relaxed">
                    "{quote.text}"
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Heart size={20} className="text-foreground" strokeWidth={1.5} />
                    <p className="text-sm text-muted-foreground">— {quote.author}</p>
                  </div>
                </div>

                {/* Decorative hearts */}
                <motion.div
                  className="absolute bottom-4 right-4 md:bottom-8 md:right-8"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart size={24} className="text-foreground/10" strokeWidth={1} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special closing note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-secondary rounded-2xl p-4 md:p-6 text-center border border-border shadow-md">
            <Heart className="text-foreground mx-auto mb-4" size={48} strokeWidth={1.5} />
            <p className="text-xl md:text-2xl text-foreground mb-4">
              "Terima kasih sudah menjadi bagian terpenting dalam hidup aku"
            </p>
            <p className="text-lg text-muted-foreground">
              I love you more than words can say
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}