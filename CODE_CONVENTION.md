# Code Conventies - Lootjes Trekker Project

## Wat zijn Code Conventies?
Code conventies zijn afspraken over hoe we code schrijven, zodat alles consistent en begrijpelijk blijft. Net zoals je afspraken maakt over hoe je je kamer opruimt!

---

## Bestandsstructuur

```
lootjes-trekken/
├── index.php          # Hoofdpagina (wat je ziet in je browser)
├── styles.css         # Alle kleuren en vormgeving
├── script.js          # Alle functionaliteit en logica
├── README.md          # Projectbeschrijving
├── .gitignore         # Welke bestanden NIET naar GitHub
├── .gitattributes     # Git instellingen
└── CODE_CONVENTION.md # Dit bestand
```

---

## Naamgeving (Naming Conventions)

### GOED - Nederlandse namen voor gebruikers
```html
<input class="naam-input" placeholder="Naam deelnemer">
<input class="aantal-input" placeholder="Aantal">
<button id="addButton">+ Deelnemer toevoegen</button>
```

### GOED - Engelse namen voor technische code
```javascript
const LootjesTrekker = {
  cache: {},
  init() {},
  voegRijToe() {}
}
```

### SLECHT - Onduidelijke namen
```javascript
// NIET DOEN:
const a = document.getElementById('x');
function doStuff() {}
```

---

## CSS Conventies

### Layout Structure
```css
/* 1. Eerst algemene reset */
* { box-sizing: border-box; }

/* 2. Dan body styling */
body { 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
  /* Moderne systeemfonts voor beste leesbaarheid */
}

/* 3. Dan containers */
.container {
  max-width: 800px;
  margin: 0 auto; /* Centreert de container */
}

/* 4. Dan componenten */
.persoon-rij {
  display: flex;
  gap: 10px; /* Ruimte tussen elementen */
}
```

### CSS Selector Priorities
```css
/* 1. Elementen (laagste prioriteit) */
button { padding: 12px; }

/* 2. Classes (medium prioriteit) */
.persoon-rij button { background: #e53e3e; }

/* 3. IDs (hoogste prioriteit) */
#addButton { background: linear-gradient(135deg, #48bb78, #38a169); }
```

### Responsive Design Pattern
```css
/* Mobile First Approach - begin klein, werk naar groot toe */

/* Base styles (mobiel) */
.container { padding: 15px; }

/* Tablet */
@media (min-width: 768px) {
  .container { padding: 25px; }
}

/* Desktop */
@media (min-width: 1200px) {
  .container { padding: 40px; }
}
```

---

## JavaScript Conventies

### Object Structure Pattern
```javascript
const LootjesTrekker = {
  // 1. Eigenschappen (cache, settings)
  cache: {
    container: null,
    resultDiv: null
  },
  
  // 2. Initialisatie
  init() {
    // Setup code hier
  },
  
  // 3. Public methods (wat anderen kunnen gebruiken)
  voegRijToe() {},
  verwijderRij() {},
  trekLootjes() {},
  
  // 4. Private/helper methods (interne hulpfuncties)
  shuffleArray() {},
  showError() {},
  displayResults() {}
};
```

### Function Naming
```javascript
//  GOED - Werkwoorden die beschrijven wat de functie doet
function voegRijToe() {}        // Voegt rij toe
function verwijderRij() {}      // Verwijdert rij
function trekLootjes() {}       // Trekt lootjes
function shuffleArray() {}      // Husselt array
function displayResults() {}    // Toont resultaten

//  SLECHT - Onduidelijke namen
function doThing() {}
function process() {}
function handle() {}
```

### Error Handling Pattern
```javascript
// Altijd checken of data geldig is
if (lootjes.length === 0) {
  this.showError('Voer ten minste één deelnemer in.');
  return; // Stop hier, ga niet verder
}

// Gebruik beschrijvende error messages
this.showError('Voer ten minste één deelnemer met een geldig aantal lootjes in.');
```

###  Performance Patterns
```javascript
// 1. Cache DOM elementen (zoek ze maar 1 keer op)
init() {
  this.cache.container = document.getElementById('personenContainer');
  this.cache.resultDiv = document.getElementById('result');
}

// 2. Gebruik cached elementen
const container = this.cache.container || document.getElementById('personenContainer');

// 3. Gebruik efficiënte algorithms
// Fisher-Yates shuffle = wetenschappelijk bewezen eerlijk
shuffleArray(array) {
  const arr = [...array]; // Maak kopie, verander origineel niet
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Wissel elementen
  }
  return arr;
}
```

---

##  HTML Conventies

###  Semantic Structure
```html
<!-- Gebruik betekenisvolle HTML tags -->
<header>   <!-- Voor kopteksten -->
<main>     <!-- Voor hoofdinhoud -->
<section>  <!-- Voor logische secties -->
<footer>   <!-- Voor voettekst -->

<!-- NIET gewoon overal <div> gebruiken -->
```

###  Accessibility (Toegankelijkheid)
```html
<!-- Altijd labels en aria-labels voor screenreaders -->
<input type="text" 
       placeholder="Naam deelnemer" 
       class="naam-input" 
       aria-label="Naam van deelnemer">

<!-- Gebruik role attributen -->
<div id="personenContainer" 
     role="group" 
     aria-label="Deelnemers lijst">

<!-- Live regions voor dynamische content -->
<section id="result" 
         aria-live="polite" 
         aria-label="Loting resultaten">
```

