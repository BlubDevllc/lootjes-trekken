// Optimized JavaScript with better performance
const LootjesTrekker = {
  // Cache DOM elements
  cache: {
    container: null,
    resultDiv: null,
    aantalInput: null
  },
  
  init() {
    this.cache.container = document.getElementById('personenContainer');
    this.cache.resultDiv = document.getElementById('result');
    this.cache.aantalInput = document.getElementById('aantalTeTrekken');
  },
  
  voegRijToe() {
    const container = this.cache.container || document.getElementById('personenContainer');
    const fragment = document.createDocumentFragment();
    const nieuweRij = document.createElement('div');
    nieuweRij.className = 'persoon-rij';
    nieuweRij.innerHTML = `
      <input type="text" placeholder="Naam deelnemer" class="naam-input" aria-label="Naam van deelnemer">
      <input type="number" placeholder="Aantal" min="1" class="aantal-input" aria-label="Aantal lootjes">
      <button onclick="LootjesTrekker.verwijderRij(this)" aria-label="Verwijder deze deelnemer">-</button>
    `;
    fragment.appendChild(nieuweRij);
    container.appendChild(fragment);
  },

  verwijderRij(button) {
    const rijen = document.querySelectorAll('.persoon-rij');
    if (rijen.length > 1) {
      button.parentElement.remove();
    }
  },

  // Optimized shuffle algorithm (Fisher-Yates)
  shuffleArray(array) {
    const arr = [...array]; // Create copy without mutating original
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  trekLootjes() {
    const startTime = performance.now();
    
    // Use cached elements or fallback
    const naamInputs = document.querySelectorAll('.naam-input');
    const aantalInputs = document.querySelectorAll('.aantal-input');
    const aantalTeTrekken = parseInt((this.cache.aantalInput || document.getElementById("aantalTeTrekken")).value);
    
    const lootjes = [];
    const personen = [];

    // Optimized data collection
    for (let i = 0; i < naamInputs.length; i++) {
      const naam = naamInputs[i].value.trim();
      const aantal = parseInt(aantalInputs[i].value);
      
      if (naam && aantal > 0) {
        personen.push({ naam, aantal });
        // Use Array.fill for better performance
        lootjes.push(...new Array(aantal).fill(naam));
      }
    }

    if (lootjes.length === 0) {
      this.showError('Voer ten minste één deelnemer met een geldig aantal lootjes in.');
      return;
    }

    // Optimized lottery logic
    const lootjesOmTeTrekken = Math.min(aantalTeTrekken || lootjes.length, lootjes.length);
    const winnende_lootjes = this.shuffleArray(lootjes).slice(0, lootjesOmTeTrekken);
    
    // Count winners efficiently
    const winnaars = winnende_lootjes.reduce((acc, winnaar) => {
      acc[winnaar] = (acc[winnaar] || 0) + 1;
      return acc;
    }, {});

    const endTime = performance.now();
    this.displayResults(lootjes, lootjesOmTeTrekken, personen, winnende_lootjes, winnaars, endTime - startTime);
  },

  showError(message) {
    const resultDiv = this.cache.resultDiv || document.getElementById('result');
    resultDiv.innerHTML = `<div style="color: #e53e3e; padding: 20px; text-align: center; font-weight: 600;">${message}</div>`;
  },

  displayResults(lootjes, lootjesOmTeTrekken, personen, winnende_lootjes, winnaars, executionTime) {
    const resultDiv = this.cache.resultDiv || document.getElementById('result');
    
    let output = `
      <div class="stats">
        <div class="stat-card">
          <div class="stat-number">${lootjes.length}</div>
          <div>Totaal lootjes</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${lootjesOmTeTrekken}</div>
          <div>Getrokken</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${Object.keys(winnaars).length}</div>
          <div>Winnaars</div>
        </div>
      </div>
    `;
    
    if (lootjesOmTeTrekken < lootjes.length) {
      output += `<p style="text-align: center; color: #718096; font-style: italic;">Er zijn ${lootjes.length - lootjesOmTeTrekken} lootjes niet getrokken.</p>`;
    }

    // Optimized results display
    output += '<h3>📊 Kansen per deelnemer:</h3><ul>';
    personen.forEach(persoon => {
      const kansPercentage = ((persoon.aantal / lootjes.length) * 100).toFixed(1);
      const gewonnen = winnaars[persoon.naam] || 0;
      const status = gewonnen > 0 ? 'green' : '#718096';
      output += `<li><strong>${persoon.naam}</strong>: ${persoon.aantal} lootjes (${kansPercentage}% kans) - <span style="color: ${status}; font-weight: 600;">${gewonnen} gewonnen</span></li>`;
    });
    output += '</ul>';
    
    // Enhanced winner display
    output += '<h3>🏆 Winnende lootjes (in volgorde van trekking):</h3><ol class="winner-list">';
    winnende_lootjes.forEach(winnaar => {
      output += `<li><strong>${winnaar}</strong> 🎉</li>`;
    });
    output += '</ol>';
    
    output += `<p style="text-align: center; color: #718096; font-size: 0.9em; margin-top: 20px;">
      Loting uitgevoerd in ${executionTime.toFixed(2)}ms
    </p>`;

    resultDiv.innerHTML = output;
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  LootjesTrekker.init();
});

// Legacy function wrappers for backward compatibility
function voegRijToe() { 
  LootjesTrekker.voegRijToe(); 
}

function verwijderRij(button) { 
  LootjesTrekker.verwijderRij(button); 
}

function trekLootjes() { 
  LootjesTrekker.trekLootjes(); 
}
