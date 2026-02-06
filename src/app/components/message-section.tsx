import { motion } from 'motion/react';
import { Heart, Gift, Cake, Sparkles } from 'lucide-react';

const messages = [
  {
    icon: Heart,
    title: 'Untuk Kamu',
    message: 'Terimakasi yaa sayang, sudah bertahan sampai sekarang dan diumur 18 tahun ini semoga kamu dapat menjadi pribadi yang lebih baik yaa',
    bgColor: 'bg-muted'
  },
  {
    icon: Cake,
    title: 'Hari Spesialmu',
    message: 'Di hari istimewa ini, aku pengen kamu tahu betapa berartinya kamu buat aku. Semoga semua impian kamu dapat tercapai yaaa 🎂',
    bgColor: 'bg-secondary'
  },
  {
    icon: Gift,
    title: 'Harapanku',
    message: 'Semoga tahun ini membawa lebih banyak kebahagiaan, kesuksesan, dan momen-momen indah buat kamu. inget yaa sayang aku bakal selalu ada buat kamu 🎁',
    bgColor: 'bg-accent'
  }
];

export function MessageSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-muted">
              <Sparkles className="text-foreground" size={40} strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pesan Untukmu
          </h2>
          <p className="text-muted-foreground text-lg">
            Ini adalah pesan dari ninis buat agil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {messages.map((msg, index) => {
            const Icon = msg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`h-full ${msg.bgColor} rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border relative overflow-hidden group`}>
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Heart size={100} strokeWidth={1} className="text-foreground" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-border">
                      <Icon className="text-foreground" size={28} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {msg.title}
                    </h3>

                    {/* Message */}
                    <p className="text-foreground/70 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}