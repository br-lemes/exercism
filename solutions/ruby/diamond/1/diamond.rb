class Diamond
    def self.make_diamond(letter)
        return "A\n" if letter == 'A'
        a = ("A"..letter).to_a
        b = a.join
        c = b.reverse + b[1..-1]
        half_diamond = a.map { |letter| c.gsub(/[^#{letter}]/, ' ') + "\n" }
        (half_diamond += half_diamond[0..-2].reverse).join
    end
end
