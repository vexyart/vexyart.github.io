# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project aims
for [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `README.md` describing the site, the `deploy.sh` build pipeline, and the
  private inputs a rebuild requires.
- `CHANGELOG.md` (this file).
- CI workflow (`.github/workflows/ci.yml`) that validates the committed `docs/`
  output — required Pages files, a non-empty page count, and no broken internal
  links — instead of rebuilding from the private source bundle.

### Changed

- `.gitignore` now excludes agent/editor tooling directories (`.codegraph/`,
  `.cursor/`, `.omc/`).

## [1.0.2] - 2026-06-28

### Added

- Landing page and the `lines-zen` / `lines-prd` help portals, deployed to
  `docs/` and served at `vexy.dev`.
