const projects = [
  {
    name: "kojori",
    kind: "side project / household finance",
    href: "https://github.com/whekin/household-bot",
    text: "Household finance tracking with a Telegram bot and mini app.",
    stack: ["Bun", "TypeScript", "SolidJS", "Telegram"],
  },
  {
    name: "kojoring time",
    kind: "side project / transit app",
    href: "https://github.com/whekin/kojori-bus-time-app",
    text: "Transit helper for Kojori to Tbilisi buses, with schedules, maps, and widgets.",
    stack: ["Expo", "React Native", "Bun", "Android"],
  },
  {
    name: "veloexpress bot",
    kind: "side project / telegram tooling",
    href: "https://github.com/Veloexpress-Georgia/tg-bot",
    text: "Telegram bot for cycling ride polls and small coordination tasks.",
    stack: ["Python", "Telegram", "Automation"],
  },
];

const links = [
  {
    label: "github",
    href: "https://github.com/whekin",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/whekin",
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/__whekin__/",
  },
  {
    label: "source",
    href: "https://github.com/whekin/whekin.github.io",
  },
];

export default function Portfolio() {
  return (
    <main className="portfolio-shell" aria-labelledby="portfolio-title">
      <header className="hero">
        <p className="eyebrow">backend engineer / side projects</p>
        <h1 id="portfolio-title">whekin</h1>
        <p className="intro">
          I build backend systems professionally and keep a few small side
          projects here.
        </p>

        <nav className="links" aria-label="Profile links">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="projects" aria-label="Pet and side projects">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <a className="project-title" href={project.href}>
              <span>{project.kind}</span>
              {project.name}
            </a>
            <p>{project.text}</p>
            <ul aria-label={`${project.name} stack`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
