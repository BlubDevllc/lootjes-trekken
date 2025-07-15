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
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
  <div class="container">
    <header class="app-header">
      <h1 class="app-title">Lootjes Trekker</h1>
      <p class="app-subtitle">Gratis online tool voor eerlijke digitale lotingen</p>
    </header>
    
    <main class="app-main">
      <section class="section" aria-label="Deelnemers invoer">
        <h2 class="section-title">Deelnemers en hun aantal lootjes</h2>
        <div id="participants-container" role="group" aria-label="Deelnemers lijst" class="custom-scrollbar">
          <!-- Participant rows will be added here dynamically -->
        </div>
        
        <button id="add-participant-btn" class="btn btn-success btn-pulse no-print" aria-label="Voeg nieuwe deelnemer toe">
          + Deelnemer toevoegen
        </button>
      </section>
      
      <section class="section" aria-label="Loting instellingen">
        <h2 class="section-title">Loting instellingen</h2>
        <div class="form-group">
          <label for="number-of-tickets" class="form-label">
            Aantal lootjes om te trekken (laat leeg voor alle):
          </label>
          <input type="number" 
                 id="number-of-tickets" 
                 class="form-input" 
                 min="1" 
                 placeholder="Bijv. 40" 
                 style="max-width: 200px;"
                 aria-label="Aantal lootjes om te trekken">
        </div>
        
        <button id="draw-lottery-btn" 
                class="btn btn-primary btn-lg no-print" 
                aria-label="Start de loting">
          Trek winnende lootjes
        </button>
      </section>

      <section id="lottery-results" aria-live="polite" aria-label="Loting resultaten">
        <!-- Results will be displayed here -->
      </section>
    </main>
    
    <footer class="app-footer">
      <p>© 2025 Lootjes Trekker - Gratis online loting tool voor iedereen</p>
      <p>Eerlijk • Transparant • Betrouwbaar</p>
    </footer>
  </div>

  <!-- External JavaScript -->
  <script type="module" src="assets/js/main.js"></script>
</body>
</html>
