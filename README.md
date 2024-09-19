# Blog Project - README

## Overview
This is a blog project built with **Astro**, styled using **Tailwind CSS**, and with **MDX** for writing blog posts. The app is deployed on **Netlify** and uses **NPM** as the package manager. It includes basic page structures like a home page, a blog list page, and a single blog page with server-side rendering (SSR) capabilities.

## Key Features
- **Home Page**: A simple, blank page as a placeholder for future content.
- **Blogs Page**: A list of pre-rendered blog posts.
- **Single Blog Page**: Displays individual blog posts with SSR capabilities for dynamic content.

## Prerequisites
- Node.js and NPM installed.
- Netlify account for deployment.

## How to Start

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:MaxShvachko/astro-example.git
   cd astro-example
   ```

2. **Install Dependencies**:
   Install the necessary packages using NPM:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   To start the app in development mode, use the following command:
   ```bash
   npm run dev
   ```

4. **Build the App for Production**:
   If you want to build the app for production, run:
   ```bash
   npm run build
   ```

5. **Deploy on Netlify**:
   Connect your project repository to Netlify and deploy directly from your Git repository. Netlify will handle the build process and deploy the app automatically.

## Project Structure

- **Home Page**: A placeholder for future content (`/src/pages/index.astro`).
- **Blogs Page**: A prerendered list of blogs (`/src/pages/blogs.astro`).
- **Single Blog Page**: Displays a blog with server-side rendering (`/src/pages/[slug].astro`).

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Post.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## Tech Stack

- **Astro**: For building the static site.
- **Tailwind CSS**: For styling the pages.
- **MDX**: For writing blog content using Markdown and JSX.
- **Netlify**: For continuous deployment.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Contributing
Feel free to fork this repository and submit pull requests for new features or bug fixes.
