local EliudsEggs = {}

function EliudsEggs.egg_count(number)
    local count = 0
    local n = number
    while n > 0 do
        if (n % 2) == 1 then
            count = count + 1
        end
        n = math.floor(n / 2)
    end
    return count
end

return EliudsEggs
