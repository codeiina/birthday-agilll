import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const photos = [
  {
    url: '/photos/Foto1.jpeg',
    caption: 'Photobox bareng, skaduta & stembayo'
  },
  {
    url: '/photos/foto2.jpg',
    caption: 'Birthday Boy :p'
  },
  {
    url: '/photos/foto3.jpg',
    caption: 'Nonton pss, kalo yang ini uda pacaran'
  },
  {
    url: '/photos/foto4.jpg',
    caption: 'Main Skuter di Kaliurang'
  }
];

export function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    arrows: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    customPaging: (i: number) => (
      <div className="w-3 h-3 rounded-full bg-foreground/20 hover:bg-foreground/60 transition-colors duration-300 mt-4" />
    ),
    dotsClass: 'slick-dots !flex !justify-center !gap-2'
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground flex items-center justify-center gap-3 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            <Heart size={36} strokeWidth={1.5} />
            Kenangan Kita
            <Heart size={36} strokeWidth={1.5} />
          </h2>
          <p className="text-muted-foreground text-lg">
            Momen-momen indah yang takkan pernah terlupakan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="carousel-container"
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-border">
            <Slider {...settings}>
              {photos.map((photo, index) => (
                <div key={index} className="outline-none">
                  <div className="relative">
                    <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl">
                      <img
                        src={photo.url}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-lg md:text-xl text-foreground/80 italic">
                        "{photo.caption}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>

      <style>{`
        .carousel-container .slick-prev,
        .carousel-container .slick-next {
          width: 50px;
          height: 50px;
          z-index: 10;
        }

        .carousel-container .slick-prev {
          left: -25px;
        }

        .carousel-container .slick-next {
          right: -25px;
        }

        .carousel-container .slick-prev:before,
        .carousel-container .slick-next:before {
          font-size: 50px;
          opacity: 0.3;
          color: #4a5568;
        }

        .carousel-container .slick-prev:hover:before,
        .carousel-container .slick-next:hover:before {
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .carousel-container .slick-prev {
            left: 10px;
          }
          .carousel-container .slick-next {
            right: 10px;
          }
          .carousel-container .slick-prev,
          .carousel-container .slick-next {
            width: 40px;
            height: 40px;
          }
          .carousel-container .slick-prev:before,
          .carousel-container .slick-next:before {
            font-size: 40px;
          }
        }

        .carousel-container .slick-dots li {
          margin: 0;
        }

        .carousel-container .slick-dots li button {
          padding: 0;
        }

        .carousel-container .slick-dots li.slick-active div {
          background-color: #4a5568;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}