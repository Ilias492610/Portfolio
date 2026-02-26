export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  intro: string;
  readingMinutes: number;
  tags: string[];
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "week-4-van-blueprint-naar-opstart",
    title: "Week 4: Van Blueprint naar Opstart",
    date: "2026-02-28",
    excerpt:
      "Week 4 draaide rond de laatste blueprint-feedback, de presentatie en de echte start van mijn project in CPQ.",
    intro:
      "Na het afronden en verdedigen van mijn blueprint ben ik gestart met de praktische opbouw van het project, inclusief testdata en voorbereiding volgens het stappenplan.",
    readingMinutes: 6,
    tags: ["blueprint", "projectstart", "cpq"],
    content: `Week 4 – Van Blueprint naar Opstart

Week 4 stond in het teken van afronden en starten. Ik was nog bezig met de laatste verbeteringen aan mijn blueprint, maar tegelijk kwam ook het moment dichterbij om effectief aan de applicatie te beginnen.

Laatste feedback op de blueprint

Op maandag kreeg ik nog de laatste feedback om mijn blueprint volledig af te werken. Een belangrijke aanpassing was dat ik mijn activity diagram heb vervangen door een sequence diagram, zodat de technische flow en interacties duidelijker en correcter beschreven werden.

Presentatie verschoven naar donderdag

Normaal gezien zou ik mijn presentatie op maandag geven, maar ik had de inschatting wat onderschat. Daarom heb ik de presentatie uiteindelijk op donderdag gegeven voor Robin, Steven en Jan.

Tijdens die presentatie heb ik mijn blueprint toegelicht, vragen gesteld en extra feedback meegenomen om alles scherp te zetten.

Echte start van het project

Na de presentatie ben ik eindelijk gestart met de concrete uitwerking van het project.

Ik ben begonnen met:

Testdata aanmaken in CPQ

De blueprint opnieuw controleren

Het afgesproken stappenplan erbij nemen en verder uitbreiden

Deze week voelde als de overgang van documentatie naar uitvoering. De voorbereiding staat nu op punt en de volgende stap is het project technisch verder opbouwen op basis van de uitgewerkte architectuur.`
  },
  {
    slug: "week-3-van-blueprint-naar-architectuur",
    title: "Week 3: Van Blueprint naar Architectuur",
    date: "2026-02-21",
    excerpt:
      "Week 3 draaide om verdieping, architectuurkeuzes en het uitwerken van een onderbouwde blueprint voor de indexatie-app.",
    intro:
      "De focus verschoof van use case-begrip naar een technisch correcte en professioneel gedocumenteerde oplossing met duidelijke scope en planning.",
    readingMinutes: 9,
    tags: ["architectuur", "fiori", "cpq"],
    content: `Week 3 – Van Blueprint naar Architectuur

Week 3 stond volledig in het teken van verdieping en structureren. Waar week 2 draaide rond het begrijpen van de use case en het grotere geheel, ging week 3 over het concreet maken van mijn oplossing: technisch correct, logisch opgebouwd en onderbouwd in een blueprint.

Fiori-training afgerond

Deze week werkte ik mijn SAP Fiori elements training verder af. De opleiding focuste op het bouwen van een SAP Fiori elements applicatie op basis van een CAP OData V4 service, binnen SAP Business Application Studio.

De cursus behandelde onder andere:

Overzicht van SAP Fiori elements voor OData V4

SAP Fiori Tools

List Report en Object Page templates

Filter bars en table configuratie

Actions op List Reports

Multiple views

Header- en body-configuratie

Validaties en dynamic field control

Navigation concept

Analytical List Page

Flexibility via het programming model

Wat ik hier vooral uit meenam, is dat Fiori elements veel standaardfunctionaliteit biedt. Je bouwt niet alles zelf, maar configureert slimme templates. Dat past perfect bij mijn indexatie-app, die bestaat uit:

Een lijst van quotes/contracten

Een detailpagina met items

Een actie om indexatie toe te passen

De training duurde wel wat langer dan verwacht. Ik heb er dinsdag nog verder aan gewerkt om alles goed te begrijpen in plaats van het snel af te ronden.

Gesprek met Robin – vragen stellen over architectuur

Dinsdag had ik een gesprek met Robin om mijn openstaande vragen te bespreken. Vooral rond:

Hoe de CAP-service precies communiceert met CPQ

Waar authenticatie gebeurt

Hoe Destinations correct worden gebruikt

Hoe we de custom API in CPQ best structureren

Dat gesprek hielp mij om mijn architectuur duidelijker te zien. De indexatie-app wordt gebouwd als side-by-side extensie op SAP BTP, met een CAP backend en een Fiori frontend. De connectie naar CPQ gebeurt via OAuth2 en de Destination service, zodat credentials niet in de code staan.

Het werd steeds duidelijker dat dit project niet alleen over CPQ scripting gaat, maar over een volledige end-to-end integratie.

Start van mijn Blueprint

Na het gesprek ben ik gestart met het schrijven van mijn blueprint. Ik heb de officiele bachelor-template gebruikt en die volledig ingevuld voor mijn project: Indexatie Applicatie La Poste.

Hoewel we binnen Graduaat Programmeren minder focussen op formele diagrammen, heb ik via zelfstudie en herinneringen van vorig semester (ons groepswerk) mijn eigen diagrammen uitgewerkt:

Use case diagram

Activity diagram van de toekomstige flow

Architectuurdiagram op SAP BTP

Integratieoverzicht met CPQ

Wat beschrijft mijn blueprint concreet?

De kern van het proces is als volgt:

Quotes/contracten ophalen uit CPQ

Een document selecteren

Een indexatiepercentage ingeven

Een nieuwe revision laten aanmaken

Herberekening uitvoeren

Dit komt rechtstreeks overeen met het proces dat in het LaPoste-document beschreven wordt.

Belangrijke technische elementen die ik heb uitgewerkt:

OAuth2 authenticatie via /oauth2/token

Quote list API

Quote detail API

Quote items (paginated)

Custom CPQ API via /customapi/executescript

Omdat CPQ niet standaard alle functionaliteit aanbiedt die we nodig hebben, moet er een custom API-script gemaakt worden dat:

Een nieuwe revision aanmaakt

Het custom field "Indexation" vult

De quote herberekent

Dat volledige proces heb ik technisch uitgeschreven in mijn Technisch Design hoofdstuk.

Drie dagen volledig op specs en architectuur

Volgens mijn planning heb ik gewerkt aan:

18 februari – Create specs and architecture

19 februari – Create specs and architecture

20 februari – Create specs and architecture

Deze dagen stonden volledig in het teken van structureren:

Functionele scope uitschrijven

Use cases herwerken

MVP correct positioneren

Security en rollen definieren

Integraties documenteren

Planning herschrijven naar 4 weken

Ik heb meerdere versies gemaakt (v0.01 tot v0.04) en telkens verder verfijnd.

Feedbackmoment op donderdag

Donderdag had ik opnieuw een gesprek waarin ik mijn blueprint heb voorgesteld. Ik kreeg heel wat feedback, onder andere over:

De formulering van de use cases

De positionering van het MVP

Het duidelijker opsplitsen van functioneel en technisch design

Het formeler uitschrijven van uitzonderingen en foutscenario's

Consistentie in terminologie

Dat moment was belangrijk. Ik merkte dat een technisch idee hebben een ding is, maar het correct en professioneel documenteren iets helemaal anders.

Wat heb ik deze week echt geleerd?

Week 3 voelde minder hands-on coding en meer denken als een architect.

Ik heb geleerd:

Hoe je een businessprobleem vertaalt naar een gestructureerde oplossing

Hoe je een POC scope duidelijk afbakent

Hoe belangrijk security en rollen zijn, zelfs in een demo

Hoe CAP, Fiori en CPQ logisch in elkaar passen

Hoe je een technisch verhaal correct documenteert

Waar week 1 draaide rond leren wat CPQ is, en week 2 rond begrijpen wat ik ga bouwen, draaide week 3 rond het professioneel onderbouwen van mijn oplossing.

Het project voelt nu niet meer als een idee, maar als een uitgewerkte architectuur met duidelijke stappen, scope en planning.

Volgende stap: effectief beginnen bouwen.`
  },
  {
    slug: "week-2-van-training-naar-projectstart",
    title: "Week 2: Van Training naar Projectstart",
    date: "2026-02-14",
    excerpt:
      "In week 2 verschoof de focus van pure training naar een concreet stageproject: de LaPoste indexatie-app.",
    intro:
      "Na de basis van week 1 begon alles samen te vallen: CPQ, API's, BTP, CAP, Cloud Foundry en Fiori kregen een duidelijke plaats binnen mijn project.",
    readingMinutes: 8,
    tags: ["cpq", "btp", "projectstart"],
    content: `Week 2 – Van Training naar Projectstart

Na een eerste week vol onboarding en basisopleiding in CPQ, begon week 2 meteen een stuk concreter aan te voelen. Waar week 1 draaide rond begrijpen wat CPQ is en hoe het werkt, ging week 2 meer richting: wat ga ik hier effectief bouwen?

Technische training afgerond

Op dinsdag werkte ik mijn technische CPQ-training verder af. Ik was geëindigd bij het onderdeel rond API's en dat was meteen ook een belangrijk stuk voor mijn stageproject.

Ik leerde hoe je:

API's kan aanspreken vanuit CPQ

Data kan ophalen (zoals quotes en items)

Scripts kan uitvoeren via een custom API

Een nieuwe revisie kan aanmaken via scripting

Dat sloot perfect aan bij het project waar ik later die week uitleg over kreeg.

Eerste echte BTP-intro

Woensdag had ik opnieuw een meeting met Robin. Deze keer ging het dieper over:

SAP BTP

CAP (Cloud Application Programming Model)

CF (Cloud Foundry)

Fiori

Tot dan toe kende ik vooral de CPQ-kant. Nu begon ik te zien hoe CPQ past binnen het grotere SAP-landschap.

Heel simpel uitgelegd:

BTP is het platform waarop je applicaties bouwt en uitbreidingen maakt.

CAP gebruik je om backend services te bouwen.

Cloud Foundry is de runtime waarop je applicatie draait.

Fiori is de frontend (de gebruikersinterface).

Na die meeting kreeg ik enkele officiële SAP Learning Journeys om te volgen, zodat ik technisch beter voorbereid zou zijn om mijn project correct op te zetten.

Projectvoorstelling: De LaPoste Indexatie App

Donderdag was een drukke dag met veel meetings. De belangrijkste was die met Daoud, Steven en Jan. Daar kreeg ik een presentatie over het project waaraan ik tijdens mijn stage zal werken: de indexatie-app voor LaPoste.

Het doel van de applicatie is:

Quotes of contracten ophalen uit CPQ, een indexatiepercentage toepassen op (alle) items en dit correct verwerken in CPQ, inclusief het aanmaken van een nieuwe revisie.

De globale flow van de applicatie ziet er als volgt uit:

Een scherm waar alle quotes/contracten van een klant worden opgehaald.

De gebruiker selecteert een quote.

De gebruiker vult een indexatiepercentage in.

De applicatie stuurt dit naar CPQ.

In CPQ wordt:

Een nieuwe revisie aangemaakt.

Een custom field "Indexation" gevuld.

Een custom calculation uitgevoerd op de Net Price.

De quote herberekend.

Wat dit technisch uitdagend maakt:

CPQ heeft niet standaard alle API's die we nodig hebben.

We moeten een custom API maken die:

De indexatie ontvangt.

Een nieuwe revisie aanmaakt.

De indexatie toepast op alle items.

De quote herberekent.

Daarnaast zal dit eerst gebouwd worden in een trainingsomgeving en daarna overgezet worden naar de demo-tenant "SAP CPQ Indexation 1".

Toen ik deze presentatie kreeg, viel alles wat ik in week 1 geleerd had ineens samen. De scripting, de custom fields, de API's... het was niet meer theorie, maar een echte use case.

CPQ Unit Day & Stagebespreking

In de namiddag hadden we een CPQ Unit Day. Daar werd een presentatie gegeven over nieuwe SAP-updates rond CPQ. Interessant om te zien hoe het product blijft evolueren.

Daarna kwam mijn stagebegeleider langs om het verloop van de werkplekleren-stage (WPL) te bespreken: verwachtingen, opvolging en communicatie. Dat maakte alles officieel en gaf extra duidelijkheid over wat er van mij verwacht wordt.

's Avonds gingen we met het hele team eten op restaurant. Dat was een leuke afsluiter van een drukke dag en ik heb het team daar beter leren kennen in een meer informele sfeer.

Gumption Game Night

Woensdagavond was er ook nog een gameavond georganiseerd door Gumption (het moederbedrijf). Ik ben daar ook naartoe gegaan en kwam daar toevallig een klasgenoot tegen die stage doet bij Brightest. Het was leuk om ook mensen buiten mijn directe team te leren kennen.

BTP & Cloud Foundry Training

Vrijdag werkte ik mijn BTP-training verder af en begon ik met de training rond Cloud Foundry. Dat voelde opnieuw als een stap richting het effectief bouwen van mijn applicatie.

Waar week 1 vooral CPQ-gericht was, begon week 2 echt de brug te slaan tussen:

CPQ (waar de data zit)

BTP (waar de app gebouwd wordt)

CAP & CF (waar de logica draait)

Fiori (wat de gebruiker ziet)

Reflectie

Week 2 voelde als een kantelpunt.

In week 1 leerde ik hoe CPQ werkt. In week 2 begon ik te begrijpen wat mijn concrete bijdrage zal zijn.

De indexatie-app is technisch uitdagend, maar tegelijk heel logisch opgebouwd. Het is geen oefenproject, maar een echte business case met een duidelijke flow en impact.

Ik merk dat alles wat ik leer - scripting, API's, BTP - stap voor stap samenkomt in een groter geheel.

En dat maakt het extra motiverend.`
  },
  {
    slug: "week-1-onboarding-bij-thevaluechain",
    title: "Week 1: Onboarding bij TheValueChain",
    date: "2026-02-07",
    excerpt:
      "Mijn eerste week bij TheValueChain draaide vooral rond onboarding, kennismaken en veel oefenen.",
    intro:
      "Alles was nieuw, dus de focus lag vooral op begrijpen hoe het bedrijf werkt, wat CPQ precies is en wat ik de komende maanden ga doen.",
    readingMinutes: 7,
    tags: ["onboarding", "reflectie", "wins"],
    content: `Week 1: Onboarding bij TheValueChain

Mijn eerste week bij TheValueChain draaide vooral rond onboarding, kennismaken en veel oefenen. Alles was nieuw, dus de focus lag vooral op begrijpen hoe het bedrijf werkt, wat CPQ precies is en wat ik de komende maanden ga doen.

Een warme start

Op dag één (maandag 2 februari) kreeg ik meteen een warm welkom met een ontbijt samen met het team. Dat was een fijne manier om iedereen te leren kennen en zorgde ervoor dat ik me direct op mijn gemak voelde.

Daarna had ik een eerste training met Jan en Steven. Zij gaven me een duidelijk overzicht van wat ik tijdens mijn stage mag verwachten: aan welke projecten ik zal meewerken, wat de bedoeling is en hoe mijn traject eruitziet. Dat gaf me meteen een goed beeld van waar ik naartoe werk.

Veel oefenen met CPQ

Na die introductie ben ik gestart met de functionele CPQ-training, gegeven door Steven. Deze week was vooral een oefenweek waarin ik de basis heb leren kennen.

Functioneel heb ik gewerkt rond de fundamentals van CPQ, waaronder:

Fundamentals

CPQ within SAP

Overview of CPQ

CPQ UI

Users

Products

Pricing

Quotes

Workflow

Approval

Releases

Hier leerde ik hoe alles logisch samenhangt: van producten en pricing tot quotes en approvals. Het gaf me een goed beeld van hoe CPQ werkt vanuit businessperspectief.

Technische training – IronPython

Na het functionele stuk ben ik gestart met de technische training binnen CPQ. Hier lag de focus op de basis van IronPython binnen CPQ en hoe scripting werkt in het platform.

Technisch heb ik gewerkt rond:

General

Customizing / Scripting

Python Basics

Developer Tools in CPQ

Naming Convention

Tips and Tricks

Scripting Basics

Script in Quotes

Script in Products

Script in Calculations

Script in Actions

Script in Quote Tables

Script for Custom Tables

Report Module

Create/Use API’s

Dit was vooral veel oefenen: kleine scripts schrijven, begrijpen hoe logica binnen CPQ werkt en zien waar je technisch kan ingrijpen. Het was uitdagend, maar ook interessant omdat ik hier echt de technische kant van het platform begon te ontdekken.

Op donderdagavond was er ook nog een extra, optionele training na de werkuren. Ik ben hier ook bij geweest en heb daar opnieuw veel bijgeleerd.

Kennismaking met BTP

Op donderdag had ik ook een kennismakingsgesprek met Robin. Hij vertelde wat hij en zijn team precies doen en gaf me een eerste uitleg over BTP en hoe alles binnen het grotere SAP-verhaal samenhangt. Dat gaf me al wat breder inzicht in waar CPQ past binnen het geheel.

Reflectie

Deze week draaide vooral om oefenen, veel informatie opnemen en de basis leggen. Alles was nieuw, maar ik merk dat ik stap voor stap meer begin te begrijpen hoe CPQ functioneel én technisch in elkaar zit.

Het was een sterke eerste week waarin ik vooral een fundament heb opgebouwd waarop ik de komende weken verder kan bouwen.`
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
