pub const Planet = enum {
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,

    pub fn age(self: Planet, seconds: usize) f64 {
        const earthYears = @as(f64, @floatFromInt(seconds)) / 31557600;
        switch (self) {
            .mercury => return earthYears / 0.2408467,
            .venus => return earthYears / 0.61519726,
            .earth => return earthYears,
            .mars => return earthYears / 1.8808158,
            .jupiter => return earthYears / 11.862615,
            .saturn => return earthYears / 29.447498,
            .uranus => return earthYears / 84.016846,
            .neptune => return earthYears / 164.79132,
        }
    }
};
