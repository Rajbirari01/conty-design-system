# Integracao com conty-web

Este guia descreve a integracao inicial do pacote `@conty/design-system` no `conty-web`.

## 1) Instalar o pacote

No `conty-web`:

```bash
npm install @conty/design-system
```

## 2) Importar estilos globais

No arquivo global de estilos/layout do app, adicionar:

```ts
import "@conty/design-system/styles.css"
```

## 3) Consumir componentes

Exemplo de uso:

```tsx
import { Button } from "@conty/design-system"

export function Example() {
  return <Button>Salvar</Button>
}
```

## 4) Adocao gradual

- Comecar por componentes de baixo risco (`Button`, `Badge`, `Card`).
- Validar semantica visual entre `conty-web` e Storybook.
- Migrar por modulo para reduzir regressao.

## 5) Baseline de migracao Onda 1 (`conty-web` -> `@conty/design-system`)

### Button

- Origem: `src/components/ui/button.tsx` no `conty-web`.
- Destino: `Button` em `@conty/design-system`.
- Variantes suportadas na Onda 1: `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`.
- Tamanhos suportados: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`.

### Badge

- Origem: `src/components/ui/badge.tsx` no `conty-web`.
- Destino: `Badge` em `@conty/design-system`.
- Variantes suportadas na Onda 1: `default`, `secondary`, `destructive`, `outline`.
- Observacao: variante `warning` do `conty-web` nao entrou na Onda 1 para evitar hardcode visual fora do contrato de tokens.

### Card

- Origem: `src/components/ui/card.tsx` no `conty-web`.
- Destino: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` em `@conty/design-system`.
- API de composicao preservada para facilitar migracao incremental.

## 6) Tokens utilizados na Onda 1

- Fonte canonica: `@conty/tokens/tokens.json`.
- Tokens semanticos base aplicados:
  - `color.surface.*`
  - `color.text.*`
  - `color.brand.primary`
  - `color.border.*`
  - `color.status.destructive`
  - `space.*`
  - `radius.*`
  - `typography.*`
- `theme.css` continua como camada de runtime CSS vars para Web.
- `index.ts` de `@conty/tokens` mantem aliases legados (`colors`, `spacing`, `radii`, `typography`) para transicao gradual.
