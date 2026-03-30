# CRS-PDVS — Cross River State Pension Digital Verification System
## Prototype Documentation & Project Structure

> **Status:** Prototype — Front-end only. All data is mocked in JavaScript.  
> **Version:** Phase 10 (PWA + Pensioner Auth + Assisted Console + Analytics)  
> **Authority:** Cross River State Pension Board

---

## Overview

CRS-PDVS (Cross River State Pension Digital Verification System) is a biometric-assisted identity verification platform for retired civil servants across all 18 LGAs of Cross River State. This repository contains the full interactive HTML prototype covering the public-facing pensioner flows, a complete administrative command centre, and a Progressive Web App (PWA) layer for offline-capable deployment.

---

## Project Structure

```
CRS PDVS/
│
│   ── PUBLIC / PENSIONER PAGES ─────────────────────────────────
│
├── 📄 index.html                  — Public landing page (pensioner entry point)
├── 📄 pensioner-login.html        — Dedicated pensioner sign-in page
├── 📄 register.html               — Pensioner registration & Pension ID creation
├── 📄 onboard.html                — Pensioner onboarding & Pension ID lookup
├── 📄 verify.html                 — Identity lookup & sign-in flow
├── 📄 face.html                   — Biometric liveness verification (camera + mocked)
├── 📄 dashboard.html              — Post-verification pensioner dashboard
├── 📄 pensioner-profile.html      — Pensioner self-service profile view
├── 📄 notification.html           — Pensioner notifications centre
├── 📄 design.html                 — CRS-PDVS design system reference & token catalogue
│
│   ── ADMIN PORTAL ──────────────────────────────────────────────
│
├── 📄 admin-login.html            — Secure admin sign-in with role selection
├── 📄 admin.html                  — Admin dashboard & command centre (KPI charts)
├── 📄 admin-review.html           — Verification review queue
├── 📄 admin-records.html          — Searchable pensioner records registry
├── 📄 admin-pensioners-profile.html — Full pensioner detail view (admin-side)
├── 📄 admin-profile.html          — Admin user's own profile page
├── 📄 admin-users.html            — Admin users management (Board Admin only)
├── 📄 admin-settings.html         — Admin portal system settings (Board Admin only)
├── 📄 admin-reports.html          — Analytics & reporting (charts, KPI export)
├── 📄 admin-assisted.html         — Assisted verification agent console
│
│   ── PWA LAYER ─────────────────────────────────────────────────
│
├── 📄 manifest.json               — PWA web app manifest (icons, theme, display)
├── 📄 sw.js                       — Service Worker — caching & offline support
├── 📄 offline.html                — PWA offline fallback page
│
│   ── STYLES ─────────────────────────────────────────────────────
│
├── css/
│   ├── base.css                   — Design tokens, typography, global resets
│   ├── components.css             — Reusable UI components (public-facing)
│   ├── pages.css                  — Page-specific layout rules (public flows)
│   └── admin-shell.css            — Shared admin shell: sidebar, topbar, layout
│
│   ── JAVASCRIPT ──────────────────────────────────────────────────
│
├── js/
│   ├── mock-data.js               — Single source of truth for ALL mock data
│   ├── app.js                     — Public-side pensioner flow controller
│   ├── pensioner-auth.js          — Session-based pensioner authentication guard
│   ├── pensioner.js               — Pensioner profile page logic
│   ├── pwa-install.js             — PWA install prompt controller
│   ├── admin-shell.js             — Shared admin sidebar, topbar, auth, nav
│   └── admin.js                   — Admin dashboard page-specific logic
│
│   ── ASSETS ──────────────────────────────────────────────────────
│
├── assets/
│   └── images/
│       ├── crs_emblem.png         — Official Cross River State coat of arms
│       └── think_cross_river.jpg  — "Think Cross River" state branding image
│
│   ── DOCUMENTATION ──────────────────────────────────────────────
│
├── docs/
│   ├── blueprint.md               — Technical prototype blueprint
│   ├── executive-brief.md         — Executive brief & master plan
│   ├── idea-and-features.md       — Feature ideation & system capabilities
│   └── prompt-library.md          — Full AI build prompt history (all phases)
│
├── README.md                      — This file
└── .gitignore                     — Git ignore rules (binary docs, OS files)
```

