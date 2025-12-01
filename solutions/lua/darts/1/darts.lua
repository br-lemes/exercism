local Darts = {}

function Darts.score(x, y)
    local distance = math.sqrt(x ^ 2 + y ^ 2)
    if distance > 10 then
        return 0
    end
    if distance > 5 then
        return 1
    end
    if distance > 1 then
        return 5
    end
    return 10
end

return Darts
