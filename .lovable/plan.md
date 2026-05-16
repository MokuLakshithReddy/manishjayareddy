## Goal
Showcase your 9 uploaded interior design project photos on the homepage in a way that feels premium and converts visitors into clients.

## Approach

### 1. Add the images to the project
- Copy all 9 photos from the zip into `src/assets/interiors/` with clean filenames (`interior-1.jpg` … `interior-9.jpg`).
- Import them as ES6 modules so Vite optimizes them.

### 2. Replace the current Portfolio section with two distinct galleries
The current `#portfolio` section uses 6 placeholder mural images. We'll split it into:

**a) "Wall Printings" gallery** — keep the existing 6 mural images (your current work showcase for wall printings).

**b) "Interior Designs" gallery (NEW)** — featuring all 9 uploaded photos in an asymmetric masonry-style bento grid:
   - Hero tile (large, spans 2×2) for the most striking photo
   - Mix of tall, wide, and square tiles for visual rhythm
   - Subtle zoom-in on hover + dark gradient overlay revealing project label
   - Lazy loading for performance

### 3. Section design (attractive client-facing presentation)
- Eyebrow label: "Interior Designs"
- Headline: *"Spaces we've shaped into stories."* (italic accent on "stories")
- Short intro line about turning rooms into curated experiences
- Filter chips above the grid: All · Living · Bedroom · Commercial (non-functional for now, purely visual cue — can wire up later if you want)
- CTA below grid: "Start your interior project" → scrolls to contact form with service preset to Interiors

### 4. Navigation & SEO
- Add an "Interiors" link in the Nav scroll menu
- Update footer links to include the new section
- Update home page `<head>` description to mention interior design portfolio

### 5. Lightbox (optional polish)
- Clicking any photo opens it full-size in a modal with prev/next arrows so clients can browse the work in detail. Uses shadcn Dialog — no new dependencies.

## Technical notes
- All work stays in `src/routes/index.tsx` + new assets folder.
- Image labels/categories: I'll assign sensible default titles (e.g. "Modern Living Room", "Master Bedroom Suite") — you can rename anytime.
- File: edits to `src/routes/index.tsx`, `src/components/site/Nav.tsx`; new files under `src/assets/interiors/`.

## Question for you
Do you want me to:
- **(A)** Use generic titles like "Living Room Project 01" etc. for each photo, or
- **(B)** Just show them without titles (clean, image-only gallery)?

Also: include the **lightbox** for full-size viewing (recommended), or keep it simple (grid only)?
