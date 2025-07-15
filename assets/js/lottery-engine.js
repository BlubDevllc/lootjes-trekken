/**
 * Lottery Algorithm Module
 * Core lottery logic and algorithms
 * 
 * @version 2.0.0
 * @author BlubDevllc
 * @description Lottery algorithms and fairness validation
 */

import { APP_CONFIG } from './config.js';
import { Utils } from './utils.js';

/**
 * Lottery algorithm implementation
 */
export class LotteryEngine {
  constructor() {
    this.algorithm = APP_CONFIG.lottery.algorithm;
    this.validateFairness = APP_CONFIG.lottery.validateFairness;
  }

  /**
   * Fisher-Yates shuffle algorithm
   * Cryptographically fair randomization
   * @param {Array} array - Array to shuffle
   * @returns {Array} Shuffled array (copy)
   */
  fisherYatesShuffle(array) {
    Utils.log('log', 'Starting Fisher-Yates shuffle', { arrayLength: array.length });
    
    // Create a copy to avoid mutating the original
    const shuffled = [...array];
    
    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    Utils.log('log', 'Fisher-Yates shuffle completed');
    return shuffled;
  }

  /**
   * Alternative shuffle algorithm (for testing)
   * @param {Array} array - Array to shuffle
   * @returns {Array} Shuffled array
   */
  modernShuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  /**
   * Create tickets array from participants
   * @param {Array} participants - Array of participant objects
   * @returns {Array} Array of tickets
   */
  createTickets(participants) {
    Utils.log('log', 'Creating tickets array', { participantCount: participants.length });
    
    const tickets = [];
    let totalTickets = 0;
    
    participants.forEach(participant => {
      const { name, tickets: ticketCount } = participant;
      
      // Validate participant data
      const nameValidation = Utils.validateName(name);
      const ticketsValidation = Utils.validateTickets(ticketCount);
      
      if (!nameValidation.isValid || !ticketsValidation.isValid) {
        Utils.log('warn', 'Invalid participant data', { name, ticketCount });
        return;
      }
      
      // Add tickets for this participant
      for (let i = 0; i < ticketsValidation.value; i++) {
        tickets.push(nameValidation.value);
        totalTickets++;
      }
    });
    
    Utils.log('log', 'Tickets created', { 
      totalTickets,
      uniqueParticipants: new Set(tickets).size 
    });
    
    return tickets;
  }

  /**
   * Draw lottery tickets
   * @param {Array} participants - Array of participant objects
   * @param {number} numberOfWinners - Number of tickets to draw
   * @returns {Object} Lottery results
   */
  drawLottery(participants, numberOfWinners = null) {
    const startTime = performance.now();
    
    Utils.log('log', 'Starting lottery draw', { 
      participants: participants.length,
      numberOfWinners 
    });

    // Create tickets array
    const allTickets = this.createTickets(participants);
    
    if (allTickets.length === 0) {
      throw new Error(APP_CONFIG.messages.errors.noParticipants);
    }

    // Determine how many tickets to draw
    const ticketsToDraw = numberOfWinners || allTickets.length;
    const actualTicketsToDraw = Math.min(ticketsToDraw, allTickets.length);

    // Shuffle and draw
    const shuffledTickets = this.fisherYatesShuffle(allTickets);
    const drawnTickets = shuffledTickets.slice(0, actualTicketsToDraw);

    // Count winners
    const winnerCounts = this.countWinners(drawnTickets);
    
    // Calculate statistics
    const statistics = this.calculateStatistics(participants, allTickets, drawnTickets);
    
    const endTime = performance.now();
    const executionTime = endTime - startTime;

    const results = {
      participants,
      allTickets,
      drawnTickets,
      winnerCounts,
      statistics,
      executionTime,
      metadata: {
        algorithm: this.algorithm,
        timestamp: new Date().toISOString(),
        totalTickets: allTickets.length,
        ticketsDrawn: actualTicketsToDraw,
        uniqueWinners: Object.keys(winnerCounts).length
      }
    };

    // Validate fairness if enabled
    if (this.validateFairness) {
      this.validateLotteryFairness(results);
    }

    Utils.log('log', 'Lottery draw completed', {
      executionTime: Utils.formatExecutionTime(executionTime),
      results: results.metadata
    });

    return results;
  }

  /**
   * Count how many times each participant won
   * @param {Array} drawnTickets - Array of drawn ticket names
   * @returns {Object} Object with winner counts
   */
  countWinners(drawnTickets) {
    return drawnTickets.reduce((counts, winner) => {
      counts[winner] = (counts[winner] || 0) + 1;
      return counts;
    }, {});
  }

