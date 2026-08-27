# Mony Visa - Portfolio

Personal portfolio website for **Mony Visa**, a Management Information Systems student at SETEC Institute and an aspiring full-stack developer based in Phnom Penh, Cambodia.

The site presents a responsive, single-page experience with smooth anchor navigation and scroll-triggered reveal animations. It highlights Visa's background, technical skills, current availability, project work, certification, and contact details.

## Sections

- **Home** - Introduction, location, study focus, social profiles, and CV link
- **About** - Education, development interests, and current goals
- **Skills** - JavaScript, React, Next.js, Tailwind CSS, Java, Spring Boot, Hibernate/JPA, REST APIs, Git, MongoDB, and AWS
- **Experience** - Current availability and first-job search status
- **Projects** - Zentrio task management application built with Next.js, Spring Boot, and Tailwind CSS
- **Certifications** - Korea Software HRD Center Basic Course certification
- **Contact** - Email, phone, GitHub, and LinkedIn links

## Built With

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- JavaScript and JSX
- CSS with responsive layouts and scroll animations
- Google Fonts (Inter and Outfit)
- Simple Icons CDN for technology icons

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository, open the project directory, and install dependencies:

```bash
git clone <repository-url>
cd portfolio
npm install
```

### Run locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot module replacement |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```text
src/
├── assets/images/       Portfolio and project images
├── components/          Shared UI components such as the navbar
├── layouts/             Page composition and section layout
├── pages/               Portfolio sections
└── styles/              Global, section, responsive, and animation styles
```

The main page is assembled in `src/layouts/Main.jsx`. Navigation uses section IDs, so adding or renaming a section requires updating both the layout and `src/components/Navbar.jsx`.

## Notes

- Technology icons in the Skills section are loaded from external Simple Icons URLs, so an internet connection is needed for those icons to appear.
- The CV link, social profiles, project repository, and contact information are defined in the relevant components under `src/`.
- React Compiler is not enabled in this project.
