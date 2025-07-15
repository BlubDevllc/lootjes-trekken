/**
 * Main JavaScript Entry Point
 * Lottery Application Controller
 * 
 * @version 2.0.0
 * @author BlubDevllc
 * @description Main application logic using modern ES6+ modules
 */

import { APP_CONFIG } from './config.js';
import { Utils } from './utils.js';
import { LotteryEngine } from './lottery-engine.js';

/**
 * Main Lottery Application Class
 */
class LotteryApp {
  constructor() {
    this.engine = new LotteryEngine();
    this.cache = new Map();
    this.participants = [];
    
    Utils.log('log', 'Lottery app initialized');
  }

  /**
   * Initialize the application
   */
  async init() {
    try {
      this.cacheElements();
      this.attachEventListeners();
      this.createInitialParticipantRows();
      
      Utils.log('log', 'Application initialized successfully');
    } catch (error) {
      Utils.log('error', 'Failed to initialize application', error);
      this.showError(APP_CONFIG.messages.errors.unknownError);
    }
  }

  /**
   * Cache DOM elements for performance
   */
  cacheElements() {
    const selectors = APP_CONFIG.selectors;
    
    this.cache.set('participantContainer', document.querySelector('#participants-container'));
    this.cache.set('resultsContainer', document.querySelector('#lottery-results'));
    this.cache.set('addButton', document.querySelector('#add-participant-btn'));
    this.cache.set('drawButton', document.querySelector('#draw-lottery-btn'));
    this.cache.set('numberOfTicketsInput', document.querySelector('#number-of-tickets'));
    
    // Validate that required elements exist
    if (!this.cache.get('participantContainer')) {
      throw new Error('Required DOM elements not found');
    }
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    const addButton = this.cache.get('addButton');
    const drawButton = this.cache.get('drawButton');
    
    if (addButton) {
      addButton.addEventListener('click', () => this.addParticipant());
    }
    
    if (drawButton) {
      drawButton.addEventListener('click', () => this.drawLottery());
    }

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        this.drawLottery();
      }
      if (e.ctrlKey && e.key === '+') {
        e.preventDefault();
        this.addParticipant();
      }
    });
  }

  /**
   * Create initial participant input rows
   */
  createInitialParticipantRows() {
    const container = this.cache.get('participantContainer');
    if (!container) return;

    // Clear container
    container.innerHTML = '';

    // Add initial rows
    for (let i = 0; i < APP_CONFIG.ui.defaultParticipantRows; i++) {
      this.createParticipantRow();
    }
  }

  /**
   * Create a single participant input row
   */
  createParticipantRow() {
    const container = this.cache.get('participantContainer');
    if (!container) return;

    const rowId = Utils.generateId('participant');
    const row = Utils.createElement('div', {
      className: 'participant-row',
      'data-participant-id': rowId
    });

    // Name input
    const nameInput = Utils.createElement('input', {
      type: 'text',
      className: 'form-input participant-name-input',
      placeholder: 'Naam deelnemer',
      'aria-label': 'Naam van deelnemer'
    });

    // Tickets input
    const ticketsInput = Utils.createElement('input', {
      type: 'number',
      className: 'form-input participant-tickets-input',
      placeholder: 'Aantal',
      min: '1',
      'aria-label': 'Aantal lootjes'
    });

    // Remove button
    const removeButton = Utils.createElement('button', {
      className: 'btn btn-danger btn-sm participant-remove-btn',
      'aria-label': 'Verwijder deze deelnemer',
      type: 'button'
    }, '−');

    // Add event listener to remove button
    removeButton.addEventListener('click', () => {
      this.removeParticipantRow(row);
    });

    // Add validation listeners
    nameInput.addEventListener('blur', this.validateParticipantName);
    ticketsInput.addEventListener('blur', this.validateParticipantTickets);

    // Assemble row
    row.appendChild(nameInput);
    row.appendChild(ticketsInput);
    row.appendChild(removeButton);

    // Add to container with animation
    container.appendChild(row);
    
    // Trigger animation
    setTimeout(() => {
      Utils.animateElement(row, 'participant-slide-in');
    }, 10);

    return row;
  }

  /**
   * Add a new participant row
   */
  addParticipant() {
    const container = this.cache.get('participantContainer');
    if (!container) return;

    const currentRows = container.querySelectorAll('.participant-row').length;
    
    if (currentRows >= APP_CONFIG.performance.maxParticipants) {
      this.showError(APP_CONFIG.messages.errors.tooManyParticipants);
      return;
    }

    this.createParticipantRow();
    Utils.log('log', 'Participant row added', { totalRows: currentRows + 1 });
  }

  /**
   * Remove a participant row
   */
  removeParticipantRow(row) {
    const container = this.cache.get('participantContainer');
    if (!container) return;

    const remainingRows = container.querySelectorAll('.participant-row').length;
    
    if (remainingRows <= APP_CONFIG.ui.minParticipantRows) {
      Utils.log('warn', 'Cannot remove last participant row');
      return;
    }

    // Animate out then remove
    Utils.animateElement(row, 'participant-slide-out', 300).then(() => {
      if (row.parentNode) {
        row.parentNode.removeChild(row);
      }
    });

    Utils.log('log', 'Participant row removed', { remainingRows: remainingRows - 1 });
  }

  /**
   * Validate participant name
   */
  validateParticipantName(event) {
    const input = event.target;
    const validation = Utils.validateName(input.value);
    
    if (!validation.isValid) {
      input.classList.add('error');
      input.title = validation.error;
    } else {
      input.classList.remove('error');
      input.title = '';
    }
  }

  /**
   * Validate participant tickets
   */
  validateParticipantTickets(event) {
    const input = event.target;
    const validation = Utils.validateTickets(input.value);
    
    if (!validation.isValid) {
      input.classList.add('error');
      input.title = validation.error;
    } else {
      input.classList.remove('error');
      input.title = '';
    }
  }

  /**
   * Collect participant data from form
   */
  collectParticipantData() {
    const container = this.cache.get('participantContainer');
    if (!container) return [];

    const rows = container.querySelectorAll('.participant-row');
    const participants = [];

    rows.forEach(row => {
      const nameInput = row.querySelector('.participant-name-input');
      const ticketsInput = row.querySelector('.participant-tickets-input');
      
      if (nameInput && ticketsInput) {
        const nameValidation = Utils.validateName(nameInput.value);
        const ticketsValidation = Utils.validateTickets(ticketsInput.value);
        
        if (nameValidation.isValid && ticketsValidation.isValid) {
          participants.push({
            name: nameValidation.value,
            tickets: ticketsValidation.value
          });
        }
      }
    });

    return participants;
  }

  /**
   * Draw the lottery
   */
  async drawLottery() {
    try {
      const participants = this.collectParticipantData();
      
      if (participants.length === 0) {
        this.showError(APP_CONFIG.messages.errors.noParticipants);
        return;
      }

      // Get number of tickets to draw
      const numberOfTicketsInput = this.cache.get('numberOfTicketsInput');
      const numberOfTickets = numberOfTicketsInput ? 
        parseInt(numberOfTicketsInput.value) || null : null;

      // Show loading state
      this.showLoading();

      // Perform lottery draw with performance measurement
      const results = await Utils.measurePerformance('Lottery Draw', () => {
        return this.engine.drawLottery(participants, numberOfTickets);
      });

      // Display results
      this.displayResults(results);

      // Auto scroll to results if enabled
      if (APP_CONFIG.ui.autoScrollToResults) {
        setTimeout(() => {
          Utils.scrollToElement(this.cache.get('resultsContainer'));
        }, 300);
      }

      Utils.log('log', 'Lottery completed successfully', results.metadata);

    } catch (error) {
      Utils.log('error', 'Lottery draw failed', error);
      this.showError(error.message || APP_CONFIG.messages.errors.unknownError);
    }
  }

  /**
   * Show loading state
   */
  showLoading() {
    const resultsContainer = this.cache.get('resultsContainer');
    if (!resultsContainer) return;

    resultsContainer.innerHTML = `
      <div class="lottery-results">
        <div class="loading-spinner">
          <div class="lottery-balls">
            <div class="lottery-ball"></div>
            <div class="lottery-ball"></div>
            <div class="lottery-ball"></div>
            <div class="lottery-ball"></div>
            <div class="lottery-ball"></div>
          </div>
          <p>Lootjes worden getrokken...</p>
        </div>
      </div>
    `;
  }

  /**
   * Display lottery results
   */
  displayResults(results) {
    const resultsContainer = this.cache.get('resultsContainer');
    if (!resultsContainer) return;

    const { statistics, drawnTickets, winnerCounts, executionTime, metadata } = results;

    // Create results HTML
    let html = `
      <div class="lottery-results">
        <div class="lottery-stats">
          ${this.createStatCard('Totaal lootjes', statistics.totalTickets)}
          ${this.createStatCard('Getrokken', statistics.ticketsDrawn)}
          ${this.createStatCard('Winnaars', statistics.uniqueWinners)}
          ${this.createStatCard('Restant', statistics.ticketsRemaining)}
        </div>
    `;

    // Add chances section
    html += this.createChancesSection(results);

    // Add winners section
    html += this.createWinnersSection(drawnTickets);

    // Add execution time
    html += `
        <div class="execution-time">
          Loting uitgevoerd in ${Utils.formatExecutionTime(executionTime)}
        </div>
      </div>
    `;

    resultsContainer.innerHTML = html;

    // Trigger animation
    setTimeout(() => {
      Utils.animateElement(resultsContainer.querySelector('.lottery-results'), 'slide-in-up');
    }, 10);
  }

  /**
   * Create a statistics card
   */
  createStatCard(label, value) {
    return `
      <div class="stat-card">
        <div class="stat-number">${value}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }

  /**
   * Create chances section
   */
  createChancesSection(results) {
    const { statistics } = results;
    
    let html = `
      <div class="section">
        <h3 class="section-title">Kansen per deelnemer</h3>
        <ul class="chances-list">
    `;

    Object.entries(statistics.participantChances).forEach(([name, data]) => {
      const hasWins = data.actualWins > 0;
      html += `
        <li class="chances-list-item">
          <div class="participant-info">
            <span class="participant-name">${name}</span>
            <span class="participant-chances">
              ${data.tickets} lootjes (${Utils.formatPercentage(data.chancePercentage)})
            </span>
          </div>
          <span class="participant-wins ${hasWins ? 'has-wins' : 'no-wins'}">
            ${data.actualWins} gewonnen
          </span>
        </li>
      `;
    });

    html += `
        </ul>
      </div>
    `;

    return html;
  }

  /**
   * Create winners section
   */
  createWinnersSection(drawnTickets) {
    let html = `
      <div class="section">
        <h3 class="section-title">Winnende lootjes (in volgorde van trekking)</h3>
        <ol class="winner-list">
    `;

    drawnTickets.slice(0, APP_CONFIG.ui.maxDisplayedWinners).forEach(winner => {
      html += `<li class="winner-list-item"><span class="winner-name">${winner}</span></li>`;
    });

    if (drawnTickets.length > APP_CONFIG.ui.maxDisplayedWinners) {
      html += `<li class="winner-list-item">... en ${drawnTickets.length - APP_CONFIG.ui.maxDisplayedWinners} meer</li>`;
    }

    html += `
        </ol>
      </div>
    `;

    return html;
  }

  /**
   * Show error message
   */
  showError(message) {
    const resultsContainer = this.cache.get('resultsContainer');
    if (!resultsContainer) return;

    resultsContainer.innerHTML = `
      <div class="alert alert-danger">
        <strong>Fout:</strong> ${message}
      </div>
    `;

    Utils.log('error', 'Error displayed to user', message);
  }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const app = new LotteryApp();
    await app.init();
    
    // Make app globally available
    window.LotteryApp = app;
    
    Utils.log('log', 'Application ready and globally available');
  } catch (error) {
    console.error('Failed to initialize Lottery App:', error);
  }
});

// Legacy function wrappers for backward compatibility
window.voegRijToe = () => {
  if (window.LotteryApp) {
    window.LotteryApp.addParticipant();
  }
};

window.trekLootjes = () => {
  if (window.LotteryApp) {
    window.LotteryApp.drawLottery();
  }
};

export { LotteryApp };
