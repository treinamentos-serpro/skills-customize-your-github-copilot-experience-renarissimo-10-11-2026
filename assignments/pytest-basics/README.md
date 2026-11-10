# 📘 Atividade: Testes Automatizados com pytest

## 🎯 Objetivo

Aprenda a verificar o comportamento de funções Python com pytest. Escreva testes com `assert`, organize casos com `pytest.mark.parametrize` e confira erros esperados com `pytest.raises`.

## 📝 Tarefas

### 🛠️ Escrever testes básicos com assert

#### Descrição
Instale pytest e execute o teste de exemplo no arquivo inicial. Depois, acrescente testes para `calculate_total(prices)`, que deve somar os valores recebidos.

```bash
python -m pip install pytest
python -m pytest starter-code.py
```

#### Requisitos
O programa concluído deve:

- Manter o teste de exemplo para uma lista com vários preços.
- Testar `calculate_total([])` e confirmar que o resultado é `0`.
- Testar uma lista com um único preço.
- Usar `assert` para comparar o resultado real com o esperado.

### 🛠️ Agrupar casos com parametrização

#### Descrição
Escreva testes para `apply_discount(price, percentage)`, que retorna o preço após aplicar o percentual de desconto. Use `pytest.mark.parametrize` para verificar vários pares de entrada e saída sem repetir a estrutura do teste.

#### Requisitos
O programa concluído deve:

- Incluir casos para desconto de `0%`, `10%` e `100%`.
- Confirmar o resultado esperado para cada caso parametrizado.
- Usar `pytest.approx` ao comparar resultados decimais, quando necessário.

### 🛠️ Verificar erros esperados

#### Descrição
Teste `calculate_average(values)`, que calcula a média de uma lista e gera `ValueError` quando a lista está vazia.

#### Requisitos
O programa concluído deve:

- Verificar a média de uma lista não vazia.
- Usar `pytest.raises(ValueError)` para confirmar o erro esperado ao calcular a média de uma lista vazia.
- Executar a suíte completa com pytest e corrigir os testes até que todos passem.