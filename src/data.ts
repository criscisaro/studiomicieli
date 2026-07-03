// Tutti i contenuti del sito, estratti dai documenti dello Studio.

export interface Service {
  id: string;
  title: string;
  shortTitle?: string;
  short: string;
  alt?: string;
  detail: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  focus?: string; // object-position per inquadrare bene il volto
  short: string;
  bio: string;
  tags: string[];
}

export interface StudioEvent {
  id: string;
  date: string;
  dateShort: string;
  kind: string;
  title: string;
  blurb: string;
  location: string;
  program: string[];
}

export interface Faq {
  tag: string;
  q: string;
  a: string;
}

export const SERVICES: Service[] = [
  {
    id: 'tributario',
    title: 'Diritto Tributario',
    short: 'Consulenza giudiziale ed extragiudiziale in materia fiscale e tributaria',
    alt: 'Consulenza e assistenza contenziosa',
    detail: "Assistiamo imprese e privati nei rapporti con l'Amministrazione finanziaria, sia in fase preventiva che contenziosa. Offriamo difesa nel contenzioso tributario, assistenza in verifiche e accertamenti, nonché supporto nell'impugnazione di atti e nella pianificazione fiscale.",
  },
  {
    id: 'societario',
    title: 'Diritto Societario',
    short: "Strategie legali per la governance, lo sviluppo e la tutela dell'impresa. Dalla costituzione alle operazioni straordinarie.",
    alt: 'Consulenza societaria, architetture di governance e operazioni straordinarie.',
    detail: "Affianchiamo l'imprenditore e la compagine sociale in ogni fase del ciclo di vita dell'azienda: dalla costituzione e strutturazione della governance — attraverso la meticolosa redazione di statuti e patti parasociali — fino alle più complesse operazioni straordinarie come fusioni, acquisizioni e riorganizzazioni. Curiamo con il massimo rigore la contrattualistica d'impresa e supportiamo gli organi sociali nelle decisioni cruciali.",
  },
  {
    id: 'recupero',
    title: 'Recupero Crediti',
    short: 'Tutela del credito e procedure esecutive: valutazioni preventive e strategie tempestive per proteggere la liquidità.',
    alt: 'Azioni di recupero e tutela del patrimonio aziendale e privato.',
    detail: "Supportiamo imprese e privati nel recupero dei crediti, sia in via stragiudiziale che giudiziale. Interveniamo con azioni mirate per garantire tempi rapidi ed efficacia nelle procedure esecutive, con un'attenzione costante alla valutazione preventiva del rischio.",
  },
  {
    id: 'civile',
    title: 'Diritto Civile',
    short: 'Tutela della persona e del patrimonio, nei rapporti tra privati e in ambito familiare',
    alt: 'Contrattualistica, tutela della persona e del patrimonio',
    detail: "Lo Studio offre assistenza rigorosa e trasversale in tutti i rami del diritto civile, tutelando con dedizione gli interessi patrimoniali e personali di privati e imprese. Ci occupiamo quotidianamente di contrattualistica, responsabilità civile e risarcimento danni, diritti reali, successioni e diritto di famiglia.",
  },
  {
    id: 'compliance',
    title: 'Responsabilità degli Enti e Compliance 231',
    shortTitle: 'Compliance 231',
    short: 'Prevenzione dei rischi e modelli organizzativi per la responsabilità degli enti',
    alt: 'Compliance aziendale e MOG 231',
    detail: 'Assistiamo le imprese nella prevenzione dei rischi legali e nella gestione della responsabilità degli enti. Offriamo consulenza nella predisposizione dei modelli 231 e nei sistemi di compliance aziendale, con un approccio sartoriale che valorizza la specificità di ogni realtà.',
  },
  {
    id: 'penale',
    title: 'Diritto Penale',
    short: 'Difesa e tutela nel procedimento penale: massimo rigore e garanzia dei diritti.',
    alt: 'Assistenza a persone fisiche e giuridiche',
    detail: "Assistiamo persone fisiche e giuridiche in tutti gli ambiti del diritto penale, dalla fase delle indagini preliminari fino al giudizio. Lo Studio fornisce supporto nella gestione dei procedimenti penali, garantendo un'assistenza completa e continuativa, sia nella fase difensiva che nelle attività di consulenza connesse.",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Avv. Giusy Micieli',
    role: 'Titolare',
    photo: '/team/giusy-micieli.png',
    focus: '50% 0%',
    short: 'Patrocinante in Cassazione · Presidente Camera Tributaria di Ragusa',
    bio: "Titolare dello Studio Legale Micieli. Laurea magistrale in Giurisprudenza presso l'Università di Catania nel 1985, Master in Direzione Aziendale e Master in Diritto Tributario. Iscritta all'albo degli Avvocati di Ragusa, patrocinante in Cassazione e Presidente della Camera Tributaria di Ragusa dal 2010.",
    tags: ['Tributario', 'Societario'],
  },
  {
    name: 'Avv. Angelo Firritto',
    role: 'Avvocato',
    photo: '/team/angelo-firritto.png',
    focus: '50% 0%',
    short: 'Bocconi 2020 · Master D.lgs. 231/2001 — Milano',
    bio: "Laurea magistrale in Giurisprudenza presso l'Università Commerciale Luigi Bocconi nel 2020, con Master \"Il D.lgs. n. 231/2001: responsabilità da reato degli enti e compliance aziendale\" presso l'Università degli Studi di Milano. Iscritto all'albo degli Avvocati di Ragusa dal 2022, in Studio dal 2020 con esperienza in diritto tributario, societario, civile e penale dell'economia.",
    tags: ['Compliance 231', 'Societario', 'Penale'],
  },
  {
    name: 'Avv. Giovanni Sarrì',
    role: 'Avvocato · Revisore Legale',
    photo: '/team/giovanni-sarri.png',
    focus: '50% 0%',
    short: 'Master in Diritto ed Economia · Revisore della Sostenibilità',
    bio: "Laurea magistrale in Giurisprudenza presso l'Università degli Studi di Catania nel 2014 e Master in Diritto ed Economia per la nuova impresa nel 2018 presso Unitelma Sapienza. Iscritto all'albo degli Avvocati di Ragusa dal 2018, in Studio dal settembre 2014. Iscritto al Registro dei Revisori Legali dal 2024 e abilitato come Revisore della Sostenibilità.",
    tags: ['Tributario', 'Societario', 'Sostenibilità'],
  },
  {
    name: 'Avv. Francesca Maltese',
    role: 'Avvocato · Dottoranda di Ricerca',
    photo: '/team/francesca-maltese.png',
    focus: '50% 0%',
    short: '110 e lode · Dottoranda di Ricerca in Diritto Civile, Università di Catania',
    bio: "Laurea magistrale in Giurisprudenza presso l'Università degli Studi di Catania nel 2020 con votazione 110/110 cum laude. Dal dicembre 2024 Dottoranda di Ricerca in Diritto Civile presso il Dipartimento di Giurisprudenza dell'Università di Catania. Iscritta all'albo degli Avvocati di Ragusa dal 2024, fa parte dell'organico dello Studio con esperienza in diritto tributario, recupero crediti e Diritto Civile.",
    tags: ['Civile', 'Tributario', 'Recupero crediti'],
  },
  {
    name: 'Avv. Sofia Tagliarini',
    role: 'Avvocato',
    photo: '/team/sofia-tagliarini.png',
    focus: '50% 0%',
    short: 'Università di Tor Vergata · Master didattica giuridico-economica',
    bio: "Laurea magistrale in Giurisprudenza presso l'Università degli Studi di Tor Vergata nel 2018, Master per l'insegnamento delle materie giuridico-economiche negli istituti di secondo grado. Iscritta all'albo degli Avvocati di Ragusa dal 2022, in Studio dal 2021 con esperienza in diritto tributario, recupero crediti e diritto di famiglia.",
    tags: ['Tributario', 'Famiglia', 'Recupero crediti'],
  },
  {
    name: 'Avv. Paolo Frasca',
    role: 'Avvocato',
    photo: '/team/paolo-frasca.png',
    focus: '50% 0%',
    short: "Master in Diritto Penale dell'Impresa · Alma Mater Bologna",
    bio: "Laurea magistrale in Giurisprudenza presso l'Università degli Studi di Catania nel 2019, Master in diritto penale dell'impresa e dell'economia presso l'Alma Mater Studiorum — Università di Bologna. Iscritto all'albo degli Avvocati di Ragusa dal 2022, ha maturato esperienza in diritto penale e diritto penale dell'economia. In Studio dal 2025.",
    tags: ['Penale', "Penale d'impresa"],
  },
  {
    name: 'Dott. Ivan Giuliano',
    role: 'Praticante',
    photo: '/team/ivan-giuliano.png',
    focus: '50% 0%',
    short: 'Alma Mater Studiorum — Bologna, 2023',
    bio: "Laurea in giurisprudenza presso l'Alma Mater Studiorum — Università di Bologna nel 2023. Entra a far parte dell'organico dello Studio Legale Micieli nel 2025, maturando esperienza in diritto tributario, recupero crediti e diritto civile.",
    tags: ['Tributario', 'Civile', 'Recupero crediti'],
  },
  {
    name: 'Dott. Orazio Scarso',
    role: 'Praticante',
    photo: '/team/orazio-scarso.png',
    focus: '50% 0%',
    short: 'Università di Pisa, 2025',
    bio: "Laurea in giurisprudenza presso l'Università di Pisa nel 2025. Inizia la pratica forense entrando nell'organico dello Studio Legale Micieli nel mese di giugno dello stesso anno, maturando esperienza in diritto tributario, recupero crediti e diritto civile.",
    tags: ['Tributario', 'Civile', 'Recupero crediti'],
  },
  {
    name: 'Fabrizia Di Gregorio',
    role: 'Assistente Amministrativo Contabile',
    photo: '/team/fabrizia-di-gregorio.png',
    focus: '50% 0%',
    short: 'In Studio dal 2004',
    bio: "Entra a far parte dell'organico dello Studio Legale Micieli nel 2004, maturando esperienza in ambito informatico, amministrativo e contabile.",
    tags: ['Amministrazione', 'Contabilità'],
  },
  {
    name: 'Cristina Iacono',
    role: 'Assistente Amministrativo',
    photo: '/team/cristina-iacono.png',
    focus: '50% 0%',
    short: 'In Studio dal 2025',
    bio: "Entra a far parte dell'organico dello Studio Legale Micieli dal 2025, maturando esperienza in ambito amministrativo e informatico.",
    tags: ['Amministrazione'],
  },
];

