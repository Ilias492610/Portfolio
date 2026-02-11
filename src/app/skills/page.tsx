import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills"
};

const skillSections = [
  {
    title: "Frontend Development",
    items: [
      "React",
      "Next.js",
      "React Router",
      "React Query",
      "JavaScript",
      "ES6+",
      "Async Programming",
      "TypeScript",
      "Type Safety",
      "Interfaces",
      "Generics",
      "UI/UX Frameworks",
      "Tailwind CSS",
      "Bootstrap"
    ]
  },
  {
    title: "Backend Development",
    items: [
      ".NET Development",
      "C#",
      "ASP.NET Core",
      "Entity Framework",
      "Node.js",
      "Express.js",
      "Fastify",
      "Prisma ORM",
      "JWT Authentication",
      "Mongoose"
    ]
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "SQL Server"]
  },
  {
    title: "Security & Networking",
    items: [
      "Web Security",
      "OWASP",
      "XSS",
      "SQL Injection Prevention",
      "Authentication",
      "JWT",
      "OAuth",
      "Session Management",
      "Networking",
      "HTTP/HTTPS",
      "DNS",
      "TCP/IP",
      "SSH"
    ]
  },
  {
    title: "DevOps & Tools",
    items: [
      "Version Control",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Containers",
      "Docker",
      "Docker Compose",
      "Testing",
      "xUnit",
      "TDD",
      "BDD",
      "Moq"
    ]
  }
];

export default function SkillsPage() {
  return (
    <section className="skills-page reveal">
      <p className="eyebrow">Technical Skills</p>
      <h1>Technical Skills</h1>
      <p className="skills-page__intro">
        Full-stack stagiair met expertise in moderne JavaScript frameworks,
        .NET, and web security. Specializing in building secure and scalable web
        applications.
      </p>

      <div className="skills-accordion" aria-label="Skills categorieen">
        {skillSections.map((section) => (
          <details key={section.title} className="skills-accordion__item">
            <summary className="skills-accordion__summary">{section.title}</summary>
            <div className="skills-accordion__content">
              <div className="tag-list">
                {section.items.map((item) => (
                  <span key={item} className="tag tag--solid">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
