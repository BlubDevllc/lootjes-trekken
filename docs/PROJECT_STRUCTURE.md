# Project Structuur - Lootjes Trekker v2.0

Een volledig geherstructureerd project met moderne code-architectuur en modulaire opzet.

## Nieuwe Projectstructuur

```
lootjes-trekken/
├── assets/                   # Alle frontend assets
│   ├── css/                 # Modulaire CSS bestanden
│   │   ├── variables.css    # Design tokens & CSS variabelen
│   │   ├── base.css        # Reset & basis styling
│   │   ├── layout.css      # Layout componenten
│   │   ├── components.css  # UI componenten
│   │   ├── lottery.css     # Lootjes-specifieke styling
│   │   ├── responsive.css  # Responsive design
│   │   └── main.css        # Main entry point
│   └── js/                 # Modulaire JavaScript bestanden
│       ├── config.js       # App configuratie
│       ├── utils.js        # Utility functies
│       ├── lottery-engine.js # Loting algoritmes
│       ├── main.js         # Main app logic
│       └── legacy-script.js # Oude script (backup)
├── docs/                    # Documentatie
│   ├── README.md           # Project documentatie
│   ├── PROJECT_STRUCTURE.md # Dit bestand
│   └── UITLEG_VOOR_BEGINNERS.md # Beginner uitleg
├── config/                 # Configuratie bestanden (toekomstig gebruik)
├── index.php              # Hoofdpagina
└── LICENSE.md             # Licentie informatie
```

## Architectuur Principes

### 1. **Modulaire CSS Architectuur**
- **Separation of Concerns**: Elke CSS file heeft een specifieke verantwoordelijkheid
- **Design Tokens**: Centrale CSS variabelen in `variables.css`
- **Mobile-First**: Responsive design vanaf de kleinste schermen
- **BEM-achtige naamgeving**: Consistente class naamgeving

### 2. **Modern JavaScript ES6+ Modules**
- **Class-based Architecture**: OOP principes toegepast
- **Import/Export Modules**: Modulaire code structuur
- **Error Handling**: Robuuste foutafhandeling
- **Performance Optimized**: Caching en debouncing

### 3. **Configuratie-Gedreven Development**
- **Centralized Config**: Alle instellingen in `config.js`
- **Environment Aware**: Development vs production settings
- **Customizable**: Eenvoudig aan te passen instellingen

## CSS Module Systeem

### Variables.css - Design System
```css
:root {
  /* Lottery Theme Colors */
  --primary-gold: #FFD700;
  --deep-purple: #4A148C;
  --emerald-green: #00C851;
  
  /* Typography Scale */
  --font-size-xs: 0.75rem;
  --font-size-base: 1rem;
  --font-size-4xl: 2.25rem;
  
  /* Spacing System */
  --space-sm: 0.5rem;
  --space-lg: 1rem;
  --space-4xl: 4rem;
}
```

### Import Volgorde (belangrijk!)
1. `variables.css` - Design tokens
2. `base.css` - Reset & fundamentals
3. `layout.css` - Structure
4. `components.css` - UI elements
5. `lottery.css` - App-specific
6. `responsive.css` - Media queries

## JavaScript Module Systeem

### Config.js - Centralized Settings
```javascript
export const APP_CONFIG = {
  performance: {
    maxParticipants: 1000,
    debounceDelay: 150
  },
  ui: {
    defaultParticipantRows: 3,
    autoScrollToResults: true
  },
  validation: {
    minNameLength: 1,
    maxTickets: 10000
  }
};
```

### Utils.js - Helper Functions
- Validatie functies
- Performance utilities
- DOM manipulation helpers
- Logging systeem

### Lottery-Engine.js - Core Logic
- Fisher-Yates shuffle algoritme
- Fairness validation
- Performance monitoring
- Statistics calculation

### Main.js - Application Controller
- Main app class
- Event handling
- DOM caching
- UI state management

## Voordelen van Nieuwe Structuur

