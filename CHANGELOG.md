## v0.4.0 / 2026-05-09

- feat: add SKILL.md
- fix: improve Content-Length validation in request.length getter
- fix: normalize Content-Type in response.type getter with trim and lowercase
- fix: correct HTTP status code validation range from 100-1000 to 100-599
- fix: return empty string for empty query objects in stringifyQueryToString
- docs: clarify middleware array flattening behavior in compose function
- fix: export status code redirect empty mapping constants types
- fix(request): should clear search when set to null or undefined
- fix(response): should return null for invalid Content-Length header
- perf(response): hoist TextEncoder to a module-level singleton
- perf(request): hoist client IP header list to a module-level constant
- fix(types): rename HoaError to HttpErrorOptions for naming consistency
- chore(test): add content-length above 2 GB

## v0.3.5 / 2026-02-03

- hotfix: package.json exports

## v0.3.4 / 2026-01-26

- feat: use tsdown instead of tsup
- fix: update devDependencies

## v0.3.3 / 2025-12-03

- fix: types improvements

## v0.3.2 / 2025-11-09

- fix: export statusTextMapping + statusRedirectMapping + statusEmptyMapping

## v0.3.1 / 2025-11-08

- fix: app.onerror print original error

## v0.3.0 / 2025-10-16

- feat: move respond() to ctx.response

## v0.2.1 / 2025-10-15

- fix: rename HoaExtend to HoaExtension

## v0.2.0 / 2025-10-12

- refactor: rename Application to Hoa
- docs: update jsdoc comments

## v0.1.2 / 2025-10-09

- fix: change default status code from 200 to 404
- fix: add missing `silent` property to TypeScript declarations

## v0.1.1 / 2025-10-08

- fix: console is removed due to tsup configuration errors
- chore(deps): update deps

## v0.1.0 / 2025-09-25

- init
