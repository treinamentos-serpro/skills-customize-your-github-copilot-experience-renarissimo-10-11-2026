---
description: "Use when creating or editing Python assignments, their READMEs, starter code, or supporting data under assignments/. Keep task requirements and beginner-friendly scaffolding consistent."
applyTo: "assignments/**"
---

# Orientações para atividades

- Antes de alterar uma atividade, leia o README e o código inicial correspondentes. Consulte os dados de apoio quando forem relevantes.
- Preserve os objetivos, requisitos, nomes de funções, assinaturas, entradas e saídas definidos no README. Mantenha README e código inicial coerentes entre si.
- Trate `starter-code.py` como ponto de partida para o aluno: mantenha lacunas e instruções existentes, sem incluir a solução completa, a menos que isso seja solicitado.
- Prefira exemplos e soluções adequados a iniciantes, usando recursos da biblioteca padrão e conceitos já introduzidos na atividade.
- Faça apenas alterações necessárias para o pedido. Não mude arquivos de dados nem amplie o escopo da atividade sem necessidade.
- Ao alterar código, valide-o com os testes disponíveis ou com uma execução adequada. Se não houver validação possível, informe isso.
---
description: "Instruções para usar sempre que criar ou editar arquivos markdown de assignment, garantindo consistência e clareza para os alunos."
applyTo: "assignments/**/*.md"
---

# Diretrizes de Estrutura para Markdowns de Tarefas

Todos os arquivos markdown de tarefas devem seguir estas diretrizes:

## 1. Uso do Template

- Os arquivos markdown de tarefas devem seguir a estrutura em [`templates/assignment-template.md`](../../templates/assignment-template.md).
- A tarefa deve ser criada como um arquivo `README.md`
- Não remova ou pule seções obrigatórias do template.

## 2. Orientação das Seções

Os cabeçalhos das seções devem usar EXATAMENTE o mesmo texto do template, incluindo os ícones emoji. NÃO traduza os cabeçalhos.

- `# 📘 Assignment: [Assignment Title]` — Substitua `[Assignment Title]` por um nome curto e descritivo (ex: `Python Basics`, `Loops and Conditionals`, `Functions and Modules`).
- `## 🎯 Objective` — Escreva 1-2 frases resumindo o que o aluno aprenderá ou realizará. Foque nas principais habilidades ou conceitos.
- `## 📝 Tasks` — Para cada tarefa, use `### 🛠️ [Task Title]`:
   - Use um nome de tarefa específico e orientado à ação
   - Na Descrição, indique claramente o que o aluno deve fazer.
   - Nos Requisitos, use bullet points para listar os resultados ou funcionalidades esperadas. Seja específico e mensurável
   - Forneça exemplos de entrada/saída em blocos de código se útil.

Não inclua seções extras a menos que explicitamente especificado.