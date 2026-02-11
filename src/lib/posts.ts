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
