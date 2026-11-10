from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel

app = FastAPI(title="Books API")

books = [
    {"id": 1, "title": "The Hobbit", "author": "J. R. R. Tolkien", "year": 1937},
]
next_book_id = 2


class BookInput(BaseModel):
    title: str
    author: str
    year: int


@app.get("/books")
def list_books():
    # TODO: Retorne a lista de livros.
    pass


@app.get("/books/{book_id}")
def get_book(book_id: int):
    # TODO: Encontre o livro ou gere HTTPException com status 404.
    pass


@app.post("/books", status_code=status.HTTP_201_CREATED)
def create_book(book: BookInput):
    # TODO: Crie um identificador, adicione o livro e retorne-o.
    pass


@app.put("/books/{book_id}")
def update_book(book_id: int, book: BookInput):
    # TODO: Atualize o livro ou gere HTTPException com status 404.
    pass


@app.delete("/books/{book_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_book(book_id: int):
    # TODO: Remova o livro ou gere HTTPException com status 404.
    pass