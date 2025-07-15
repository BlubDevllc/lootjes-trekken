# Lootjes Trekker - Complete Uitleg voor Beginners

Hoi! Dit is een uitleg van hoe onze lootjes trekker website werkt. Ik ga het uitleggen alsof je nog nooit geprogrammeerd hebt, dus maak je geen zorgen als het eerst ingewikkeld lijkt!

---

## Wat is deze website?

Deze website is als een digitale lotto machine! Je kunt:
- Namen van mensen invoeren (zoals Jan, Piet, Marie)
- Per persoon aangeven hoeveel lootjes ze hebben
- De computer laat dan eerlijk winnende lootjes trekken

**Bijvoorbeeld:** Jan heeft 5 lootjes, Piet heeft 2 lootjes. Dan heeft Jan meer kans om te winnen omdat hij meer lootjes heeft - net zoals in het echte leven!

---

## De Bestanden Uitgelegd

Onze website bestaat uit 3 hoofdbestanden. Denk aan het als een huis bouwen:

### **index.php** - De Muren en Kamers (HTML)
```html
<h1>Lootjes Trekker - Beheerder Paneel</h1>
```

**Wat doet dit?**
- Dit bestand bepaalt WAT er op de pagina staat
- Alle teksten, knoppen, invoervelden
- Net zoals de kamers in een huis: "hier komt de keuken, hier de woonkamer"

**Belangrijke onderdelen:**
- `<input>` = invoervelden waar je namen en getallen intypt
- `<button>` = knoppen waar je op klikt
- `<div>` = dozen die dingen bij elkaar houden

### **styles.css** - De Verf en Decoratie
```css
button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
}
```

**Wat doet dit?**
- Dit bestand bepaalt hoe alles ERUIT ZIET
- Kleuren, lettergroottes, waar dingen staan
- Net zoals verf en meubels in een huis

**Belangrijke onderdelen:**
- `color: #667eea` = kleur van tekst (hexadecimaal = computerkleurcodes)
- `padding: 20px` = ruimte binnen een element
- `margin: 10px` = ruimte buiten een element
- `@media (max-width: 575px)` = speciale regels voor telefoons

### **script.js** - De Elektriciteit en Slimme Functies
```javascript
function trekLootjes() {
  // Hier gebeurt de magie!
}
```

**Wat doet dit?**
- Dit bestand zorgt dat de website DOET wat je wilt
- Alle knoppen die werken, berekeningen, animaties
- Net zoals elektriciteit en slimme systemen in een huis

---

##  Hoe Werken Deze 3 Samen?

Stel je voor je klikt op "Trek winnende lootjes":

###  **HTML zegt:** "Er is geklikt op een knop!"
```html
<button onclick="trekLootjes()"> Trek winnende lootjes</button>
```

###  **JavaScript zegt:** "Oké, ik ga de loting doen!"
```javascript
function trekLootjes() {
  // Verzamel alle namen en aantallen
  // Doe de berekening
  // Toon het resultaat
}
```

###  **CSS zegt:** "En ik zorg dat het resultaat er mooi uitziet!"
```css
#result {
  background: #f7fafc;
  padding: 25px;
  border-radius: 12px;
  animation: fadeIn 0.5s ease-in;
}
```

---

##  JavaScript in Detail - De Hersenen

###  **LootjesTrekker Object** - Ons Hoofd Systeem
```javascript
const LootjesTrekker = {
  // Dit is ons hoofdsysteem - alle functies zitten hier in
}
```

**Denk aan het als een gereedschapskist:**
- Elke functie is een gereedschap
- `voegRijToe()` = schroevendraaier om rijen toe te voegen
- `verwijderRij()` = tang om rijen weg te halen  
- `trekLootjes()` = de hoofdhamer voor de loting

###  **Cache System** - Ons Geheugen
```javascript
cache: {
  container: null,
  resultDiv: null,
  aantalInput: null
}
```

**Waarom cache?**
- De computer moet niet elke keer zoeken naar "waar is dat invoerveld?"
- We onthouden het 1 keer, dan is het snel
- Net zoals je onthoudt waar je sleutels liggen in plaats van elke keer het hele huis doorzoeken

###  **shuffleArray()** - De Eerlijke Loting
```javascript
shuffleArray(array) {
  const arr = [...array]; // Maak een kopie
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Wissel random
  }
  return arr;
}
```

