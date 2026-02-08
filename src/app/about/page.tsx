import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Over"
};

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "C#",
  "ASP.NET Core",
  "SQL",
  "SAP Context",
  "Git & CI/CD"
];

export default function AboutPage() {
  return (
    <section className="about-page reveal">
      <div className="about-grid">
        <article className="profile-card">
          <Image
            src="/ilias-profile-placeholder.svg"
            alt="Profielfoto van Ilias Hamdaoui"
            width={300}
            height={300}
            className="profile-image"
            priority
          />
          <h1>Ilias Hamdaoui</h1>
          <p>Junior Developer in opleiding - AP Hogeschool Antwerpen</p>
          <p>Stagebedrijf: TheValueChain (SAP consultancy)</p>
          <p>Locatie: Antwerpen, België (hybride)</p>
          <p>Rol: Developer Intern</p>

          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Ilias492610" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </article>

        <article className="content-card">
          <h2>Mini cv</h2>
          <p>
            Ik ben een gemotiveerde student programmeren met focus op webontwikkeling,
            backendlogica en onderhoudbare code. Tijdens mijn stage werk ik in een
            professionele consultancycontext waarin technische kwaliteit en businessimpact
            samenkomen.
          </p>

          <h2>Stagecontext</h2>
          <p>
            Bij TheValueChain ondersteun ik development-trajecten binnen SAP-gerelateerde
            omgevingen. Ik werk mee aan features, bugfixes, code reviews en analyses van
            productieproblemen. Mijn rol groeit geleidelijk van uitvoerend naar proactief,
            met meer ownership per sprint.
          </p>

          <h2>Focus tijdens deze stage</h2>
          <ul>
            <li>Betere besluitvorming in complexe technische context.</li>
            <li>Strakkere codekwaliteit via duidelijke structuur en review feedback.</li>
            <li>Sterkere communicatie tussen development en business.</li>
          </ul>

          <h2>Technische skills</h2>
          <div className="tag-list">
            {skills.map((skill) => (
              <span key={skill} className="tag tag--solid">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
