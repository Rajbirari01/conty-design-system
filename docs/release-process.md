# Release Process

## Pre-requisitos

- Autenticacao npm configurada para escopo privado.
- Permissao de publish no pacote `@conty/*`.

## Passos

1. Criar changeset:

```bash
npm run changeset
```

2. Atualizar versoes e changelog:

```bash
npm run version-packages
```

3. Gerar e validar build:

```bash
npm run typecheck
npm run lint
npm run build
```

4. Publicar:

```bash
npm run release
```
