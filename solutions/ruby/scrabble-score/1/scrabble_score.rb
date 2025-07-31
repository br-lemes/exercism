class Scrabble
  LETTERS = {
    'D' => 2, 'G' => 2,
    'B' => 3, 'C' => 3, 'M' => 3, 'P' => 3,
    'F' => 4, 'H' => 4, 'V' => 4, 'W' => 4, 'Y' => 4,
    'K' => 5,
    'J' => 8, 'X' => 8,
    'Q' => 10, 'Z' => 10
  }.freeze

  def initialize(word)
    @word = word
  end

  def score
    return 0 if @word.nil?
    score = 0
    @word.upcase.each_char do |char|
      next unless char.match?(/[A-Z]/)
      score += LETTERS.fetch(char, 1)
    end
    score
  end
end