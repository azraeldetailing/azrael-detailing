import React from "react";

export default function AzraelSite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Luxury Auto Detailing in Calabasas</h1>
            <p className="mt-4 text-neutral-300 text-lg">Ultra-premium detailing, paint correction, and ceramic coatings for clients who expect nothing less. Concierge mobile service available.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-xl bg-white text-black font-semibold">View Packages</a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20">Book Your Detail</a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-neutral-400">
              <div className="p-3 rounded-lg bg:white/5 border border-white/10">Minimum service <span className="font-semibold text-neutral-200">$450</span></div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">Certified ceramic installers</div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">Concierge pick-up / drop-off</div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">Serving Calabasas & nearby</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="h-72 md:h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 grid place-items-center">
              <span className="text-neutral-400">[Hero image —]()
