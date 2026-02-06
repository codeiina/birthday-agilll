import { motion } from 'motion/react';
import { Camera, Heart } from 'lucide-react';

const galleryPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1725555610696-723ad3e0ab88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJpcnRoZGF5JTIwY2FrZSUyMHBpbmt8ZW58MXx8fHwxNzcwMjg2NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Birthday Cake'
  },
  {
    url: 'https://images.unsplash.com/photo-1760669346457-8f1d7e26f6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRhdGUlMjBjb3VwbGV8ZW58MXx8fHwxNzcwMjg2NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Romantic Dinner'
  },
  {
    url: 'https://images.unsplash.com/photo-1768468311195-1da9ef649271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGhhcHB5JTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzcwMjg2NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Together'
  },
  {
    url: 'https://images.unsplash.com/photo-1694618564673-f9f0d47c47e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MDI4NjU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sunset Love'
  },
  {
    url: 'https://images.unsplash.com/photo-1699294144121-52eb57493c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHMlMjByb21hbnRpY3xlbnwxfHx8fDE3NzAyODY1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Hand in Hand'
  },
  {
    url: 'https://images.unsplash.com/photo-1766974888376-3697b53495f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MDIxMjU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Laughter'
  }
];

export function PhotoGallery() {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-white">
              <Camera className="text-foreground" size={40} strokeWidth={1.5} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gallery Memories
          </h2>
          <p className="text-muted-foreground text-lg">
            Koleksi momen-momen spesial kita
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-square bg-white border border-border"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Heart className="text-white mx-auto mb-2" size={24} strokeWidth={1.5} />
                  <p className="text-white font-normal">{photo.title}</p>
                </div>
              </div>

              {/* Border frame effect */}
              <div className="absolute inset-0 border border-border rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}