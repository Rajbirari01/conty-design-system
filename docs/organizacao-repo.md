# Organizacao do Repo

Convencoes simples para manter o monorepo organizado.

## Estrutura
- `packages/`: bibliotecas e configuracoes compartilhadas.
- `apps/`: apps de suporte, como Storybook.
- `docs/`: guias de operacao e integracao.

## Regras de organizacao
- Manter cada mudanca no pacote correto.
- Evitar duplicacao entre pacotes.
- Atualizar docs no mesmo ciclo quando houver mudanca de contrato.
- Priorizar compatibilidade incremental para consumidores.
