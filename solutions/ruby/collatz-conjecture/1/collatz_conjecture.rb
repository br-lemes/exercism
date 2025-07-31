class CollatzConjecture
  def self.steps(number)
    raise ArgumentError if number <= 0
    count = 0
    while number > 1
      number = number.even? ? number / 2 : 3 * number + 1
      count += 1
    end
    count
  end
end
