# Demonstração Angular — trabalho de JavaScript

Integrantes:
- Jady Honorato de Paula
- Joana de Souza Fagundes
- Deivis Eberhardt

## Objetivo
Mostrar, de forma visual e curta, três conceitos do Angular:
1. Eventos de clique;
2. Estado reativo com `signal()`;
3. Atualização automática do template e das classes CSS.

## Como executar
Pré-requisito: Node.js instalado.

No terminal, dentro desta pasta:

```bash
npm install
npm start
```

Depois abra o endereço exibido pelo Angular CLI (normalmente `http://localhost:4200`).

## O que demonstrar na apresentação
1. Troque entre Violeta, Oceano e Sunset.
2. Clique nos três cards.
3. Mostre que o contador muda sem recarregar a página.
4. Explique que `(click)` captura o evento.
5. Explique que `signal()` guarda o estado.
6. Explique que o template usa esse estado para mudar texto e classes.
7. Redimensione a janela rapidamente para mostrar a responsividade.

## Arquivos importantes
- `src/main.ts`: componente Angular, estado e eventos.
- `src/styles.css`: layout, temas, animações e responsividade.

## Observação
O exemplo foi mantido propositalmente pequeno para ser fácil de explicar em uma apresentação de 6–10 minutos.
