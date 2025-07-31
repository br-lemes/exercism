class LogLineParser
    def initialize(line)
        level, line = line.split(':')
        @line = line.strip
        @level = level.gsub(/\[|\]/, '').downcase
    end

    def message
        @line
    end

    def log_level
        @level
    end

    def reformat
        "#{@line} (#{@level})"
    end
end
