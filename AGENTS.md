# Basair migration instructions

## Repository structure
- The active application is the Next.js app in the repository root.
- The `/old` folder contains the legacy HTML/CSS/JS implementation.
- Use `/old` as a reference source only.
- Do not treat `/old` as the active app.
- Do not move or nest the current Next.js app elsewhere.

## Migration rules
- Preserve the current migrated progress already in the root app.
- Migrate incrementally from `/old` into the root app.
- Prefer small, reviewable changes.
- Preserve fonts, typography, spacing, and overall visual identity.
- Do not replace the design with generic Tailwind defaults.
- Keep functionality unchanged unless explicitly asked otherwise.
- Use Next.js App Router and TypeScript.
- Use Tailwind where appropriate, but keep global typography/style rules in globals.css when needed.
- Replace vanilla DOM manipulation with idiomatic React patterns.
- Add "use client" only when needed.