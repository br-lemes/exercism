local function score(word)
    local LETTERS = {
        D = 2, G = 2,
        B = 3, C = 3, M = 3, P = 3,
        F = 4, H = 4, V = 4, W = 4, Y = 4,
        K = 5,
        J = 8, X = 8,
        Q = 10, Z = 10
    }
    local score = 0
    word = string.upper(word or '')
    for i = 1, #word do
        local letter = word:sub(i, i)
        if letter:match('[A-Z]') then
            score = score + (LETTERS[letter] or 1)
        end
    end
    return score
end

return {score = score}
