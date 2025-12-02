local TwoFer = {}

function TwoFer.two_fer(name)
    name = name or 'you'
    return 'One for ' .. name .. ', one for me.'
end

return TwoFer
