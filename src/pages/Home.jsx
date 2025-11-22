import React, { useState, useEffect } from 'react';

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [minDelayPassed, setMinDelayPassed] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set minimum delay (e.g., 1 second)
  useEffect(() => {
    const timer = setTimeout(() => setMinDelayPassed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const loading = !(videoLoaded && minDelayPassed);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 border-b-2"
        src="https://assets.mixkit.co/videos/47048/47048-720.mp4"
        autoPlay
        muted
        loop
        onLoadedData={() => setVideoLoaded(true)}
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="container mx-auto mb-10 px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-20">
        <div className="md:w-1/2 text-center md:text-left">
          {loading ? (
            <>
              {/* Skeleton Title */}
              <div className="h-12 w-80 bg-gray-700 rounded-md animate-pulse mb-4 mx-auto md:mx-0" />
              <div className="h-4 w-96 bg-gray-700 rounded-md animate-pulse mb-4 mx-auto md:mx-0" />

              {/* Skeleton Paragraph */}
              <div className="h-5 w-full max-w-md bg-gray-700 rounded-md animate-pulse mb-6 mx-auto md:mx-0" />

              {/* Skeleton Buttons */}
              <div className="flex justify-center md:justify-start gap-4 mt-8">
                <div className="h-12 w-40 bg-gray-700 animate-pulse rounded" />
                <div className="h-12 w-40 bg-gray-700 animate-pulse rounded" />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl lg:text-5xl font-extrabold mb-2 text-cyan-400 text-glow leading-tight">
                Welcome to <span className="text-amber-400">MR GEEK FOR GEEKS</span>
              </h1>
              <p className="text-center mt-6 text-lg text-gray-200">
                Where every geek has a place to grow! Knowledge shared is knowledge multiplied.
              </p>

              <div className="flex justify-center md:justify-start gap-4 mt-8">
                <button
                  onClick={() => scrollToSection('collaborate')}
                  className="border cursor-pointer border-cyan-400 text-cyan-400 font-bold py-3 px-6 rounded-lg cta-btn hover:bg-cyan-400 hover:text-gray-900 transition"
                >
                  Collaborate
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border cursor-pointer border-cyan-400 text-cyan-400 font-bold py-3 px-6 rounded-lg cta-btn hover:bg-cyan-400 hover:text-gray-900 transition"
                >
                  Explore Services
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
