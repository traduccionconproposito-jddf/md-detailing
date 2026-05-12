import Image from "next/image";

const phone = "336-504-5144";
const phoneHref = "tel:13365045144";

const services = [
  {
    title: "Exterior Wash",
    description:
      "A careful hand wash that lifts road film, restores clarity, and leaves your vehicle looking sharp.",
  },
  {
    title: "Interior Cleaning",
    description:
      "Vacuuming, wipe-downs, glass care, and detail work for a cleaner, calmer cabin.",
  },
  {
    title: "Wax and Protection",
    description:
      "Gloss-building protection that helps defend paint against sun, rain, and everyday wear.",
  },
  {
    title: "Deep Detailing",
    description:
      "A more thorough reset for vehicles that need extra time, care, and focused attention.",
  },
];

const reasons = [
  "Faith-Based Service",
  "Mobile Convenience",
  "Professional Results",
  "Attention to Detail",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="section-wrap relative z-20 flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-3" aria-label="M&D Mobile Detailing home">
          <Image
            src="/logo.png"
            alt="M&D Mobile Detailing logo"
            width={210}
            height={120}
            priority
            className="h-14 w-auto object-contain drop-shadow-[0_0_18px_rgba(239,35,60,0.35)] sm:h-20"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-ice/70">
              M&D Mobile Detailing
            </p>
            <p className="mt-1 text-xs text-ice/50">Roxboro, North Carolina</p>
          </div>
        </a>
        <a
          href={phoneHref}
          className="rounded-full bg-signalRed px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-redglow transition hover:-translate-y-0.5 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-signalRed focus:ring-offset-2 focus:ring-offset-ink"
        >
          Call Now
        </a>
      </header>

      <section id="top" className="section-wrap relative grid min-h-[calc(100vh-116px)] items-center gap-12 pb-20 pt-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="absolute left-1/2 top-6 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-signalBlue/15 blur-3xl" />
        <div className="animate-rise">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-ice/75">
            <span className="h-2 w-2 rounded-full bg-signalRed shadow-redglow" />
            Tuesdays and Saturdays only
          </div>
          <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] text-white text-balance sm:text-6xl lg:text-7xl">
            M&D Mobile Detailing
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-ice sm:text-3xl">
            "I clean cars, Jesus cleans hearts."
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ice/70 sm:text-lg">
            Professional mobile car detailing serving Roxboro, North Carolina with dependable work,
            honest communication, and a Christ-centered commitment to excellence.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={phoneHref}
              className="group inline-flex items-center justify-center rounded-full bg-signalRed px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-redglow transition hover:-translate-y-1 hover:bg-red-500"
            >
              Call {phone}
              <span className="ml-3 transition group-hover:translate-x-1" aria-hidden="true">
                -&gt;
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-signalBlue/60 bg-signalBlue/10 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:border-signalBlue hover:bg-signalBlue/20"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] animate-float">
          <div className="absolute inset-8 rounded-[2.5rem] bg-signalBlue/20 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-signalRed via-white to-signalBlue" />
            <div className="relative mx-auto flex aspect-[105/60] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-glow">
              <Image
                src="/logo.png"
                alt="M&D Mobile Detailing logo"
                width={1050}
                height={600}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">2</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ice/55">Service Days</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">NC</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ice/55">Local Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.025] py-24">
        <div className="section-wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-signalRed">About</p>
            <h2 className="mt-4 font-serif text-4xl font-black text-white sm:text-5xl">
              Service with purpose, care with integrity.
            </h2>
          </div>
          <div className="glass-card rounded-2xl p-7 sm:p-9">
            <p className="text-lg leading-8 text-ice/78">
              M&D Mobile Detailing is built on faith, discipline, and pride in doing the job right.
              Every appointment is handled with respect for your time, your vehicle, and the trust
              you place in us. The mission is simple: deliver excellent detailing work while
              representing Christ through honesty, humility, and dependable service.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-wrap py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-signalBlue">Services</p>
          <h2 className="mt-4 font-serif text-4xl font-black text-white sm:text-5xl">
            Clean, protected, and ready for the road.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-signalBlue/50"
              style={{ animation: `rise 0.7s ease ${index * 90}ms both` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-signalRed to-signalBlue text-lg font-black text-white shadow-glow">
                {index + 1}
              </div>
              <h3 className="text-xl font-black text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ice/65">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-signalRed/12 via-white/[0.035] to-signalBlue/12 py-24">
        <div className="section-wrap">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-signalRed">
              Why Choose Us
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black text-white sm:text-5xl">
              Trustworthy detailing that comes to you.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-xl border border-white/10 bg-ink/65 p-6">
                <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-signalRed to-signalBlue" />
                <h3 className="text-lg font-black text-white">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-wrap py-24">
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="absolute inset-x-0 top-0 h-px overflow-hidden bg-white/10">
            <div className="h-full w-1/2 animate-shine bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-signalBlue">
                Contact
              </p>
              <h2 className="mt-4 font-serif text-4xl font-black text-white sm:text-5xl">
                Book your detail for Tuesday or Saturday.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ice/70">
                Call today to discuss your vehicle, service needs, and availability in Roxboro,
                North Carolina.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={phoneHref}
                className="rounded-xl bg-signalRed px-6 py-5 text-center text-lg font-black text-white shadow-redglow transition hover:-translate-y-1 hover:bg-red-500"
              >
                {phone}
              </a>
              <a
                href="#"
                aria-label="https://www.instagram.com/cardetailer_roxboro/ link coming soon"
                className="rounded-xl border border-signalBlue/70 bg-signalBlue/12 px-6 py-5 text-center text-lg font-black text-white transition hover:-translate-y-1 hover:bg-signalBlue/22"
              >
                Instagram
              </a>
              <p className="text-center text-xs uppercase tracking-[0.2em] text-ice/45">
                Follow us on Instagram
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-wrap flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-ice/55">(c) 2026 M&D Mobile Detailing. Roxboro, NC.</p>
          <p className="font-serif text-lg font-black text-white">Philippians 4:13</p>
        </div>
      </footer>
    </main>
  );
}
