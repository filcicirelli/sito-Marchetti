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

### Foto della villa
- [ ] **Scaricare le foto da Instagram e Facebook** (le piattaforme bloccano il download automatico):
  1. Apri ogni post su [Instagram](https://www.instagram.com/villa_marchetti_altamura/) o [Facebook](https://www.facebook.com/profile.php?id=100035421801743)
  2. Salva l'immagine in alta risoluzione (tasto destro → "Salva immagine")
  3. Mettile nella cartella `assets/img/` con nomi descrittivi (es. `villa-cortile.jpg`, `salone-cena.jpg`, `piscina-tramonto.jpg`)
  4. Aggiorna i `background-image: url(...)` nei file HTML sostituendo gli URL Unsplash con i path locali (`/assets/img/nome-foto.jpg`)
- [ ] Caricare un'immagine **`og.jpg`** (1200×630) in `assets/img/` per le anteprime social

### Recensioni
- [ ] **⚠️ Importante** — Le 12 recensioni nella Home (e quelle ridotte in Eventi/Contatti) sono **testi placeholder realistici**. Prima di andare in produzione vanno sostituite con **recensioni reali** ricevute dai clienti (es. recensioni Google, Facebook, email di ringraziamento autorizzate). In Italia, mostrare recensioni inventate è vietato dal Codice del Consumo (art. 23). Suggerimento: richiedere ai clienti di lasciare una recensione su Google Business Profile e poi citarle qui con nome/iniziale e link al profilo.

### Altri contenuti
- [ ] Aggiornare numero di telefono ed email reali nel footer e nella pagina contatti
- [ ] Verificare e correggere l'indirizzo esatto della villa (attualmente generico "Altamura, BA")
- [ ] Collegare il form contatti a un servizio (Formspree, Resend, EmailJS o serverless function su Vercel) — attualmente usa fallback `mailto:`

---

© Villa Marchetti Altamura — Eventi privati su appuntamento.
