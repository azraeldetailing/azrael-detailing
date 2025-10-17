import React from "react";
import "./index.css";

export default function AzraelSite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-white text-black font-extrabold grid place-items-center">A</div>
            <div>
              <p className="text-sm tracking-widest text-neutral-300">AZRAEL DETAILING</p>
              <p className="text-[11px] text-neutral-400 uppercase">Crafting Showroom Excellence</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#extras" className="hover:text-white">Extras</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-neutral-200">Book Now</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-black">
        {/* Put images in /public/images (not /src). Filenames must match exactly. */}
        <img
          src="/images/mansory-rolls-royce-spectre.jpg"
          alt="Mansory Rolls Royce Spectre"
          className="w-full h-[560px] object-cover opacity-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Luxury Auto Detailing in Calabasas</h1>
          <p className="text-neutral-300 mt-3 max-w-xl">
            Ultra-premium detailing, paint correction, and ceramic coatings for clients who expect nothing less.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#pricing" className="px-5 py-2 bg-white text-black font-medium rounded-lg hover:bg-neutral-200">View Packages</a>
            <a href="#contact" className="px-5 py-2 border border-white/60 text-white rounded-lg hover:bg-white hover:text-black">Book Your Detail</a>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 text-center">
          <p className="text-neutral-300 text-sm">Minimum service</p>
          <p className="text-xl font-semibold">$450</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 text-center">
          <p className="text-neutral-300 text-sm">Certified ceramic installers</p>
          <p className="text-xl font-semibold">Premium only</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 text-center">
          <p className="text-neutral-300 text-sm">Concierge pick-up / drop-off</p>
          <p className="text-xl font-semibold">Calabasas & nearby</p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="/images/cadillac-escalade-v.jpg"   alt="Cadillac Escalade V"  className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="/images/porsche-911-gt3rs.jpg"     alt="Porsche 911 GT3 RS"   className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="/images/brabus-g700.jpg"           alt="Brabus G700"          className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="/images/mercedes-benz-s580.jpg"    alt="Mercedes-Benz S580"   className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="/images/ferrari-f8-tributo.jpg"    alt="Ferrari F8 Tributo"   className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="/images/lamborghini-urus.jpg"      alt="Lamborghini Urus"     className="rounded-lg shadow-lg object-cover w-full h-64" />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-6">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
            <h3 className="font-semibold text-lg">Signature Detail</h3>
            <p className="text-neutral-400 text-sm mt-1">Exterior foam wash, clay, sealant; interior vacuum & wipe-down.</p>
            <p className="text-3xl font-bold mt-4">$450</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
            <h3 className="font-semibold text-lg">Paint Correction</h3>
            <p className="text-neutral-400 text-sm mt-1">Single-stage correction to restore gloss and clarity.</p>
            <p className="text-3xl font-bold mt-4">From $950</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
            <h3 className="font-semibold text-lg">Ceramic Coating</h3>
            <p className="text-neutral-400 text-sm mt-1">3–5 year protection with hydrophobic topcoat.</p>
            <p className="text-3xl font-bold mt-4">From $1,800</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">Azrael Detailing</h4>
            <p className="text-neutral-400 text-sm">Calabasas, CA • Mobile & concierge service</p>
          </div>
          <div className="text-neutral-400 text-sm">
            <p>Phone: <a className="underline hover:text-white" href="tel:13106005022">(310) 600-5022</a></p>
            <p>Email: <a className="underline hover:text-white" href="mailto:Azraeldetailing@gmail.com">Azraeldetailing@gmail.com</a></p>
          </div>
          <div className="text-neutral-400 text-sm">
            <p>Minimum service: <span className="text-white font-medium">$450</span></p>
            <p>High-end clientele • By appointment only</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
