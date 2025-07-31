class Minesweeper
  def initialize(field : Array(String))
    @board = [] of Array(String)

    field.each do |row|
      @board << row.chars.map(&.to_s)
    end
  end

  def annotate : Array(String)
    @board.each_with_index do |row, r_index|
      row.each_with_index do |char, c_index|
        if char == "*"
          cell_increase(r_index - 1, c_index - 1)
          cell_increase(r_index - 1, c_index)
          cell_increase(r_index - 1, c_index + 1)
          cell_increase(r_index, c_index - 1)
          cell_increase(r_index, c_index + 1)
          cell_increase(r_index + 1, c_index - 1)
          cell_increase(r_index + 1, c_index)
          cell_increase(r_index + 1, c_index + 1)
        end
      end
    end

    result = [] of String
    @board.each do |row|
      result << row.join("")
    end
    result
  end

  private def cell_increase(row : Int32, col : Int32)
    return if row < 0 || col < 0 || row >= @board.size || col >= @board[row].size
    
    case @board[row][col]
    when "*"
      # não faz nada
    when " "
      @board[row][col] = "1"
    else
      @board[row][col] = (@board[row][col].to_i + 1).to_s
    end
  end
end
