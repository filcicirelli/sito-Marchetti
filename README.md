# Villa Marchetti Altamura — Sito Web

Sito ufficiale di **Villa Marchetti**, dimora privata di charme ad Altamura dedicata agli eventi privati: comunioni, battesimi, compleanni, lauree, addii al nubilato e celibato, feste a sorpresa.

> Sito statico in HTML / CSS / JavaScript puro, ottimizzato per essere distribuito su **Vercel**.

---

## Struttura del progetto

```
.
├── index.html          # Home
├── la-villa.html       # Pagina "La Villa"
├── eventi.html         # Pagina "Eventi"
├── galleria.html       # Pagina "Galleria"
├── contatti.html       # Pagina "Contatti" (form richiesta preventivo)
├── assets/
│   ├── css/style.css   # Foglio di stile globale
│   ├── js/main.js      # Interazioni (menu, scroll, form)
│   └── img/            # (Cartella per immagini reali della villa)
├── vercel.json         # Configurazione hosting (cache + header sicurezza)
├── sitemap.xml         # Sitemap SEO
├── robots.txt          # Crawler rules
└── README.md
```

---

## Design system

| Elemento  | Valore |
|-----------|--------|
| Sfondo    | `#F7F2E8` (crema) |
| Sabbia    | `#EFE7D5` |
| Verde oliva profondo | `#3D4F3C` |
| Verde scuro | `#2A372A` |
| Ottone    | `#B8945A` |
| Antracite | `#1F1F1D` |
| Font titoli | Cormorant Garamond (serif) |
| Font testo  | Inter (sans-serif) |

L'estetica si rifà a una dimora privata di charme: spazi ariosi, tipografia editoriale, dettagli in oro brunito, fotografia naturale e luminosa.

---

## Deploy su Vercel

### Opzione A — Importa la repo (consigliata)

1. Vai su [vercel.com/new](https://vercel.com/new).
2. Importa la repository GitHub `sito-Marchetti`.
3. Lascia tutte le impostazioni di default (Vercel rileverà un progetto statico).
4. Clicca **Deploy** — il sito sarà online in pochi secondi su un URL `*.vercel.app`.
5. Da **Project Settings → Domains** collega il dominio definitivo (es. `villamarchetti.it`).

### Opzione B — Vercel CLI

```bash
npx vercel
# segui le istruzioni guidate
npx vercel --prod   # per il deploy in produzione
```

---

## Sviluppo locale

Nessuna build necessaria. Per visualizzare il sito in locale:

```bash
# con Python
python3 -m http.server 8080
# poi apri http://localhost:8080
```

oppure trascina semplicemente `index.html` nel browser.

---

## TODO contenuti reali

- [ ] Sostituire le immagini di placeholder Unsplash con foto autentiche della villa (cartella `assets/img/`).
- [ ] Aggiornare numero di telefono ed email reali nel footer e nella pagina contatti.
- [ ] Caricare un'immagine `og.jpg` (1200×630) in `assets/img/` per le anteprime social.
- [ ] Collegare il form contatti a un servizio (Formspree, Resend, EmailJS o serverless function su Vercel).
- [ ] Verificare e correggere l'indirizzo esatto della villa.

---

© Villa Marchetti Altamura — Eventi privati su appuntamento.
