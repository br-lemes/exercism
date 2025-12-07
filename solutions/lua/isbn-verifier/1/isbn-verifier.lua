return {
    valid = function(isbn)
        local count = 0
        local sum = 0
        for i = 1, #isbn do
            local c = isbn:sub(i, i)
            if (c >= '0' and c <= '9') then
                sum = sum + tonumber(c) * (10 - count)
                count = count + 1
            elseif (c == 'X' and count == 9) then
                sum = sum + 10
                count = count + 1
            elseif (c ~= '-') then
                return false
            end
        end
        return count == 10 and sum % 11 == 0
    end,
}
