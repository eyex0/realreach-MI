# Marketize.biz — Exact Marketplace Implementation Plan

A precision clone of [marketize.biz](https://marketize.biz/), replicating the exact clean white UK marketplace aesthetic, navy typography, emerald green brand accents, 4-step workflow, letterbox intelligence calculator, real-time GPS verification console, and Stripe escrow protection.

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the following primary preferences in Phase 1:
> - **Core Priority**: Exact landing page hero, sections, and color scheme matching marketize.biz.
> - **Visual Aesthetic**: Clean white marketplace with navy display typography and emerald green accents.

- **Confirmed Decision 1**: Adopt a crisp white (`#FFFFFF`) and warm-neutral off-white canvas (`#F8FAFC`) with deep navy text (`#0F172A`) and emerald green action accents (`#059669` / `#10B981`).
- **Confirmed Decision 2**: Structure sections strictly following the marketize.biz layout:
  1. Sticky Top Bar with wordmark and primary "Post a Job" / "Post a Campaign" action
  2. Hero section: "The UK's First GPS-Verified Leaflet Distribution Marketplace" with postcode lookup, trust badges, and delivery visual
  3. 4-Pillar Process section: (01. Set Letterboxes, 02. Stripe Escrow Deposit, 03. Live GPS & Photo Tracking, 04. Audited Completion & Release)
  4. Interactive Letterbox & Pricing Calculator with Royal Mail PAF counts
  5. Live Interactive GPS Tracking Simulation & Geo-Tagged Photo Proof Inspector
  6. Smart Leaflet QR Code Studio with UTM attribution
  7. Side-by-Side Marketize vs Legacy Leaflet Distribution comparison matrix
  8. Verified Distributors Directory with regional filters and client reviews
  9. Distributor Recruitment Portal with hourly earnings simulator (£14–£22/hr)
  10. FAQs and Official Head Office (50 Princes Street, Ipswich, IP1 1RJ)

---

## 1. Overview & Core Concept

- **What It Does**: Marketize connects businesses and agencies with verified local leaflet distributors across the UK. It solves the endemic problem of leaflet dumping and skipped deliveries by holding funds in Stripe escrow until second-by-second GPS tracks and geo-tagged photos prove completion.
- **Target Audience / Persona**:
  - *SME Business Owners & Marketers*: Real estate agents, fitness studios, home trades, restaurants, and regional retailers looking for verified local reach.
  - *Distributors & Couriers*: Independent delivery contractors seeking flexible, reliable local rounds with guaranteed weekly payouts.
- **Key Value**: 100% financial protection via escrow, zero delivery blind spots via offline GPS recording, and real physical-to-digital QR attribution.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme
- **Canvas & Surfaces**: 60% clean white (`#FFFFFF`) with alternating soft structural slate sections (`#F8FAFC`, `#F1F5F9`) and hairline borders (`border-slate-200`).
- **Typography**: 
  - *Display*: Plus Jakarta Sans in bold and extra-bold weights (`tracking-tight`) with tight leading and balanced headline wrapping.
  - *Data & Numerals*: Space Mono with `tabular-nums` for coordinates, letterbox counts, currency, and GPS accuracy ratings.
- **Accent Budget**: Emerald green (`#059669` hover `#047857`) for primary call-to-actions, verified delivery badges, and live breadcrumb pins.

### Key User Flows
1. **Explore & Calculate**: User selects an Ipswich or UK postcode sector to view instant PAF deliverable letterbox volume, chooses Solus or Shared distribution, toggles optional commercial print supply, and inspects the live escrow quote.
2. **Interactive Live GPS Demo**: User watches the live distributor route simulation, inspects moving breadcrumbs, and clicks on geo-tagged photo pins to review photographic delivery proof with EXIF timestamps and GPS tolerances.
3. **QR Attribution**: User inputs their promotional landing page to generate a print-ready vector QR code tagged to their postal sector and views live scan response telemetry.
4. **Post Campaign / Book Round**: User clicks "Post a Campaign" to open the booking modal, review escrow protection terms, and receive an instant Stripe escrow hold reference.
5. **Become a Distributor**: Courier explores weekly earnings with the interactive hours slider and submits an onboarding application.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Clean White Marketplace vs Dark Console**:
  - *Chosen Approach*: Bright, authoritative white & slate marketplace canvas matching the actual marketize.biz live site, retaining dark high-contrast styling strictly inside the GPS map viewer frame for satellite clarity.
  - *Why*: Establishes immediate business credibility, high readability, and brand fidelity.
- **Decision 2: Royal Mail PAF Dataset Integration**:
  - *Chosen Approach*: Grounded UK postal sectors (Suffolk/Ipswich, Norfolk/Norwich, Cambridgeshire, Greater London, Midlands, Manchester) with realistic deliverable door counts.
  - *Why*: Provides instant utility without requiring mock external API credentials.
- **Decision 3: Client-Side Interactive Simulation**:
  - *Chosen Approach*: Real-time SVG polyline route generator with smooth animation, photo modal inspector, and QR code SVG rendering.
  - *Why*: Immediate zero-latency interactivity and evaluation reliability in any sandbox.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       Marketize App                         │
└──────────────────────────────┬──────────────────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
┌──────────────┐      ┌─────────────────┐      ┌──────────────┐
│  Navigation  │      │  Hero & Pillars │      │  Calculator  │
│  & Top Bar   │      │  (4 Pillars)    │      │  (PAF Data)  │
└──────┬───────┘      └────────┬────────┘      └──────┬───────┘
       │                       │                      │
       └───────────────────────┼──────────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
┌──────────────┐      ┌─────────────────┐      ┌──────────────┐
│  Live GPS    │      │  QR Code Studio │      │  Escrow vs   │
│  Tracker     │      │  & Analytics    │      │  Legacy      │
└──────┬───────┘      └────────┬────────┘      └──────┬───────┘
       │                       │                      │
       └───────────────────────┼──────────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
┌──────────────┐      ┌─────────────────┐      ┌──────────────┐
│  Distributor │      │  Careers &      │      │  FAQ &       │
│  Directory   │      │  Earnings Calc  │      │  Footer      │
└──────────────┘      └─────────────────┘      └──────────────┘
                               │
                               ▼
        ┌──────────────────────────────────────────────┐
        │       Modals: Campaign Booking (Escrow),     │
        │       Distributor Onboarding, Portal Sign-In │
        └──────────────────────────────────────────────┘
```

### Component & State Mapping
- `POSTCODE_SECTORS` (`src/data/sectors.ts`): Pre-computed PAF residential data, letterbox volume, homeowner rate, and median household income.
- `LetterboxCalculator`: Reactive state for selected sector, distribution model (Solus/Shared/Hand/B2B), print tier, and dynamic 7.5% platform escrow calculation.
- `GpsTrackerDemo`: Timer-based route interpolation across coordinate polyline with active geo-photo pin state modal.
- `QrStudio`: Dynamic UTM concatenation with real-time vector QR SVG matrix and scan telemetry breakdown.
- `CampaignModal` & `DistributorModal`: Validated forms with state transitions and reference generation.
