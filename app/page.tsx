import Image from "next/image";

const business = {
  name: "BMD Quality Stone, LLC",
  brand: "BMD Quality Stone",
  address: "1650 SW 20th Street, Miami, FL 33145",
  phone: "+1 786 543 2716",
  email: "info@bmdqualitystone.com",
};

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  {
    title: "Countertops",
    text: "Medicion, corte e instalacion de superficies para cocinas con acabados limpios y ajuste preciso.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Banos",
    text: "Vanities, paredes, bordes y piezas especiales para banos elegantes, duraderos y faciles de mantener.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Quartz y granito",
    text: "Trabajo con materiales resistentes para proyectos residenciales, comerciales y remodelaciones completas.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Barras y detalles",
    text: "Islas, backsplashes, barras, bordes y terminaciones pensadas para destacar cada espacio.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
];

const faqs = [
  {
    question: "Que tipo de proyectos realizan?",
    answer:
      "Trabajamos superficies de piedra para cocinas, banos, barras, islas, backsplashes y proyectos comerciales.",
  },
  {
    question: "Puedo solicitar una medida o estimado?",
    answer:
      "Si. Podemos revisar las medidas, el material deseado y el alcance del trabajo para preparar una cotizacion clara.",
  },
  {
    question: "Trabajan con quartz y granito?",
    answer:
      "Si. Instalamos superficies en quartz, granito y otros materiales de piedra segun las necesidades del proyecto.",
  },
  {
    question: "Como contacto a la compania?",
    answer:
      "Puedes llamar al +1 786 543 2716 o escribir a info@bmdqualitystone.com para coordinar tu proyecto.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#171b1f]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f5f2eb]/95 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label={business.name}>
            <span className="grid size-11 place-items-center bg-[#c92f1b] text-lg font-black text-white">
              BMD
            </span>
            <span className="max-w-48 text-sm font-black uppercase leading-4 tracking-[0.14em] sm:max-w-none">
              {business.brand}
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.14em] text-[#4c5359] lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#c92f1b]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+17865432716"
            className="inline-flex h-11 items-center justify-center bg-[#171b1f] px-5 text-xs font-black uppercase tracking-[0.14em] text-white hover:bg-[#c92f1b]"
          >
            Cotizar
          </a>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
          alt="Cocina moderna con superficie de piedra"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,14,0.88),rgba(10,12,14,0.58)_47%,rgba(10,12,14,0.18))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#f7b23b]">
              Fabricacion e instalacion de piedra
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              Superficies de piedra hechas con precision.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">
              BMD Quality Stone transforma cocinas, banos, barras y espacios de
              trabajo con materiales duraderos, acabados elegantes y una
              instalacion cuidada de principio a fin.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+17865432716"
                className="inline-flex h-12 items-center justify-center bg-[#c92f1b] px-7 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#f7b23b] hover:text-[#171b1f]"
              >
                Solicitar cotizacion
              </a>
              <a
                href="#servicios"
                className="inline-flex h-12 items-center justify-center border border-white/70 px-7 text-sm font-black uppercase tracking-[0.14em] text-white hover:border-[#f7b23b] hover:text-[#f7b23b]"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#f5f2eb] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#c92f1b]">
                Servicios
              </p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-none sm:text-5xl">
                Piedra para espacios que se usan todos los dias.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#535b62] lg:justify-self-end">
              Creamos e instalamos piezas a medida para hogares, negocios y
              remodelaciones en Miami, combinando medicion cuidadosa, materiales
              resistentes y terminaciones pensadas para durar.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden border border-black/10 bg-white shadow-[0_18px_45px_rgba(23,27,31,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#d7d2c7]">
                  <Image
                    src={service.image}
                    alt={`Servicio de piedra para ${service.title}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black uppercase">{service.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-[#535b62]">
                    {service.text}
                  </p>
                  <a
                    href="tel:+17865432716"
                    className="mt-5 inline-flex h-10 items-center justify-center bg-[#171b1f] px-4 text-xs font-black uppercase tracking-[0.14em] text-white hover:bg-[#c92f1b]"
                  >
                    Pedir estimado
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preguntas" className="bg-[#172127] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#f7b23b]">
              Preguntas frecuentes
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none sm:text-5xl">
              Respuestas claras antes de empezar.
            </h2>
            <a
              href="mailto:info@bmdqualitystone.com"
              className="mt-8 inline-flex h-12 items-center justify-center bg-[#f7b23b] px-6 text-sm font-black uppercase tracking-[0.14em] text-[#171b1f] hover:bg-white"
            >
              Contactar ahora
            </a>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-white/15 bg-white/[0.04] p-5 open:bg-white/[0.08]"
              >
                <summary className="cursor-pointer list-none text-lg font-black uppercase leading-6">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-white/74">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-[#0d1012] py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.14em]">
              {business.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/68">
              Fabricacion e instalacion de superficies de piedra para cocinas,
              banos, barras y proyectos comerciales en Miami.
            </p>
          </div>

          <div className="grid gap-5 text-sm leading-6 text-white/76 sm:grid-cols-3">
            <div>
              <p className="font-black uppercase text-white">Direccion</p>
              <p className="mt-2">{business.address}</p>
            </div>
            <div>
              <p className="font-black uppercase text-white">Telefono</p>
              <p className="mt-2">{business.phone}</p>
            </div>
            <div>
              <p className="font-black uppercase text-white">Correo</p>
              <p className="mt-2 break-words">{business.email}</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
