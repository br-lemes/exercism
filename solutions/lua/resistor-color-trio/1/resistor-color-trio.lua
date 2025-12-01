return {
    decode = function(c1, c2, c3)
        local COLORS = {
            black = 0,
            brown = 1,
            red = 2,
            orange = 3,
            yellow = 4,
            green = 5,
            blue = 6,
            violet = 7,
            grey = 8,
            white = 9,
        }
        local mainValue = COLORS[c1] * 10 + COLORS[c2]
        local resistance = mainValue * 10 ^ COLORS[c3]
        if resistance >= 1000000000 then
            return resistance / 1000000000, 'gigaohms'
        end
        if resistance >= 1000000 then
            return resistance / 1000000, 'megaohms'
        end
        if resistance >= 1000 then
            return resistance / 1000, 'kiloohms'
        end
        return resistance, 'ohms'
    end,
}