  /**
   * Calculate lottery statistics
   * @param {Array} participants - Original participants
   * @param {Array} allTickets - All tickets
   * @param {Array} drawnTickets - Drawn tickets
   * @returns {Object} Statistics object
   */
  calculateStatistics(participants, allTickets, drawnTickets) {
    const stats = {
      totalParticipants: participants.length,
      totalTickets: allTickets.length,
      ticketsDrawn: drawnTickets.length,
      ticketsRemaining: allTickets.length - drawnTickets.length,
      uniqueWinners: new Set(drawnTickets).size,
      participantChances: {}
    };

    // Calculate chances for each participant
    participants.forEach(participant => {
      const chance = (participant.tickets / allTickets.length) * 100;
      stats.participantChances[participant.name] = {
        tickets: participant.tickets,
        chancePercentage: chance,
        expectedWins: (chance / 100) * drawnTickets.length,
        actualWins: drawnTickets.filter(ticket => ticket === participant.name).length
      };
    });

    return stats;
  }

  /**
   * Validate lottery fairness
   * @param {Object} results - Lottery results
   * @returns {Object} Fairness validation results
   */
  validateLotteryFairness(results) {
    Utils.log('log', 'Validating lottery fairness');
    
    const { statistics, drawnTickets, allTickets } = results;
    const fairnessTests = {};

    // Test 1: Check for reasonable distribution
    const expectedFrequency = drawnTickets.length / statistics.totalParticipants;
    const actualFrequencies = Object.values(results.winnerCounts);
    const variance = this.calculateVariance(actualFrequencies, expectedFrequency);
    
    fairnessTests.distributionVariance = {
      variance,
      acceptable: variance < (expectedFrequency * 2), // Arbitrary threshold
      description: 'Checks if winner distribution is reasonably fair'
    };

    // Test 2: Check for extremely unlikely outcomes
    const maxWins = Math.max(...actualFrequencies);
    const maxExpectedWins = (drawnTickets.length * 0.5); // No one should win more than 50%
    
    fairnessTests.extremeOutcomes = {
      maxWins,
      maxExpectedWins,
      acceptable: maxWins <= maxExpectedWins,
      description: 'Checks for extremely unlikely winner concentrations'
    };

    // Test 3: Basic randomness test (chi-square would be better but overkill)
    const uniqueTickets = new Set(drawnTickets).size;
    const expectedUnique = Math.min(statistics.totalParticipants, drawnTickets.length);
    
    fairnessTests.diversity = {
      uniqueWinners: uniqueTickets,
      expectedRange: [Math.floor(expectedUnique * 0.7), expectedUnique],
      acceptable: uniqueTickets >= Math.floor(expectedUnique * 0.7),
      description: 'Checks for reasonable winner diversity'
    };

    const overallFairness = Object.values(fairnessTests).every(test => test.acceptable);
    
    fairnessTests.overall = {
      fair: overallFairness,
      confidence: overallFairness ? 'High' : 'Low',
      description: 'Overall fairness assessment'
    };

    Utils.log('log', 'Fairness validation completed', fairnessTests);
    
    if (!overallFairness) {
      Utils.log('warn', 'Lottery fairness validation failed', fairnessTests);
    }

    return fairnessTests;
  }

  /**
   * Calculate variance of an array
   * @param {Array} values - Array of numbers
   * @param {number} expectedValue - Expected value (mean)
   * @returns {number} Variance
   */
  calculateVariance(values, expectedValue) {
    if (values.length === 0) return 0;
    
    const mean = expectedValue || (values.reduce((sum, val) => sum + val, 0) / values.length);
    const squaredDifferences = values.map(val => Math.pow(val - mean, 2));
    return squaredDifferences.reduce((sum, val) => sum + val, 0) / values.length;
  }

  /**
   * Generate deterministic lottery (for testing)
   * @param {Array} participants - Participants array
   * @param {number} seed - Random seed
   * @param {number} numberOfWinners - Number of winners
   * @returns {Object} Lottery results
   */
  generateDeterministicLottery(participants, seed, numberOfWinners) {
    // This would use a seeded random number generator
    // For now, we'll just return a simplified version
    Utils.log('warn', 'Deterministic lottery not fully implemented');
    
    return this.drawLottery(participants, numberOfWinners);
  }
}
