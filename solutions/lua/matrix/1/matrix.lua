return function(s)
    local matrix = {}
    for line in s:gmatch('[%d ]+') do
        local row = {}
        for num in line:gmatch('(%d+)') do
            table.insert(row, tonumber(num))
        end
        table.insert(matrix, row)
    end

    return {
        row = function(i)
            return matrix[i]
        end,

        column = function(i)
            local col = {}
            for j = 1, #matrix do
                table.insert(col, matrix[j][i])
            end
            return col
        end,
    }
end
