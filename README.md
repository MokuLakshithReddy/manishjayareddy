# MJR Studio — Wall Art, Murals & Interior Design Website

A responsive studio website showcasing wall printing, custom murals, residential and commercial interior projects, and a gallery of completed work. The page is structured as a single-scroll studio experience with service discovery, portfolio sections, testimonials, and contact actions.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TanStack Start](https://img.shields.io/badge/Framework-TanStack%20Start-FF4154)](https://tanstack.com/start)
[![Stars](https://img.shields.io/github/stars/MokuLakshithReddy/manishjayareddy?style=flat-square)](https://github.com/MokuLakshithReddy/manishjayareddy/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/MokuLakshithReddy/manishjayareddy?style=flat-square)](https://github.com/MokuLakshithReddy/manishjayareddy/commits/main)

## Visual preview

The repository includes local gallery imagery used by the website. These are project visuals, not screenshots of the application UI.

![MJR Studio mural artwork](src/assets/hero-mural.jpg)

| Wall-art portfolio | Interior project |
|---|---|
| ![Wall art sample](src/assets/portfolio-1.jpg) | ![Interior sample](src/assets/interiors/interior-1.jpg) |

## Visitor journey

~~~mermaid
flowchart TD
    A["Visitor lands on MJR Studio"] --> B["Discover services"]
    B --> C["Browse wall-art portfolio"]
    B --> D["Browse interior projects"]
    C --> E["Review project imagery and details"]
    D --> E
    E --> F["Read process and testimonials"]
    F --> G["Request a quote / contact studio"]
~~~

## Site sections

- **About:** introduces the studio and creative approach.
- **Services:** wall printing, interior design, and custom projects.
- **Wall art gallery:** mural and wall-print portfolio examples.
- **Interiors gallery:** residential and commercial interior imagery.
- **Process and reviews:** explains the customer journey and displays testimonials.
- **Contact:** quote request links, social links, and WhatsApp contact affordance.

## Tech stack

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite 7
- Tailwind CSS 4
- Radix UI primitives and Lucide icons
- Cloudflare Vite integration

## Run locally

~~~bash
npm install
npm run dev
~~~

Create a production build with npm run build. Run static lint checks with npm run lint.

## Evidence and limitations

The gallery images are checked-in content assets. This repository does not publish conversion analytics, Lighthouse performance results, or automated end-to-end test coverage, so no business outcome or performance benchmark is claimed here.

## Why it matters

A design studio benefits from a clear visual portfolio: visitors can understand the kind of work offered, compare styles, and find a direct way to request a consultation.
