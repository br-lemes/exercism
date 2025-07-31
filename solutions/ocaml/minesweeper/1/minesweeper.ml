let cell_increase board row col =
  if row < 0 || col < 0 || row >= Array.length board || col >= Bytes.length board.(row) then
    ()
  else
    match Bytes.get board.(row) col with
    | '*' -> ()
    | ' ' -> Bytes.set board.(row) col '1'
    | c -> Bytes.set board.(row) col (Char.chr (Char.code c + 1))

let annotate field =
  let board = Array.map Bytes.of_string (Array.of_list field) in
  for row = 0 to Array.length board - 1 do
    for col = 0 to Bytes.length board.(row) - 1 do
      if Bytes.get board.(row) col = '*' then (
        cell_increase board (row - 1) (col - 1);
        cell_increase board (row - 1) col;
        cell_increase board (row - 1) (col + 1);
        cell_increase board row (col - 1);
        cell_increase board row (col + 1);
        cell_increase board (row + 1) (col - 1);
        cell_increase board (row + 1) col;
        cell_increase board (row + 1) (col + 1)
      )
    done
  done;
  Array.map Bytes.to_string board |> Array.to_list
