// components/Testimonials.tsx
'use client';

import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  { name: 'Rajesh Kumar', role: 'Home User, Bangalore', content: 'Switching to RK Netlinks was the best decision for our family. We can now stream, work, and study online simultaneously without any issues. The 24/7 support is excellent!', rating: 5 },
  { name: 'Priya Chauhan', role: 'Small Business Owner', content: "As a small business owner, reliable internet is crucial. RK Netlinks's business plan has eliminated our connectivity issues and improved our productivity significantly.", rating: 5 },
  { name: 'Vikram Patel', role: 'IT Manager', content: "We switched our entire office to RK Netlinks's leased line service. The symmetrical speeds and dedicated bandwidth have transformed how we collaborate and work.", rating: 4 },
  { name: 'Anita Sharma', role: 'Freelancer, Mumbai', content: 'RK Netlinks provides seamless connectivity for my remote work. The speed and reliability help me meet deadlines without any hassle.', rating: 5 },
  { name: 'Suresh Menon', role: 'Student', content: 'The high-speed internet from RK Netlinks makes online classes and research so much easier. No buffering, just smooth performance!', rating: 4 },
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.04),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 leading-relaxed">Hear from our satisfied customers about their experience with RK Netlinks.</p>
        </div>

        <div className="relative overflow-hidden">
          {/* custom nav buttons */}
          <div className="absolute -top-2 -left-2 z-20 flex gap-3">
            <button aria-label="Previous" onClick={() => swiperRef.current?.slidePrev()} className="bg-white hover:bg-blue-50 w-11 h-11 rounded-full flex items-center justify-center border border-gray-200 hover:border-blue-500 shadow-sm transition">
              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button aria-label="Next" onClick={() => swiperRef.current?.slideNext()} className="bg-white hover:bg-blue-50 w-11 h-11 rounded-full flex items-center justify-center border border-gray-200 hover:border-blue-500 shadow-sm transition">
              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            keyboard={{ enabled: true }}
            a11y={{ prevSlideMessage: 'Previous testimonial', nextSlideMessage: 'Next testimonial' }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 18 },
              768: { slidesPerView: 1, spaceBetween: 20 },
              1024: { slidesPerView: 1, spaceBetween: 24 },
            }}
            className="py-6"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={t.name + idx}>
                <article className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 min-h-[18rem] flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-4 -right-6 opacity-10 pointer-events-none select-none">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M80 10C95 30 110 55 100 84C90 113 55 115 40 95C25 75 20 45 36 26C52 7 65 -10 80 10Z" fill="currentColor"/></svg>
                  </div>

                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-semibold">{t.name.charAt(0)}</div>
                  </div>

                  <div className="flex justify-center mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FaStar key={s} className={`text-lg ${s < t.rating ? 'text-yellow-400' : 'text-gray-200'}`} />
                    ))}
                  </div>

                  <p className="text-md text-gray-700 italic mb-4 leading-relaxed">“{t.content}”</p>

                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">Use arrows, dots or swipe on mobile — autoplay pauses on hover.</div>
      </div>

      <style jsx>{`
        /* adjust swiper bullets to match design */
        :global(.swiper-pagination-bullet) { background: #CBD5E1; opacity: 1; }
        :global(.swiper-pagination-bullet-active) { background: #4F46E5; }
        /* ensure no partial slide peeking */
        :global(.swiper) { padding-bottom: 28px; overflow: visible; }
        :global(.swiper-wrapper) { align-items: stretch; }
        :global(.swiper-slide) { display: flex; align-items: stretch; justify-content: center; }
      `}</style>
    </section>
  );
};

export default Testimonials;
