# Bukuk.cz - Project Documentation

## Overview
Website for **Bukuk** - a 7-week reading program combining fiction, sharing, and self-discovery.

## Tech Stack
- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Playfair Display (headings), Inter (body)
- No frameworks, no build tools

## Color Palette
| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-bg` | `#F2F1EC` | Main background |
| `--color-primary` | `#4B6390` | Text, headings, footer bg |
| `--color-secondary` | `#5D6D7E` | Secondary text (improved contrast) |
| `--color-accent` | `#CCA26A` | CTA buttons, accents, SVG icons |
| `--color-accent-dark` | `#841404` | Hover states, highlights |

## File Structure
```
bukuk/
├── index.html          # Homepage
├── program.html        # Program details, pricing, timeline
├── knihovna.html       # Book recommendations
├── o-mne.html          # About the author
├── kontakt.html        # Contact form, newsletter
├── css/
│   └── style.css       # All styles (CSS custom properties)
├── js/
│   └── main.js         # Mobile menu, smooth scroll, form handling
└── img/
    ├── logo.png        # Main logo (header 60px, hero 350px, footer 150px)
    ├── photo.jpg       # Author photo (280px, no border)
    ├── icon-book.svg   # Feature icon - reading
    ├── icon-chat.svg   # Feature icon - sharing/conversation
    └── icon-sparkle.svg # Feature icon - self-discovery
```

## Key CSS Classes
- `.header` - White background, sticky, logo only (60px)
- `.hero__inner` - Hero layout (logo left 350px, text right)
- `.highlight` - Curved underline effect (SVG-based)
- `.feature__icon` - Centered SVG icons (80px) with light circular bg
- `.btn--primary` / `.btn--secondary` - Button styles
- `.program-card` - Program term cards
- `.timeline` - Week-by-week program timeline
- `.footer__inner` - 3-column footer grid, logo 150px

## SVG Icons
Custom icons for "Co je Bukuk" section:
- Light circular background (#F5F3ED)
- Golden stroke icons (#CCA26A)
- 80x80px display size

## Responsive Breakpoints
- Mobile: < 768px (single column, hamburger menu)
- Desktop: >= 768px (multi-column layouts)

## Pending Features
- [ ] Member login section (placeholder button exists)
- [ ] Contact form backend integration
- [ ] Newsletter subscription backend
- [ ] GDPR & Terms pages (links exist, pages not created)

## Content Owner
Jana Střihavková, IČO: 22134042
