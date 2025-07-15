/**
 * App Configuration
 * Central configuration object for the Lottery App
 * 
 * @version 2.0.0
 * @author BlubDevllc
 * @description Application configuration and constants
 */

export const APP_CONFIG = {
  // Application metadata
  name: 'Lootjes Trekker',
  version: '2.0.0',
  author: 'BlubDevllc',
  
  // Performance settings
  performance: {
    animationDuration: 300,
    debounceDelay: 150,
    maxParticipants: 1000,
    maxTicketsPerParticipant: 10000
  },
  
  // UI settings
  ui: {
    defaultParticipantRows: 3,
    minParticipantRows: 1,
    maxDisplayedWinners: 100,
    autoScrollToResults: true
  },
  
  // Validation rules
  validation: {
    minNameLength: 1,
    maxNameLength: 50,
    minTickets: 1,
    maxTickets: 10000,
    allowDuplicateNames: true
  },
  
  // Animation settings
  animations: {
    slideInDuration: 400,
    fadeInDuration: 300,
    bounceDelay: 200,
    staggerDelay: 100
  },
  
  // Lottery algorithm settings
  lottery: {
    algorithm: 'fisher-yates',
    seedRandom: false, // Set to true for reproducible results in testing
    validateFairness: true
  },
  
  // Error messages
  messages: {
    errors: {
      noParticipants: 'Voer ten minste één deelnemer met een geldig aantal lootjes in.',
      invalidInput: 'Controleer of alle invoervelden correct zijn ingevuld.',
      tooManyParticipants: 'Maximaal 1000 deelnemers toegestaan.',
      networkError: 'Er is een netwerkfout opgetreden.',
      unknownError: 'Er is een onbekende fout opgetreden.'
    },
    success: {
      lotteryComplete: 'Loting succesvol uitgevoerd!',
      participantAdded: 'Deelnemer toegevoegd.',
      participantRemoved: 'Deelnemer verwijderd.'
    },
    warnings: {
      duplicateName: 'Deze naam bestaat al.',
      manyTickets: 'Let op: dit is een groot aantal lootjes.'
    }
  },
  
  // CSS class names (for consistency)
  cssClasses: {
    container: 'container',
    participantRow: 'participant-row',
    formInput: 'form-input',
    button: 'btn',
    buttonPrimary: 'btn-primary',
    buttonSuccess: 'btn-success',
    buttonDanger: 'btn-danger',
    card: 'card',
    alert: 'alert',
    alertSuccess: 'alert-success',
    alertDanger: 'alert-danger',
    lotteryResults: 'lottery-results',
    statCard: 'stat-card',
    winnerList: 'winner-list',
    winnerListItem: 'winner-list-item'
  },
  
  // DOM selectors
  selectors: {
    participantContainer: '#participants-container',
    resultsContainer: '#lottery-results',
    addButton: '#add-participant-btn',
    drawButton: '#draw-lottery-btn',
    numberOfTicketsInput: '#number-of-tickets',
    participantNameInput: '.participant-name-input',
    participantTicketsInput: '.participant-tickets-input',
    removeButton: '.participant-remove-btn'
  },
  
  // Development settings
  development: {
    enableLogging: true,
    enablePerformanceMonitoring: true,
    enableDebugMode: false
  }
};

// Freeze the configuration to prevent accidental modifications
Object.freeze(APP_CONFIG);
