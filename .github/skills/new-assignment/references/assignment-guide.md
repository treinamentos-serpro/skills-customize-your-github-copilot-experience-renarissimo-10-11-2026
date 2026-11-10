# Guia para criar atividades

Use este guia junto com o [template de atividade](../../../../templates/assignment-template.md). O procedimento de criação e registro no portal está descrito em `../SKILL.md`.

## Defina o escopo

- Identifique o público, os conhecimentos prévios e o conceito principal que a atividade deve ensinar.
- Escolha um resultado que possa ser concluído com os conceitos já apresentados aos alunos. Evite misturar muitos assuntos ou exigir ferramentas que não sejam necessárias ao objetivo.
- Divida o trabalho em tarefas pequenas e ordenadas. Cada tarefa deve contribuir para o objetivo da atividade e acrescentar uma dificuldade de cada vez.
- Se faltar uma informação que altere significativamente o nível, os requisitos ou o resultado esperado, pergunte ao usuário antes de definir esses detalhes.

## Escreva requisitos verificáveis

- Descreva o que o programa deve fazer em termos observáveis, não apenas os conceitos que deve usar.
- Especifique nomes de funções, parâmetros, valores de retorno, entradas e formato de saída quando forem importantes para a implementação ou validação.
- Inclua exemplos simples de entrada e saída quando ajudarem a remover ambiguidades.
- Não imponha detalhes de implementação que não sejam necessários ao objetivo de aprendizagem.

## Siga a estrutura do README

Use os títulos do [template](../../../../templates/assignment-template.md) exatamente como estão, inclusive emojis:

- `# 📘 Atividade: [Título da Atividade]`
- `## 🎯 Objetivo`
- `## 📝 Tarefas`
- Para cada tarefa, inclua `### 🛠️ [Título da Tarefa]`, `#### Descrição` e `#### Requisitos`.

Escreva o conteúdo em português, com linguagem direta e apropriada ao nível dos alunos. Mantenha os termos técnicos necessários e os identificadores de código consistentes com os requisitos.

## Decida se precisa de arquivos de apoio

- Inclua `starter-code.py` quando um scaffold ajudar o aluno a começar, preservar assinaturas exigidas ou destacar os pontos que ele precisa implementar.
- Deixe lacunas claras com comentários `TODO`. Não forneça a solução completa, salvo se o usuário pedir explicitamente uma solução.
- Inclua `data.csv` somente quando o exercício depender de um conjunto de dados fornecido. Use dados pequenos e coerentes com a tarefa, com cabeçalhos claros.
- Mantenha os arquivos da atividade limitados ao que o projeto aceita: `README.md`, `starter-code.py` e, quando necessário, `data.csv`.

## Revise antes de concluir

- Confira se objetivo, tarefas, requisitos, código inicial e dados descrevem a mesma atividade.
- Verifique se as seções `Objetivo` e `Tarefas` estão presentes no README.
- Confira nomes de arquivos, caminhos e qualquer referência a dados ou anexos.
- Execute os testes disponíveis ou uma validação adequada. Se não houver como validar algum requisito, informe isso.

# Assignment Design Guide

Orientações para desenhar conteúdo de assignment: o que ensinar e como definir o escopo. Para formatação e estrutura em markdown, os arquivos de instruções do projeto já tratam isso automaticamente.

## Difficulty & Scope

- Defina de 2 a 4 tarefas por assignment que evoluam entre si
- Comece com algo que um aluno consiga terminar em menos de 10 minutos e depois aumente a complexidade
- A última tarefa pode ser um objetivo ambicioso, mas as anteriores devem construir confiança
- Foque em um conceito central por assignment (ex.: "loops", não "loops + file I/O + error handling")

## Starter Code

Inclua starter code quando:

- A assignment precisar de boilerplate que o estudante não deve escrever do zero
- Você quiser que os estudantes sigam uma assinatura de função ou estrutura específica

Evite quando o objetivo for escrever algo do zero (ex.: "write a script that...").

## Exemplos de Tópicos por Dificuldade

- **Beginner**: variables, conditionals, loops, string formatting
- **Intermediate**: functions, lists/dicts, file I/O, basic classes
- **Advanced**: APIs, data analysis, testing, web frameworks