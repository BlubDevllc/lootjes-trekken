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
  
  <!-- Google Fonts - Modern Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
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
  
  <!-- Fallback script for when modules fail -->
  <script>
    // Wait a bit for modules to load, then check if they loaded successfully
    setTimeout(() => {
      if (!window.LotteryApp) {
        console.warn('ES6 modules failed to load, initializing fallback...');
        initializeFallback();
      }
    }, 1000);
    
    function initializeFallback() {
      console.log('🔄 Initializing fallback lottery system...');
      
      const container = document.getElementById('participants-container');
      const addBtn = document.getElementById('add-participant-btn');
      const drawBtn = document.getElementById('draw-lottery-btn');
      
      if (!container || !addBtn || !drawBtn) {
        console.error('Required DOM elements not found');
        return;
      }
      
      let participantCount = 0;
      
      function addParticipant() {
        participantCount++;
        const row = document.createElement('div');
        row.className = 'participant-row';
        row.innerHTML = `
          <input type="text" class="form-input participant-name-input" placeholder="Naam deelnemer" aria-label="Naam van deelnemer">
          <input type="number" class="form-input participant-tickets-input" placeholder="Aantal" min="1" aria-label="Aantal lootjes">
          <button class="btn btn-danger btn-sm participant-remove-btn" onclick="removeParticipant(this)" aria-label="Verwijder deelnemer">−</button>
        `;
        container.appendChild(row);
        
        // Add animation class
        setTimeout(() => row.classList.add('participant-slide-in'), 10);
        
        console.log(`Participant row ${participantCount} added`);
      }
      
      window.removeParticipant = function(btn) {
        btn.parentElement.remove();
        console.log('Participant removed');
      };
      
      function drawLottery() {
        const rows = document.querySelectorAll('.participant-row');
        const participants = [];
        
        rows.forEach((row, index) => {
          const name = row.querySelector('.participant-name-input').value.trim();
          const tickets = parseInt(row.querySelector('.participant-tickets-input').value) || 0;
          
          if (name && tickets > 0) {
            participants.push({ name, tickets });
          }
        });
        
        if (participants.length === 0) {
          alert('Voer ten minste één deelnemer met een geldig aantal lootjes in.');
          return;
        }
        
        // Create all tickets
        const allTickets = [];
        participants.forEach(p => {
          for (let i = 0; i < p.tickets; i++) {
            allTickets.push(p.name);
          }
        });
        
        // Get number of tickets to draw
        const numberOfTicketsInput = document.getElementById('number-of-tickets');
        const numberOfTicketsToDraw = parseInt(numberOfTicketsInput.value) || allTickets.length;
        const ticketsToDraw = Math.min(numberOfTicketsToDraw, allTickets.length);
        
        // Fisher-Yates shuffle
        const shuffled = [...allTickets];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        const drawnTickets = shuffled.slice(0, ticketsToDraw);
        
        // Count winners
        const winners = {};
        drawnTickets.forEach(name => {
          winners[name] = (winners[name] || 0) + 1;
        });
        
        // Display results
        const resultsContainer = document.getElementById('lottery-results');
        let resultsHTML = `
          <div class="section lottery-results">
            <h2 class="section-title">🎉 Loting Resultaten</h2>
            
            <div class="lottery-stats grid-3 gap-md mb-xl">
              <div class="stat-card">
                <div class="stat-number">${participants.length}</div>
                <div class="stat-label">Deelnemers</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${allTickets.length}</div>
                <div class="stat-label">Totaal lootjes</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">${drawnTickets.length}</div>
                <div class="stat-label">Getrokken lootjes</div>
              </div>
            </div>
            
            <div class="mb-xl">
              <h3>🏆 Winnaars</h3>
              <div class="winner-list">
        `;
        
        Object.entries(winners)
          .sort((a, b) => b[1] - a[1])
          .forEach(([name, count]) => {
            resultsHTML += `
              <div class="winner-list-item">
                <span class="winner-name">${name}</span>
                <span class="winner-count">${count} ${count === 1 ? 'lootje' : 'lootjes'}</span>
              </div>
            `;
          });
        
        resultsHTML += `
              </div>
            </div>
            
            <div>
              <h3>📊 Kansen per deelnemer</h3>
              <div class="chances-list">
        `;
        
        participants.forEach(p => {
          const percentage = ((p.tickets / allTickets.length) * 100).toFixed(1);
          const wonTickets = winners[p.name] || 0;
          resultsHTML += `
            <div class="chances-list-item">
              <span class="participant-name">${p.name}</span>
              <span class="participant-chances">${percentage}% kans (${p.tickets}/${allTickets.length})</span>
              <span class="participant-wins ${wonTickets > 0 ? 'has-wins' : 'no-wins'}">${wonTickets} gewonnen</span>
            </div>
          `;
        });
        
        resultsHTML += `
              </div>
            </div>
          </div>
        `;
        
        resultsContainer.innerHTML = resultsHTML;
        
        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
        
        console.log('🎉 Lottery completed!', { winners, drawnTickets });
      }
      
      // Add initial participant rows
      addParticipant();
      addParticipant();
      addParticipant();
      
      // Add event listeners
      addBtn.addEventListener('click', addParticipant);
      drawBtn.addEventListener('click', drawLottery);
      
      // Also make functions globally available
      window.voegRijToe = addParticipant;
      window.trekLootjes = drawLottery;
      
      console.log('✅ Fallback lottery system initialized');
    }
  </script>
</body>
</html>
