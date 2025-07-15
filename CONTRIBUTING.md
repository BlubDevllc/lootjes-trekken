# Contributing to Lootjes Trekker

 Thank you for your interest in contributing to the Lootjes Trekker project! 

## Important: License Considerations

**Please Note**: This project is licensed under the **Source Code Viewing License (SCVL)**, which has specific restrictions. Before contributing, please read our [License Documentation](docs/LICENSE_UITLEG.md) to understand what's allowed.

### Key Points for Contributors:
-  **Educational contributions welcome** (documentation, bug reports, suggestions)
-  **Learning-focused discussions encouraged**
-  **Code modifications require explicit permission**
-  **No commercial use or redistribution**

## Ways to Contribute

###  Documentation Contributions
- Improve existing documentation
- Add educational examples
- Create beginner-friendly tutorials
- Translate documentation (Dutch/English)
- Fix typos and grammar issues

###  Bug Reports
- Report issues with the lottery algorithm
- UI/UX problems
- Browser compatibility issues
- Performance concerns

###  Feature Suggestions
- Educational enhancements
- Accessibility improvements
- Performance optimizations
- Better user experience ideas

###  Design Contributions
- UI/UX improvements
- Accessibility enhancements
- Mobile responsiveness fixes
- Visual design suggestions

## How to Contribute

### 1. Read the Documentation
Before contributing, familiarize yourself with:
- [README.md](README.md) - Project overview
- [Project Structure](docs/PROJECT_STRUCTURE.md) - Technical architecture
- [License Terms](docs/LICENSE_UITLEG.md) - Legal considerations
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines

### 2. Check Existing Issues
- Browse [existing issues](../../issues) to see if your idea/bug is already reported
- Look for issues labeled `good first issue` or `help wanted`
- Comment on issues you'd like to work on

### 3. Create an Issue First
Before making changes, create an issue to discuss:
- **Bug reports**: Use the bug report template
- **Feature requests**: Use the feature request template
- **Documentation**: Use the documentation template
- **Questions**: Use the question template

### 4. Fork and Clone (If Approved)
```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/lootjes-trekken.git
cd lootjes-trekken

# Add upstream remote
git remote add upstream https://github.com/BlubDevllc/lootjes-trekken.git
```

### 5. Create a Branch
```bash
# Create a new branch for your contribution
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
# or
git checkout -b docs/documentation-improvement
```

### 6. Make Your Changes
- Follow the existing code style and patterns
- Test your changes thoroughly
- Update documentation if needed
- Ensure your changes don't break existing functionality

### 7. Commit Your Changes
```bash
# Stage your changes
git add .

# Commit with a clear message
git commit -m "feat: add accessibility improvements to form inputs"
# or
git commit -m "docs: improve installation instructions"
# or
git commit -m "fix: resolve calculation error in lottery algorithm"
```

#### Commit Message Guidelines
Use conventional commits format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 8. Push and Create Pull Request
```bash
# Push to your fork
git push origin your-branch-name

# Create a Pull Request on GitHub
# Fill out the pull request template completely
```

## Development Guidelines

### Code Style
- **JavaScript**: Follow ES6+ standards, use modern syntax
- **CSS**: Follow BEM methodology, use CSS custom properties
- **HTML**: Semantic HTML5, accessibility-first approach
- **Comments**: Write clear, helpful comments for complex logic

### Performance Considerations
- Optimize for mobile devices
- Minimize DOM manipulations
- Use efficient algorithms (Fisher-Yates shuffle is already optimized)
- Consider accessibility in all implementations

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge, Opera GX)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Touch-friendly interfaces (44px minimum touch targets)

## Testing

### Manual Testing
- Test on multiple browsers
- Test on mobile devices
- Test with keyboard navigation
- Test with screen readers (if possible)
- Verify lottery algorithm fairness

### Automated Testing
Currently, the project doesn't have automated tests, but contributions to add testing would be welcome:
- Unit tests for lottery algorithms
- Integration tests for UI components
- Accessibility testing automation

## Documentation Standards

### Code Documentation
- JSDoc comments for all functions
- Inline comments for complex logic
- README updates for new features
- Architecture decisions documented

### User Documentation
- Clear, step-by-step instructions
- Screenshots for visual features
- Examples for developers
- Beginner-friendly explanations

## Pull Request Process

### Before Submitting
1. ✅ Ensure your code follows the style guidelines
2. ✅ Test your changes thoroughly
3. ✅ Update documentation if needed
4. ✅ Rebase on the latest main branch
5. ✅ Fill out the pull request template completely

### Review Process
1. **Automated Checks**: Basic validation (if implemented)
2. **Code Review**: Maintainer reviews for quality and compliance
3. **Testing**: Manual testing by maintainers
4. **Legal Review**: Ensure changes comply with SCVL license
5. **Merge**: Approved changes are merged

### Pull Request Template
When creating a pull request, please include:
- **Description**: What does this PR do?
- **Type**: Bug fix, feature, documentation, etc.
- **Testing**: How was this tested?
- **Screenshots**: For UI changes
- **Breaking Changes**: Any breaking changes?
- **License Compliance**: Confirm understanding of SCVL

## Community and Support

### Getting Help
- **Questions**: Create an issue with the question template
- **Discussions**: Use GitHub Discussions for general talk
- **Email**: Davedevisser03@gmail.com for complex issues
- **Documentation**: Check [docs/](docs/) folder first

### Community Guidelines
- Be respectful and inclusive
- Help beginners learn
- Provide constructive feedback
- Focus on educational value
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)

## Recognition

Contributors will be recognized in:
- README.md Contributors section
- GitHub contributors list
- Special thanks in releases (for significant contributions)

## Legal Considerations

### Contributor License Agreement
By contributing, you agree that:
- Your contributions will be licensed under the same SCVL license
- You have the right to make the contribution
- You understand the restrictions of the SCVL license
- Your contribution is for educational/improvement purposes

### Copyright
- All contributions become part of the project under SCVL
- Original copyright remains with BlubDevllc
- Contributors retain attribution rights
- Commercial use still requires separate permission

## Questions?

If you have questions about contributing:

1. **Check Documentation**: [docs/](docs/) folder
2. **Search Issues**: Look for similar questions
3. **Create an Issue**: Use the question template
4. **Contact Maintainer**: Davedevisser03@gmail.com

---

**Thank you for helping make Lootjes Trekker better for everyone! 🎲✨**

---

**Version**: 1.0  
**Last Updated**: July 15, 2025  
**License**: [SCVL](LICENSE.md)
