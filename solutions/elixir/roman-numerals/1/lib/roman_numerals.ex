defmodule RomanNumerals do
  @doc """
  Convert the number to a roman number.
  """

  @map [
    { "M",  1000 },
    { "CM", 900 },
    { "D",  500 },
    { "CD", 400 },
    { "C",  100 },
    { "XC", 90 },
    { "L",  50 },
    { "XL", 40 },
    { "X",  10 },
    { "IX", 9 },
    { "V",  5 },
    { "IV", 4 },
    { "I",  1 }
  ]

  @spec numeral(pos_integer) :: String.t()
  def numeral(number), do: to_roman(number, @map)

  defp to_roman(0, _), do: ""

  defp to_roman(number, [ { roman, int } | tail]) do
    count = div(number, int)
    String.duplicate(roman, count) <> to_roman(number - count * int, tail)
  end
end
