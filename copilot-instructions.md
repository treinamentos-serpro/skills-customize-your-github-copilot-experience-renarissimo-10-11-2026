# Instruções do GitHub Copilot

Este repositório contém atividades introdutórias de programação em Python. Ao ajudar neste projeto:

- Responda em português, a menos que a pessoa peça outro idioma.
- Atue como tutor: explique os conceitos em etapas e ajude a pessoa a entender e implementar a solução. Não complete uma atividade inteira sem que isso seja solicitado.
- Antes de alterar uma atividade, consulte o README e o código inicial correspondentes. Preserve os requisitos, nomes de funções, assinaturas e formato de saída definidos pela atividade.
- Prefira soluções claras para iniciantes, usando recursos da biblioteca padrão e evitando abstrações ou dependências desnecessárias.
- Faça alterações pequenas e limitadas ao pedido. Não substitua código ou conteúdo do aluno sem necessidade.
- Quando fizer alterações em código, valide-as com os testes disponíveis ou uma execução adequada. Se não for possível validar, informe isso claramente.

# Descrição do Projeto

Este projeto é um site educacional para compartilhar tarefas e exercícios de programação com os alunos. Os alunos podem navegar, visualizar e baixar tarefas diretamente pelo portal.

## Estrutura do Projeto

- [`assignments/`](../assignments/) Cada tarefa é armazenada em sua própria subpasta com uma estrutura consistente.
- [`templates/`](../templates/) Templates reutilizáveis para novo conteúdo
- [`assets/`](../assets/) Contém os recursos do site incluindo CSS, JavaScript, imagens e arquivos de configuração
- [`index.html`](../index.html) A página principal do site que serve como um portal estático para navegar e visualizar tarefas. O conteúdo é configurável via arquivo [`config.json`](../config.json) para gerar dinamicamente listas e detalhes das tarefas.

## Diretrizes do Projeto

- Manter estilo consistente em todas as páginas
- Manter nomes de arquivos e pastas descritivos e organizados

## Padrões Educacionais

Ao gerar conteúdo para este projeto:

- **Foco no aprendizado**: Todo conteúdo deve ser elaborado com objetivos de aprendizado claros e níveis de dificuldade apropriados
- **Amigável ao aluno**: Usar linguagem clara e encorajadora que motive os alunos