### **Maintainability**
- **Modulaire code**: Elke file heeft een duidelijke verantwoordelijkheid
- **Separation of concerns**: CSS, JS en logica gescheiden
- **Easy debugging**: Specifieke modules zijn makkelijk te debuggen

### **Scalability**
- **Adding features**: Nieuwe features als modules toevoegen
- **Team development**: Meerdere developers kunnen parallel werken
- **Version control**: Betere Git diffs door modulaire structuur

### ✅ **Performance**
- **Code splitting**: Alleen benodigde modules laden
- **Caching**: DOM element caching voor snelheid
- **Optimized algorithms**: Efficiënte loting algoritmes

### ✅ **Developer Experience**
- **Modern JavaScript**: ES6+ features gebruikt
- **Type safety**: JSDoc comments voor beter intellisense
- **Error handling**: Robuuste foutafhandeling
- **Logging**: Development logging systeem

### ✅ **User Experience**
- **Responsive design**: Werkt op alle apparaten
- **Accessibility**: Screen reader compatible
- **Animations**: Smooth CSS animations
- **Performance**: Snelle loading times

## Migration Guide

### Van Oude naar Nieuwe Structuur:

1. **CSS Migration**:
   - Oude `styles.css` → Modulaire CSS files
   - CSS variabelen geïntroduceerd
   - Responsive breakpoints gestandaardiseerd

2. **JavaScript Migration**:
   - Oude `script.js` → ES6+ modules
   - Object literal → Class-based architecture
   - Inline functions → Event listeners

3. **HTML Updates**:
   - CSS link updated naar `assets/css/main.css`
   - Script tag updated naar `assets/js/main.js` (type="module")
   - Semantic HTML verbeteringen

## Development Workflow

### Adding New Features:
1. **CSS**: Add to appropriate module or create new one
2. **JavaScript**: Create new module or extend existing class
3. **Configuration**: Update `config.js` if needed
4. **Documentation**: Update relevant docs

### Debugging:
1. **CSS**: Check browser dev tools, validate CSS cascade
2. **JavaScript**: Use browser console, check module imports
3. **Performance**: Use performance.now() measurements
4. **Network**: Check file loading in Network tab

## Responsive Design Strategy

### Breakpoint System:
- **Mobile First**: Start with smallest screens
- **Progressive Enhancement**: Add features for larger screens
- **Flexible Grid**: CSS Grid en Flexbox combined
- **Touch Friendly**: Large touch targets on mobile

### Testing Matrix:
- iPhone SE (375px) - smallest modern phone
- iPad (768px) - tablet portrait
- Laptop (1200px) - standard desktop
- Large Desktop (1400px+) - wide screens

## Security & Best Practices

### Code Quality:
- **No inline styles**: All styling in CSS files
- **No inline scripts**: All JavaScript in modules
- **Sanitized inputs**: XSS protection
- **Error boundaries**: Graceful error handling

### Performance:
- **Efficient selectors**: Optimized CSS selectors
- **Minimal reflows**: Batch DOM updates
- **Image optimization**: Placeholder for future images
- **Code minification**: Ready for production builds

## Future Enhancements

### Planned Features:
1. **Build System**: Webpack/Vite for bundling
2. **TypeScript**: Type safety for JavaScript
3. **Testing**: Unit tests voor core logic
4. **PWA Features**: Service workers, offline support
5. **Analytics**: User interaction tracking
6. **Themes**: Multiple color themes
7. **Internationalization**: Multi-language support

### Technical Debt Resolved:
- ❌ Monolithic CSS file
- ❌ Single JavaScript file
- ❌ Inline event handlers
- ❌ No error handling
- ❌ No configuration system
- ❌ Poor mobile experience

### New Technical Foundation:
- ✅ Modular architecture
- ✅ Modern ES6+ JavaScript
- ✅ Comprehensive error handling
- ✅ Configuration-driven development
- ✅ Mobile-first responsive design
- ✅ Performance optimizations
- ✅ Accessibility improvements
- ✅ Maintainable code structure

---

**Resultaat**: Een volledig professionele, schaalbare en onderhoudbare codebase die voldoet aan moderne webstandaarden en best practices.