export const EVENTS: StudioEvent[] = [
  {
    id: 'compliance-2025',
    date: '14 Novembre 2025',
    dateShort: '14 NOV 2025',
    kind: 'Evento Formativo',
    title: 'Compliance Aziendale: Modelli Organizzativi, Sicurezza e Sostenibilità',
    blurb: "Una giornata di formazione dedicata all'integrazione tra modelli organizzativi 231, sicurezza sul lavoro e nuovi obblighi di rendicontazione di sostenibilità.",
    location: 'Ragusa',
    program: [
      'Modelli Organizzativi 231 e responsabilità amministrativa degli enti',
      'Sicurezza sul lavoro: obblighi aggiornati e profili di responsabilità',
      'CSRD e nuovi obblighi di rendicontazione di sostenibilità',
      'Tavola rotonda e sessione Q&A con i relatori',
    ],
  },
  {
    id: 'inaugurazione-2025',
    date: '26 Settembre 2025',
    dateShort: '26 SET 2025',
    kind: 'Inaugurazione',
    title: 'Inaugurazione dello Studio Legale Micieli ed esposizione delle opere di Andrea Baruffi',
    blurb: "L'inaugurazione della nuova sede dello Studio in Piazza Libertà a Ragusa, accompagnata da un'esposizione delle opere dell'artista Andrea Baruffi.",
    location: 'Piazza Libertà 10, Ragusa',
    program: [
      'Cerimonia di inaugurazione della nuova sede dello Studio',
      "Esposizione delle opere pittoriche dell'artista Andrea Baruffi",
      'Interventi istituzionali e saluti',
      'Rinfresco e momento conviviale',
    ],
  },
];

