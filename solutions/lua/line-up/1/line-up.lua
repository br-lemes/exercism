return {
    format = function(name, number)
        if number % 10 == 1 and number % 100 ~= 11 then
            suffix = 'st'
        elseif number % 10 == 2 and number % 100 ~= 12 then
            suffix = 'nd'
        elseif number % 10 == 3 and number % 100 ~= 13 then
            suffix = 'rd'
        else
            suffix = 'th'
        end
        return string.format(
            '%s, you are the %d%s customer we serve today. Thank you!',
            name,
            number,
            suffix
        )
    end,
}