---

## Design System

### Colour Palette (CRS Official)

| Token | Hex | Usage |
|---|---|---|
| `crs-navy` / Primary | `#1e2275` | Sidebar, hero banners, primary headings |
| `crs-blue-dark` | `#141762` | Gradient start, active states |
| `crs-blue-action` | `#2b35b5` | Primary buttons, focus rings |
| `crs-blue-mid` | `#4a5cc8` | Hover states, secondary accents |
| `crs-blue-light` | `#adb8ec` | Active nav items, sidebar text on dark |
| Page background | `#f0f2f5` | Admin content area |
| Card / White | `#ffffff` | Cards, topbar, panels |
| Border | `#e5e7eb` | Default card and input borders |

### Typography

**Font:** Inter (Google Fonts) — weights 400, 500, 600, 700, 800

### Status Chip Colours

| Status | Background | Text |
|---|---|---|
| Verified / Active | `#f0fdf4` | `#15803d` |
| Pending Review | `#fffbeb` | `#b45309` |
| Failed | `#fff1f2` | `#b91c1c` |
| Referred | `#f5f3ff` | `#6d28d9` |
| Awaiting | `#eff6ff` | `#1e2275` |
| Assisted | `#f0fdfa` | `#0d9488` |
| Self-Service | `#f0f2fc` | `#1e2275` |

---

## Pensioner Flows (Public Side)

| Step | File | Description |
|---|---|---|
| 0 | `index.html` | Landing page — purpose, trust indicators, CTA |
| 1a | `pensioner-login.html` | Returning pensioner sign-in (Pension ID + Phone) |
| 1b | `register.html` | New pensioner registration & ID creation |
| 2 | `onboard.html` | Onboarding — Pension ID lookup, personal details |
| 3 | `verify.html` | Identity sign-in — Pension ID + phone lookup |
| 4 | `face.html` | Biometric liveness simulation (camera + mocked outcomes) |
| 5 | `dashboard.html` | Post-verification dashboard, history, result states |
| 6 | `pensioner-profile.html` | Self-service profile — view & edit personal details |
| 7 | `notification.html` | Notifications — verification results, system alerts |

---

## Admin Portal

All admin pages share a unified sidebar and topbar injected by `js/admin-shell.js`.

### Admin Navigation

| Page | File | Nav ID | Role Access |
|---|---|---|---|
| Dashboard | `admin.html` | `dashboard` | All roles |
| Review Queue | `admin-review.html` | `review` | All roles |
| Records Registry | `admin-records.html` | `records` | All roles |
| Assisted Console | `admin-assisted.html` | `assisted` | All roles |
| Reports & Analytics | `admin-reports.html` | `reports` | Board Admin, Auditor, Supervisor, Officer |
| Audit Log | *(inline in shell)* | `audit` | Board Admin, Auditor, Supervisor |
| Admin Users | `admin-users.html` | `users` | Board Admin only |
| Settings | `admin-settings.html` | `settings` | Board Admin only |
| Pensioner Detail | `admin-pensioners-profile.html` | *(linked from Records)* | All roles |
| My Profile | `admin-profile.html` | `profile` | All roles |

### Admin Roles

| Role | Level | Key Permissions |
|---|---|---|
| Pension Board Administrator | Super | Full access — all pages, users, settings |
| Verification Officer | Standard | Review, approve, flag, add notes |
| Supervisor | Senior | Escalate, manage officers, view analytics |
| Auditor | Audit | Read-only, export reports, audit log |
| Assisted Verification Agent | Field | Search pensioner, record assisted sessions |

### Mock Login Credentials (`admin-login.html`)

All passwords are accepted for any pre-set user in the demo.  
Select a user card, enter any password, click **Sign In**.