**Wat gebeurt hier? (Fisher-Yates algoritme)**
1. We hebben een lijst met alle lootjes: `["Jan", "Jan", "Jan", "Piet", "Piet"]`
2. We beginnen achteraan: pak het laatste lootje
3. Wissel het met een willekeurig lootje ergens in de lijst
4. Ga 1 stap terug en herhaal dit
5. Resultaat: een compleet gehusselde, eerlijke lijst!

**Waarom dit algoritme?**
- Wetenschappelijk bewezen eerlijk
- Elke mogelijke volgorde heeft exact dezelfde kans
- Gebruikt door casino's en officiële lotingen

###  **trekLootjes()** - De Hoofdfunctie
```javascript
trekLootjes() {
  const startTime = performance.now(); // Begin timer
  
  // 1. Verzamel alle gegevens
  const naamInputs = document.querySelectorAll('.naam-input');
  const aantalInputs = document.querySelectorAll('.aantal-input');
  
  // 2. Maak de lootjes lijst
  const lootjes = [];
  for (let i = 0; i < naamInputs.length; i++) {
    const naam = naamInputs[i].value.trim();
    const aantal = parseInt(aantalInputs[i].value);
    
    if (naam && aantal > 0) {
      lootjes.push(...new Array(aantal).fill(naam));
    }
  }
  
  // 3. Doe de loting
  const winnende_lootjes = this.shuffleArray(lootjes).slice(0, aantalTeTrekken);
  
  // 4. Toon resultaat
  this.displayResults(/* alle data */);
  
  const endTime = performance.now(); // Stop timer
}
```

**Stap voor stap:**
1. **Performance.now()** = stopwatch starten (meten hoe snel we zijn)
2. **Verzamel data** = alle namen en getallen uit de invoervelden halen
3. **Maak lootjes** = als Jan 3 lootjes heeft, maken we `["Jan", "Jan", "Jan"]`
4. **Shuffle** = gebruik het eerlijke algoritme om te husselen
5. **Slice** = pak alleen het aantal dat we willen trekken
6. **Toon resultaat** = zet alles mooi op het scherm

---

##  CSS in Detail - De Stylist

###  **Box Model** - Hoe Ruimte Werkt
```css
.persoon-rij {
  padding: 12px;    /* Ruimte BINNEN de box */
  margin: 10px;     /* Ruimte BUITEN de box */
  border: 2px;      /* Rand VAN de box */
}
```

**Stel je voor elke HTML element is een doos:**
- **Content** = wat er in de doos zit (tekst, plaatjes)
- **Padding** = piepschuim rondom de inhoud
- **Border** = de muren van de doos
- **Margin** = ruimte tussen dozen

###  **Responsive Design** - Werkt Op Alle Apparaten
```css
/* Telefoon (klein) */
@media (max-width: 575px) {
  .container { padding: 15px; }
  h1 { font-size: 1.6em; }
}

/* Tablet (medium) */  
@media (min-width: 768px) and (max-width: 991px) {
  .container { padding: 25px; }
  h1 { font-size: 2em; }
}

/* Computer (groot) */
@media (min-width: 1200px) {
  .container { padding: 40px; }
  h1 { font-size: 2.5em; }
}
```

**Wat betekent dit?**
- De website PAST ZICH AAN aan je scherm
- Kleine telefoon = kleine letters, minder ruimte
- Grote computer = grote letters, meer ruimte
- Net zoals je andere kleren draagt in winter vs zomer

###  **CSS Selectors** - Wie Krijgt Welke Styling?
```css
/* Alle buttons */
button { 
  padding: 12px; 
}

/* Specifieke button met class */
.persoon-rij button { 
  background: red; 
}

/* Heel specifieke button met ID */
#addButton { 
  background: green; 
}
```

