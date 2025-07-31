class Bob
  def self.hey(str)
    str = str.strip
    return 'Fine. Be that way!' if str.empty?
    is_yelling = str.match?(/[A-Z]/) && !str.match?(/[a-z]/)
    is_question = str.end_with?('?')
    if is_yelling
      return 'Calm down, I know what I\'m doing!' if is_question
      return 'Whoa, chill out!' 
    end
    return 'Sure.' if is_question
    'Whatever.'
  end
end
