import SectionHeader from './components/SectionHeader.jsx';
import ServiceCard from './components/ServiceCard.jsx';
import pathwaysLogo from './assets/barak-pathways-logo.png';
import codeHero from './assets/code.jpg';

const whatsAppLink =
  'https://wa.me/254711945375?text=Hello%20Web%20%26%20Software%20Solutions,%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20website%20or%20software%20system.';

function Icon({ children }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

const icons = {
  website: (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 19l-1.5 2M16 19l1.5 2M9 21h6" />
    </Icon>
  ),
  cart: (
    <Icon>
      <path d="M4 5h2l2.2 10.5a2 2 0 0 0 2 1.5h6.6a2 2 0 0 0 2-1.6L20 8H7" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </Icon>
  ),
  school: (
    <Icon>
      <path d="M3 9l9-5 9 5-9 5-9-5Z" />
      <path d="M7 11v5c3 2 7 2 10 0v-5M21 9v6" />
    </Icon>
  ),
  hospital: (
    <Icon>
      <path d="M4 21V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
      <path d="M9 21v-5h6v5M12 8v5M9.5 10.5h5" />
    </Icon>
  ),
  booking: (
    <Icon>
      <path d="M6 4v3M18 4v3M4 9h16M6 6h12a2 2 0 0 1 2 2v11H4V8a2 2 0 0 1 2-2Z" />
      <path d="M8 13h3M8 17h6" />
    </Icon>
  ),
  pos: (
    <Icon>
      <path d="M5 4h14v10H5zM8 18h8M9 14v4M15 14v4" />
      <path d="M8 7h3M15 7h1M8 10h8" />
    </Icon>
  ),
  portal: (
    <Icon>
      <path d="M4 5h16v14H4zM4 10h16M9 19v-9" />
      <path d="M7 7h.01M10 7h.01" />
    </Icon>
  ),
  app: (
    <Icon>
      <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </Icon>
  ),
  mobile: (
    <Icon>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18h2" />
    </Icon>
  ),
  ai: (
    <Icon>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="4" />
    </Icon>
  ),
};

const services = [
  {
    icon: icons.website,
    title: 'Business Websites',
    description: 'Clean, trusted pages that present your brand, show your services, and make it easy for customers to contact you.',
  },
  {
    icon: icons.cart,
    title: 'Ecommerce Websites',
    description: 'Online shops built to display products clearly, receive orders, support payments, and help you sell beyond your location.',
  },
  {
    icon: icons.school,
    title: 'School Management Systems',
    description: 'Organized digital systems that simplify records, attendance, fees, exams, reports, and parent communication.',
  },
  {
    icon: icons.hospital,
    title: 'Hospital Management Systems',
    description: 'Reliable tools for appointments, patient records, billing, staff workflows, departments, and daily reports.',
  },
  {
    icon: icons.booking,
    title: 'Hotel & Booking Systems',
    description: 'Booking platforms that help customers check availability, send requests, reserve services, and reach your team faster.',
  },
  {
    icon: icons.pos,
    title: 'Inventory & POS Systems',
    description: 'Practical sales and stock tools for invoices, purchases, suppliers, customers, and point-of-sale operations.',
  },
  {
    icon: icons.portal,
    title: 'Company Portals',
    description: 'Secure portals where staff, clients, or partners can access documents, requests, approvals, and shared workflows.',
  },
  {
    icon: icons.app,
    title: 'Custom Web Applications',
    description: 'Tailored software for the exact process your business needs to automate, track, manage, or scale.',
  },
  {
    icon: icons.mobile,
    title: 'Mobile-Friendly Web Apps',
    description: 'Responsive experiences that look sharp and work smoothly on phones, tablets, laptops, and desktops.',
  },
  {
    icon: icons.ai,
    title: 'AI-Powered Systems',
    description: 'Smart assistants, automation, analytics, and document workflows added where they can save time and improve service.',
  },
];

const projectCategories = [
  {
    title: 'Launch Package',
    description: 'Best for small businesses, shops, churches, portfolios, and personal brands that need a professional online presence quickly.',
    features: ['Responsive pages', 'Contact forms', 'WhatsApp integration', 'SEO-ready structure', 'Fast loading design'],
  },
  {
    title: 'Growth Package',
    description: 'Best for growing teams that need a stronger website plus dashboards, content control, integrations, and automation.',
    features: ['Admin dashboard', 'Content management', 'Secure integrations', 'Business workflows', 'Database-backed features'],
  },
  {
    title: 'Custom System Package',
    description: 'Best for organizations that need advanced software, user roles, reports, analytics, APIs, security, and long-term support.',
    features: ['Multiple user roles', 'Reports and analytics', 'Advanced security', 'API development', 'Ongoing technical support'],
  },
];

const heroMetrics = [
  ['10+', 'Solution types'],
  ['24/7', 'Online presence'],
  ['1:1', 'Build guidance'],
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#102033]">
      <header className="sticky top-0 z-40 border-b border-[#d7eaff] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img src={pathwaysLogo} alt="Barak Pathways logo" className="h-10 w-auto sm:h-12" />
            <span className="hidden text-sm font-bold uppercase tracking-[0.16em] text-[#071c33] sm:inline">
              Barak Pathways
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#42617d] lg:flex">
            <a href="#services" className="transition hover:text-[#0b73d9]">Solutions</a>
            <a href="#projects" className="transition hover:text-[#0b73d9]">Packages</a>
            <a href="#contact" className="transition hover:text-[#0b73d9]">Contact</a>
          </nav>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#0b73d9] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0b73d9]/20 transition hover:-translate-y-0.5 hover:bg-[#075fb7]"
          >
            WhatsApp Quote
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative flex min-h-[680px] items-center bg-[#071c33] px-5 py-20 text-white sm:px-6 lg:px-8">
          <img
            src={codeHero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,38,0.86)_0%,rgba(7,28,51,0.78)_48%,rgba(6,23,42,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[#075fb7]/20" />
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn your business idea into a polished digital product that sells.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-white/88 sm:text-lg">
                Get a professional website or software system built to make your brand look credible,
                attract serious customers, and simplify daily operations.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-bold text-[#075fb7] shadow-xl shadow-[#06172a]/25 transition hover:-translate-y-0.5 hover:bg-[#eef7ff]"
                >
                  Get a Quote Today
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-white/45 bg-white/10 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#06172a]/10 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[#075fb7]"
                >
                  View Solutions
                </a>
              </div>

              <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/20 border-y border-white/20 py-5">
                {heroMetrics.map(([value, label]) => (
                  <div key={label} className="px-3">
                    <p className="text-3xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-white/70">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Solutions"
              title="Digital tools built to help your business win more trust and sales"
              description="Choose a ready direction, request a quote, and get a professional build designed around the result you want."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#f7fbff] px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Packages"
              title="Start with the offer that matches your goal"
              description="Whether you need a simple launch, a stronger sales platform, or a full custom system, we can shape the build around your budget and business needs."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {projectCategories.map((category, index) => (
                <article
                  key={category.title}
                  className={`rounded-lg border p-7 shadow-xl transition hover:-translate-y-1 ${
                    index === 1
                      ? 'border-[#0b73d9] bg-[#0b73d9] text-white shadow-[#0b73d9]/25'
                      : 'border-[#d7eaff] bg-white text-[#102033] shadow-[#d7eaff]/60 hover:border-[#0b73d9]'
                  }`}
                >
                  {index === 1 && (
                    <p className="mb-4 inline-flex rounded-md bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0b73d9]">
                      Popular
                    </p>
                  )}
                  <h3 className={`text-2xl font-semibold ${index === 1 ? 'text-white' : 'text-[#071c33]'}`}>{category.title}</h3>
                  <p className={`mt-3 leading-6 ${index === 1 ? 'text-white/80' : 'text-[#42617d]'}`}>{category.description}</p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {category.features.map((feature) => (
                      <li key={feature} className={`flex gap-3 ${index === 1 ? 'text-white/88' : 'text-[#26435f]'}`}>
                        <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${index === 1 ? 'bg-white' : 'bg-[#0b73d9]'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-7 inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${
                      index === 1
                        ? 'bg-white text-[#0b73d9] hover:bg-[#eef7ff]'
                        : 'bg-[#071c33] text-white hover:bg-[#0b73d9]'
                    }`}
                  >
                    Request This Package
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#f7fbff] px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg bg-[#071c33] p-8 text-white shadow-2xl shadow-[#071c33]/20 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#70c9ff]">Request a Quote</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to advertise your business with a better digital presence?
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/72">
                  Send a quick message with what you want built. We will recommend the best setup and prepare a clear quote.
                </p>
              </div>
              <div className="space-y-3 lg:text-right">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-7 py-4 text-sm font-bold text-[#0b73d9] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#eef7ff]"
                >
                  Start on WhatsApp
                </a>
                <p className="text-sm text-white/70">Phone/WhatsApp: 0711945375</p>
                <a href="mailto:codehub@barakpathways.com" className="block text-sm font-semibold text-[#70c9ff]">
                  codehub@barakpathways.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d7eaff] bg-white px-5 py-6 text-center text-sm text-[#42617d] sm:px-6 lg:px-8">
        Web & Software Solutions. Available websites, systems, portals, and custom software.
      </footer>
    </div>
  );
}

export default App;
