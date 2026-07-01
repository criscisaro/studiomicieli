// Contenuti Privacy e Cookie Policy — rese self-contained, in italiano.
import { STUDIO } from './data';

export interface PolicySection { id: string; title: string; body: string; }
export interface Policy { title: string; lede: string; updated: string; sections: PolicySection[]; }

const gold = 'style="color:var(--gold-500)"';

export const PRIVACY_POLICY: Policy = {
  title: 'Privacy Policy',
  lede: 'Informativa resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.lgs. 196/2003 come modificato dal D.lgs. 101/2018.',
  updated: '26.05.2026',
  sections: [
    {
      id: 'titolare',
      title: 'Titolare del trattamento',
      body: `<p>Titolare del trattamento dei dati personali è lo <strong>Studio Legale Micieli</strong>, con sede in ${STUDIO.address}. Per qualsiasi richiesta relativa al trattamento dei dati può scrivere a <a href="mailto:${STUDIO.email}" ${gold}>${STUDIO.email}</a>.</p>`,
    },
    {
      id: 'finalita',
      title: 'Finalità del trattamento',
      body: `<p>I dati personali raccolti tramite il sito o forniti spontaneamente dall'utente sono trattati per le seguenti finalità:</p>
      <ul style="padding-left:22px">
        <li>rispondere a richieste di informazioni inviate via email o tramite form di contatto;</li>
        <li>adempiere ad obblighi pre-contrattuali e contrattuali nel mandato professionale;</li>
        <li>ottemperare a obblighi di legge, regolamentari e di vigilanza professionale;</li>
        <li>gestire la corrispondenza ordinaria e le comunicazioni inerenti alla pratica;</li>
        <li>previo consenso, invio della newsletter relativa a eventi e pubblicazioni dello Studio.</li>
      </ul>`,
    },
    {
      id: 'base-giuridica',
      title: 'Base giuridica',
      body: `<p>Il trattamento si fonda, a seconda dei casi, sull'esecuzione di un contratto o di misure precontrattuali (art. 6.1.b GDPR), sull'adempimento di obblighi di legge (art. 6.1.c), sul legittimo interesse del Titolare (art. 6.1.f) e, per finalità di marketing, sul consenso liberamente prestato e revocabile (art. 6.1.a GDPR).</p>`,
    },
    {
      id: 'modalita',
      title: 'Modalità e conservazione',
      body: `<p>Il trattamento avviene con strumenti informatici e cartacei, nel rispetto delle misure di sicurezza adeguate. I dati sono conservati per il tempo strettamente necessario alle finalità e, in ogni caso, secondo i termini di conservazione previsti dalla normativa di settore e dal Codice deontologico forense.</p>`,
    },
    {
      id: 'destinatari',
      title: 'Destinatari dei dati',
      body: `<p>I dati possono essere comunicati a soggetti terzi che operano come responsabili o autonomi titolari, quali: domiciliatari, consulenti tecnici, periti, fornitori di servizi informatici, banche, autorità giudiziarie e amministrative quando richiesto dalla legge. I dati non sono diffusi.</p>`,
    },
    {
      id: 'diritti',
      title: "Diritti dell'interessato",
      body: `<p>L'interessato può in ogni momento esercitare i diritti previsti dagli artt. 15–22 GDPR: accesso, rettifica, cancellazione, limitazione, portabilità e opposizione. È inoltre possibile proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener" ${gold}>garanteprivacy.it</a>).</p>`,
    },
    {
      id: 'trasferimenti',
      title: 'Trasferimenti extra-UE',
      body: `<p>Qualora alcuni fornitori (es. servizi di posta o analisi web) trasferiscano dati al di fuori dello Spazio Economico Europeo, il trasferimento avverrà esclusivamente verso Paesi con decisione di adeguatezza o sulla base di clausole contrattuali standard approvate dalla Commissione europea.</p>`,
    },
  ],
};

