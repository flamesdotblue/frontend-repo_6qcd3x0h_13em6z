import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-b-2xl border-b border-white/10 bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      <div className="relative z-10 h-full flex items-end">
        <div className="px-5 sm:px-8 pb-6 sm:pb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Acadia OS — Academic Dashboard
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/70 max-w-2xl">
            Dark, minimal and responsive. Switch between your modules like apps. Timetable highlights your current class in real time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
