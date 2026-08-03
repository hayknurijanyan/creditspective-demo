# CREDITspective Website Prototype - Design Notes

## Purpose
This prototype translates the latest CREDITspective website draft and the working-session decisions into a concise, modern homepage for discussion with a web designer. It is intentionally a narrative and visual prototype rather than production code.

## Core message hierarchy
1. **Institutional Memory is the differentiator.**
2. **Alpha and better credit decisions are the primary outcomes.**
3. **The platform covers the full credit lifecycle.**
4. **The Mantle architecture makes adoption practical without replacing the existing stack.**
5. **Efficiency and capacity are supporting benefits, not the lead claim.**

## Recommended homepage flow
1. Hero: Institutional Memory + alpha
2. Credibility / client quote
3. Mantle intelligence layer
4. Institutional Memory explained
5. Market challenges
6. Four platform verticals
7. Business outcomes
8. Industries and users
9. Demo CTA

## Design direction
- Light, institutional base with deep navy and teal accents
- Abstract network/orbit visual language instead of generic finance stock photography
- Real product screenshots used as the primary proof
- Large typography, restrained copy, and progressive disclosure
- CSS-only tabs and native accordions for easy handoff

## Content and legal checks before public launch
- Validate the “$15B+” experience claim and exact wording.
- Use the Global Asset Manager quote only if approved; otherwise replace it with an unattributed product principle.
- Substantiate or soften any “only” claims.
- Confirm whether the footer should say “built in partnership with” or another formal relationship to Global Economics Group.
- Replace `demo@creditspective.com` with the actual lead-capture form or scheduling link.

## Product images included
- Deal discovery / pipeline
- Underwriting hotsheet
- Portfolio tearsheet
- Monitoring / analyst workspace

## Build notes
- No external fonts or libraries are required.
- `index.html` and `styles.css` can be opened locally.
- Interactions are CSS-only; no JavaScript is required.

## Preview files
- `preview-desktop.png` - full-page desktop rendering at 1440px
- `preview-mobile.png` - full-page mobile rendering at 390px
- `standalone.html` - single-file version with CSS and images embedded
