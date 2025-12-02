return function(numbers)
    numbers = numbers or { 3, 5 }

    return {
        to = function(limit)
            local sum = 0
            for i = 1, limit - 1 do
                for _, number in ipairs(numbers) do
                    if i % number == 0 then
                        sum = sum + i
                        break
                    end
                end
            end
            return sum
        end
    }
end
