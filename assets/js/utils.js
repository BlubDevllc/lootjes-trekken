/**
 * Utility Functions
 * Helper functions for the Lottery App
 * 
 * @version 2.0.0
 * @author BlubDevllc
 * @description Utility functions and helpers
 */

import { APP_CONFIG } from './config.js';

/**
 * Utility class with static methods for common operations
 */
export class Utils {
  /**
   * Debounce function calls to improve performance
   * @param {Function} func - The function to debounce
   * @param {number} delay - Delay in milliseconds
   * @returns {Function} Debounced function
   */
  static debounce(func, delay = APP_CONFIG.performance.debounceDelay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  /**
   * Throttle function calls
   * @param {Function} func - The function to throttle
   * @param {number} limit - Time limit in milliseconds
   * @returns {Function} Throttled function
   */
  static throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  /**
   * Validate participant name
   * @param {string} name - The name to validate
   * @returns {Object} Validation result
   */
  static validateName(name) {
    const trimmedName = name.trim();
    const { minNameLength, maxNameLength } = APP_CONFIG.validation;
    
    if (!trimmedName) {
      return { 
        isValid: false, 
        error: 'Naam is verplicht' 
      };
    }
    
    if (trimmedName.length < minNameLength) {
      return { 
        isValid: false, 
        error: `Naam moet minimaal ${minNameLength} karakter bevatten` 
      };
    }
    
    if (trimmedName.length > maxNameLength) {
      return { 
        isValid: false, 
        error: `Naam mag maximaal ${maxNameLength} karakters bevatten` 
      };
    }
    
    return { 
      isValid: true, 
      value: trimmedName 
    };
  }

  /**
   * Validate number of tickets
   * @param {number|string} tickets - The number to validate
   * @returns {Object} Validation result
   */
  static validateTickets(tickets) {
    const num = parseInt(tickets, 10);
    const { minTickets, maxTickets } = APP_CONFIG.validation;
    
    if (isNaN(num)) {
      return { 
        isValid: false, 
        error: 'Aantal moet een geldig getal zijn' 
      };
    }
    
    if (num < minTickets) {
      return { 
        isValid: false, 
        error: `Minimum aantal lootjes is ${minTickets}` 
      };
    }
    
    if (num > maxTickets) {
      return { 
        isValid: false, 
        error: `Maximum aantal lootjes is ${maxTickets}` 
      };
    }
    
    return { 
      isValid: true, 
      value: num 
    };
  }

  /**
   * Format execution time for display
   * @param {number} timeMs - Time in milliseconds
   * @returns {string} Formatted time string
   */
  static formatExecutionTime(timeMs) {
    if (timeMs < 1) {
      return '< 1ms';
    } else if (timeMs < 1000) {
      return `${timeMs.toFixed(1)}ms`;
    } else {
      return `${(timeMs / 1000).toFixed(2)}s`;
    }
  }

  /**
   * Format percentage for display
   * @param {number} percentage - Percentage value
   * @param {number} decimals - Number of decimal places
   * @returns {string} Formatted percentage string
   */
  static formatPercentage(percentage, decimals = 1) {
    return `${percentage.toFixed(decimals)}%`;
  }

  /**
   * Create a deep copy of an object
   * @param {*} obj - Object to copy
   * @returns {*} Deep copy of the object
   */
  static deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    
    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
      return obj.map(item => Utils.deepClone(item));
    }
    
    if (typeof obj === 'object') {
      const clonedObj = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          clonedObj[key] = Utils.deepClone(obj[key]);
        }
      }
      return clonedObj;
    }
  }

  /**
   * Generate a unique ID
   * @param {string} prefix - Optional prefix for the ID
   * @returns {string} Unique ID
   */
  static generateId(prefix = 'id') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Safely get nested object property
   * @param {Object} obj - Object to search
   * @param {string} path - Dot notation path (e.g., 'a.b.c')
   * @param {*} defaultValue - Default value if path not found
   * @returns {*} Found value or default value
   */
  static getNestedProperty(obj, path, defaultValue = null) {
    return path.split('.').reduce((current, key) => {
      return (current && current[key] !== undefined) ? current[key] : defaultValue;
    }, obj);
  }

  /**
   * Log messages in development mode
   * @param {string} level - Log level (log, warn, error)
   * @param {string} message - Message to log
   * @param {*} data - Additional data to log
   */
  static log(level, message, data = null) {
    if (!APP_CONFIG.development.enableLogging) return;
    
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${APP_CONFIG.name}: ${message}`;
    
    switch (level) {
      case 'warn':
        console.warn(logMessage, data);
        break;
      case 'error':
        console.error(logMessage, data);
        break;
      default:
        console.log(logMessage, data);
    }
  }

  /**
   * Measure and log performance
   * @param {string} operationName - Name of the operation
   * @param {Function} operation - Function to measure
   * @returns {*} Result of the operation
   */
  static async measurePerformance(operationName, operation) {
    if (!APP_CONFIG.development.enablePerformanceMonitoring) {
      return await operation();
    }
    
    const startTime = performance.now();
    const result = await operation();
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    Utils.log('log', `Performance: ${operationName}`, {
      duration: Utils.formatExecutionTime(duration),
      durationMs: duration
    });
    
    return result;
  }

  /**
   * Create DOM element with attributes and content
   * @param {string} tag - HTML tag name
   * @param {Object} attributes - Element attributes
   * @param {string|Element|Array} content - Element content
   * @returns {Element} Created DOM element
   */
  static createElement(tag, attributes = {}, content = null) {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else {
        element.setAttribute(key, value);
      }
    });
    
    // Set content
    if (content !== null) {
      if (typeof content === 'string') {
        element.textContent = content;
      } else if (content instanceof Element) {
        element.appendChild(content);
      } else if (Array.isArray(content)) {
        content.forEach(child => {
          if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
          } else if (child instanceof Element) {
            element.appendChild(child);
          }
        });
      }
    }
    
    return element;
  }

  /**
   * Animate element with CSS classes
   * @param {Element} element - Element to animate
   * @param {string} animationClass - CSS animation class
   * @param {number} duration - Animation duration
   * @returns {Promise} Promise that resolves when animation completes
   */
  static animateElement(element, animationClass, duration = APP_CONFIG.animations.fadeInDuration) {
    return new Promise((resolve) => {
      element.classList.add(animationClass);
      
      setTimeout(() => {
        element.classList.remove(animationClass);
        resolve();
      }, duration);
    });
  }

  /**
   * Smooth scroll to element
   * @param {Element|string} target - Element or selector to scroll to
   * @param {Object} options - Scroll options
   */
  static scrollToElement(target, options = {}) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    
    if (element) {
      const defaultOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      };
      
      element.scrollIntoView({ ...defaultOptions, ...options });
    }
  }
}
