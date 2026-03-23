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
    slug: "week-7-uitbreiding-feedback-en-deployment",
    title: "Week 7: Uitbreiding, Feedback en Deployment",
    date: "2026-03-21",
    excerpt:
      "Week 7 draaide rond extra services, de preview flow, deployment en een eerste tussentijdse evaluatie met concrete verbeterpunten.",
    intro:
      "Naast technische uitbreidingen aan de applicatie kreeg ik deze week gerichte feedback van mijn mentoren over de volgende stappen, zowel op technisch als communicatief vlak.",
    readingMinutes: 9,
    tags: ["deployment", "feedback", "cap"],
    content: `Week 7 – Uitbreiding, Feedback en Deployment

Week 7 stond vooral in het teken van verdere uitbreiding van de applicatie. Waar de vorige week draaide rond het werkend krijgen van de volledige flow, lag de focus nu op het toevoegen van extra services, het verder uitwerken van de preview flow in CAP en het deployen van de applicatie.

Verder bouwen aan de applicatie

Deze week heb ik mij vooral beziggehouden met:

Het toevoegen van extra services

Het verder uitwerken van de preview flow in het CAP gedeelte

De deployment van de applicatie

Hiermee begon het project stilaan meer richting een afgewerkte proof of concept te gaan. De basisflow werkte al, maar nu ging het meer over verfijning, uitbreidingen en het voorbereiden van de volgende iteraties.

Gesprek met mijn mentoren

Op donderdag had ik een gesprek met mijn mentoren. Tijdens dat gesprek kreeg ik vooral technisch advies van Robin over hoe ik bepaalde delen van het project nog beter kon aanpakken.

Daarna heb ik ook een demo gegeven van wat er al werkte. Dat was een goed moment om te tonen hoe ver de applicatie al stond en tegelijk gerichte feedback te krijgen op de volgende stappen.

Tussentijdse evaluatie

Tijdens dezelfde dag hadden we ook de tussentijdse evaluatie. Daar kreeg ik te horen dat het grootste deel van mijn werk in orde was en dat de algemene feedback positief was.

Het belangrijkste werkpunt dat naar voren kwam, was het communicatieve gedeelte. Voor de rest was de evaluatie vrij positief, wat wel bevestigde dat ik technisch op het juiste spoor zit.

Technische feedback en aanpassingen

Mijn mentoren hebben me daarna een aantal concrete suggesties gegeven om de applicatie verder te verbeteren.

Voor de filters:

De quote list standaard filteren op actieve revisions

Status toevoegen aan de filters

Extra filters voorzien voor bijvoorbeeld Sold To

Voor de quote list:

Quote owner toevoegen

Sold to name toevoegen

Status toevoegen

Revision number toevoegen

Name toevoegen

Voor de detailpagina:

Een apart tabblad tonen met involved parties

Bij producten de description gebruiken in plaats van de product name

Total net price bovenaan verwijderen

Controleren of total amount wel het juiste bedrag toont

Voor acties en technische uitbreiding:

De code onderbrengen in de Git repository van TVC

Extra velden toevoegen

De volledige applicatie in het Engels zetten

Meerdere quotes tegelijk kunnen selecteren

HANA database onderzoeken of voorzien

Item indexatie kunnen aanpassen en simuleren

Mijn eigen nota's en vervolgstappen

Ik had voor mezelf ook een aantal concrete punten genoteerd om verder uit te werken:

De retrieval aanpassen en extra velden toevoegen zoals quote description, sold-to en sold-to description

Een partner tab toevoegen op het quote detail scherm

De Git repository van TVC gebruiken

Filters en layout verder verfijnen

Filter op status toevoegen

Filter op sold-to toevoegen

Active revision standaard op yes zetten

Eventueel de statuskolom in kleur tonen

Het totaal van net price bovenaan verwijderen

De kolom Indexation omvormen naar Previous Indexation

Alles in het Engels zetten

Onderzoeken of ik een evolutie kan tonen tussen vorige en huidige extended amounts, via CAP of via een extra CPQ call

Meerdere quotes tegelijk indexeren

Een simulatiescherm maken dat een lijst van quotes met voor- en na-waarden toont

Onderzoeken hoe HANA hierin gebruikt kan worden

Item indexatie ondersteunen

Ideeën voor een latere uitbreiding

Naast de directe feedback kwamen er ook al enkele ideeën naar boven voor uitbreidingen die we later eventueel nog kunnen bespreken:

Een workflow waarbij een nieuwe quote revision eerst in een status "Pending Indexation" terechtkomt

Een approval flow in CPQ waarbij een manager het contract moet goedkeuren

Bij approve gaat de revision verder naar Preparing

Bij reject moet de gebruiker terug naar de vorige revision

Pricing uitbreiden, bijvoorbeeld door marge voor en na indexatie te berekenen

Reflectie

Week 7 draaide minder rond puur bouwen en meer rond verfijnen, evalueren en vooruitdenken. De applicatie werkte al, maar door de feedback van mijn mentoren werd duidelijk welke verbeteringen nodig zijn om er een sterkere en professionelere oplossing van te maken.

De tussentijdse evaluatie was ook een belangrijk moment. Het was goed om te horen dat het technische luik sterk zat, maar tegelijk ook nuttig om mee te nemen dat ik nog kan groeien in communicatie.

De volgende stap is nu om deze opmerkingen systematisch te verwerken in de applicatie en het project verder af te werken richting een nog sterkere demo en eindresultaat.`
  },
  {
    slug: "week-6-integratie-van-cap-en-fiori",
    title: "Week 6: Integratie van CAP en Fiori",
    date: "2026-03-14",
    excerpt:
      "Week 6 draaide om de opbouw van de CAP-backend, de Fiori-frontend en de volledige end-to-end integratie met SAP CPQ.",
    intro:
      "De verschillende onderdelen van het project kwamen samen in een werkende applicatie: CPQ, API's, CAP, Fiori elements en de indexatieflow op SAP BTP.",
    readingMinutes: 9,
    tags: ["cap", "fiori", "integratie"],
    content: `Week 6 – Integratie van CAP en Fiori

Week 6 stond volledig in het teken van de ontwikkeling van de applicatie zelf. Waar week 5 vooral draaide rond het bouwen en testen van het custom CPQ API script, ging de focus deze week naar het bouwen van de backend met SAP CAP en de frontend met SAP Fiori elements. In deze fase begon alles samen te komen: de CPQ configuratie, de API's en de applicatie op SAP BTP.

Ontwikkelen van de CAP backend

Ik ben deze week gestart met het opzetten van de backend service met SAP CAP (Cloud Application Programming Model). Deze service vormt de centrale laag tussen de gebruikersinterface en SAP CPQ.

In mijn architectuur draait deze service op SAP BTP in een Cloud Foundry omgeving en stelt ze een OData service ter beschikking voor de Fiori applicatie.

De belangrijkste reden om CAP te gebruiken is dat de frontend niet rechtstreeks met CPQ communiceert. Alle logica wordt centraal verwerkt in de backend. Hierdoor kunnen we onder andere:

Authenticatie correct afhandelen

API calls naar CPQ centraliseren

Fouten beter controleren

Gevoelige informatie zoals credentials veilig houden

Voor de connectie met CPQ heb ik gebruik gemaakt van de SAP Destination service, zodat de OAuth2 client credentials niet in de code staan maar centraal beheerd worden in BTP.

Binnen mijn CAP service heb ik verschillende functies geimplementeerd die de CPQ API's aanspreken, waaronder:

Ophalen van de lijst met quotes

Ophalen van de details van een specifieke quote

Ophalen van alle items van een quote

Deze data wordt vervolgens omgezet naar OData entities zodat de Fiori applicatie ze eenvoudig kan gebruiken.

OData service en applicatielogica

In de CAP service heb ik een OData service opgebouwd met onder andere de volgende onderdelen:

Entities

Quotes

QuoteItems

Custom action

ApplyIndexation

Deze action is het belangrijkste onderdeel van de applicatie. Wanneer de gebruiker een indexatiepercentage bevestigt in de interface, wordt deze action aangeroepen.

De flow verloopt als volgt:

De gebruiker kiest een quote in de interface

De gebruiker geeft een indexatiepercentage in

De Fiori applicatie roept de ApplyIndexation action aan

De CAP service stuurt een request naar het CPQ custom API script

CPQ maakt een nieuwe revision, past de indexatie toe en herberekent de quote

De nieuwe totals worden teruggestuurd naar de applicatie

Dit sluit perfect aan bij de use case die in mijn blueprint beschreven staat: een quote selecteren, een percentage ingeven en automatisch een nieuwe revision laten aanmaken met herberekende prijzen.

Ontwikkelen van de Fiori applicatie

Naast de backend heb ik ook de gebruikersinterface gebouwd met SAP Fiori elements in SAP Business Application Studio.

In plaats van een volledige UI van nul te bouwen, maakt Fiori elements gebruik van templates op basis van OData services. Hierdoor kan je snel een consistente interface genereren.

De applicatie bestaat uit drie hoofdschermen die overeenkomen met mijn functioneel design:

1. Quotes overzicht (List Report)
Hier worden alle quotes en contracten opgelijst. De gebruiker kan een document selecteren om de details te bekijken.

2. Quote detailpagina (Object Page)
Op deze pagina worden de details van de quote en alle line items getoond.

3. Indexatie dialoog
Via een actieknop kan de gebruiker een indexatiepercentage ingeven en bevestigen.

Dit komt rechtstreeks overeen met de drie schermen die in mijn blueprint beschreven zijn voor de indexatieflow.

In de interface heb ik onder andere volgende functionaliteiten toegevoegd:

Tabel met quote-items

Actie "Indexatie toepassen"

Dialoogvenster voor het percentage

Validatie van het ingevoerde percentage

Previewberekening van nieuwe totalen

Foutmeldingen bij API fouten

Hierdoor kan de gebruiker op een eenvoudige manier een indexatie uitvoeren zonder manueel elk item aan te passen.

End-to-end integratie

Na het bouwen van zowel de backend als de frontend kon ik de volledige flow testen.

De volledige end-to-end flow ziet er nu als volgt uit:

De gebruiker opent de Fiori applicatie

De applicatie haalt de lijst met quotes op via CAP

CAP roept de CPQ API /api/v1/quotes aan

De gebruiker opent een quote

CAP haalt de details en items op via /api/v1/quotes/{quoteId} en /items

De gebruiker geeft een indexatiepercentage in

CAP roept het CPQ custom API script aan

CPQ maakt een nieuwe revision en herberekent de quote

De nieuwe waarden worden teruggestuurd naar de applicatie

Deze integratie toont dat de applicatie correct kan communiceren met SAP CPQ en dat het volledige proces geautomatiseerd kan worden.

Project sneller afgerond dan gepland

Wat deze week ook duidelijk werd, is dat het project sneller vooruit ging dan verwacht.

Volgens de planning in mijn blueprint was er ongeveer acht weken voorzien voor de volledige realisatie van de proof of concept. Door goed door te werken en omdat ik de architectuur vooraf grondig had uitgewerkt, was de applicatie na ongeveer twee weken ontwikkeling al volledig werkend.

De belangrijkste onderdelen waren op dat moment al gerealiseerd:

CPQ configuratie (custom field, calculation en script)

API integratie

CAP backend

Fiori frontend

End-to-end indexatie flow

Het enige wat nog moest gebeuren was het deployen van de applicatie op SAP BTP en het voorbereiden van de demo.

Reflectie

Week 6 was waarschijnlijk de meest productieve week van mijn stage tot nu toe. Alles waar ik de vorige weken aan gewerkt had - de blueprint, de architectuur en het CPQ script - kwam nu samen in een werkende applicatie.

Het was ook motiverend om te zien dat het project sneller werkte dan gepland. Doordat ik vooraf veel tijd had gestoken in het begrijpen van de technologieen en het uitwerken van de architectuur, kon de implementatie relatief vlot verlopen.

Na deze week was de applicatie technisch gezien al volledig klaar. De volgende stap is het correct deployen van de applicatie op SAP BTP en het voorbereiden van de finale demonstratie van het project.`
  },
  {
    slug: "week-5-start-van-de-ontwikkeling",
    title: "Week 5: Start van de ontwikkeling",
    date: "2026-03-07",
    excerpt:
      "Week 5 markeerde de echte technische start van het project, met API-testing in Postman en de eerste versie van het custom CPQ-script.",
    intro:
      "Na de voorbereiding en architectuur van de vorige weken verschoof de focus volledig naar implementatie, testen en het automatiseren van de indexatieflow in SAP CPQ.",
    readingMinutes: 8,
    tags: ["ontwikkeling", "api", "cpq"],
    content: `Week 5 – Start van de ontwikkeling

Week 5 was de week waarin ik eindelijk echt kon beginnen aan het technische gedeelte van mijn project. Na de voorbereiding, architectuur en blueprint van de vorige weken, ging de focus nu volledig naar het ontwikkelen en testen van de integratie met SAP CPQ.

Start met API-testing in Postman

Om de integratie met SAP CPQ goed te begrijpen, ben ik eerst begonnen met het testen van de verschillende API's via Postman. Dit was belangrijk om te controleren hoe de responses eruitzien en hoe de authenticatie werkt voordat ik de logica in mijn applicatie integreer.

De eerste stap was het ophalen van een OAuth2 bearer token via de CPQ authenticatie-endpoint. Met dit token kon ik vervolgens de andere CPQ REST API's aanspreken.

Daarna heb ik verschillende calls getest, zoals:

Quotes ophalen via /api/v1/quotes

Quote details ophalen via /api/v1/quotes/{quoteId}

Quote items ophalen via /api/v1/quotes/{quoteId}/items

Deze endpoints vormen de read flow van mijn applicatie. Hiermee kan de indexatie-app eerst alle quotes ophalen, vervolgens de details tonen en daarna de items van de geselecteerde quote laden.

Door deze API's te testen in Postman kon ik exact zien:

Welke velden in de responses zitten

Hoe pagination werkt bij items

Welke data nodig is voor mijn toekomstige Fiori interface

Dit was een belangrijke stap omdat mijn applicatie uiteindelijk exact dezelfde calls zal uitvoeren via de backend.

Ontwikkelen van het custom CPQ script

Na het testen van de API's ben ik begonnen met het belangrijkste onderdeel van mijn project: het maken van het custom CPQ API script.

Omdat SAP CPQ niet standaard alle functionaliteit aanbiedt om bulk indexatie uit te voeren, moet dit via een custom API script gebeuren dat via een endpoint kan worden aangeroepen.

Het script wordt aangeroepen via:

/customapi/executescript?scriptname=SCRIPTNAME

Dit script ontvangt een JSON payload met onder andere:

Het quoteId

Het indexatiepercentage

Vervolgens voert het script een aantal stappen uit binnen CPQ:

De juiste quote ophalen

Een nieuwe revision aanmaken zodat de historiek van de prijzen bewaard blijft

Controleren of de revision actief moet worden gezet

Op elk line item het custom field "Indexation" vullen met het percentage

De quote opnieuw laten herberekenen zodat de nieuwe prijzen worden berekend

Het doel van dit script is om het volledige indexatieproces automatisch uit te voeren, zodat een gebruiker niet meer elk item manueel moet aanpassen. Dit sluit rechtstreeks aan bij de doelstelling van de applicatie: het automatiseren van een proces dat vandaag nog volledig manueel gebeurt.

Ik heb bijna de hele week gewerkt aan dit script, omdat het correct omgaan met revisions, items en recalculations in CPQ redelijk complex is. Ook moest ik regelmatig testen via Postman om te controleren of de API de juiste responses terugstuurt.

Jobbeurs op woensdag

Woensdag ben ik ook even langsgegaan op een jobbeurs. Daar heb ik met verschillende bedrijven gesproken en wat nieuwe contacten gelegd. Ik heb ook enkele connecties gemaakt op LinkedIn.

Hoewel mijn focus momenteel volledig op mijn stage ligt, was het interessant om te zien welke bedrijven actief zijn in de sector en welke technologieen zij gebruiken.

Intervisiemoment op school

Op donderdag hadden we op school een intervisiemoment met andere studenten die ook op stage zijn.

Iedereen vertelde kort over:

Waar ze stage lopen

Aan welk project ze werken

Welke technologieen ze gebruiken

Het was interessant om te horen hoe verschillend de stages zijn. Sommige studenten werken vooral aan webdevelopment, anderen aan data of infrastructuur. Mijn project rond SAP CPQ en SAP BTP was voor veel studenten iets minder bekend, dus het was leuk om dat ook eens uit te leggen.

Reflectie

Week 5 voelde voor mij als de echte start van het project.

Na weken van voorbereiding kon ik eindelijk beginnen met het bouwen van de technische oplossing. Vooral het werken met de CPQ API's en het ontwikkelen van het custom script waren uitdagend, maar ook het leukste deel tot nu toe.

Ik merk dat alles wat ik in de eerste weken geleerd heb - CPQ scripting, API's en architectuur - nu effectief samenkomt in de implementatie.

De volgende stap is om het script volledig stabiel te krijgen en daarna de integratie met de CAP-backend en de Fiori interface verder uit te bouwen.`
  },
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
