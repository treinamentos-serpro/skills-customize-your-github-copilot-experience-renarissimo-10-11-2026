# 📘 Atividade: API REST de Livros com FastAPI

## 🎯 Objetivo

Construa uma API REST com FastAPI para consultar e gerenciar livros. Pratique rotas HTTP, parâmetros de caminho, validação de dados com modelos e códigos de status.

## 📝 Tarefas

### 🛠️ Criar rotas para consultar livros

#### Descrição
Use o código inicial para criar uma API que liste livros e permita consultar um livro pelo seu identificador.

Para instalar as dependências e iniciar o servidor, execute na pasta da atividade:

```bash
python -m pip install fastapi uvicorn
python -m uvicorn starter-code:app --reload
```

Abra `http://127.0.0.1:8000/docs` no navegador para testar as rotas.

#### Requisitos
O programa concluído deve:

- Criar uma aplicação FastAPI chamada `app`.
- Implementar `GET /books` para retornar a lista de livros em formato JSON.
- Implementar `GET /books/{book_id}` para retornar um livro pelo identificador.
- Responder com o status HTTP `404` quando o identificador solicitado não existir.

### 🛠️ Adicionar livros à API

#### Descrição
Implemente a criação de livros usando um modelo Pydantic para validar os dados recebidos no corpo da solicitação.

#### Requisitos
O programa concluído deve:

- Usar o modelo `BookInput`, com os campos `title`, `author` e `year`.
- Implementar `POST /books` para adicionar um livro à lista em memória.
- Atribuir um identificador único ao novo livro e retornar o livro criado.
- Responder com o status HTTP `201` ao criar um livro.

### 🛠️ Atualizar e remover livros

#### Descrição
Complete as operações de gerenciamento da API implementando a atualização e a remoção de livros existentes.

#### Requisitos
O programa concluído deve:

- Implementar `PUT /books/{book_id}` para atualizar os dados de um livro existente e retornar o livro atualizado.
- Implementar `DELETE /books/{book_id}` para remover um livro existente.
- Responder com o status HTTP `404` quando uma atualização ou remoção solicitar um identificador inexistente.
- Responder com o status HTTP `204` quando um livro for removido com sucesso.
- Manter os dados em memória; não é necessário salvar livros em arquivos ou em um banco de dados.