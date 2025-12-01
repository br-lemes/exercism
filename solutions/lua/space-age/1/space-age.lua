local SpaceAge = {}

local function round(n)
    return math.floor(n * 100 + 0.5) / 100
end

function SpaceAge:new(seconds)
    local instance = { seconds = seconds }
    local earth_years_base = seconds / 31557600

    instance.on_earth = function()
        return round(earth_years_base)
    end

    instance.on_mercury = function()
        return round(earth_years_base / 0.2408467)
    end

    instance.on_venus = function()
        return round(earth_years_base / 0.61519726)
    end

    instance.on_mars = function()
        return round(earth_years_base / 1.8808158)
    end

    instance.on_jupiter = function()
        return round(earth_years_base / 11.862615)
    end

    instance.on_saturn = function()
        return round(earth_years_base / 29.447498)
    end

    instance.on_uranus = function()
        return round(earth_years_base / 84.016846)
    end

    instance.on_neptune = function()
        return round(earth_years_base / 164.79132)
    end

    return instance
end

return SpaceAge
