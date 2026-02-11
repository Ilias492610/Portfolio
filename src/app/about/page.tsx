import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over"
};

export default function AboutPage() {
  return (
    <section className="about-page reveal">
      <div className="about-grid">
        <article className="profile-card">
          <h1>Ilias Hamdaoui</h1>
          <p>Stagiair Softwareontwikkeling - AP Hogeschool Antwerpen</p>
          <p>Stagebedrijf: TheValueChain (SAP consultancy)</p>
          <p>Locatie: Antwerpen, België (hybride)</p>
          <p>Rol: Stagiair</p>

          <div className="social-links">
            <a href="/Ilias-Hamdaoui-CV.pdf" target="_blank" rel="noreferrer">
              Bekijk mijn CV (PDF)
            </a>
          </div>
        </article>

        <article className="content-card">
          <h2>Mini cv</h2>
          <p>
            Ik ben een gemotiveerde student programmeren aan AP Hogeschool Antwerpen.
            Tijdens mijn stage bij TheValueChain focus ik op het opbouwen van sterke
            functionele en technische basiskennis binnen SAP CPQ.
          </p>

          <h2>Stagecontext</h2>
          <p>
            Mijn eerste stageweek draaide rond onboarding, kennismaking met het team en
            intensieve CPQ-trainingen. Ik kreeg een duidelijke roadmap van Jan en Steven,
            werkte functioneel rond de CPQ-fundamentals en begon daarna aan technische
            scripting met IronPython binnen CPQ.
          </p>

          <h2>Focus op dit moment</h2>
          <ul>
            <li>CPQ functioneel volledig begrijpen: producten, pricing, quotes en approval.</li>
            <li>CPQ technisch toepassen via scripts in verschillende modules.</li>
            <li>Sneller verbanden leggen tussen CPQ en het bredere SAP/BTP-verhaal.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
