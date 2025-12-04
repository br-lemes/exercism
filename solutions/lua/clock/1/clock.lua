local Clock = {}
Clock.__index = Clock

function normalize(hours, minutes)
    local totalMinutes = hours * 60 + (minutes or 0)
    totalMinutes = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60)
    hours = math.floor(totalMinutes / 60)
    minutes = totalMinutes % 60
    return setmetatable({hours = hours, minutes = minutes}, Clock)
end

function Clock.at(hours, minutes)
    return normalize(hours, minutes)
end

function Clock:__tostring()
    return string.format('%02d:%02d', self.hours, self.minutes)
end

function Clock:plus(minutes)
    return normalize(self.hours, self.minutes + minutes)
end

function Clock:minus(minutes)
    return normalize(self.hours, self.minutes - minutes)
end

function Clock:equals(other)
    return self.hours == other.hours and self.minutes == other.minutes
end

return Clock
