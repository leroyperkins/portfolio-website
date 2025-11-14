# Portfolio Website

## Overview

This repository is for my professional Software Engineer portfolio to display projects, information about me, and demonstrate web-application expertise as a project in itself. 

## Features

- **Responsive**: Aimed at being mobile and friendly -- using tailwindcss
- **Theme Switching**: Simple light/dark mode toggle with persistence 
- **Navigation**: Sticky header for navigation with active route highlighting.
- **Sections**:
  - Home: Hero introduction with experience highlights, most recent/relevant professional experience.
  - About: Skills, education, and extracurriculars.
  - Projects: Card-based showcase with tech stacks and links.
  - Contact: Form for user inquiries
- **Footer**: Social links and copyright notice.
- **Performance Optimizations**: Lazy loading (this can be configurable), minified builds, and efficient asset handling.

## Technologies Used

- **Framework**: Angular v20.3.7
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with custom themes & variants etc)
- **Icons**: Heroicons (via CDN)
- **Build Tools**: Angular CLI for scaffolding, building, and testing

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)
- Angular CLI (install globally: `npm install -g @angular/cli`)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/leroyperkins/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```
   npm install
   ```
## Development Workflow

This project follows best practices for modern web development, using environments for CI/CD and reliable deploying. 
### Environments
- **Development**: Uses `environment.ts` for local settings (e.g., API endpoints set to localhost, debugging enabled). Run with `ng serve` for hot-reloading.
- **Production**: Leverages `environment.prod.ts` for optimized settings (e.g., production API URLs, minification enabled). Automatically applied during builds with `ng build`.
- **Staging (Optional)**: Can be extended by adding `environment.staging.ts` and building with `--configuration=staging` for pre-production testing.

Environment variables are managed via Angular's built-in environment files, which avoids hard-coded secrets.

### Local Development (workflow)
To start the development server:
```
ng serve
```
- Navigate to `http://localhost:4200/`.
- The application auto-reloads on file changes.
- Use `--configuration=development` explicitly if needed for custom env setups.

For code scaffolding (e.g., generating components, services, or modules):
```
ng generate component your-component-name
```

### Testing
Automated testing is something I address heavily:
- **Unit Tests** (via Karma and Jasmine):
  ```
  ng test
  ```
  - Runs in watch mode by default for iterative development.
- **End-to-End Tests** (configure Cypress):
  ```
  ng e2e
  ```
  - Note: add (e.g., `ng add @cypress/schematic`) for e2e browser testing

Aim for >80% code coverage

### Building for Production
Compile the project with optimizations:
```
ng build
```
- Outputs artifacts to the `dist/` directory.
- Includes Ahead-of-Time (AOT) compilation, tree-shaking, and minification by default.
- For production-specific builds: `ng build --configuration=production`.

### CI/CD Pipeline
To demonstrate adherence to best practices from my experience in industry, this repository integrates with GitHub Actions for automated workflows. The pipeline ensures code quality (lint and test) and deploys reliably:

- **Workflow Overview** (defined in `.github/workflows/ci-cd.yml`):
  - **Triggers**: On push to `main`, pull requests, or manual dispatch.
  - **Jobs**:
    1. **Lint & Test**: Runs `ng lint` and `ng test --code-coverage` to mainly enforce coding standards and quality.
    2. **Build**: Executes `ng build --configuration=production` to create artificates to be deployed later.
    3. **Deploy**: Automatically deploys to hosting platforms (e.g., Vercel, Netlify, or GitHub Pages) still deciding on what to use
    4. **Security Scans**: Will integrate tools like Dependabot for dependency updates and CodeQL for vulnerability scanning.

- **Best Practices**:
  - **Branching Strategy**: Use `main` for production, feature branches for development (e.g., `feature/new-section`), and require PR approvals with automated checks.
  - **Caching**: Speeds up builds by caching `node_modules` via `actions/cache`.
  - **Artifacts**: Uploads build outputs and coverage reports for review.
  - **Notifications**: Slack/Email alerts on failures via GitHub Actions integrations.
  - **Deployment Recommendations**: Host on Vercel/Netlify for automatic previews on PRs. Configure base href in `index.html` for subpath deployments.

This workflow minimizes manual errors, enforces consistency, and supports rapid iteration while scaling to team environments.

## My Contribition Steps

I followed these contribution steps as I was developing
1. Fork the repository.
2. Create a dev branch, I change name depending on what module I am working on usually (`git checkout -b carson-dev/your-feature`).
3. Commit changes, I used tools within VS Code, as well as TortoiseGit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin carson-dev/your-feature`).
5. Open a Pull Request, merge into main DEV for closing out tickets/features, then after extensive testing, releasing into "main" which serves as production

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or collaboration, reach out to me:
- GitHub: [leroyperkins](https://github.com/leroyperkins)
- LinkedIn: [carsonturner02](https://linkedin.com/in/carsonturner02)

Built with precision by Carson Turner, Senior Software Architect. © 2025 Carson Turner. All rights reserved.