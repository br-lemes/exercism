function to_roman(number::Integer)::String
    map = (
        "M" => 1000,
        "CM" => 900,
        "D" => 500,
        "CD" => 400,
        "C" => 100,
        "XC" => 90,
        "L" => 50,
        "XL" => 40,
        "X" => 10,
        "IX" => 9,
        "V" => 5,
        "IV" => 4,
        "I" => 1
    )

    if number <= 0
        throw(error("number must be positive"))
    end
    result = ""
    for (roman, int) in map
        count = div(number, int)
        result *= repeat(roman, count)
        number %= int
    end

    return result
end
