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
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">Minimum service <span className="font-semibold text-neutral-200">$450</span></div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">Certified ceramic installers</div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">Concierge pick-up / drop-off</div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">Serving Calabasas & nearby</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="h-72 md:h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 grid place-items-center">
              <span className="text-neutral-400">[Hero image — glossy luxury car]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Premium Services</h2>
        <p className="mt-2 text-neutral-300 max-w-2xl">Meticulous processes and elite products to achieve a flawless finish and long-lasting protection.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: "Exterior Decontamination", desc: "Hand wash, iron and tar removal, clay bar for mirror-smooth paint." },
            { title: "Interior Restoration", desc: "Leather cleanse & conditioning, deep vacuum, steam sanitation, fabric shampoo." },
            { title: "Paint Correction", desc: "One-step to multi-stage machine polishing to reduce swirls and restore clarity." },
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Packages & Pricing</h2>
        <p className="mt-2 text-neutral-300">Transparent, premium, and tailored. Vehicle size/condition may affect final quote.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Signature */}
          <div className="p-6 rounded-2xl bg-white text-black">
            <div className="text-xs tracking-widest text-neutral-500">FOUNDATION</div>
            <h3 className="mt-1 text-2xl font-extrabold">Signature Detail</h3>
            <div className="mt-2 text-3xl font-black">$450<span className="text-sm font-medium"> / starting</span></div>
            <ul className="mt-4 text-sm space-y-2 list-disc list-inside">
              <li>Exterior decon + hand wash</li>
              <li>Clay bar & premium sealant</li>
              <li>Interior vacuum & wipe-down</li>
              <li>Leather cleanse & conditioning</li>
              <li>Glass, wheels & tire finish</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-black text-white font-semibold">Book Signature</a>
          </div>

          {/* Elite */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs tracking-widest text-neutral-400">ENHANCED</div>
            <h3 className="mt-1 text-2xl font-extrabold">Elite Detail</h3>
            <div className="mt-2 text-3xl font-black">$700<span className="text-sm font-medium text-neutral-300"> / starting</span></div>
            <ul className="mt-4 text-sm space-y-2 list-disc list-inside text-neutral-300">
              <li>Everything in Signature</li>
              <li>One-step paint correction</li>
              <li>Interior shampoo & steam</li>
              <li>Trim & chrome rejuvenation</li>
              <li>Engine bay detail</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-white text-black font-semibold">Book Elite</a>
          </div>

          {/* Ceramic */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs tracking-widest text-neutral-400">PROTECTION</div>
            <h3 className="mt-1 text-2xl font-extrabold">Ceramic Shield</h3>
            <div className="mt-2 text-3xl font-black">$1,200<span className="text-sm font-medium text-neutral-300"> / starting</span></div>
            <ul className="mt-4 text-sm space-y-2 list-disc list-inside text-neutral-300">
              <li>Multi-stage paint correction</li>
              <li>3–5 year ceramic coating</li>
              <li>Glass & wheel coating</li>
              <li>Interior detail + leather protection</li>
              <li>VIP concierge pick-up / drop-off</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg border border-white/20">Book Ceramic</a>
          </div>
        </div>

        {/* Compare Table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-full text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4">Feature</th>
                <th className="text-left p-4">Signature</th>
                <th className="text-left p-4">Elite</th>
                <th className="text-left p-4">Ceramic Shield</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                ["Exterior decon & wash", "✔", "✔", "✔"],
                ["Clay bar", "✔", "✔", "✔"],
                ["Interior shampoo & steam", "—", "✔", "✔"],
                ["One-step correction", "—", "✔", "—"],
                ["Multi-stage correction", "—", "—", "✔"],
                ["Ceramic coating 3–5 yrs", "—", "—", "✔"],
                ["Concierge pick-up / drop-off", "—", "—", "✔"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="p-4 text-neutral-300">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Extras */}
      <section id="extras" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Premium Add-Ons</h2>
        <p className="mt-2 text-neutral-300">Choose any enhancement to tailor your finish.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Multi-stage paint correction",
            "Paint Protection Film (PPF)",
            "Engine bay detailing",
            "Headlight restoration",
            "Leather restoration & dye",
            "Odor removal & ozone treatment",
            "Scratch & swirl removal",
            "Rim polishing + ceramic",
            "Convertible top treatment",
            "Pet hair removal",
            "Interior steam sanitization",
            "Glass coating",
            "Mobile concierge service",
            "Maintenance memberships",
          ].map((x, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm">{x}</div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Before & After</h2>
        <p className="mt-2 text-neutral-300">A glimpse at our process and results. Replace with your own shots anytime.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-900 grid place-items-center text-neutral-500">Image {i + 1}</div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Client Reviews</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ["“Immaculate work. My 911 looks better than delivery day.”", "— Daniel R."],
            ["“True concierge service. On time, discreet, and flawless results.”", "— Maya S."],
            ["“Ceramic package is worth every dollar. Beads like crazy.”", "— Tyler K."],
          ].map((r, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-neutral-200">{r[0]}</p>
              <p className="mt-3 text-xs text-neutral-400">{r[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            ["How long does a Signature Detail take?", "Typically 2–3 hours depending on vehicle size and condition."],
            ["Do you offer mobile service?", "Yes — limited availability for Calabasas and nearby. Concierge pick-up / drop-off also available."],
            ["What ceramic coatings do you use?", "Professional-grade coatings rated 3–5 years with proper maintenance."],
            ["How soon can I wash after ceramic?", "Avoid washing for 7 days. We provide care instructions and maintenance plans."],
          ].map((qa, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold">{qa[0]}</h3>
              <p className="mt-2 text-sm text-neutral-300">{qa[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Book Your Detail</h2>
            <p className="mt-2 text-neutral-300">Tell us about your vehicle and preferred service. We’ll confirm with a tailored quote.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div><span className="text-neutral-400">Call/Text: </span><a className="underline" href="tel:+13106005022">(310) 600-5022</a></div>
              <div><span className="text-neutral-400">Email: </span><a className="underline" href="mailto:Azraeldetailing@gmail.com">Azraeldetailing@gmail.com</a></div>
              <div className="text-neutral-400">Serving Calabasas & surrounding areas</div>
            </div>
          </div>
          <form className="p-6 rounded-2xl bg-white/5 border border-white/10 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Name" className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none" />
              <input required placeholder="Phone" className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none" />
            </div>
            <input required placeholder="Email" className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none" />
            <input placeholder="Vehicle (Year / Make / Model)" className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none" />
            <select className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none">
              <option>Signature Detail ($450+)</option>
              <option>Elite Detail ($700+)</option>
              <option>Ceramic Shield ($1,200+)</option>
              <option>Custom / Multiple Services</option>
            </select>
            <textarea rows={4} placeholder="Notes (swirls, scratches, pet hair, odors, etc.)" className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none" />
            {/* For now this uses mailto. We can wire a real form later. */}
            <a href="mailto:Azraeldetailing@gmail.com?subject=Booking%20Request%20-%20Azrael%20Detailing" className="px-5 py-3 rounded-xl bg-white text-black font-semibold text-center">Send Request</a>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <p className="tracking-widest text-xs text-neutral-400">AZRAEL DETAILING</p>
            <p className="text-sm text-neutral-500">Calabasas, CA — Crafting Showroom Excellence</p>
          </div>
          <div className="text-sm text-neutral-400">© {new Date().getFullYear()} Azrael Detailing. All rights reserved.</div>
          <div className="text-sm text-neutral-400 md:text-right">
            <a className="underline" href="tel:+13106005022">(310) 600-5022</a>
            <span className="mx-2">•</span>
            <a className="underline" href="mailto:Azraeldetailing@gmail.com">Azraeldetailing@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
