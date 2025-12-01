local ArmstrongNumbers = {}

function ArmstrongNumbers.is_armstrong_number(number)
    local sum = 0
    local len = string.len(number)
    for i = 1, len do
        sum = sum + tonumber(string.sub(number, i, i)) ^ len
    end
    return sum == tonumber(number)
end

return ArmstrongNumbers
