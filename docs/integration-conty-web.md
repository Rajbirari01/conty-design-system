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
