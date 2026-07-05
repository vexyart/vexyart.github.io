# vexyart.github.io

The source and build pipeline behind **[vexy.dev](https://vexy.dev)** — the web
home for Vexy, the expressive vector illustration tool. This repository is not
the product. It is the machinery that turns the product's help content into a
site GitHub Pages can serve.

## What GitHub Pages serves

Pages publishes this repo straight from `docs/`. Whatever lands there goes live:

- `docs/index.html` — the "Vexy: Better Vectors" landing page.
- `docs/lines-zen/` — the Vexy Lines help portal, built with [Zensical](https://zensical.org/).
- `docs/lines-prd/` — the same help content, built with ProperDocs + MaterialX.
- `docs/CNAME` — binds the site to the `vexy.dev` domain.
- `docs/.nojekyll` — tells Pages to skip Jekyll and serve the files as-is.

The `lines-zen` and `lines-prd` portals are internal reference builds. The public
entry point is the landing page and [www.vexy.art/lines/](https://www.vexy.art/lines/).

## How the site is built

The help content lives in a private FlumProject bundle, not in this repo. One
command turns that bundle into the two portals and drops them into `docs/`:

```bash
./deploy.sh
```

Under the hood `deploy.sh` runs three steps:

1. `flumproj2md` unpacks the private `.flumproj.zip` into Zensical and
   ProperDocs source projects under `src_docs/`.
2. `zensical build` compiles `src_docs/zen/` into `docs/lines-zen/`.
3. `properdocs build` compiles `src_docs/prd/` into `docs/lines-prd/`.

`flumproj2md` is a thin wrapper around the Node exporter in
`kb-platform-exporters/` (see its own README for the CLI). `flumproj2single` is
the companion that flattens a project into one Markdown file.

### What you need to rebuild

The build is reproducible only with the private inputs in place:

- `private/vexy-lines-*.flumproj.zip` — the help content bundle.
- `private/kb-platform/apps/admin/` — the Node monorepo whose `node_modules`
  the exporter resolves against.
- The `zensical` and `properdocs` CLIs, and Node with `--experimental-strip-types`.

Everything under `private/` is git-ignored. Without it, `docs/` cannot be
regenerated — which is why the built site is committed. Continuous integration
validates that committed output rather than rebuilding it.

## Editing the site

- **Landing page:** edit `docs/index.html` directly.
- **Help portals:** edit the private FlumProject, then run `./deploy.sh`. Editing
  files under `docs/lines-*/` by hand is pointless — the next build overwrites them.

## License

See [LICENSE](LICENSE).

