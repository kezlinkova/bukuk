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
| `--color-secondary` | `#5D6D7E` | Secondary text |
| `--color-accent` | `#CCA26A` | CTA buttons, accents, SVG icons |
| `--color-accent-dark` | `#841404` | Hover states, highlights, bookmark tab |
| Footer text | `#FFFDF7` | White text in footer |
| Footer bottom bar | `#2a4c83` | Blue bar at page end |

## File Structure
```
bukuk/
├── index.html          # Homepage
├── program.html        # Program details, pricing, timeline, about author (class="page-program")
├── knihovna.html       # Book recommendations (class="page-knihovna")
├── kontakt.html        # Contact cards (class="page-kontakt")
├── css/
│   └── style.css       # All styles (CSS custom properties)
├── js/
│   └── main.js         # Mobile menu, smooth scroll, timeline animation
└── img/
    ├── logo.png        # Main logo + favicon
    ├── photo.jpg       # Author photo (280px, no border)
    ├── icon-book.svg   # Feature icon - open book with two pages
    ├── icon-chat.svg   # Feature icon - sharing/conversation
    └── icon-sparkle.svg # Feature icon - self-discovery
```

## Navigation
Menu items (lowercase, except BUKUKnihovna):
- program
- BUKUKnihovna
- kontakt

### Bookmark Effect
Active menu item has a bookmark tab:
- Dark red square (#841404) below active link
- Top corners rounded (8px), bottom corners sharp
- Size: 28x28px, bottom: -40px

## Key CSS Classes
- `.header` - White background, sticky, logo (60px), border-bottom
- `.hero__inner` - Hero layout (logo left 350px, text right)
- `.highlight` - Curved underline effect (SVG-based)
- `.feature__icon` - Centered SVG icons (80px) with light circular bg
- `.btn--primary` / `.btn--secondary` - Button styles
- `.program-card` - Program term cards
- `.timeline` - Week-by-week program timeline with scroll animation
- `.nav__link--active` - Active nav item with bookmark tab effect
- `.contact-cards` / `.contact-card` - Contact page card layout
- `.testimonials` / `.testimonial` - Testimonials section (homepage, program)
- `.about-short` / `.about-short-section` - About author section
- `.for-whom__quote` - Large decorative quotes
- `.page-program` / `.page-knihovna` / `.page-kontakt` - Body classes for page-specific styles

## Page-specific Styles
- **Program**: About author section with beige bg, larger padding on desktop
- **Knihovna**: Smaller hero bottom padding only, book-grid 3 columns on desktop
- **Kontakt**: Smaller hero bottom padding only
- **Homepage**: About author section with white bg

## Timeline Animation
Program page timeline animates on scroll:
- Line progressively fills as user scrolls
- Items fade in (opacity 0.4 → 1)
- Dots scale up and change color when active
- JavaScript in main.js handles scroll detection

## Footer Structure
1. **Main footer** (dark blue `#4B6390`):
   - Logo (150px)
   - Contact: email@bukuk.cz, 603 887 100 (both clickable)
   - Social icons: Instagram, Facebook (placeholder links)
   - Legal: GDPR, obchodní podmínky, Jana Střihavková, IČO

2. **Bottom bar** (blue `#2a4c83`):
   - Left: © 2026 Jana Střihavková
   - Right: Webdesign: ukazsewebem.cz (link, opens in new tab)

## Current Program Dates
- **Zimní cyklus**: Leden - Březen 2026 (26. ledna – 11. března)
- **Jarní cyklus**: Březen - Duben 2026 (23. března – 8. dubna)
- **Letní cyklus**: Duben - Květen 2026 (datum bude upřesněn)

## Pricing
- Program price: 2 350 Kč
- Registration form: https://forms.gle/DsejUywDFfoUujm4A (opens in new tab)

## Co znamená Bukuk (program.html)
- Bukuk – hravé slovo, různé významy
- Slovní přesmyčka „book" a „kuk"
- Buku = indonésky kniha, bukuku = moje kniha
- Bukubuku = tradiční okinawský čaj, odkaz na filosofii IKIGAI
- Akronym: Beletrie, Uvolnění, Kreativita, Uvědomění, Koučování

## Contact
- Email: email@bukuk.cz
- Phone: 603 887 100
- Instagram: placeholder (#)
- Facebook: placeholder (#)

## Billing Info (on contact page)
- Jana Střihavková
- IČO: 22134042
- Sídlo: Pšovlky 119, 270 31 Senomaty
- Fyzická osoba podnikající podle živnostenského zákona
- Zapsána u živnostenského úřadu v Rakovníku
- Zápis do rejstříku: 7. 10. 2024

## Responsive Breakpoints
- Mobile: < 768px (single column, hamburger menu)
- Desktop: >= 768px (multi-column layouts)

## Responsive Design Details

### Typography (mobile → desktop)
| Element | Mobile | Desktop |
|---------|--------|---------|
| h1 | 2.5rem | 3.5rem |
| h2 | 2rem | 2.5rem |
| h3 | 1.5rem | 2rem |
| h4 | 1.25rem | 1.5rem |
| .feature h3 | 1.5rem | 2rem |

### Spacing (mobile → desktop)
| Element | Mobile | Desktop |
|---------|--------|---------|
| Section padding | 3rem | 8rem |
| Hero padding | 3rem | 8rem |
| Hero logo | 180px | 350px |
| Features grid gap | 0 | 3rem |
| .program-detail padding | 1.5rem | 5rem |
| .pricing padding | 1.5rem | 3rem |

### About Section (`.about-short-section`)
- **Homepage**: white background, text left-aligned on mobile (headings centered)
- **Program**: beige background, text + h3 left-aligned on mobile, larger padding on desktop

## Pending Features
- [ ] Member login section
- [ ] GDPR & Terms pages (links exist, pages not created)

## Content Owner
Jana Střihavková, IČO: 22134042
