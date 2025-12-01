local gigasecond = {}

function gigasecond.anniversary(any_date)
    local gigaDate = os.date("*t", any_date)
    gigaDate.sec = gigaDate.sec + 1000000000
    return os.date("%m/%d/%y", os.time(gigaDate))
end

return gigasecond
