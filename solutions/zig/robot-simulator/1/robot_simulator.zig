pub const Direction = enum {
    north,
    east,
    south,
    west,
};

pub const Robot = struct {
    x: i32,
    y: i32,
    direction: Direction,

    pub fn init(x: i32, y: i32, direction: Direction) Robot {
        return Robot{ .x = x, .y = y, .direction = direction };
    }

    pub fn move(self: *Robot, instructions: []const u8) void {
        for (instructions) |cmd| {
            switch (cmd) {
                'R' => self.direction = @enumFromInt((@as(u8, @intFromEnum(self.direction)) + 1) % 4),
                'L' => self.direction = @enumFromInt((@as(u8, @intFromEnum(self.direction)) + 3) % 4),
                'A' => switch (self.direction) {
                    .north => self.y += 1,
                    .south => self.y -= 1,
                    .east => self.x += 1,
                    .west => self.x -= 1,
                },
                else => {},
            }
        }
    }
};
