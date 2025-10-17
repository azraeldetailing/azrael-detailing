import React from "react";

export default function AzraelSite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-white text-black font-extrabold grid place-items-center">
              A
            </div>
            <div>
              <p className="text-sm tracking-widest text-neutral-300">
                AZRAEL DETAILING
              </p>
              <p className="text-[11px] text-neutral-400 uppercase">
                Crafting Showroom Excellence
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#gallery" className="hover:text-white">
              Gallery
            </a>
            <a href="#extras" className="hover:text-white">
              Extras
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-neutral-200"
            >
              Book Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Luxury Auto Detailing <br /> in Calabasas
          </h1>
          <p className="text-neutral-400 mb-8">
            Ultra-premium detailing, paint correction, and ceramic coatings for
            clients who expect nothing less. Concierge mobile service available.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200">
              View Packages
            </button>
            <button className="px-6 py-3 border border-neutral-500 rounded-lg hover:bg-neutral-800">
              Book Your Detail
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 text-sm">
            <div className="bg-neutral-900 px-4 py-2 rounded-lg">
              Minimum service <strong>$450</strong>
            </div>
            <div className="bg-neutral-900 px-4 py-2 rounded-lg">
              Certified ceramic installers
            </div>
            <div className="bg-neutral-900 px-4 py-2 rounded-lg">
              Concierge pick-up / drop-off
            </div>
            <div className="bg-neutral-900 px-4 py-2 rounded-lg">
              Serving Calabasas & nearby
            </div>
          </div>
        </div>

        <div>
          <img
            src="/src/images/mansory-rolls-royce-spectre.jpg"
            alt="Mansory Rolls-Royce Spectre"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/src/images/cadillac-escalade-v.jpg"
            alt="Cadillac Escalade-V"
            className="rounded-xl object-cover w-full aspect-video"
          />
          <img
            src="/src/images/porsche-911-gt3rs.jpg"
            alt="Porsche 911 GT3 RS"
            className="rounded-xl object-cover w-full aspect-video"
          />
          <img
            src="/src/images/brabus-g700.jpg"
            alt="Brabus G700"
            className="rounded-xl object-cover w-full aspect-video"
          />
          <img
            src="/src/images/mercedes-benz-s580.jpg"
            alt="Mercedes-Benz S580"
            className="rounded-xl object-cover w-full aspect-video"
          />
          <img
            src="/src/images/ferrari-f8-tributo.jpg"
            alt="Ferrari F8 Tributo"
            className="rounded-xl object-cover w-full aspect-video"
          />
          <img
            src="/src/images/lamborghini-urus.jpg"
            alt="Lamborghini Urus"
            className="rounded-xl object-cover w-full aspect-video"
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Client Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <blockquote className="bg-neutral-900 p-6 rounded-xl">
            “Immaculate work. My 911 looks better than delivery day.”
            <footer className="mt-2 text-neutral-400">— Daniel R.</footer>
          </blockquote>
          <blockquote className="bg-neutral-900 p-6 rounded-xl">
            “True concierge service. On time, discreet, and flawless results.”
            <footer className="mt-2 text-neutral-400">— Maya S.</footer>
          </blockquote>
          <blockquote className="bg-neutral-900 p-6 rounded-xl">
            “Ceramic package is worth every dollar. Beads like crazy.”
            <footer className="mt-2 text-neutral-400">— Tyler K.</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
