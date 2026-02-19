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
