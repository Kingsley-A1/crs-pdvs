# CRS-PDVS — Cross River State Pension Digital Verification System
## Prototype Documentation & Project Structure

> **Status:** Prototype — Front-end only. All data is mocked in JavaScript.  
> **Version:** Phase 09 (Assisted Console + Analytics)  
> **Authority:** Cross River State Pension Board

---

## Overview

CRS-PDVS (Cross River State Pension Digital Verification System) is a biometric-assisted identity verification platform for retired civil servants across all 18 LGAs of Cross River State. This repository contains the full interactive HTML prototype, covering the public-facing pensioner flows and the complete administrative command centre.

---

## Project Structure

```
CRS PDVS/
│
├── 📄 index.html              — Public landing page (pensioner entry point)
├── 📄 onboard.html            — Pensioner onboarding & Pension ID lookup
├── 📄 verify.html             — Identity lookup & sign-in flow
├── 📄 face.html               — Biometric liveness verification flow
├── 📄 dashboard.html          — Post-verification pensioner dashboard
├── 📄 design.html             — CRS-PDVS design system reference
│
│   ── ADMIN PORTAL ─────────────────────────────────────────────
│
├── 📄 admin-login.html        — Secure admin sign-in with role selection
├── 📄 admin.html              — Admin dashboard & command centre
├── 📄 admin-review.html       — Verification review queue
├── 📄 admin-records.html      — Searchable pensioner records registry
├── 📄 admin-profile.html      — Individual pensioner profile detail
├── 📄 admin-reports.html      — Analytics & reporting (charts, KPIs)
├── 📄 admin-assisted.html     — Assisted verification agent console
│
│   ── STYLES ───────────────────────────────────────────────────
│
├── css/
│   ├── base.css               — Design tokens, typography, global resets
│   ├── components.css         — Reusable UI components (public-facing)
│   └── admin-shell.css        — Shared admin shell: sidebar, topbar, layout
│
│   ── JAVASCRIPT ────────────────────────────────────────────────
│
├── js/
│   ├── mock-data.js           — Single source of truth for all mock data
│   └── admin-shell.js         — Shared admin sidebar, topbar, auth, nav
│
│   ── ASSETS ───────────────────────────────────────────────────
│
├── assets/
│   └── images/
│       ├── crs_emblem.png     — Official Cross River State coat of arms
│       └── think_cross_river.jpg — "Think Cross River" state branding
│
│   ── DOCUMENTATION ─────────────────────────────────────────────
│
├── README.md                  — This file
├── CRS-PDVS_Prototype_Prompt_Library.md  — Build prompt history
├── crs_pdvs_prototype_blueprint.md       — Technical blueprint
├── crs_pdvs_executive_brief_master_plan.md
└── crs_pdvs_idea_and_features.md
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

## Admin Navigation

All admin pages share the unified sidebar and topbar injected by `js/admin-shell.js`.

| Page | Nav ID | Role Access |
|---|---|---|
| `admin.html` | `dashboard` | All roles |
| `admin-review.html` | `review` | All roles |
| `admin-records.html` | `records` | All roles |
| `admin-assisted.html` | `assisted` | All roles |
| `admin-reports.html` | `reports` | Board Admin, Auditor, Supervisor, Officer |
| Audit Log | `audit` | Board Admin, Auditor, Supervisor |
| Admin Users | `users` | Board Admin only |
| Settings | `settings` | Board Admin only |

---

## Admin Roles

| Role | Level | Key Permissions |
|---|---|---|
| Pension Board Administrator | Super | Full access |
| Verification Officer | Standard | Review, approve, flag, notes |
| Supervisor | Senior | Escalate, manage officers, analytics |
| Auditor | Audit | Read-only, export reports, audit log |
| Assisted Verification Agent | Field | Search pensioner, record assisted sessions |

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

### Mock Login Credentials (admin-login.html)

All passwords are accepted for any pre-set user in the demo.  
Select a user card, enter any password, click Sign In.

| Name | Role |
|---|---|
| Michael Essien | Pension Board Administrator |
| Blessing Nku | Verification Officer |
| Esther Ita | Supervisor |
| Cornelius Obasi | Auditor |
| Mary Ogar | Assisted Verification Agent |

> **Demo Mode:** If an admin page is opened directly without going through login, the shell auto-creates a Board Administrator demo session so all pages remain navigable.

---

## Pensioner Flows (Public Side)

| Step | File | Description |
|---|---|---|
| 1 | `index.html` | Landing page — purpose, trust indicators, CTA |
| 2 | `onboard.html` | Onboarding — Pension ID lookup, personal details |
| 3 | `verify.html` | Identity sign-in — Pension ID + phone lookup |
| 4 | `face.html` | Biometric liveness simulation (camera + mocked outcomes) |
| 5 | `dashboard.html` | Post-verification dashboard, history, result states |

---

## Prototype Rules

- No real authentication or biometric matching. All outcomes are mocked in JavaScript.
- Session state is held in `sessionStorage` for the current browser tab.
- Navigation uses standard HTML `<a href>` links. No routing library.
- All pages are static HTML — serve with any local HTTP server or open directly in a browser.

---

## Build Phases Completed

| Phase | Description |
|---|---|
| 01 | Public landing page (`index.html`) |
| 02 | Design system foundation (`css/`) |
| 03 | Pensioner identity lookup (`verify.html`) |
| 04 | Onboarding flow (`onboard.html`) |
| 05 | Biometric liveness simulation (`face.html`) |
| 06 | Post-verification dashboard (`dashboard.html`) |
| 07 | Admin login + dashboard shell (`admin-login.html`, `admin.html`) |
| 08 | Records, review queue, profile (`admin-records.html`, `admin-review.html`, `admin-profile.html`) |
| 09 | Reports + assisted console (`admin-reports.html`, `admin-assisted.html`) |
| ✅ | Shared shell refactor — unified sidebar + topbar across all admin pages |

---

*CRS-PDVS Prototype — Cross River State Pension Board, 2026*
