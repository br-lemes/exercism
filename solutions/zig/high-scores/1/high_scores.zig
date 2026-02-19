const std = @import("std");

pub const HighScores = struct {
    scores: []const i32,

    pub fn init(scores: []const i32) HighScores {
        return .{ .scores = scores };
    }

    pub fn latest(self: HighScores) i32 {
        return self.scores[self.scores.len - 1];
    }

    pub fn personalBest(self: HighScores) i32 {
        var best = self.scores[0];
        for (self.scores) |s| {
            if (s > best) best = s;
        }
        return best;
    }

    pub fn personalTopThree(self: HighScores) []const i32 {
        const n = @min(3, self.scores.len);
        var top: [3]i32 = .{ std.math.minInt(i32), std.math.minInt(i32), std.math.minInt(i32) };

        for (self.scores) |s| {
            if (s > top[0]) {
                top[2] = top[1];
                top[1] = top[0];
                top[0] = s;
            } else if (s > top[1]) {
                top[2] = top[1];
                top[1] = s;
            } else if (s > top[2]) {
                top[2] = s;
            }
        }

        return top[0..n];
    }
};
