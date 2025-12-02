local SquareRoot = {}

function SquareRoot.square_root(radicand)
    if radicand == 0 then return 0 end
    local x = radicand
    local y = (x + 1) / 2
    while y < x do
        x = y
        y = (x + radicand / x) / 2
    end
    return x
end

return SquareRoot
