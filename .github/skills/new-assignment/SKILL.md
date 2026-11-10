---
name: new-assignment
description: "Use when creating a new Python programming assignment for this educational portal, including its README.md, starter-code.py, and any necessary supporting data."
argument-hint: "Topic, learner level, concepts, and assignment requirements"
---
---
name: new-assignment
description: Crie uma nova assignment de programação para estudantes da Mergington High School. Use esta skill sempre que o usuário quiser criar, adicionar, estruturar ou gerar uma nova assignment, exercício ou homework, mesmo que não use explicitamente a palavra "assignment".
---

# Criar Nova Tarefa de Programação

As assignments ficam em `assignments/<id>/`, e o site lê `config.json` para exibi-las. Siga estas etapas para criar ambos.

## Etapa 1: Coletar Requisitos

Se o usuário não tiver especificado, pergunte qual conceito de programação a assignment deve abordar.

> 📖 Leia [references/assignment-guide.md](references/assignment-guide.md) para orientações sobre dificuldade, escopo e quando incluir starter code.

## Etapa 2: Criar a Assignment

1. Crie `assignments/<kebab-case-id>/README.md` seguindo o [assignment template](../../../templates/assignment-template.md)
2. (Opcional) Adicione starter code ou arquivos de dados no mesmo diretório

## Etapa 3: Registrar no Website

Use os scripts incluídos; NÃO edite `config.json` manualmente.

**Registrar a assignment:**

    node .github/skills/new-assignment/scripts/update-config.js <id> "<title>" "<description>"

**Registrar cada arquivo como attachment** (starter code, arquivos de dados etc.):

    node .github/skills/new-assignment/scripts/add-attachment.js <id> "<display-name>" <filename> <type>

Tipos comuns: `python`, `csv`, `json`, `txt`, `html`

## Etapa 4: Verificar

Confirme que a assignment foi registrada corretamente: verifique se `config.json` contém a nova entrada e se todos os arquivos criados existem no disco.


# Criar uma atividade

Use este fluxo para criar uma atividade nova em `assignments/`, sem implementar a solução completa que cabe ao aluno.

## Procedimento

1. Leia `copilot-instructions.md`, `templates/assignment-template.md` e uma atividade existente de escopo semelhante. Consulte também o código inicial e os dados de apoio existentes quando forem relevantes.
2. Defina um nome curto e descritivo para a pasta, em minúsculas e com hífens, por exemplo `python-loops`. Crie a atividade em `assignments/<nome>/`.
3. Escreva `README.md` em português e siga a estrutura do template. Preserve exatamente estes títulos e rótulos, inclusive os emojis:
   - `# 📘 Atividade: [Título da Atividade]`
   - `## 🎯 Objetivo`
   - `## 📝 Tarefas`
   - Para cada tarefa: `### 🛠️ [Título da Tarefa]`, `#### Descrição` e `#### Requisitos`.
4. Descreva objetivos de aprendizagem claros e requisitos observáveis. Especifique nomes de funções, assinaturas, entradas e saídas quando necessários para orientar e validar o trabalho do aluno.
5. Crie `starter-code.py` como scaffold: inclua apenas o contexto necessário, comentários `TODO` e pontos de implementação. Não inclua a solução completa. Mantenha-o coerente com os requisitos do README.
6. Adicione `data.csv` somente quando a atividade precisar de dados fornecidos. Não crie outros tipos de arquivo dentro da pasta da atividade sem necessidade; os nomes aceitos pelo validador do projeto são `README.md`, `starter-code.py` e `data.csv`.
7. Revise a consistência entre README, código inicial e dados. Confirme que o README contém as seções `Objetivo` e `Tarefas`, e execute os testes disponíveis ou uma validação apropriada do código inicial. Informe qualquer requisito que não pôde ser validado.

## Princípios

- Mantenha a atividade adequada ao nível iniciante e use recursos da biblioteca padrão, salvo quando o objetivo exigir outra abordagem.
- Prefira alterações pequenas e siga os nomes, formatos e convenções já definidos pelo projeto.
- Se faltar uma informação essencial para especificar o exercício, pergunte antes de inventar requisitos.