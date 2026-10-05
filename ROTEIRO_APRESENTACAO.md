# Roteiro — apresentação Angular (6 a 10 minutos)

## Jady — aproximadamente 2min30
### Slide 1 — abertura
“Nosso grupo é formado por Jady Honorato de Paula, Joana de Souza Fagundes e Deivis Eberhardt. Escolhemos estudar o Angular, um framework voltado para a construção de aplicações web.”

### Slide 2 — o que é
“O Angular é um framework completo mantido por uma equipe do Google. Diferente de uma biblioteca focada em uma tarefa específica, ele já traz uma estrutura ampla para organizar a aplicação. Um dos conceitos centrais é o uso de componentes. Cada parte da interface pode ser separada em componentes reutilizáveis.”

### Slide 3 — histórico
“A origem está no AngularJS, por volta de 2009, associado ao trabalho de Miško Hevery. Em 2016 foi lançado o Angular 2, uma reescrita e sucessor completo do Angular 1. O AngularJS antigo teve seu suporte oficial encerrado em 2022. Hoje o Angular continua recebendo versões e, em 2026, a linha 22 está em suporte ativo.”

## Joana — aproximadamente 2min30
### Slide 4 — aplicações
“O Angular é muito usado em aplicações de página única, dashboards, sistemas corporativos e formulários. Para web design, o ponto interessante é conseguir criar interfaces consistentes, interativas e reutilizáveis.”

### Slide 5 — recursos
“Os componentes organizam a interface. O data binding conecta os dados ao HTML. Os eventos permitem responder a cliques e digitação. E os Signals são uma forma atual do Angular acompanhar mudanças de estado e atualizar a interface.”

### Slide 6 — exemplos de uso
“Usamos o Wappalyzer como uma das fontes indicadas pelo professor. A ferramenta detecta Angular em aplicações como ClickUp, Power BI, Fidelity, FedEx, Freelancer e também em uma solução da Receita Federal. Como é uma ferramenta de detecção externa, os resultados podem variar.”

## Deivis — aproximadamente 3min
### Slide 7 — estatísticas
“As ferramentas usam metodologias diferentes. O BuiltWith detecta cerca de 56 mil sites ativos, enquanto o Wappalyzer rastreia aproximadamente 450 mil. O W3Techs estima Angular em 0,2% de todos os sites. Esses valores não devem ser somados, porque cada serviço mede de uma forma.”

### Slides 8 e 9 — demonstração
“Nossa demonstração mostra uma interface visual simples. Primeiro podemos trocar o tema. Depois, ao clicar nos cards, o estado da aplicação muda e o contador é atualizado. No código, o evento `(click)` chama um método. O estado é guardado usando `signal()`. O HTML lê esse estado e altera classes e textos automaticamente. O CSS acrescenta transições e responsividade.”

[FAZER A DEMONSTRAÇÃO AO VIVO]

### Slide 10 — conclusão
“O Angular ajuda a organizar aplicações complexas em componentes e oferece recursos para interfaces dinâmicas. Para um projeto de redesign, poderíamos reaproveitar exatamente ideias como cards, componentes reutilizáveis, feedback visual, formulários e temas responsivos.”

## Perguntas que o professor pode fazer

**Angular é biblioteca ou framework?**
Framework. Ele fornece uma estrutura ampla e vários recursos integrados para construir aplicações.

**Angular e AngularJS são a mesma coisa?**
Não exatamente. AngularJS é a geração 1.x. Angular 2+ foi uma reescrita e é a linha moderna do framework.

**Qual linguagem o Angular usa?**
Principalmente TypeScript para a lógica, junto com HTML e CSS para a interface.

**O que é um componente?**
Uma parte independente da interface que reúne comportamento, template e estilos e pode ser reutilizada.

**O que é data binding?**
É a ligação entre os dados do componente e o que aparece no template.

**O que é um Signal?**
É um recurso reativo usado para guardar e acompanhar um valor. Quando o valor muda, partes dependentes da interface podem ser atualizadas.

**Por que usar Angular num redesign?**
Porque componentes ajudam a padronizar a interface e recursos de eventos/estado facilitam interações, formulários, menus, filtros, feedback visual e outras experiências dinâmicas.