###  Class Naming
```html
<!-- BEM-achtige naamgeving: blok-element-modifier -->
<div class="persoon-rij">           <!-- Blok -->
  <input class="naam-input">        <!-- Element -->
  <input class="aantal-input">      <!-- Element -->
  <button class="verwijder-btn">    <!-- Element -->
</div>

<!-- ID's voor unieke elementen -->
<button id="addButton">     <!-- Slechts 1 toevoeg-knop -->
<button id="trekButton">    <!-- Slechts 1 trek-knop -->
```

---

##  Code Formatting Rules

###  CSS Formatting
```css
/* Altijd spaties rond : en ; */
.container {
  max-width: 800px;        /* ✅ GOED */
  margin: 0 auto;          /* ✅ GOED */
}

.container{max-width:800px;margin:0 auto;}  /* ❌ SLECHT */
```

### JavaScript Formatting
```javascript
// GOED - Spaties en duidelijke formatting
function trekLootjes() {
  const startTime = performance.now();
  
  if (lootjes.length === 0) {
    this.showError('Foutmelding');
    return;
  }
}

// SLECHT - Alles aan elkaar
function trekLootjes(){const startTime=performance.now();if(lootjes.length===0){this.showError('Foutmelding');return;}}
```

###  HTML Formatting
```html
<!--  GOED - Netjes ingesprongen -->
<div class="persoon-rij">
  <input type="text" class="naam-input">
  <input type="number" class="aantal-input">
  <button onclick="verwijderRij(this)">-</button>
</div>

<!--  SLECHT - Alles door elkaar -->
<div class="persoon-rij"><input type="text" class="naam-input"><input type="number" class="aantal-input"><button onclick="verwijderRij(this)">-</button></div>
```

---

##  Comments  Documentation

###  Wanneer Comments Schrijven
```javascript
//  GOED - Leg complexe logica uit
// Fisher-Yates shuffle = wetenschappelijk bewezen eerlijke methode
shuffleArray(array) {
  const arr = [...array]; // Maak kopie zodat origineel niet verandert
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Wissel random elementen
  }
  return arr;
}

//  SLECHT - Leg voor de hand liggende dingen uit
const naam = input.value; // Haal de waarde op van de input
```

###  CSS Comments
```css
/* Hoofdsecties duidelijk markeren */
/* =================================
   RESPONSIVE DESIGN FOR ALL DEVICES
   ================================= */

/* Extra Large Screens (1200px and up) */
@media (min-width: 1200px) {
  /* Styling hier */
}

/* Medium Screens - Tablets (768px to 991px) */
@media (min-width: 768px) and (max-width: 991px) {
  /* Styling hier */
}
```

---

## Performance Best Practices

###  JavaScript Performance
```javascript
//  GOED - Cache DOM queries
const naamInputs = document.querySelectorAll('.naam-input');

// SLECHT - Elke keer opnieuw zoeken
for (let i = 0; i < document.querySelectorAll('.naam-input').length; i++) {}

//  GOED - Gebruik DocumentFragment voor meerdere DOM changes
const fragment = document.createDocumentFragment();
const nieuweRij = document.createElement('div');
fragment.appendChild(nieuweRij);
container.appendChild(fragment);

//  SLECHT - Elke wijziging direct in DOM
container.appendChild(element1);
container.appendChild(element2);
container.appendChild(element3);
```

###  CSS Performance
```css
/*  GOED - Efficiënte selectors */
.persoon-rij input { }          /* Snel */
.naam-input { }                 /* Heel snel */

/*  SLECHT - Trage selectors */
* input { }                     /* Langzaam - checkt ALLES */
div div div input { }           /* Langzaam - te specifiek */
```

---

##  Code Review Checklist

Voordat je code pusht naar GitHub, check:

###  Functionaliteit
- [ ] Doet de code wat het moet doen?
- [ ] Zijn alle edge cases (uitzonderingen) afgehandeld?
- [ ] Werkt het op alle apparaten (mobiel, tablet, desktop)?

###  Code Kwaliteit  
- [ ] Zijn namen duidelijk en beschrijvend?
- [ ] Is de code netjes geformatteerd?
- [ ] Zijn er geen herhalingen (DRY = Don't Repeat Yourself)?
- [ ] Zijn complexe delen uitgelegd met comments?

###  Performance
- [ ] Worden DOM elementen gecacht?
- [ ] Zijn er geen onnodige queries?
- [ ] Is de CSS geoptimaliseerd?

###  Accessibility
- [ ] Zijn er aria-labels voor screenreaders?
- [ ] Werkt alles met toetsenbord?
- [ ] Zijn kleuren contrast-vriendelijk?

---

##  Samenvatting voor Beginners

1. **Consistent blijven** - Gebruik dezelfde stijl door het hele project
2. **Duidelijke namen** - Code moet te lezen zijn als een verhaal  
3. **Commentaar waar nodig** - Leg moeilijke delen uit
4. **Mobiel eerst** - Begin met kleine schermen, werk naar groot
5. **Performance belangrijk** - Cache wat je kunt, optimaliseer wat langzaam is
6. **Toegankelijkheid** - Zorg dat iedereen je site kan gebruiken

**Onthoud:** Goede code is code die een ander (of jijzelf over 6 maanden) gemakkelijk kan begrijpen en wijzigen! 