**Prioriteit (wie wint?):**
1. **ID** (#addButton) = heeft de baas (hoogste prioriteit)
2. **Class** (.persoon-rij button) = manager  
3. **Element** (button) = werknemer (laagste prioriteit)

###  **Kleuren en Gradients**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Wat betekent dit?**
- `linear-gradient` = kleurverloop van links naar rechts
- `135deg` = schuin van linksboven naar rechtsonder
- `#667eea` = begin kleur (lichtblauw)
- `#764ba2` = eind kleur (paars)
- `0%` tot `100%` = waar de kleuren beginnen en eindigen

---

##  HTML in Detail - De Architect

###  **Semantic HTML** - Betekenisvolle Structuur
```html
<header>
  <h1> Lootjes Trekker</h1>
</header>

<main>
  <section aria-label="Deelnemers invoer">
    <!-- Invoer gedeelte -->
  </section>
  
  <section aria-label="Loting resultaten">
    <!-- Resultaten gedeelte -->
  </section>
</main>

<footer>
  <p>© 2025 Lootjes Trekker</p>
</footer>
```

**Waarom niet gewoon alles `<div>`?**
- **Screen readers** (voor blinde mensen) begrijpen de structuur
- **Zoekmachines** (Google) begrijpen waar de belangrijke content staat
- **Andere developers** begrijpen sneller wat waar staat

###  **Accessibility** - Voor Iedereen Toegankelijk
```html
<input type="text" 
       placeholder="Naam deelnemer" 
       class="naam-input" 
       aria-label="Naam van deelnemer">
```

**Aria-label betekent:**
- Screen readers kunnen voorlezen: "Invoerveld: Naam van deelnemer"
- Blinde mensen weten wat ze moeten invoeren
- Het is gewoon aardig om je website voor iedereen bruikbaar te maken

###  **Form Elements** - Invoer Elementen
```html
<!-- Tekst invoeren -->
<input type="text" placeholder="Naam deelnemer">

<!-- Getallen invoeren -->
<input type="number" min="1" placeholder="Aantal">

<!-- Knop om iets te doen -->
<button onclick="voegRijToe()">+ Deelnemer toevoegen</button>
```

**Type="number" voordelen:**
- Op telefoon krijg je automatisch cijfer-toetsenbord
- Browser checkt of het echt een getal is
- `min="1"` = je kunt geen 0 of negatieve getallen invoeren

---

##  De Complete Flow - Van Klik Tot Resultaat

Laten we stap voor stap volgen wat er gebeurt als je op "Trek winnende lootjes" klikt:

###  **HTML Ontvangt De Klik**
```html
<button onclick="trekLootjes()"> Trek winnende lootjes</button>
```
- Browser: "Er is geklikt op deze knop!"
- Browser: "De knop zegt dat ik `trekLootjes()` moet aanroepen"

###  **JavaScript Wordt Actief**
```javascript
function trekLootjes() {
  LootjesTrekker.trekLootjes(); // Roep de hoofdfunctie aan
}
```
- JavaScript: "Oké, ik ga naar de LootjesTrekker en roep trekLootjes() aan"

###  **Data Verzamelen**
```javascript
const naamInputs = document.querySelectorAll('.naam-input');
const aantalInputs = document.querySelectorAll('.aantal-input');
```
- JavaScript: "Zoek alle naam-invoervelden op de pagina"
- JavaScript: "Zoek alle aantal-invoervelden op de pagina"

###  **Lootjes Lijst Maken**
```javascript
for (let i = 0; i < naamInputs.length; i++) {
  const naam = naamInputs[i].value.trim();
  const aantal = parseInt(aantalInputs[i].value);
  
  if (naam && aantal > 0) {
    lootjes.push(...new Array(aantal).fill(naam));
  }
}
```
- JavaScript: "Voor elke rij, pak de naam en het aantal"
- JavaScript: "Als Jan 3 lootjes heeft, voeg dan ['Jan', 'Jan', 'Jan'] toe aan de lijst"
- Resultaat: `["Jan", "Jan", "Jan", "Piet", "Piet", "Marie"]`

###  **Eerlijk Husselen**
```javascript
const winnende_lootjes = this.shuffleArray(lootjes).slice(0, aantalTeTrekken);
```
- JavaScript: "Hussel de lijst eerlijk met Fisher-Yates algoritme"
- JavaScript: "Pak alleen het aantal lootjes dat gevraagd is"

###  **Resultaat Tonen**
```javascript
this.displayResults(lootjes, lootjesOmTeTrekken, personen, winnende_lootjes, winnaars, executionTime);
```
- JavaScript: "Maak mooie HTML voor het resultaat"
- JavaScript: "Stop de HTML in het result div"

###  **CSS Maakt Het Mooi**
```css
#result {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```
- CSS: "Laat het resultaat mooi naar binnen glijden met een animatie"

---

##  Waarom Is Het Eerlijk? - De Wiskunde

###  **Random.Math() - Echte Willekeur?**
```javascript
Math.random() // Geeft getal tussen 0 en 1: 0.7834728
Math.floor(Math.random() * 5) // Geeft 0, 1, 2, 3, of 4
```

**Moderne computers zijn heel goed in willekeur:**
- Gebruiken externe bronnen zoals muis bewegingen, toetsaanslagen
- Crypto-niveau randomness (bank-veilig)
- Voor lootjes trekken meer dan voldoende eerlijk

###  **Fisher-Yates Algoritme - Waarom Dit Werkt**

**Probleem:** Naïef shuffelen is NIET eerlijk
```javascript
//  SLECHT - niet eerlijk!
array.sort(() => Math.random() - 0.5);
```

**Oplossing:** Fisher-Yates is WEL eerlijk
```javascript
//  GOED - wiskundig bewezen eerlijk
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
```

**Waarom werkt dit?**
- Elke positie heeft exact gelijke kans voor elk element
- Geen bias naar bepaalde posities
- 52! permutaties voor een kaartspel = alle even waarschijnlijk

###  **Kansen Berekenen**
```javascript
const kansPercentage = ((persoon.aantal / lootjes.length) * 100).toFixed(1);
```

**Voorbeeld:**
- Jan heeft 3 lootjes van de 10 totaal
- Kans = (3 / 10) × 100 = 30%
- Als we 5 lootjes trekken, verwacht aantal voor Jan = 30% × 5 = 1.5 lootjes

---

##  Performance - Waarom Is Het Snel?

###  **DOM Caching**
```javascript
//  LANGZAAM - zoekt elke keer opnieuw
for (let i = 0; i < 100; i++) {
  document.getElementById('result').innerHTML += data[i];
}

//  SNEL - zoekt 1 keer, hergebruikt
const resultDiv = document.getElementById('result');
for (let i = 0; i < 100; i++) {
  resultDiv.innerHTML += data[i];
}
```

###  **DocumentFragment - Batch Updates**
```javascript
//  SUPER SNEL - alle wijzigingen in 1 keer
const fragment = document.createDocumentFragment();
const nieuweRij = document.createElement('div');
fragment.appendChild(nieuweRij);
container.appendChild(fragment); // Slechts 1 DOM update
```

###  **Performance Timing**
```javascript
const startTime = performance.now();
// ... doe de loting ...
const endTime = performance.now();
console.log(`Loting duurde ${endTime - startTime} milliseconden`);
```

**Typische snelheden:**
- 10 deelnemers = ~1ms
- 100 deelnemers = ~5ms  
- 1000 deelnemers = ~20ms

---

##  Samenvatting - Het Grote Plaatje

###  **De Huismetafoor**
- **HTML** = de kamers en muren (structuur)
- **CSS** = de verf en decoratie (uiterlijk)  
- **JavaScript** = de elektriciteit en slimme systemen (functionaliteit)

###  **De Workflow**
1. **Gebruiker** klikt knop
2. **HTML** vangt klik op
3. **JavaScript** doet berekeningen
4. **JavaScript** maakt nieuwe HTML
5. **CSS** maakt het mooi
6. **Gebruiker** ziet resultaat

###  **Waarom Deze Aanpak?**
- **Separation of Concerns** = elk bestand heeft zijn eigen taak
- **Maintainable** = makkelijk om later te wijzigen
- **Scalable** = kan groeien zonder problemen
- **Accessible** = werkt voor iedereen
- **Fast** = geoptimaliseerd voor snelheid

###  **Key Takeaways**
1. **HTML** geeft betekenis en structuur
2. **CSS** maakt het mooi en responsive  
3. **JavaScript** voegt interactiviteit toe
4. **Samenwerking** tussen alle drie maakt een goede website
5. **Performance** en **toegankelijkheid** zijn belangrijk
6. **Eerlijkheid** in algoritmes is cruciaal voor vertrouwen

**En dat is onze lootjes trekker! Een simpele tool die veel slimme technieken gebruikt om eerlijk, snel en mooi te zijn.** 
