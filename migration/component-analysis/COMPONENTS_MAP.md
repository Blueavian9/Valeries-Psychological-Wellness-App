# Component Mapping: HTML → React
## Valerie's Psychological Wellness App

## Page Structure

### index.html
├── **Header (Navigation)**
│   ├── Logo
│   ├── Main Navigation (Home, Holistic Therapy, Platforms, Compare, FAQ, Contact)
│   ├── Dark Mode Toggle
│   └── Mobile Menu Toggle
│
├── **Hero Section**
│   ├── Background Slideshow (4 images with auto-advance)
│   ├── Navigation Arrows (prev/next)
│   ├── Slide Indicators (dots)
│   ├── Headline
│   ├── Subheadline
│   └── CTA Buttons (Primary & Secondary)
│
├── **Stats Section**
│   └── Stat Card (repeatable x3)
│       ├── Icon
│       ├── Number
│       └── Label
│
├── **Holistic Therapy Section**
│   ├── Section Title & Subtitle
│   ├── Intro Description (2 paragraphs)
│   ├── Holistic Grid
│   │   └── Holistic Card (repeatable x6)
│   │       ├── Icon
│   │       ├── Title
│   │       └── Description
│   ├── Techniques Section
│   │   ├── Techniques Title
│   │   └── Techniques Grid
│   │       └── Technique Item (repeatable x8)
│   │           ├── Icon
│   │           ├── Title
│   │           └── Description
│   ├── Benefits Section
│   │   ├── Benefits Title
│   │   └── Benefits List
│   │       └── Benefit Item (repeatable x8)
│   │           ├── Check Icon
│   │           └── Text
│   └── Holistic Note (highlighted box)
│
├── **Platforms Section**
│   ├── Section Title & Subtitle
│   └── Platforms Grid
│       └── Platform Card (repeatable x7)
│           ├── Badge (optional)
│           ├── Platform Icon
│           ├── Platform Name
│           ├── Tagline
│           ├── Features List
│           ├── Price Indicator
│           └── CTA Button
│
├── **FAQ Section**
│   ├── Section Title & Subtitle
│   └── FAQ List
│       └── FAQ Item (repeatable x10)
│           ├── Question (clickable)
│           ├── Toggle Icon (+)
│           └── Answer (collapsible)
│
├── **Comparison Table Section**
│   ├── Section Title & Subtitle
│   └── Comparison Table
│       ├── Table Header (Feature + 7 Platforms)
│       └── Table Rows (Starting Price, Therapist Network, Session Types, Insurance, Specialties, Mobile App)
│
├── **Contact Section**
│   ├── Section Title & Subtitle
│   └── Contact Text
│
└── **Footer**
    ├── Footer Content (3 columns)
    │   ├── About Section
    │   ├── Quick Links
    │   └── Legal Links
    └── Footer Bottom
        ├── Copyright
        ├── Last Updated
        └── Disclaimer

## Reusable Components Identified

### UI Components (shadcn/ui)
1. **Button** (Primary, Secondary, Outline variants)
2. **Card** (Feature Card, Platform Card, Testimonial Card, Stat Card)
3. **Badge** (Platform badges: primary, secondary, accent)
4. **Accordion** (FAQ items)
5. **Table** (Comparison table)
6. **Dialog/Modal** (Future: Booking modal)

### Layout Components
1. **Header** - Fixed navigation with mobile menu
2. **Footer** - Multi-column footer
3. **Layout** - Main wrapper component
4. **Container** - Max-width container wrapper

### Section Components
1. **Hero** - Hero section with slideshow
2. **Stats** - Stats section with stat cards
3. **HolisticTherapy** - Holistic therapy section
4. **Platforms** - Platforms grid section
5. **FAQ** - FAQ accordion section
6. **Comparison** - Comparison table section
7. **Contact** - Contact section

### Feature Components
1. **HeroSlideshow** - Image slideshow with controls
2. **StatCard** - Individual stat card
3. **HolisticCard** - Holistic therapy card
4. **TechniqueItem** - Technique card
5. **BenefitItem** - Benefit list item
6. **PlatformCard** - Platform comparison card
7. **FAQItem** - FAQ accordion item
8. **BackToTop** - Scroll to top button
9. **DarkModeToggle** - Theme switcher

## Component Priority

### 🔴 Critical (Week 1)
1. Header/Navigation
2. Footer
3. Layout wrapper
4. Button component
5. Card component

### 🟡 High (Week 2)
1. Hero section
2. Stats section
3. Platform cards
4. FAQ accordion

### 🟢 Medium (Week 3)
1. Holistic Therapy section
2. Comparison table
3. Dark mode functionality
4. Back to top button

### 🔵 Low (Week 4)
1. Scroll animations
2. Advanced interactions
3. Performance optimizations

## Data Structures Needed

### Platforms Data
```javascript
{
  id: number,
  name: string,
  icon: string,
  tagline: string,
  badge?: { text: string, variant: 'primary' | 'secondary' | 'accent' },
  features: string[],
  priceIndicator: string,
  url: string
}
```

### Stats Data
```javascript
{
  icon: string,
  number: string,
  label: string
}
```

### FAQ Data
```javascript
{
  id: number,
  question: string,
  answer: string
}
```

### Holistic Cards Data
```javascript
{
  icon: string,
  title: string,
  description: string
}
```

## CSS to Tailwind Mapping

### Colors
- `--primary-indigo: #6366F1` → `indigo-500`
- `--accent-green: #10B981` → `emerald-500`
- `--secondary-slate: #1E293B` → `slate-800`
- `--gray-*` → `gray-*` (direct mapping)

### Spacing
- `--space-1` (0.25rem) → `p-1`
- `--space-4` (1rem) → `p-4`
- `--space-6` (2rem) → `p-6`
- `--space-12` (6rem) → `p-12`

### Typography
- `--font-size-xl` → `text-xl`
- `--font-size-4xl` → `text-4xl`
- `--font-size-5xl` → `text-5xl`

### Layout
- `.container` → `container mx-auto px-5 max-w-7xl`
- Grid layouts → `grid grid-cols-* gap-*`

## JavaScript Features to Migrate

1. **Mobile Menu Toggle** → React state + useEffect
2. **Smooth Scroll** → React Router or scroll behavior
3. **FAQ Accordion** → React state for active items
4. **Back to Top** → React state + useEffect for scroll position
5. **Scroll Animations** → Intersection Observer hook
6. **Active Nav Highlighting** → React state based on scroll position
7. **Hero Slideshow** → React state + useEffect for auto-advance
8. **Dark Mode** → React context or Zustand store

## Migration Order

1. ✅ Setup React project
2. ✅ Component analysis (this document)
3. Button component
4. Card component
5. Header component
6. Footer component
7. Hero section
8. Stats section
9. Platform cards
10. FAQ section
11. Holistic Therapy section
12. Comparison table
13. Dark mode
14. Polish & animations
