# Setup

This site uses [Flox](https://flox.dev) for its dev environment. Flox provides Node 24 (the same major version CI uses) and Corepack, which pins Yarn to the version in `package.json`.

    $ flox activate # Installs dependencies on first run

# Development

    $ flox activate --start-services # Dev server at http://localhost:4321

Or, from inside the environment:

    $ yarn run dev

# Production

    $ flox activate -- yarn run build
    $ flox activate -- yarn run preview

Pushes to `master` deploy to S3 via GitHub Actions.
