# si_website_datalabs
Smithsonian Data Labs home page at https://datalabs.cfa.harvard.edu/ . Links to the actual data labs on separate repos.

The development preview deployment is at https://smithsonian.github.io/si_website_datalabs .

## Developing

### Prerequisites

1. Node 22.9.0 or similar

If you need several Node versions to coexist on your machine, this project has a `.tool-versions` for use with [mise](https://mise.jdx.dev/) (originally added for [asdf](https://asdf-vm.com/)).

2. Prettier VS Code extension (recommended)
3. Vue VS Code extension (recommended)

### Install

1. Clone the repo.
2. Inside the clone: `npm install`

### Running

1. `npm run dev`

The app is now running at http://localhost:5173/ by default. Code changes will take effect immediately.

## Deploying to GitHub

1. `npm run format` to apply code style. This is not necessary if your IDE formats with Prettier on save.
2. `npm run build` to verify build success. TypeScript errors may appear here that do not appear in development mode.
    1. (Optional) `npm run preview` after building. This will serve the build output on 4173, so you can verify it looks right. This is overkill unless you're making changes to the build process.
3. Commit to the `main` branch.
4. Push the `main` branch. After a few minutes your changes will appear at https://smithsonian.github.io/si_website_datalabs .

## Deploying to WAPS

1. Deploy to GitHub first.
2. Use the `deploy_scripts` repo to pull and deploy the `main` branch.
    1. Alternatively, use rsync or similar to apply the `make` steps manually.
  
## Architecture notes

This is the simplest of the Data Labs projects. There is only one static page. We still use Vue, for consistency.

Like most of the other Data Labs repos, this one is built on:

- SPA library: Vue 3
- Builder/bundler: Vite 6
- Source language: TypeScript
- Output type: static pre-generation using Vite-SSG
- CSS framework: Bootstrap 5

Bootstrap 5 is a great library, but it is a bit old-fashioned, and its dependency on deprecated SASS features limits us to Vite 6. This issue tracked this fix for Bootstrap 6 which isn't out yet. https://github.com/twbs/bootstrap/issues/29853 If we ever migrate to Bootstrap 6, we could then upgrade Vite, but as long as Vite 6 remains supported, it's probably not worth the trouble.

Bootstrap theme customization can be found [here](src/assets/data_labs_theme.scss).

# Root repo considerations

Since this one is at the root of https://datalabs.cfa.harvard.edu, its .htaccess affects the rest of Data Labs. It deliberately sets a far-future (1 year) asset expiration time as the default, since Vite's output automatically does cache busting for static assets. Non-Vue projects like DIY set their own expiration overrides.

Also take care when deploying this repo not to accidentally blow away the other directories belonging to the staging area and the other repos. The deploy scripts avoid this automatically but more manual methods may require more care.
