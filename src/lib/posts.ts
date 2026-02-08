export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  intro: string;
  readingMinutes: number;
  tags: string[];
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "week-8-retrospective-en-groeipunten",
    title: "Week 8: Retrospective en groeipunten",
    date: "2025-11-15",
    excerpt:
      "Deze week heb ik mijn eerste stageblok afgerond met een technische en persoonlijke retrospectieve.",
    intro:
      "Ik heb teruggekeken op de voorbije sprints en mijn leerpunten gebundeld in concrete acties voor de volgende weken.",
    readingMinutes: 5,
    tags: ["reflectie", "lessons learned", "wins"],
    content: [
      "Ik heb deze week mijn tickets van de afgelopen twee maanden geanalyseerd om patronen te vinden: waar verlies ik tijd, waar accelereer ik, en wanneer vraag ik hulp op het juiste moment.",
      "Een duidelijke winst: mijn code reviews zijn scherper geworden. Ik probeer nu niet alleen te controleren of iets werkt, maar ook of de oplossing op lange termijn onderhoudbaar blijft.",
      "Mijn belangrijkste les: context expliciet maken. Bij complexe SAP-gerelateerde logica schrijf ik nu sneller een korte technische nota zodat collega’s onmiddellijk begrijpen waarom een keuze gemaakt is.",
      "Volgende stap is om die discipline verder te trekken naar mijn blogposts: minder chronologisch, meer focus op impact en besluitvorming."
    ]
  },
  {
    slug: "week-7-demo-voor-consultants",
    title: "Week 7: Demo voor consultants",
    date: "2025-11-08",
    excerpt:
      "Ik gaf een interne demo over een nieuwe validatieflow en kreeg directe feedback van consultants.",
    intro:
      "De demo was geen pure code-oefening maar een gesprek over businesswaarde, gebruikersimpact en onderhoud.",
    readingMinutes: 6,
    tags: ["code", "reflectie", "wins"],
    content: [
      "Ik heb een korte demo gegeven van een validatieflow die datakwaliteit in een intern proces verbetert. Mijn focus lag op fouten sneller zichtbaar maken in plaats van enkel afvangen in de backend.",
      "De consultants gaven nuttige feedback: sommige foutmeldingen waren technisch correct, maar niet duidelijk voor business users. Daardoor heb ik labels en hints herschreven in begrijpelijke taal.",
      "Het interessante was dat dit mij dwong om verder te denken dan de implementation details. Goede software is niet enkel correct, maar ook uitlegbaar.",
      "Deze sessie voelde als een kantelpunt: ik communiceer nu sterker over waarom iets gebouwd wordt, niet alleen hoe."
    ]
  },
  {
    slug: "week-6-performance-tuning",
    title: "Week 6: Performance tuning in een data-zware flow",
    date: "2025-11-01",
    excerpt:
      "Ik botste op trage laadtijden en heb met gerichte metingen de bottleneck gevonden.",
    intro:
      "Door eerst te meten en daarna pas te optimaliseren, kon ik een merkbare snelheidswinst behalen zonder overhaaste refactor.",
    readingMinutes: 6,
    tags: ["code", "backend", "lessons learned"],
    content: [
      "Een scherm met veel records werd merkbaar trager naarmate de dataset groeide. In plaats van direct te refactoren heb ik eerst timings gelogd op drie niveaus: query, mapping en rendering.",
      "De bottleneck zat niet in de query zelf maar in dubbele transformaties die op meerdere plaatsen gebeurden. Door de mapping te centraliseren en resultaten te hergebruiken, daalde de totale verwerkingstijd sterk.",
      "Belangrijk inzicht: performanceproblemen voelen vaak als databaseproblemen, maar liggen regelmatig in applicatielogica.",
      "Ik heb de aanpak gedocumenteerd zodat toekomstige tickets dezelfde meetstrategie kunnen volgen."
    ]
  },
  {
    slug: "week-5-teambuilding-en-samenwerking",
    title: "Week 5: Teambuilding en samenwerking",
    date: "2025-10-25",
    excerpt:
      "Deze week ging niet alleen over code: ik leerde mijn team beter kennen tijdens een teambuildingactiviteit.",
    intro:
      "Door informele gesprekken werd het makkelijker om tijdens technische discussies sneller af te stemmen.",
    readingMinutes: 4,
    tags: ["teambuilding", "reflectie", "lessons learned"],
    content: [
      "We hadden een teamactiviteit buiten de werkcontext. Het effect op de werkvloer was meteen voelbaar: ik stelde sneller vragen en kreeg sneller context van collega’s.",
      "Tijdens pair-programming merkte ik dat vertrouwen een groot verschil maakt. Je durft makkelijker alternatieven voorstellen als de communicatie open zit.",
      "De grootste les van deze week is dat samenwerking een technische multiplier is. Snelle afstemming voorkomt herwerk en versnelt beslissingen.",
      "Ik wil dit meenemen in mijn stage: niet wachten tot blockers groot worden, maar vroeg afstemmen."
    ]
  },
  {
    slug: "week-4-eerste-productiebug",
    title: "Week 4: Eerste productiebug opgelost",
    date: "2025-10-18",
    excerpt:
      "Mijn eerste echte productiebug kwam binnen via support en vroeg een snelle maar veilige fix.",
    intro:
      "Ik moest balanceren tussen snelheid, risicobeperking en duidelijke communicatie richting collega’s.",
    readingMinutes: 6,
    tags: ["fails", "bugfix", "wins"],
    content: [
      "Een klantflow faalde in een specifieke edge-case. De bug was moeilijk te reproduceren omdat de fout enkel optrad bij een combinatie van velden die zelden voorkomt.",
      "Ik heb eerst een minimale reproductie gebouwd en daarna een targeted fix gemaakt met extra validatie. Belangrijk was om de fix klein te houden zodat review en deploy snel konden gebeuren.",
      "Na de release heb ik extra logging toegevoegd om te bevestigen dat het probleem effectief weg was. Dat gaf rust bij het team.",
      "Dit was een sterke leerschool: rustig analyseren onder tijdsdruk is even belangrijk als technische kennis."
    ]
  },
  {
    slug: "week-3-sap-integratie-context",
    title: "Week 3: SAP-integratie beter begrijpen",
    date: "2025-10-11",
    excerpt:
      "Deze week draaide rond het begrijpen van dataflows en afhankelijkheden in een SAP-context.",
    intro:
      "Ik heb veel tijd geïnvesteerd in domeinkennis en dat maakte mijn codekeuzes veel gerichter.",
    readingMinutes: 5,
    tags: ["sap", "lessons learned", "code"],
    content: [
      "Voor een ticket met synchronisatieproblemen moest ik eerst de volledige keten begrijpen: welke service schrijft wanneer, en welke velden zijn leidend.",
      "Ik heb samen met een senior de flow uitgetekend en daarna de foutlocatie vernauwd. Uiteindelijk bleek de mismatch te zitten in een verkeerde aanname over een statusveld.",
      "Door die analyse kon ik niet alleen het ticket oplossen, maar ook een extra controle inbouwen die gelijkaardige fouten sneller detecteert.",
      "Mijn takeaway: bij enterprise-software is domeinbegrip vaak de snelste route naar robuuste code."
    ]
  },
  {
    slug: "week-2-eerste-features-en-code-reviews",
    title: "Week 2: Eerste features en code reviews",
    date: "2025-10-04",
    excerpt:
      "Ik leverde mijn eerste feature branch op en kreeg waardevolle feedback tijdens review.",
    intro:
      "De code werkte functioneel, maar de review ging vooral over leesbaarheid, naamgeving en testbaarheid.",
    readingMinutes: 4,
    tags: ["code", "lessons learned", "reflectie"],
    content: [
      "Mijn eerste feature ging over het verbeteren van een intern formulier. Na de implementatie kreeg ik feedback om kleine functies te isoleren en businesslogica minder in de UI te mengen.",
      "Ik vond het nuttig dat de review heel concreet was: betere functienamen, duidelijkere foutafhandeling en minder duplicatie.",
      "Ik heb de branch herschikt volgens die feedback. Het resultaat was niet alleen netter, maar ook eenvoudiger om te testen.",
      "Deze week heeft me geleerd dat code reviews vooral een leerkans zijn, geen eindcontrole."
    ]
  },
  {
    slug: "week-1-onboarding-bij-thevaluechain",
    title: "Week 1: Onboarding bij TheValueChain",
    date: "2025-09-27",
    excerpt:
      "Mijn stage startte met onboarding, tooling setup en een eerste kennismaking met het team.",
    intro:
      "In mijn eerste week lag de focus op context opbouwen: bedrijf, stack, werkwijze en verwachtingen.",
    readingMinutes: 4,
    tags: ["onboarding", "reflectie", "wins"],
    content: [
      "Tijdens onboarding heb ik de interne tools leren kennen, toegang geregeld en de projectstructuur van dichtbij bekeken. Ik heb bewust veel vragen gesteld om sneller productief te worden.",
      "De eerste dagen draaiden ook om observatie: hoe plannen we werk, hoe verloopt review, en hoe communiceren developers met consultants.",
      "Ik kreeg een kleine starterstaak waarmee ik de deploymentflow en reviewprocedure heb doorlopen. Dat gaf meteen vertrouwen om grotere tickets op te nemen.",
      "Mijn doel voor de komende weken: elke week meetbare progressie tonen in technische diepgang en ownership."
    ]
  }
];

export const getSortedPosts = () => {
  return [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slug === slug);
};