export const COOKIE_POLICY: Policy = {
  title: 'Cookie Policy',
  lede: 'Informativa estesa sui cookie e tecnologie analoghe utilizzati dal sito, ai sensi del Provvedimento del Garante del 10 giugno 2021 e degli artt. 13 GDPR e 122 D.lgs. 196/2003.',
  updated: '26.05.2026',
  sections: [
    {
      id: 'cosa-sono',
      title: 'Che cosa sono i cookie',
      body: `<p>I cookie sono piccole stringhe di testo che i siti visitati inviano al terminale dell'utente, dove vengono memorizzate per essere poi ritrasmesse al sito alla visita successiva. Tecnologie simili (es. local storage, web beacon, pixel) sono assimilate ai cookie ai fini della presente informativa.</p>`,
    },
    {
      id: 'tecnici',
      title: 'Cookie tecnici',
      body: `<p>I cookie tecnici sono utilizzati per consentire la corretta navigazione, ricordare le preferenze dell'utente (es. lingua, scelte cookie) e raccogliere informazioni aggregate sull'utilizzo del sito. <strong>Non richiedono il consenso dell'utente</strong> e non possono essere disabilitati senza compromettere il funzionamento del sito.</p>`,
    },
    {
      id: 'analitici',
      title: 'Cookie analitici',
      body: `<p>I cookie analitici sono utilizzati per raccogliere statistiche aggregate sull'uso del sito (pagine visitate, durata della sessione, sorgente di traffico). Vengono attivati <strong>solo previo consenso</strong> dell'utente e possono essere disattivati in qualsiasi momento dalle Preferenze Cookie. Lo Studio utilizza configurazioni con IP anonimizzato.</p>`,
    },
    {
      id: 'profilazione',
      title: 'Cookie di profilazione e marketing',
      body: `<p>Il sito <strong>non utilizza cookie di profilazione né di marketing comportamentale</strong>. Eventuali contenuti incorporati di terze parti (es. mappe) possono installare propri cookie tecnici al solo scopo del corretto rendering del componente.</p>`,
    },
    {
      id: 'gestione',
      title: 'Gestione delle preferenze',
      body: `<p>L'utente può modificare le proprie scelte in qualsiasi momento tramite il pulsante "Preferenze Cookie" presente nel footer e in questa pagina. È inoltre possibile disabilitare i cookie direttamente dal browser; le istruzioni sono disponibili nei rispettivi siti di supporto di Chrome, Firefox, Safari ed Edge. La disattivazione dei cookie tecnici può compromettere la fruizione del sito.</p>`,
    },
    {
      id: 'durata',
      title: 'Durata e categorie',
      body: `<p>Riepilogo delle categorie di cookie utilizzati:</p>
      <div style="overflow-x:auto;margin-top:12px">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead><tr style="text-align:left">
            <th style="padding:10px 12px;border-bottom:1px solid var(--line-strong);letter-spacing:0.14em;text-transform:uppercase;font-size:10px;color:var(--gold-500)">Categoria</th>
            <th style="padding:10px 12px;border-bottom:1px solid var(--line-strong);letter-spacing:0.14em;text-transform:uppercase;font-size:10px;color:var(--gold-500)">Finalità</th>
            <th style="padding:10px 12px;border-bottom:1px solid var(--line-strong);letter-spacing:0.14em;text-transform:uppercase;font-size:10px;color:var(--gold-500)">Durata</th>
          </tr></thead>
          <tbody>
            <tr><td style="padding:10px 12px;border-bottom:1px solid var(--line);font-weight:500">Tecnici</td><td style="padding:10px 12px;border-bottom:1px solid var(--line);opacity:0.85">Navigazione, preferenze, sicurezza</td><td style="padding:10px 12px;border-bottom:1px solid var(--line);opacity:0.85">Sessione / 12 mesi</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid var(--line);font-weight:500">Funzionali</td><td style="padding:10px 12px;border-bottom:1px solid var(--line);opacity:0.85">Memorizzazione consenso cookie</td><td style="padding:10px 12px;border-bottom:1px solid var(--line);opacity:0.85">12 mesi</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid var(--line);font-weight:500">Analitici (anonimi)</td><td style="padding:10px 12px;border-bottom:1px solid var(--line);opacity:0.85">Statistiche aggregate</td><td style="padding:10px 12px;border-bottom:1px solid var(--line);opacity:0.85">12 mesi</td></tr>
          </tbody>
        </table>
      </div>`,
    },
  ],
};
