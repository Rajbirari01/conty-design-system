# Conty Design System

Monorepo do Design System da Conty, com foco em reutilizacao entre produtos.

## Pacotes

- `@conty/design-system`: pacote de entrada para consumo externo.
- `@conty/tokens`: tokens e tema base.
- `@conty/ui`: componentes React reutilizaveis.
- `@conty/eslint-config`: configuracoes compartilhadas de lint.
- `@conty/tsconfig`: presets de TypeScript.
- `@conty/storybook`: catalogo visual e ambiente de desenvolvimento.

## Scripts

- `npm run storybook`: inicia o Storybook local.
- `npm run build`: builda todos os pacotes.
- `npm run lint`: executa lint em todos os pacotes.
- `npm run typecheck`: valida tipagem em todos os pacotes.
- `npm run changeset`: cria changeset.
- `npm run version-packages`: aplica versionamento.
- `npm run release`: publica pacotes via Changesets.

## Fluxo de release

1. `npm run changeset`
2. `npm run version-packages`
3. Commit com versoes/changelog
4. `npm run release`

## Integracao com conty-web

Guia em `docs/integration-conty-web.md`.
