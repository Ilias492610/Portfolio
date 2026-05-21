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
    slug: "laatste-stageblog-terugblik-op-mijn-stage",
    title: "Laatste stageblog: terugblik op mijn stage",
    date: "2026-05-21",
    excerpt:
      "Mijn laatste stageblog: een terugblik op het volledige traject, van eerste CPQ-trainingen tot een volwassen BTP proof of concept.",
    intro:
      "Na maanden bouwen, testen, bijsturen en bijleren is dit mijn afsluitende terugblik op een stage die technisch en persoonlijk veel groter werd dan ik in het begin had verwacht.",
    readingMinutes: 7,
    tags: ["reflectie", "lessons learned", "wins"],
    content: `Laatste stageblog: terugblik op mijn stage

Dit is mijn laatste stageblog. Niet gewoon nog een update over wat ik deze week heb gedaan, maar een moment om even terug te kijken op het volledige traject. Ondertussen zit mijn stage er bijna op en als ik alles naast elkaar leg, is er veel meer gebeurd dan ik in het begin had verwacht.

Wat startte met onboarding, CPQ-trainingen en veel nieuwe termen, groeide uiteindelijk uit tot een project waarin ik echt een volledige oplossing heb mogen uitwerken. Van scripting in SAP CPQ tot CAP-services, Fiori-schermen, HANA-replicatie, Job Scheduler en Alert Notification: stap voor stap kwam alles samen.

Van student naar projectverantwoordelijkheid

In het begin voelde alles nog groot en vrij technisch aan. CPQ, BTP, CAP, Fiori, Cloud Foundry, Destinations, XSUAA... het waren allemaal termen die ik wel kon opzoeken, maar nog niet echt in context kon plaatsen.

Doorheen de stage veranderde dat. Elke week werd het project concreter. Eerst begreep ik wat de indexatie-app moest doen, daarna hoe de architectuur in elkaar zat, en uiteindelijk hoe alle onderdelen technisch met elkaar moesten samenwerken.

Wat mij vooral is bijgebleven, is dat een project niet gewoon bestaat uit code schrijven. Je moet nadenken over de gebruiker, over foutafhandeling, over security, over performantie en over hoe iemand anders later jouw oplossing kan begrijpen.

Het project technisch zien groeien

De CPQ Indexation applicatie is tijdens mijn stage sterk gegroeid. In het begin was het doel vrij eenvoudig uit te leggen: een quote selecteren, een indexatiepercentage toepassen en een nieuwe revision laten aanmaken in CPQ.

Maar in de praktijk kwam daar veel meer bij kijken. Er kwamen previews bij, confirmflows, bulkindexatie, itemindexatie, replicatie naar HANA, scheduled indexations en notificaties. Soms werkte iets snel, soms zat ik lang vast op een fout die pas duidelijk werd na veel testen en debuggen.

Die momenten waren niet altijd de leukste, maar achteraf gezien wel de momenten waarop ik het meeste geleerd heb. Vooral de problemen rond preview-, confirm- en redirectflows hebben mij beter doen begrijpen hoe belangrijk het is dat frontend, backend, database en externe API's correct op elkaar afgestemd zijn.

Feedback en communicatie

Ook de feedbackmomenten met mijn mentoren waren belangrijk. Door demo's te geven en mijn aanpak uit te leggen, merkte ik waar mijn technische redenering nog niet duidelijk genoeg was. Soms werkte iets technisch wel, maar moest ik het beter kunnen uitleggen of beter documenteren.

Dat was ook een werkpunt dat tijdens mijn stage naar voren kwam: communicatie. Niet alleen zeggen wat je gebouwd hebt, maar ook waarom je bepaalde keuzes maakt, welke risico's er zijn en wat de volgende stap is.

Daar ben ik doorheen de stage bewuster mee bezig geworden. Zeker bij de technische eindblueprint merkte ik dat documenteren bijna even belangrijk is als bouwen. Een proof of concept is pas echt bruikbaar als iemand anders ook begrijpt hoe het in elkaar zit.

Rising Star Academy

Naast mijn project heb ik ook veel bijgeleerd tijdens de Rising Star Academy. De sessies rond CX, Fiori Elements, RAP, BTP, CAP, Integration en consultancy gaven mij een breder beeld van SAP en TheValueChain.

Vooral de combinatie van technische sessies en consultancygerichte onderwerpen vond ik waardevol. Ik begon beter te begrijpen dat een SAP-consultant niet alleen technologie moet kennen, maar ook bedrijfsprocessen, klantbehoeften en communicatie.

Daardoor kon ik mijn eigen stageproject beter plaatsen. Mijn applicatie was niet zomaar een technische uitbreiding op CPQ, maar een onderdeel van een groter verhaal rond verkoopprocessen, contracten, prijsaanpassingen en customer experience.

Wat ik meeneem

Als ik mijn stage in een woord zou moeten samenvatten, dan kies ik voor groei. Groei in technische kennis, maar ook in zelfstandigheid, communicatie en inzicht in hoe echte projecten verlopen.

Ik heb geleerd dat fouten en blokkades erbij horen. Niet alles werkt van de eerste keer, en dat hoeft ook niet. Belangrijker is dat je blijft analyseren, vragen stelt wanneer dat nodig is en stap voor stap naar een betere oplossing werkt.

Ik kijk met een positief gevoel terug op deze stage. Ik heb veel nieuwe technologieën leren kennen, aan een echte businesscase gewerkt en beter begrepen hoe SAP-projecten in de praktijk opgebouwd worden.

En daarmee sluit ik mijn stageblog af. Het was een intensief traject, met veel nieuwe technologie, technische uitdagingen, feedbackmomenten en kleine overwinningen onderweg. Vooral neem ik mee dat groei vaak niet in een keer gebeurt, maar stap voor stap, probleem per probleem en week per week.`
  },
  {
    slug: "week-15-bedrijfsbezoek-bij-pgb-en-verdere-technische-rsa-sessies",
    title: "Week 15: Bedrijfsbezoek bij PGB en verdere technische RSA-sessies",
    date: "2026-05-09",
    excerpt:
      "Week 15 stond vooral in het teken van de Rising Star Academy, met een bedrijfsbezoek bij PGB en sessies rond SAP Integration, Fiori Elements, RAP, BTP en CAP.",
    intro:
      "Deze week werkte ik minder aan nieuwe projectfunctionaliteiten en lag de focus vooral op bredere SAP-kennis, consultancycontext en technische verdieping.",
    readingMinutes: 9,
    tags: ["rsa", "lessons learned", "reflectie"],
    content: `Week 15 – Bedrijfsbezoek bij PGB en verdere technische RSA-sessies

Week 15 stond vooral in het teken van de Rising Star Academy. Deze week heb ik minder aan nieuwe functionaliteiten binnen mijn stageproject gewerkt, maar vooral veel bijgeleerd via technische sessies, oefeningen en een bedrijfsbezoek. De focus lag op het breder begrijpen van SAP-processen, technische ontwikkelmodellen en hoe consultancyprojecten in de praktijk worden aangepakt.

Bedrijfsbezoek bij PGB

Een belangrijk onderdeel van deze week was het bedrijfsbezoek bij PGB, gegeven door Bruno Naessens. Dit bezoek gaf mij de kans om SAP niet alleen vanuit de technische kant te bekijken, maar ook vanuit een echte bedrijfscontext.

Tijdens zo'n bedrijfsbezoek wordt duidelijker waarom SAP-systemen zo belangrijk zijn binnen bedrijven. Processen zoals aankoop, productie, magazijnbeheer, integratie en rapportering zijn geen losse onderdelen, maar hangen sterk samen.

Voor mij was dit interessant omdat ik tijdens mijn stage vooral technisch bezig ben met SAP CPQ, CAP en BTP, terwijl dit bezoek liet zien hoe SAP-oplossingen uiteindelijk gebruikt worden binnen echte bedrijfsprocessen.

Het hielp mij ook om beter te begrijpen wat de rol van een consultant is: niet alleen software bouwen, maar ook begrijpen hoe een bedrijf werkt en hoe technologie een concreet probleem kan oplossen.

SAP Integration

Deze week volgde ik ook een sessie rond SAP Integration, gegeven door Dimitri Sannen. Deze sessie was nuttig omdat integratie een belangrijk onderdeel is van bijna elk SAP-project.

Ik leerde dat SAP-systemen zelden volledig op zichzelf staan. Vaak moeten ze communiceren met andere SAP-systemen, externe applicaties, cloudservices of legacy-systemen. Dat sluit ook aan bij mijn stageproject, waar mijn CAP-backend communiceert met SAP CPQ via REST APIs en BTP Destinations.

De sessie gaf mij meer inzicht in waarom integraties betrouwbaar, veilig en onderhoudbaar moeten zijn. Vooral foutafhandeling, monitoring, authenticatie en duidelijke interfaces zijn belangrijk. Dat zijn ook principes die terugkomen in mijn eigen project, bijvoorbeeld bij de CPQ custom API call en de notificatieflow via SAP Alert Notification.

Fiori Elements

Daarnaast heb ik opnieuw een technische sessie rond Fiori Elements gevolgd, gegeven door Jeroen Roels. Dit sloot goed aan bij mijn eigen stageproject, omdat mijn CPQ Indexation applicatie ook gebouwd is met een Fiori-interface.

Tijdens deze sessie werd verder duidelijk hoe Fiori Elements werkt op basis van OData-services, annotations en metadata. In plaats van elk scherm volledig manueel te bouwen, kan je met Fiori Elements sneller standaard SAP-schermen maken zoals een List Report en Object Page.

Voor mijn eigen project was dit herkenbaar, omdat ik zelf ook werk met een quote list, een detailpagina, acties en previewdialogen. De sessie hielp mij om beter te begrijpen waarom Fiori Elements in SAP-projecten vaak gebruikt wordt: het versnelt ontwikkeling, zorgt voor consistente schermen en past goed binnen de SAP UX-richtlijnen.

RAP en RAP-oefeningen

Een groot deel van deze week ging ook naar RAP, gegeven door Steven De Baerdemaeker. RAP staat voor ABAP RESTful Application Programming Model en wordt gebruikt om moderne SAP-applicaties te bouwen binnen de ABAP-stack.

Tijdens de sessies werd gewerkt rond concepten zoals CDS views, behavior definitions, service definitions en Fiori Elements. Dit was interessant omdat ik hierdoor beter het verschil begon te begrijpen tussen CAP en RAP. CAP gebruik ik in mijn stageproject op SAP BTP met Node.js, terwijl RAP meer gericht is op ABAP-ontwikkeling binnen S/4HANA.

De self-paced RAP-oefeningen waren nuttig omdat ik de theorie ook praktisch kon toepassen. Door zelf te oefenen werd duidelijker hoe een RAP-applicatie stap voor stap wordt opgebouwd: eerst het datamodel, daarna de behavior, vervolgens de service en uiteindelijk de Fiori-preview.

BTP

Ik volgde ook een technische sessie rond SAP BTP, gegeven door Issa Floré. Deze sessie was direct relevant voor mijn stageproject, omdat mijn CPQ Indexation applicatie volledig op SAP BTP draait.

Tijdens deze sessie werd duidelijker welke rol BTP speelt als extensieplatform. BTP wordt gebruikt om applicaties naast bestaande SAP-systemen te bouwen zonder de kernsystemen rechtstreeks aan te passen. Dat is exact het principe van mijn project: de indexatie-applicatie is een side-by-side extensie die SAP CPQ uitbreidt zonder CPQ zelf volledig te veranderen.

De sessie hielp mij om de verschillende BTP-services beter te plaatsen, zoals Cloud Foundry, Destinations, XSUAA, HANA Cloud, HTML5 Application Repository en Job Scheduler. Veel van die services gebruik ik ook effectief in mijn project, waardoor de theorie goed aansloot bij mijn praktijkervaring.

CAP

Tot slot volgde ik ook technische sessies rond CAP, eveneens gegeven door Issa Floré. Dit was waarschijnlijk een van de meest relevante onderdelen van de week voor mijn stage.

CAP, of Cloud Application Programming Model, vormt de backendbasis van mijn CPQ Indexation applicatie. Tijdens de sessies werd opnieuw duidelijk hoe CAP gebruikt wordt om services, datamodellen en businesslogica op een gestructureerde manier op te bouwen.

Voor mijn eigen project gebruik ik CAP voor OData-services, previewberekeningen, confirm-acties, CPQ-integratie, scheduled indexations en notificaties. De CAP-sessies hielpen mij om mijn eigen architectuur beter te begrijpen en ook beter te kunnen uitleggen waarom CAP geschikt is voor dit soort side-by-side extensies.

Reflectie

Week 15 was een leergerichte week waarin ik mijn SAP-kennis verder heb verbreed. Het bedrijfsbezoek bij PGB gaf mij meer inzicht in de bedrijfscontext achter SAP-projecten, terwijl de technische RSA-sessies mij hielpen om mijn kennis rond Fiori Elements, RAP, BTP, CAP en integratie verder te verdiepen.

Vooral de sessies rond BTP en CAP sloten sterk aan bij mijn stageproject. Hierdoor kon ik mijn eigen oplossing beter plaatsen binnen het grotere SAP-landschap. Ook de RAP-sessies waren waardevol, omdat ik daardoor beter begrijp hoe moderne SAP-applicaties zowel in CAP als in ABAP RAP opgebouwd kunnen worden.

Deze week heeft mij vooral geholpen om niet alleen als developer naar mijn project te kijken, maar ook meer als toekomstige SAP-consultant. Ik kreeg een beter beeld van hoe technische keuzes, bedrijfsprocessen en klantbehoeften met elkaar verbonden zijn.`
  },
  {
    slug: "week-14-afronding-alert-notification-technische-einddocumentatie-en-rsa",
    title: "Week 14: Afronding Alert Notification, technische einddocumentatie en RSA",
    date: "2026-05-02",
    excerpt:
      "Week 14 draaide rond het afwerken van SAP Alert Notification, het uitschrijven van de technische eindblueprint en verdere RSA-sessies.",
    intro:
      "De focus verschoof van nieuwe features bouwen naar professioneel afronden, documenteren en de proof of concept technisch verdedigbaar maken.",
    readingMinutes: 10,
    tags: ["documentatie", "rsa", "wins"],
    content: `Week 14 – Afronding Alert Notification, technische einddocumentatie en RSA

Week 14 stond vooral in het teken van afronding en documentatie. Nadat ik in week 13 de basis had gelegd voor scheduled indexation en notificaties via SAP Alert Notification, heb ik deze week de Alert Notification flow verder afgewerkt en daarnaast gewerkt aan de technische eindblueprint van de CPQ Indexation applicatie.

De focus verschoof hierdoor van nieuwe functionaliteiten bouwen naar het professioneel afronden en uitleggen van de gerealiseerde proof of concept. Dat was belangrijk, omdat de applicatie ondertussen uit meerdere technische onderdelen bestond: een Fiori frontend, een CAP backend, HANA-replicatie, CPQ-integratie, Job Scheduler en Alert Notification.

Alert Notification afwerken

Een belangrijk onderdeel van deze week was het verder afwerken van SAP Alert Notification. In plaats van rechtstreeks e-mails te versturen via SMTP, gebruikt de applicatie nu SAP Alert Notification om events om te zetten naar e-mailmeldingen.

Wanneer een indexatie wordt uitgevoerd, publiceert de CAP backend een event zoals CPQ_INDEXATION_EXECUTED naar de Alert Notification service. In BTP wordt daarna via een condition gecontroleerd of het eventtype overeenkomt met de CPQ indexation events. Als dat zo is, wordt er automatisch een e-mailactie uitgevoerd naar de ingestelde mailbox.

Deze aanpak is veel beter geschikt voor de POC dan directe SMTP-verzending. Eerder had ik onderzocht dat Microsoft 365 SMTP extra IT-configuratie zou vereisen, zoals SMTP AUTH voor een service mailbox, een relay service of Microsoft Graph met OAuth. Voor deze proof of concept was SAP Alert Notification daarom een veiligere en meer SAP-native oplossing.

Ik heb ook rekening gehouden met het feit dat notificaties de hoofdflow niet mogen blokkeren. Als een e-mailmelding faalt, mag dat niet betekenen dat de CPQ revision zelf mislukt. De indexatie en revision creation blijven dus de belangrijkste actie; de notificatie is een extra opvolgingslaag.

Werken aan de technische eindblueprint

Naast de technische afwerking heb ik deze week vooral gewerkt aan de technische eindblueprint. Daarin heb ik de gerealiseerde oplossing beschreven als een side-by-side extensie op SAP BTP. Het doel was om duidelijk te maken hoe de applicatie technisch is opgebouwd en hoe de verschillende onderdelen samenwerken.

In de documentatie heb ik onder andere beschreven dat de read-kant van de applicatie via HANA verloopt, terwijl de write-kant gecontroleerd in CPQ blijft. Dat betekent dat quotes, items en partners gerepliceerd worden naar HANA voor performante weergave en filtering, maar dat de echte prijsaanpassing nog altijd via het CPQ custom API script gebeurt.

Op die manier blijft CPQ de bron voor de effectieve quoteaanpassing en revision creation.

Architectuur verduidelijken

Ik heb ook de architectuur verder uitgewerkt. De frontend bestaat uit een SAP Fiori applicatie die gehost wordt via de HTML5 App Repository. De routing en authenticatie lopen via de approuter en XSUAA.

De CAP Node.js backend bevat de businesslogica en communiceert met CPQ via Destinations en de CPQ REST API. Voor persistence wordt HANA Cloud gebruikt, onder andere voor gerepliceerde quotes, previewdata, bulkdata en scheduled indexations.

CAP backend en datamodel verduidelijken

Een groot deel van de technische documentatie ging over de CAP backend. Omdat de applicatie intussen veel verantwoordelijkheden heeft, was het belangrijk om uit te leggen hoe de code logisch is opgesplitst.

Ik heb beschreven welke handlers verantwoordelijk zijn voor welke onderdelen. De read handler leest gerepliceerde data met filtering, paging, sorting en search. De preview handler berekent simulaties zonder CPQ te wijzigen. De confirm handler voert het CPQ script uit, bewaart de status, refresht de nieuwe quote en publiceert een notificatie-event. De schedule handler zorgt ervoor dat geplande indexaties kunnen worden uitgevoerd via RunDueScheduledIndexations.

Ook het datamodel heb ik verduidelijkt. De applicatie bevat entiteiten voor quotes, quote items en partners, maar ook voor previews, preview items, bulk previews, scheduled indexations en replication state. Door dat goed te documenteren wordt duidelijker waarom de applicatie niet alleen een eenvoudige UI bovenop CPQ is, maar een volwaardige BTP-extensie met eigen persistente logica.

CPQ-integratie documenteren

In de eindblueprint heb ik ook de CPQ-integratie duidelijker beschreven. CAP gebruikt de CPQ_DEST destination om CPQ REST APIs aan te roepen. Voor het lezen van gegevens worden standaard endpoints gebruikt, zoals quote list, quote detail, items en involved parties.

Voor de echte indexatie wordt één gecontroleerd custom API script gebruikt: LPST_Apply_Indexation_API. Dat script valideert de input, maakt een nieuwe revision aan, past de prijzen aan, bewaart het indexatiepercentage en schrijft een auditregel weg in de quote table LPST_Indexation_History.

Deze documentatie was belangrijk omdat dit de kern van de oplossing uitlegt: de applicatie wijzigt CPQ niet rechtstreeks vanuit de frontend, maar laat CPQ zelf de revision en prijsaanpassing uitvoeren via een gecontroleerd script. CAP bewaart daarna de status, refresht de nieuwe quote en publiceert eventueel een notificatie.

Rising Star Academy

Naast mijn werk aan Alert Notification en de technische eindblueprint heb ik in week 14 ook deelgenomen aan enkele sessies van de Rising Star Academy. Deze sessies waren interessant omdat ze mij hielpen om mijn technische stageproject beter te plaatsen binnen bredere SAP- en consultancycontext.

Een van de sessies die ik volgde ging over Fiori Elements, gegeven door Jeroen Roels. Dit sloot goed aan bij mijn eigen project, omdat mijn CPQ Indexation applicatie ook gebruikmaakt van een Fiori-app met list report, object page en acties.

Daarnaast heb ik lessen gevolgd van Rowan rond wat er verwacht wordt van een consultant en rond project management. Deze sessies waren minder technisch, maar wel belangrijk voor mijn persoonlijke ontwikkeling. Ze gaven mij meer inzicht in hoe je als consultant communiceert met klanten, hoe je verwachtingen beheert en hoe je structuur brengt in een project.

Op dinsdag en woensdag heb ik ook meegedaan met de RAP-sessies van Steven De Baerdemaeker. RAP staat voor ABAP RESTful Application Programming Model en wordt gebruikt om moderne SAP-applicaties en services te bouwen binnen de ABAP-stack.

Tijdens deze lessen kreeg ik meer inzicht in hoe SAP-applicaties worden opgebouwd met CDS views, behavior definitions, service definitions en Fiori Elements. Dit was nuttig omdat ik hierdoor beter het verschil en de gelijkenissen begon te begrijpen tussen mijn CAP-project op BTP en een RAP-applicatie in ABAP.

Reflectie

Week 14 was minder gericht op nieuwe features en meer op het afwerken, structureren en professioneel uitleggen van het project. Dat was een belangrijke stap, omdat een proof of concept niet alleen moet werken, maar ook begrijpbaar en overdraagbaar moet zijn.

Door Alert Notification af te werken, werd de applicatie sterker op vlak van opvolging en monitoring. Door de technische eindblueprint uit te schrijven, kreeg ik zelf ook een beter totaalbeeld van mijn oplossing. Ik moest duidelijk nadenken over waarom bepaalde keuzes gemaakt zijn, zoals HANA-replicatie voor performante reads, CPQ als write-kant voor revision creation, en SAP Alert Notification in plaats van directe SMTP.

Deze week heeft het project meer maturiteit gekregen. De applicatie is niet langer enkel een technische demo waarin een indexatie kan worden uitgevoerd, maar een beter gedocumenteerde BTP-oplossing met aandacht voor architectuur, security, deployment, scheduling, notificaties en demo-aandachtspunten.`
  },
  {
    slug: "week-13-automatisatie-notificaties-en-eerste-rsa-lessen",
    title: "Week 13: Automatisatie, notificaties en eerste RSA-lessen",
    date: "2026-04-25",
    excerpt:
      "Week 13 draaide rond scheduled indexation met Job Scheduler, notificaties via SAP Alert Notification en de eerste RSA-les rond Customer Experience.",
    intro:
      "Naast de manuele indexatieflow onderzocht ik hoe dezelfde logica automatisch of periodiek kan worden uitgevoerd en hoe gebruikers daarna duidelijke meldingen kunnen krijgen.",
    readingMinutes: 9,
    tags: ["code", "lessons learned", "wins"],
    content: `Week 13 – Automatisatie, notificaties en eerste RSA-lessen

Week 13 stond vooral in het teken van automatisatie en operationele afwerking. In de vorige weken lag de focus vooral op het manueel uitvoeren van de indexatieflow via de applicatie: een quote selecteren, een preview bekijken en daarna bevestigen zodat CPQ een nieuwe revision aanmaakt.

Deze week heb ik onderzocht hoe dezelfde logica ook automatisch of periodiek kan worden uitgevoerd, en hoe gebruikers of beheerders daarna een duidelijke melding kunnen krijgen.

Scheduled indexation met Job Scheduler

Een eerste grote uitbreiding deze week was het toevoegen van scheduled indexation via SAP Job Scheduler. Tot nu toe werd de indexatie vooral gestart door een gebruiker in de Fiori-app. Met deze uitbreiding kan de indexatieflow ook via een geplande job worden uitgevoerd.

Hiervoor heb ik een aparte execution flow voorzien in de CAP-service. Die flow kan door de Job Scheduler worden aangeroepen, zodat de applicatie niet alleen interactief werkt, maar ook voorbereid is op automatische verwerking.

Dit is belangrijk voor een realistische businesscase, omdat prijsindexatie vaak niet quote per quote manueel wordt uitgevoerd, maar op vaste momenten of in grotere batches.

Deze uitbreiding sluit ook aan bij het idee dat we eerder besproken hadden rond datareplicatie en performantie. Wanneer quotes en relevante data op termijn in een database zoals HANA Cloud worden gerepliceerd, kan een scheduled job gebruikt worden om data periodiek op te halen, te verwerken of klaar te zetten voor snellere filters en rapportering.

Notificaties na indexatie

Een tweede belangrijke feature was het toevoegen van notificaties via SAP Alert Notification. Het doel hiervan was om na een indexatie automatisch een melding te kunnen versturen, bijvoorbeeld wanneer een indexatie succesvol werd uitgevoerd of wanneer er een probleem optreedt.

Eerst had ik gekeken naar directe e-mails via SMTP, maar daar kwamen praktische en security-gerelateerde aandachtspunten bij kijken. Voor een productieklare oplossing met Microsoft 365 zou er IT-betrokkenheid nodig zijn, bijvoorbeeld voor een service mailbox, SMTP AUTH, een mail relay of Microsoft Graph met OAuth.

Omdat dit voor de proof of concept te zwaar en minder veilig was, heb ik gekozen voor SAP Alert Notification als pragmatische oplossing.

Met SAP Alert Notification kan de CAP-applicatie een event uitsturen wanneer de indexatie is uitgevoerd. Daarna kan Alert Notification op basis van regels bepalen welke actie moet gebeuren, zoals het versturen van een e-mail. Hierdoor blijft de applicatie zelf eenvoudiger en moet ze geen Microsoft 365-wachtwoorden of SMTP-gegevens beheren.

Eerste RSA-les rond CX

Naast mijn werk aan Job Scheduler en SAP Alert Notification heb ik deze week ook mijn eerste RSA-les gevolgd rond CX, gegeven door Jo Reypens, Jan Clemens en Felix Van Cappellen.

Tijdens deze les kreeg ik een eerste overzicht van wat de Customer Experience unit binnen TheValueChain doet. CX draait rond oplossingen die bedrijven helpen om hun klanten beter te begrijpen, commerciële processen te stroomlijnen en verkoop, service en marketing beter met elkaar te verbinden.

In de les kwamen verschillende onderdelen binnen SAP CX aan bod. SAP Sales Cloud ondersteunt verkoopteams bij het beheren van klanten, contacten, activiteiten en opportuniteiten. SAP Service Cloud focust op klantenservice en helpt bedrijven om klantenvragen, tickets en serviceprocessen beter op te volgen.

SAP Commerce Cloud wordt gebruikt voor digitale verkoop en e-commerce, zodat bedrijven online verkoopkanalen kunnen bouwen en beheren. Daarnaast kwam ook SAP CPQ aan bod. CPQ staat voor Configure, Price, Quote en helpt bedrijven om producten te configureren, prijzen correct te berekenen en offertes sneller en consistenter op te maken.

Dit sloot rechtstreeks aan bij mijn stageproject, omdat mijn indexatie-applicatie bovenop SAP CPQ werkt. Tot slot werd ook SAP Customer Data Cloud besproken, dat draait rond het veilig beheren van klantgegevens, identiteit en voorkeuren.

Mijn project binnen het bredere CX-landschap

Deze les hielp mij om mijn eigen stageproject beter te plaatsen binnen het bredere CX-landschap. Ik werkte al technisch met SAP CPQ, maar door deze sessie werd duidelijker hoe CPQ past binnen een groter geheel van sales, service, commerce en klantdata.

Daardoor kreeg ik meer inzicht in waarom mijn applicatie niet zomaar een technische uitbreiding is, maar deel uitmaakt van een bredere customer experience-flow.

Reflectie

Week 13 was voor mij een belangrijke week omdat ik meer heb gewerkt aan de operationele kant van het project. Ik merkte dat een technische proof of concept pas echt overtuigend wordt wanneer je ook nadenkt over automatisatie, logging, notificaties en security.

De keuze om SAP Alert Notification te gebruiken in plaats van directe SMTP-mails was daarbij een goede les. Technisch iets werkend krijgen is niet altijd hetzelfde als een veilige of onderhoudbare oplossing bouwen. Door te kiezen voor een SAP BTP-service bleef de oplossing beter binnen het SAP-landschap en werd ze ook beter verdedigbaar tegenover mijn mentoren.

De combinatie van Job Scheduler en Alert Notification maakt de applicatie professioneler. De indexatieflow is daardoor niet meer enkel een manuele demo, maar begint meer te lijken op een proces dat later echt ingepland en opgevolgd zou kunnen worden binnen een bedrijfsomgeving.`
  },
  {
    slug: "week-12-stabiliseren-van-preview-confirm-en-indexatieflows",
    title: "Week 12: Stabiliseren van preview-, confirm- en indexatieflows",
    date: "2026-04-18",
    excerpt:
      "Week 12 draaide rond debugging en stabilisatie van de belangrijkste end-to-end flows: preview, confirm, selected items, bulkacties en redirects.",
    intro:
      "De basisfunctionaliteit was aanwezig, maar deze week lag de nadruk op betrouwbaarheid: frontend, backend, replicatie en CPQ moesten correct op elkaar aansluiten.",
    readingMinutes: 9,
    tags: ["code", "fails", "lessons learned"],
    content: `Week 12 – Stabiliseren van preview-, confirm- en indexatieflows

In week 12 lag de nadruk vooral op het volledig stabiel maken van de belangrijkste gebruikersflows in de applicatie. Hoewel de basisfunctionaliteit al aanwezig was, kwamen er tijdens het testen nog verschillende problemen naar boven in de preview-, confirm- en redirectlogica.

Deze week stond daarom volledig in het teken van het oplossen van die integratieproblemen, zodat de applicatie ook end-to-end betrouwbaar werkt.

Preview- en confirmflows opnieuw op elkaar afstemmen

Een van de grootste uitdagingen deze week was dat de verschillende indexatie-acties technisch niet altijd correct op dezelfde manier waren aangesloten. Daardoor traden fouten op bij het previewen of bevestigen van indexaties, zeker bij geselecteerde items en bulkacties.

Ik heb deze flows daarom opnieuw uitgewerkt zodat de bound actions en service-acties correct werden aangesproken vanuit de UI. Daardoor werden previews opnieuw betrouwbaar aangemaakt en konden confirm-acties correct verdergaan naar de CPQ-scriptuitvoering.

Bulk preview correct exposen in de service

Ook de bulkflow gaf nog problemen, omdat de actie niet volledig correct in de CDS-service was blootgesteld. Daardoor ontstonden fouten waarbij de bulkpreview niet als geldige operatie werd herkend.

Door deze actie correct te definiëren in de service en ze opnieuw te koppelen aan de frontend, werkt de bulkindexatie nu opnieuw zoals bedoeld. De gebruiker kan meerdere quotes selecteren, een preview opvragen en de indexatie bevestigen zonder dat de flow vastloopt.

Selected items indexation stabiliseren

Ook de selected-items-flow vergde deze week extra aandacht. Daar zaten problemen in zowel de frontend als de backend: de verkeerde context werd soms gebruikt, previews werden niet altijd correct geladen en de flow gebruikte niet altijd de juiste CPQ-scriptlogica.

Ik heb deze flow daarom opgesplitst en gestabiliseerd, zodat geselecteerde items nu via de juiste context, de juiste preview en de juiste confirmlogica verwerkt worden. Daarnaast werd de Fiori-handlerlogica opgeschoond zodat er nog maar een duidelijke action flow overbleef voor deze functionaliteit.

CPQ-resultaten compacter opslaan

Tijdens het bevestigen van previews bleek ook dat de response die uit CPQ terugkwam soms te groot was om rechtstreeks in de databank op te slaan. Dat veroorzaakte fouten bij het wegschrijven van het confirmresultaat.

Om dat op te lossen heb ik de opgeslagen CPQ-resultaten compacter gemaakt. In plaats van de volledige response ongewijzigd te bewaren, worden nu enkel de relevante velden bewaard. Daardoor blijft de logging nuttig, maar veroorzaakt ze geen databaseproblemen meer.

Nieuwe quotes onmiddellijk zichtbaar maken in de app

Een ander belangrijk probleem was dat nieuw aangemaakte revisions in CPQ niet meteen zichtbaar waren in de applicatie. De indexatie zelf werkte dan wel, maar na bevestiging kon de redirect falen omdat de nieuwe quote nog niet in de replicatielaag aanwezig was.

Om dat op te lossen heb ik de flow aangepast zodat nieuw aangemaakte quotes onmiddellijk na een succesvolle confirm opnieuw worden opgehaald en ververst in de replicatie. Daardoor kan de applicatie meteen doorsturen naar de nieuwe revision en voelt de volledige flow veel consistenter aan voor de gebruiker.

Replicatielogica en actieve revisions verfijnen

Daarnaast heb ik deze week ook verder gewerkt aan de logica rond actieve revisions. Bij het repliceren van quotes was het belangrijk om niet zomaar alle revisies als gelijkwaardig te behandelen, maar expliciet te bepalen welke revision de laatste actieve versie is.

Door die logica te verfijnen worden nieuwe revisions nu beter als actieve quote aangeduid, terwijl oudere revisies correct op inactief gezet worden. Dat zorgt ervoor dat de lijst in de applicatie beter overeenkomt met wat effectief de meest recente toestand is in CPQ.

Redirect- en navigatieflow verbeteren

Ten slotte heb ik ook de navigatie na confirm aangepast. Wanneer een nieuwe revision correct is aangemaakt en gerepliceerd, moet de gebruiker daar ook zonder fouten naartoe geleid worden. Die redirectflow werkte aanvankelijk niet altijd goed doordat de data nog niet onmiddellijk beschikbaar was of doordat de verkeerde context werd gebruikt.

Door de combinatie van directe refreshlogica en opgeschoonde frontend-handlers werkt deze navigatie nu veel stabieler. Dat maakte een groot verschil in hoe afgewerkt de applicatie uiteindelijk aanvoelt.

Extra herstel van CPQ history logging

Naast de preview- en confirmflows heb ik deze week ook opnieuw gezorgd dat de indexatiehistoriek in CPQ correct wordt bijgehouden. Na verschillende technische aanpassingen werkte die logging tijdelijk niet meer zoals voordien.

Door de CPQ-scriptlogica opnieuw te corrigeren, worden indexaties nu opnieuw correct gelogd in de quote table QT_INDEXATION_HISTORY. Daardoor blijft ook de historiek van uitgevoerde indexaties zichtbaar, wat belangrijk is voor opvolging en transparantie.

Reflectie

Week 12 was een week van veel debugging en verfijning, maar ook van grote vooruitgang. De meeste problemen zaten deze keer niet in een losse feature, maar in de samenhang tussen frontend, backend, replicatie en CPQ. Dat maakte het oplossen ervan complexer en tijdsintensiever.

Net daardoor was deze week ook erg leerrijk. Ik heb beter inzicht gekregen in hoe belangrijk het is dat acties, service-definities, database-opslag en externe scriptcalls volledig op elkaar afgestemd zijn.

Door deze problemen stap voor stap weg te werken, is de applicatie nu veel stabieler geworden en werkt de volledige end-to-end flow een stuk betrouwbaarder.`
  },
  {
    slug: "week-11-replicatie-hana-deployment-en-performantieverbeteringen",
    title: "Week 11: Replicatie, HANA-deployment en performantieverbeteringen",
    date: "2026-04-11",
    excerpt:
      "Week 11 verschoof de focus naar de achterkant van de applicatie, met replicatie naar HANA, Job Scheduler-integratie en performantieverbeteringen.",
    intro:
      "Na de UI-verfijning van week 10 lag de nadruk nu op schaalbaarheid, stabielere data-ophaling en een robuustere basis voor grotere hoeveelheden quotes.",
    readingMinutes: 8,
    tags: ["code", "wins", "lessons learned"],
    content: `Week 11 – Replicatie, HANA-deployment en performantieverbeteringen

Na de focus op UI-verfijning en code-opdeling in week 10, verschoof de aandacht in week 11 meer naar de achterkant van de applicatie. De belangrijkste doelstelling was deze week om de performantie en stabiliteit van de data-ophaling te verbeteren, zodat de applicatie ook met grotere hoeveelheden quotes bruikbaar bleef.

Van rechtstreekse CPQ-ophaling naar replicatie

Een belangrijk aandachtspunt in de applicatie was dat de lijst van quotes en bijhorende gegevens in veel gevallen nog rechtstreeks of te afhankelijk van CPQ werd opgebouwd. Dat werkte voor een beperkte dataset, maar werd minder efficiënt zodra er meer data beschikbaar kwam.

Daarom heb ik verder gewerkt aan een replicatie-aanpak waarbij quotegegevens eerst worden overgenomen en lokaal beschikbaar gemaakt in HANA. Op die manier hoeft de applicatie niet telkens alles rechtstreeks uit CPQ op te halen, wat vooral voordelen biedt voor filtering, sortering en algemene performantie.

Job Scheduler integreren voor automatische synchronisatie

Om die replicatie ook praktisch bruikbaar te maken, heb ik de schedulerlogica verder geïntegreerd aan de servicekant van de applicatie. De Job Scheduler werd gebruikt om replicatietaken automatisch uit te voeren, zodat de data in de applicatie periodiek ververst kan worden zonder manuele tussenkomst.

Daarbij werd er een onderscheid gemaakt tussen een full replication en een delta sync. Een full replication laadt een grotere dataset opnieuw in, terwijl de delta sync enkel recente wijzigingen probeert op te halen. Dat maakt de oplossing efficiënter en realistischer voor een latere productieomgeving.

Deployment naar HANA Cloud

Naast de scheduler heb ik deze week ook de toepassing verder richting HANA Cloud gebracht. Waar lokaal ontwikkelen vaak nog met SQLite of tijdelijke data gebeurde, was het belangrijk om de applicatie correct te deployen op de HANA-omgeving zodat de replicatietabellen en services ook in een meer realistische cloudcontext konden draaien.

Die stap was belangrijk omdat de werking van de applicatie sterk afhankelijk werd van persistente data. Door de CAP-app op HANA te deployen, kon ik de volledige flow beter testen zoals die uiteindelijk ook op SAP BTP gebruikt zou worden.

Sortering en filtering van actieve quotes verbeteren

Een andere verbetering deze week was het beter behandelen van actieve quotes in de lijst. Niet elke revision van een quote hoort zichtbaar te zijn voor de eindgebruiker. Daarom heb ik verder gewerkt aan logica om standaard enkel de relevante, actieve revisions te tonen en de sortering daarop af te stemmen.

Hierdoor werd de lijstweergave niet alleen overzichtelijker, maar ook functioneel correcter. De gebruiker ziet daardoor vooral de laatste bruikbare versie van een quote in plaats van een mix van oude en nieuwe revisies.

Delta sync verder optimaliseren

Naast de algemene replicatiestructuur heb ik ook gekeken naar hoe de delta sync efficiënter kon werken. Daarbij lag de focus op het beperken van onnodige verwerking en het slimmer omgaan met recente wijzigingen.

Dat was belangrijk omdat de applicatie anders te veel data opnieuw zou verwerken terwijl slechts een beperkt deel effectief gewijzigd was. Deze optimalisatie maakte de oplossing schaalbaarder en zorgde ervoor dat de synchronisatie sneller en doelgerichter kon verlopen.

Reflectie

Week 11 stond vooral in het teken van infrastructuur en performantie. Waar de vorige weken vooral draaiden rond functionaliteit en gebruikerservaring, ging het nu meer over hoe de applicatie technisch robuust kan blijven wanneer er meer data en meer complexiteit bijkomt.

Door de replicatie naar HANA, de integratie van de Job Scheduler en de verdere optimalisatie van de synchronisatie is de applicatie deze week een stuk volwassener geworden. Dat maakt ze niet alleen sneller en stabieler, maar ook beter voorbereid op verdere uitbreiding.`
  },
  {
    slug: "week-10-ui-verfijning-gebruiksvriendelijkheid-en-technische-opsplitsing",
    title: "Week 10: UI-verfijning, gebruiksvriendelijkheid en technische opsplitsing",
    date: "2026-04-09",
    excerpt:
      "Week 10 draaide rond verfijning: duidelijkere previews, nettere tabellen, beter leesbare code en een eerste denkoefening rond HANA Cloud.",
    intro:
      "Na de belangrijkste functionele uitbreidingen verschoof de focus naar kwaliteit: de applicatie moest niet alleen werken, maar ook duidelijker, gebruiksvriendelijker en onderhoudbaarder worden.",
    readingMinutes: 8,
    tags: ["code", "reflectie", "wins"],
    content: `Week 10 – UI-verfijning, gebruiksvriendelijkheid en technische opsplitsing

Week 10 stond vooral in het teken van verfijning. Nadat de belangrijkste flows technisch werkten, lag de focus nu op het verbeteren van de gebruikerservaring, het duidelijker presenteren van gegevens en het structureel opsplitsen van de code zodat de applicatie onderhoudbaarder wordt.

Preview en numerieke weergave verfijnen

Een van de belangrijkste aanpassingen deze week was het herwerken van de previewdialogen. Ik heb ervoor gezorgd dat numerieke waarden niet langer met te veel decimalen werden getoond, maar consequent op twee decimalen werden weergegeven. Daardoor oogde de preview veel netter en professioneler.

Daarnaast heb ik de opmaak van de preview ook visueel verbeterd door ze meer card-achtig op te bouwen, met links de basisinformatie en rechts de totalen. Ook de numerieke kolommen in de tabellen werden beter uitgelijnd, zodat bedragen en percentages sneller leesbaar zijn.

Duidelijkere informatie voor de gebruiker

Verder heb ik ook ingespeeld op feedback rond de duidelijkheid van de getoonde prijzen. Om verwarring tussen net price en extended price te vermijden, heb ik de net price uit de preview verwijderd en enkel nog de extended price behouden. Dat maakte het scherm consistenter en eenvoudiger voor de gebruiker.

Ook de owner ID werd vervangen door de echte owner name door een extra user API aan te roepen. Daardoor sluit de informatie in de applicatie beter aan op wat een eindgebruiker verwacht te zien.

Verbeteringen in de lijstweergave

Op vlak van de lijstweergave heb ik de tabel aangepast naar een GridTable. Daardoor blijven kolommen beter naast elkaar zichtbaar en verspringt de structuur minder snel. Dat is vooral belangrijk om bedragen zoals total amount ook op kleinere schermen bruikbaar en leesbaar te houden.

Samen met aangepaste kolombreedtes zorgde dat voor een veel nettere en stabielere weergave van de gegevens.

Technische opsplitsing van de code

Naast de UI-aanpassingen heb ik deze week ook gewerkt aan de technische structuur van de applicatie. De grote indexation-service.js werd opgesplitst in meerdere kleinere bestanden, telkens met een duidelijke verantwoordelijkheid.

Daardoor werd de code veel leesbaarder en onderhoudsvriendelijker. Dit was een belangrijke stap, omdat de applicatie intussen groot genoeg was geworden om niet alles langer in een enkel bestand te houden.

Vooruitkijken naar performantie

Tot slot heb ik ook al vooruitgekeken naar performantie en schaalbaarheid. Daarbij heb ik onderzocht hoe data later eventueel gerepliceerd kan worden naar HANA Cloud via een job scheduler, zodat filters sneller kunnen werken en niet telkens rechtstreeks alles uit CPQ moet worden opgehaald.

Dat was nog geen afgewerkte functionaliteit, maar wel een belangrijke denkoefening richting een volgende fase van het project.

Reflectie

Week 10 draaide dus minder om nieuwe kernfunctionaliteit en meer om kwaliteit. De applicatie werd duidelijker, mooier en technisch properder opgebouwd.

Dat maakte het project niet alleen beter voor de demo, maar ook sterker als basis om later verder op uit te bouwen.`
  },
  {
    slug: "week-9-ondersteuning-voor-meerdere-quotes-en-indexatie-op-itemniveau",
    title: "Week 9: Ondersteuning voor meerdere quotes en indexatie op itemniveau",
    date: "2026-04-04",
    excerpt:
      "Week 9 bracht de applicatie dichter bij echte businessnoden met ondersteuning voor meerdere quotes tegelijk en indexatie op individuele producten.",
    intro:
      "De flow evolueerde van een eenvoudige indexatie op quote-niveau naar een veel flexibelere oplossing met bulkacties en fijnmazigere controle.",
    readingMinutes: 8,
    tags: ["code", "fails", "wins"],
    content: `Week 9 – Ondersteuning voor meerdere quotes en indexatie op itemniveau

Week 9 draaide vooral rond het functioneel uitbreiden van de indexatieflow. Waar de applicatie eerst vooral gericht was op het indexeren van een volledige quote, heb ik deze week gewerkt aan scenario's die veel dichter aanleunen bij echte businessnoden: meerdere quotes tegelijk indexeren en indexatie op individuele producten ondersteunen.

Ondersteuning voor meerdere quotes

Een eerste grote stap was het toevoegen van ondersteuning voor meerdere quotes. Daarmee werd de applicatie meteen veel sterker, omdat de gebruiker niet langer beperkt is tot een document per keer.

Dit sloot ook goed aan bij de feedback van mijn mentoren, die hadden aangegeven dat bulkacties een belangrijke meerwaarde zouden zijn binnen deze use case. De applicatie begon hierdoor meer op een echte werktool te lijken in plaats van enkel een technische demo.

Indexatie op individuele producten

Daarnaast heb ik ook gewerkt aan indexatie op individuele producten. Dat was technisch een stuk complexer, omdat de logica nu niet alleen op quote-niveau correct moest werken, maar ook rekening moest houden met specifieke geselecteerde items.

Tijdens dit deel van de ontwikkeling ben ik op verschillende fouten gebotst in de CPQ custom API flow, zoals problemen met geselecteerde items en foutieve requests. Door die stap voor stap te analyseren en aan te passen, heb ik de flow uiteindelijk werkend gekregen.

Dat was een belangrijk moment, omdat hiermee een veel fijnmazigere vorm van indexatie mogelijk werd.

Meer aandacht voor duidelijkheid in de preview

In dezelfde periode kreeg ik opnieuw feedback over hoe de applicatie verder verbeterd kon worden. Niet alleen de functionaliteit, maar ook de duidelijkheid voor de gebruiker werd belangrijker.

Er moest beter nagedacht worden over wat de gebruiker precies ziet tijdens de preview en welke cijfers relevant zijn. Dat zorgde ervoor dat ik niet enkel bezig was met de vraag of iets technisch werkt, maar ook met de vraag of het duidelijk en bruikbaar is in de praktijk.

Reflectie

Deze week was voor mij technisch een van de belangrijkere weken van het project. De complexiteit nam duidelijk toe, omdat ik niet langer alleen een eenvoudige flow ondersteunde, maar ook meerdere varianten van indexatie.

Tegelijk gaf dat ook meer vertrouwen, omdat de applicatie nu echt begon te tonen dat ze flexibel genoeg is om verder uit te bouwen.

De volgende stap was om die uitgebreidere functionaliteiten visueel en structureel verder af te werken, zodat de applicatie niet alleen meer kon, maar ook duidelijker en professioneler aanvoelde voor de eindgebruiker.`
  },
  {
    slug: "week-8-verdere-uitbouw-van-de-services-en-verfijning-van-de-applicatie",
    title: "Week 8: Verdere uitbouw van de services en verfijning van de applicatie",
    date: "2026-03-28",
    excerpt:
      "Week 8 draaide rond het uitbreiden van backendservices, het verfijnen van het CDS-model en het functioneel sterker maken van de read flow.",
    intro:
      "De basisflow werkte al, maar deze week verschoof de focus naar rijkere data, betere filters en een applicatie die inhoudelijk beter aansluit bij de eindgebruiker.",
    readingMinutes: 7,
    tags: ["code", "lessons learned", "reflectie"],
    content: `Week 8 – Verdere uitbouw van de services en verfijning van de applicatie

Week 8 stond vooral in het teken van het verder uitbouwen van de backendservices en het verfijnen van de gegevens die in de applicatie getoond worden. Waar de vorige fase vooral draaide rond het werkend krijgen van de basisflow, lag de focus deze week op het sterker maken van de read flow en het uitbreiden van de functionele dekking van de applicatie.

Verder bouwen aan de services

Ik heb deze week verder gewerkt aan de quotes service en aanpassingen gedaan aan de indexation service en het CDS-model. Daarmee werd de applicatie beter afgestemd op de manier waarop de data uit CPQ opgehaald en verwerkt moet worden.

Tegelijk heb ik ook extra velden toegevoegd en ben ik begonnen met het verder aanpassen van de applicatie zodat die beter aansluit bij de feedback van mijn mentoren.

De quote list inhoudelijk sterker maken

Een belangrijk deel van deze week bestond uit het verwerken van de opmerkingen uit het overleg. De quote list moest functioneel rijker worden, zodat een gebruiker sneller de juiste quote kan terugvinden en beter begrijpt met welke gegevens hij werkt.

Daarom lag de nadruk op het uitbreiden van de lijst met extra informatie zoals:

Quote owner

Sold-to

Status

Revision number

Naam van de quote

Consistentie en gebruiksvriendelijkheid

Daarnaast moest de applicatie ook consistenter en professioneler worden, onder andere door alles in het Engels te zetten en de filters verder te verfijnen.

Ik heb ook nagedacht over hoe de retrievallogica beter kon aansluiten bij de businesscontext van de gebruiker. Daarbij kwamen extra velden zoals quote description, sold-to en sold-to description naar voren als belangrijke uitbreidingen.

Op die manier werd duidelijk dat de applicatie niet alleen technisch moest werken, maar ook functioneel bruikbaar moest zijn in een realistische werksituatie.

Reflectie

Deze week voelde als een overgang van een puur technische proof of concept naar een oplossing die ook inhoudelijk sterker begint te worden. Door de services en het datamodel verder uit te werken, werd de basis van de applicatie robuuster.

Tegelijk zorgde de feedback van mijn mentoren ervoor dat ik meer begon na te denken vanuit de eindgebruiker en niet alleen vanuit de technische implementatie.

De volgende stap was om die uitgebreidere basis verder om te zetten naar concrete functionaliteiten in de UI en om de indexatieflow verder uit te breiden richting meerdere quotes en meer gedetailleerde indexatie.`
  },
  {
    slug: "week-7-uitbreiding-feedback-en-deployment",
    title: "Week 7: Uitbreiding, Feedback en Deployment",
    date: "2026-03-21",
    excerpt:
      "Week 7 draaide rond extra services, de preview flow, deployment en een eerste tussentijdse evaluatie met concrete verbeterpunten.",
    intro:
      "Naast technische uitbreidingen aan de applicatie kreeg ik deze week gerichte feedback van mijn mentoren over de volgende stappen, zowel op technisch als communicatief vlak.",
    readingMinutes: 9,
    tags: ["feedback", "wins", "reflectie"],
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
    tags: ["code", "wins", "lessons learned"],
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
    tags: ["code", "fails", "reflectie"],
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
    tags: ["project", "reflectie", "lessons learned"],
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
    tags: ["project", "lessons learned", "reflectie"],
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
    tags: ["project", "teambuilding", "lessons learned"],
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
