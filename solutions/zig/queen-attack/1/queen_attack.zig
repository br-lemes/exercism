const std = @import("std");

pub const QueenError = error{
    InitializationFailure,
};

pub const Queen = struct {
    row: i8,
    col: i8,

    pub fn init(row: i8, col: i8) QueenError!Queen {
        if (row < 0 or row > 7 or col < 0 or col > 7) {
            return QueenError.InitializationFailure;
        }
        return Queen{ .row = row, .col = col };
    }

    pub fn canAttack(self: Queen, other: Queen) !bool {
        if (self.row == other.row and self.col == other.col) {
            return QueenError.InitializationFailure;
        }
        const row_diff = if (self.row > other.row) self.row - other.row else other.row - self.row;
        const col_diff = if (self.col > other.col) self.col - other.col else other.col - self.col;

        return self.row == other.row or self.col == other.col or row_diff == col_diff;
    }
};
