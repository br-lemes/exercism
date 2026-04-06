def is_armstrong_number(number):
    digits = str(number)
    n = len(digits)
    return sum(int(digit) ** n for digit in digits) == number
