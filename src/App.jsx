import React from "react";
import "./index.css";

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

      {/* Hero Section */}
      <section className="relative bg-black">
        <img
          src="/images/mansory-rolls-royce-spectre.jpg"
          alt="Mansory Rolls Royce Spectre"
          className="w-full h-[600px] object-cover opacity-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold">Luxury Auto Detailing in Calabasas</h1>
          <p className="text-neutral-300 mt-3 max-w-xl">
            Ultra-premium detailing, paint correction, and ceramic coatings for clients who expect nothing less.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-5 py-2 bg-white text-black font-medium rounded-lg hover:bg-neutral-200">
              View Packages
            </button>
            <button className="px-5 py-2 border border-white/60 text-white rounded-lg hover:bg-white hover:text-black">
              Book Your Detail
            </button
