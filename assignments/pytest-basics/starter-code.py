import pytest


def calculate_total(prices):
    return sum(prices)


def apply_discount(price, percentage):
    return price * (1 - percentage / 100)


def calculate_average(values):
    if not values:
        raise ValueError("values must not be empty")
    return sum(values) / len(values)


def test_calculate_total_for_multiple_prices():
    assert calculate_total([10.0, 15.0, 2.5]) == 27.5


# TODO: Add tests for an empty list and a list with one price.
# TODO: Add a parametrized test for apply_discount.
# TODO: Test calculate_average with values and with an empty list.