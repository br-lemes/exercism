module ProteinTranslation
  def self.proteins(strand : String) : Array(String)
    proteins = [] of String

    strand.chars.in_groups_of(3).each do |codon|
      proteins << case codon.join("")
      when "AUG"                      then "Methionine"
      when "UUU", "UUC"               then "Phenylalanine"
      when "UUA", "UUG"               then "Leucine"
      when "UCU", "UCC", "UCA", "UCG" then "Serine"
      when "UAU", "UAC"               then "Tyrosine"
      when "UGU", "UGC"               then "Cysteine"
      when "UGG"                      then "Tryptophan"
      when "UAA", "UAG", "UGA"        then break
      else
        raise ArgumentError.new "Unknown codon"
      end
    end

    proteins
  end
end