export const STUDIO = {
  name: 'Studio Legale Micieli',
  city: 'Ragusa',
  address: 'Piazza Libertà 10, 97100 Ragusa',
  email: 'studio@studiolegalemicieli.it',
  phone: '0932 652308',
  phoneHref: '+390932652308',
  pIva: '01223810886',
  cert: 'Certificato ISO 9001:2015 dal 2019',
  privacyUrl: 'https://www.iubenda.com/privacy-policy/85149001',
  cookieUrl: 'https://www.iubenda.com/privacy-policy/85149001/cookie-policy',
  hours: 'Lun — Ven · 09.00 — 20.00',
  intro: "Con sede a Ragusa, lo Studio Legale Micieli rappresenta un partner di eccellenza per imprese, privati ed enti pubblici. Offriamo un'assistenza legale completa e trasversale, caratterizzata da un approccio profondamente integrato e multidisciplinare, per garantire una tutela su misura sia in ambito stragiudiziale che nel contenzioso.",
  values: "La ricerca della massima qualità è il principio che guida ogni nostra attività. Dal 2019 lo Studio detiene la certificazione ISO 9001:2015, un traguardo di eccellenza rigorosamente rinnovato e confermato ogni anno. Abbiamo strutturato un sistema di gestione delle pratiche meticoloso e all'avanguardia, in cui organizzazione, trasparenza e tempestività si fondono per garantire assistenza ai nostri clienti.",
};