| Name | Role |
|---|---|
| Michael Essien | Pension Board Administrator |
| Blessing Nku | Verification Officer |
| Esther Ita | Supervisor |
| Cornelius Obasi | Auditor |
| Mary Ogar | Assisted Verification Agent |

> **Demo Mode:** If an admin page is opened directly without login, the shell auto-creates a Board Administrator demo session so all pages remain navigable.

---

## Mock Data (`js/mock-data.js`)

All data is mocked — no backend calls are made. The `CRS_PDVS_DATA` global exposes:

| Key | Contents |
|---|---|
| `pensioners` | 12 realistic pensioner records across all 18 LGAs |
| `verificationSessions` | 10 sessions with liveness/face-match scores |
| `adminUsers` | 5 admin users, one per role |
| `adminRoles` | Role definitions with permission arrays |
| `analytics` | Cycle summary, monthly trend (Oct 2025–Mar 2026), LGA breakdown |
| `supportCases` | 5 support cases with case notes |
| `auditLogs` | 10 audit log entries spanning all actor types |

---

## PWA Layer

CRS-PDVS is installable as a Progressive Web App on desktop and mobile.

| File | Purpose |
|---|---|
| `manifest.json` | App name, icons, theme colour, display mode |
| `sw.js` | Service Worker — caches core assets for offline use |
| `offline.html` | Fallback page shown when offline and page is not cached |
| `js/pwa-install.js` | Custom install banner logic (deferred `beforeinstallprompt`) |

---

## CSS Architecture (`css/`)

| File | Scope |
|---|---|
| `base.css` | CSS custom properties (design tokens), typography scale, global resets |
| `components.css` | Reusable UI components used across public-facing pages |
| `pages.css` | Page-specific layout rules for public pensioner flows |
| `admin-shell.css` | Shared admin layout — sidebar, topbar, responsive shell |

---

## JavaScript Architecture (`js/`)

| File | Scope |
|---|---|
| `mock-data.js` | Single source of truth — all pensioner, admin, analytics data |
| `app.js` | Orchestrates public-side flow: landing → verify → face → dashboard |
| `pensioner-auth.js` | Auth guard — validates `sessionStorage` on protected pensioner pages |
| `pensioner.js` | Pensioner profile page: reads session, populates profile fields |
| `pwa-install.js` | Intercepts PWA install prompt and renders a branded install CTA |
| `admin-shell.js` | Injects sidebar + topbar, handles admin session, active nav, logout |
| `admin.js` | Admin dashboard: KPI cards, Chart.js visualisations, recent activity |

---

## Prototype Rules

- No real authentication or biometric matching — all outcomes are mocked in JavaScript.
- Session state is held in `sessionStorage` for the current browser tab only.
- Navigation uses standard HTML `<a href>` links — no routing library.
- All pages are static HTML — serve with any local HTTP server or open directly in a browser.
- Admin shell (`admin-shell.js`) auto-creates a demo session if no login session is present.

---

## Build Phases Completed

| Phase | Description |
|---|---|
| 01 | Public landing page (`index.html`) |
| 02 | Design system foundation (`css/base.css`, `css/components.css`) |
| 03 | Pensioner identity lookup (`verify.html`) |
| 04 | Onboarding flow (`onboard.html`) |
| 05 | Biometric liveness simulation (`face.html`) |
| 06 | Post-verification pensioner dashboard (`dashboard.html`) |
| 07 | Admin login + dashboard shell (`admin-login.html`, `admin.html`) |
| 08 | Records, review queue, profile pages (`admin-records.html`, `admin-review.html`, `admin-pensioners-profile.html`) |
| 09 | Reports + assisted console (`admin-reports.html`, `admin-assisted.html`) |
| 10 | PWA layer + pensioner auth + registration + profile + notifications |
| ✅ | Shared shell refactor — unified sidebar + topbar across all admin pages |
| ✅ | Admin sub-pages — `admin-profile.html`, `admin-users.html`, `admin-settings.html` |
| ✅ | Project reorganisation — `docs/` folder, `.gitignore`, clean root |

---

*CRS-PDVS Prototype — Cross River State Pension Board, 2026*
