import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Over"
};

export default function AboutPage() {
  return (
    <section className="about-page reveal">
      <div className="about-grid">
        <article className="profile-card">
          <Image
            src="/ilias-profile.svg"
            alt="Ilias Hamdaoui"
            className="profile-image"
            width={320}
            height={320}
          />
          <h1>Ilias Hamdaoui</h1>
          <p>Stagiair Softwareontwikkeling - AP Hogeschool Antwerpen</p>
          <p>Stagebedrijf: TheValueChain (SAP consultancy)</p>
          <p>Locatie: Antwerpen, België (hybride)</p>
          <p>Rol: Stagiair</p>

          <div className="social-links">
            <a href="/Ilias-Hamdaoui-CV.pdf" target="_blank" rel="noreferrer">
              Bekijk mijn CV (PDF)
            </a>
            <a
              href="https://www.linkedin.com/in/ilias-h-670a6a17a/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </article>

        <article className="content-card">
          <h2>Mini cv</h2>
          <p>
            Ik ben een gemotiveerde student programmeren aan AP Hogeschool Antwerpen.
            Tijdens mijn stage bij TheValueChain werkte ik aan een SAP CPQ
            indexation applicatie op SAP BTP, met CAP als backend en Fiori als
            frontend.
          </p>

          <h2>Stagecontext</h2>
          <p>
            Het project groeide van CPQ-training en een technische blueprint naar
            een proof of concept met custom CPQ scripting, HANA-replicatie,
            scheduled indexations en notificaties via SAP Alert Notification.
          </p>

          <h2>Focus op dit moment</h2>
          <ul>
            <li>De volledige stage en technische keuzes duidelijk documenteren.</li>
            <li>De belangrijkste lessons learned meenemen naar sollicitaties.</li>
            <li>Mijn projectervaring met SAP CPQ, CAP, Fiori en BTP helder uitleggen.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