export const FAQS: Faq[] = [
  {
    tag: 'Compliance 231',
    q: "Cos'è il MOG 231 e a quali enti si applica?",
    a: "Il Modello di Organizzazione, Gestione e Controllo (MOG 231), previsto dal D.Lgs. 231/2001, consente agli enti di escludere o limitare la propria responsabilità amministrativa da reato in caso di illeciti commessi da amministratori, dipendenti o collaboratori nell'interesse dell'impresa. Si applica a società di capitali, associazioni, fondazioni e enti privati in genere. La sua adozione, pur non obbligatoria per legge, rappresenta oggi uno standard indispensabile per la partecipazione ad appalti pubblici e per mantenere solidi rapporti con istituti bancari e assicurativi.",
  },
  {
    tag: 'Assistenza Tributaria',
    q: 'Come posso contestare un avviso di accertamento fiscale?',
    a: "L'avviso di accertamento è l'atto con cui l'Agenzia delle Entrate contesta un maggior imponibile o un'imposta non versata. Entro 60 giorni dalla notifica è possibile proporre ricorso alla Corte di Giustizia Tributaria di primo grado, oppure attivare strumenti deflattivi come l'istanza di accertamento con adesione o il reclamo-mediazione (per importi fino a 50.000 €). Lo Studio analizza l'atto, verifica eventuali vizi formali e sostanziali, e costruisce la strategia difensiva più efficace.",
  },
  {
    tag: 'Recupero Crediti',
    q: 'Qual è la differenza tra recupero stragiudiziale e giudiziale?',
    a: "Il recupero stragiudiziale è la via preferenziale: si procede con diffide formali e negoziazioni, evitando il ricorso al giudice e riducendo tempi e costi. Se il debitore non adempie, si passa al recupero giudiziale: decreto ingiuntivo — ottenibile in tempi rapidi per crediti documentati — seguito da procedure esecutive come il pignoramento di beni, conti correnti o stipendi. Lo Studio valuta preventivamente la solvibilità del debitore per scegliere la strategia più efficace.",
  },
  {
    tag: 'Compliance 231',
    q: 'Quando deve essere aggiornato il Modello Organizzativo 231?',
    a: "Il MOG 231 non è uno strumento statico: deve essere aggiornato in caso di variazioni rilevanti nell'assetto organizzativo o societario dell'ente, in seguito a modifiche normative che ampliano il catalogo dei reati presupposto, o quando l'Organismo di Vigilanza rileva criticità operative. Lo Studio affianca le imprese non solo nella redazione iniziale del Modello, ma anche nella sua revisione periodica, nell'aggiornamento del Codice Etico e nei rapporti continuativi con l'Organismo di Vigilanza.",
  },
  {
    tag: 'Assistenza Tributaria',
    q: "È possibile rateizzare un debito con l'Agenzia delle Entrate-Riscossione?",
    a: "Sì. Il contribuente in temporanea difficoltà economica può richiedere la dilazione dei debiti iscritti a ruolo fino a un massimo di 120 rate mensili, documentando la propria situazione finanziaria. È fondamentale attivarsi prima dell'avvio della fase esecutiva. Lo Studio assiste il cliente nella presentazione della domanda di rateizzazione, nella raccolta della documentazione richiesta e, ove necessario, nell'impugnazione di cartelle di pagamento irregolari o prescritte.",
  },
  {
    tag: 'Recupero Crediti',
    q: 'Cosa succede al mio credito se il debitore è in procedura concorsuale?',
    a: "Quando il debitore è soggetto a liquidazione giudiziale (ex fallimento), concordato preventivo o altra procedura concorsuale, il recupero segue regole specifiche: il creditore deve presentare domanda di insinuazione al passivo entro i termini fissati dal curatore, distinguendo tra crediti privilegiati (con prelazione sui beni) e crediti chirografari (soddisfatti in via residuale). Un'insinuazione tempestiva e correttamente documentata è determinante per massimizzare le possibilità di recupero. Lo Studio assiste i creditori in tutte le fasi della procedura.",
  },
];
