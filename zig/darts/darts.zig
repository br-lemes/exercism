const std = @import("std");

pub const Coordinate = struct {
    x: f32,
    y: f32,

    pub fn init(x_coord: f32, y_coord: f32) Coordinate {
        return Coordinate{ .x = x_coord, .y = y_coord };
    }

    pub fn score(self: Coordinate) usize {
        const distance = std.math.sqrt(self.x * self.x + self.y * self.y);
        if (distance > 10.0) {
            return 0;
        } else if (distance > 5.0) {
            return 1;
        } else if (distance > 1.0) {
            return 5;
        } else {
            return 10;
        }
    }
};
