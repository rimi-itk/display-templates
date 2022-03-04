# display-templates

Work in progress. Contains base templates for OS2Display.

## Develop

`index.html` serves a local setup for working with the templates.

```bash
docker-compose run node npm install
docker-compose up -d
```

The docker setup serves the `build/` (see build for production) folder as `display-templates.local.itkdev.dk/build/`.

## Build for production.

To build the templates for production

```bash
npm run build
```

To continually build components when files change

```bash
npm run build-watch
```

The compiled files will be placed in `build/`. These should be committed to
git repository, to enable Remote Components to load them in the clients.

### Linting

```bash
docker-compose run node npm run check-coding-standards
```

```bash
docker-compose run node npm run apply-coding-standards
```

## @TODOs:

* Add tests for all templates.
* Fixed styles-components issue. Should be declared outside components and overridden by props.
