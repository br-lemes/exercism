pub const ColorBand = enum {
    black,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white,
};

pub fn colorCode(colors: [2]ColorBand) usize {
    const a: usize = @intFromEnum(colors[0]);
    const b: usize = @intFromEnum(colors[1]);
    return a * 10 + b;
}
