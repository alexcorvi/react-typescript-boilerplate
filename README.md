# React, MobX & TypeScript Boilerplate

## Somewhat opinionated

This boilerplate assumes that you'll use Sass for styling and MobX for state management.

## What's inside?

- Sample temperature conversion component
- MobX usage demonstration.
- Styling components with Sass.
- Webpack configuration:
	- TypeScript with `ts-loader`
	- SCSS with`scss-loader` (extracted in a separate file).
	- HTML with `raw-loader` (extracted in a separate file).
	- Production specific configurations.
- TypeScript compiler configuration.
- TSLint configuration.
- Lite-Server, for auto reloading on update.

## Usage

- Build for production (will also run linting): `npm run prod`.
- Build for development (will also run linting and watch files): `npm run dev`.
- Only lint: `npm run lint`.
- Serve the `dist` directory in lite-server: `npm run serve`.
- Build for development and serve the dist directory: `npm run start`.

## License

The MIT License.

