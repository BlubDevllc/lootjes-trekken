<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- SEO Meta Tags -->
  <title>Gratis Lootjes Trekken Online - Eerlijke Digitale Loting Tool</title>
  <meta name="description" content="Trek eerlijk lootjes online met onze gratis digitale loting tool. Perfect voor bedrijven, verenigingen en evenementen. Snel, betrouwbaar en transparant.">
  <meta name="keywords" content="lootjes trekken, online loting, gratis loting tool, digitale loting, eerlijke loting, lotto trekken, bedrijf loting, vereniging loting">
  <meta name="author" content="Lootjes Trekker">
  <meta name="robots" content="index, follow">
  <meta name="language" content="Dutch">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourdomain.com/">
  <meta property="og:title" content="Gratis Lootjes Trekken Online - Eerlijke Digitale Loting Tool">
  <meta property="og:description" content="Trek eerlijk lootjes online met onze gratis digitale loting tool. Perfect voor bedrijven, verenigingen en evenementen.">
  <meta property="og:image" content="https://yourdomain.com/lootjes-trekker-preview.jpg">
  <meta property="og:locale" content="nl_NL">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourdomain.com/">
  <meta property="twitter:title" content="Gratis Lootjes Trekken Online - Eerlijke Digitale Loting Tool">
  <meta property="twitter:description" content="Trek eerlijk lootjes online met onze gratis digitale loting tool. Perfect voor bedrijven, verenigingen en evenementen.">
  <meta property="twitter:image" content="https://yourdomain.com/lootjes-trekker-preview.jpg">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Lootjes Trekker",
    "description": "Gratis online tool voor het eerlijk trekken van lootjes",
    "url": "https://yourdomain.com/",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "creator": {
      "@type": "Organization",
      "name": "Lootjes Trekker"
    }
  }
  </script>
  
  <!-- Preload critical resources -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- External CSS -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>🎲 Lootjes Trekker - Beheerder Paneel</h1>
      <p class="subtitle">Gratis online tool voor eerlijke digitale lotingen</p>
    </header>
    
    <main>
      <section aria-label="Deelnemers invoer">
        <div class="label">Deelnemers en hun aantal lootjes:</div>
        <div id="personenContainer" role="group" aria-label="Deelnemers lijst">
        <div class="persoon-rij">
          <input type="text" placeholder="Naam deelnemer" class="naam-input" aria-label="Naam van deelnemer">
          <input type="number" placeholder="Aantal" min="1" class="aantal-input" aria-label="Aantal lootjes">
          <button onclick="verwijderRij(this)" aria-label="Verwijder deze deelnemer">-</button>
        </div>
        <div class="persoon-rij">
          <input type="text" placeholder="Naam deelnemer" class="naam-input" aria-label="Naam van deelnemer">
          <input type="number" placeholder="Aantal" min="1" class="aantal-input" aria-label="Aantal lootjes">
          <button onclick="verwijderRij(this)" aria-label="Verwijder deze deelnemer">-</button>
        </div>
        <div class="persoon-rij">
          <input type="text" placeholder="Naam deelnemer" class="naam-input" aria-label="Naam van deelnemer">
          <input type="number" placeholder="Aantal" min="1" class="aantal-input" aria-label="Aantal lootjes">
          <button onclick="verwijderRij(this)" aria-label="Verwijder deze deelnemer">-</button>
        </div>
      </div>
      
      <button id="addButton" onclick="voegRijToe()" aria-label="Voeg nieuwe deelnemer toe">+ Deelnemer toevoegen</button>
      </section>
      
      <section aria-label="Loting instellingen">
        <div class="label" style="margin-top: 20px;">Aantal lootjes om te trekken (laat leeg voor alle):</div>
        <input type="number" id="aantalTeTrekken" min="1" placeholder="Bijv. 40" style="width: 200px;" aria-label="Aantal lootjes om te trekken">
        
        <div>
          <button id="trekButton" onclick="trekLootjes()" aria-label="Start de loting">🎯 Trek winnende lootjes</button>
        </div>
      </section>

      <section id="result" aria-live="polite" aria-label="Loting resultaten"></section>
    </main>
    
    <footer style="margin-top: 40px; text-align: center; color: #718096; font-size: 0.9em;">
      <p>© 2025 Lootjes Trekker - Gratis online loting tool voor iedereen</p>
      <p>Eerlijk • Transparant • Betrouwbaar</p>
    </footer>
  </div>

  <!-- External JavaScript -->
  <script src="script.js"></script>
</body>
</html>
