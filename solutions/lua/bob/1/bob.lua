local bob = {}

function bob.hey(say)
    say = say:gsub('^%s*(.-)%s*$', '%1')
    if say == '' then
        return 'Fine, be that way.'
    end
    if not say:match('[a-z]') and say:match('[A-Z]') then
        if (say:sub(-1) == '?') then
            return 'Calm down, I know what I\'m doing!'
        end
        return 'Whoa, chill out!'
    end
    if (say:sub(-1) == '?') then
        return 'Sure'
    end
    return 'Whatever'
end

return bob
