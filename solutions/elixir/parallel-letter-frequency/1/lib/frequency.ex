defmodule Frequency do
  @doc """
  Count letter frequency in parallel.

  Returns a map of characters to frequencies.

  The number of worker processes to use can be set with 'workers'.
  """
  @spec frequency([String.t()], pos_integer) :: map
  def frequency(texts, workers) do
    texts
    |> Task.async_stream(fn text ->
      text
      |> String.downcase
      |> String.replace(~r/[^[:alpha:]]/u, "")
      |> String.codepoints
      |> Enum.frequencies
    end, max_concurrency: workers)
    |> Enum.reduce(%{}, fn {:ok, m2}, m1 ->
      Map.merge(m1, m2, fn _, v1, v2 -> v1 + v2 end)
    end)
  end
end
