const std = @import("std");
const mem = std.mem;
const ascii = std.ascii;

fn normalizeText(allocator: mem.Allocator, text: []const u8) ![]u8 {
    var result = std.ArrayList(u8).initCapacity(allocator, text.len) catch unreachable;

    for (text) |c| {
        if (ascii.isAlphabetic(c)) {
            result.appendAssumeCapacity(ascii.toLower(c));
        } else if (ascii.isDigit(c)) {
            result.appendAssumeCapacity(c);
        }
    }

    return result.toOwnedSlice(allocator);
}

fn getDimensions(length: usize) struct { rows: usize, cols: usize } {
    if (length == 0) return .{ .rows = 0, .cols = 0 };

    const sqrt_len = @sqrt(@as(f64, @floatFromInt(length)));
    const rows = @as(usize, @intFromFloat(@floor(sqrt_len)));
    const cols = @as(usize, @intFromFloat(@ceil(sqrt_len)));

    if (rows * cols >= length) {
        return .{ .rows = rows, .cols = cols };
    } else {
        return .{ .rows = rows + 1, .cols = cols };
    }
}

pub fn ciphertext(allocator: mem.Allocator, plaintext: []const u8) mem.Allocator.Error![]u8 {
    const normalized = try normalizeText(allocator, plaintext);
    defer allocator.free(normalized);

    if (normalized.len == 0) {
        return try allocator.dupe(u8, "");
    }

    const dims = getDimensions(normalized.len);

    if (dims.cols == 0) {
        return try allocator.dupe(u8, "");
    }

    const result_len = if (dims.rows > 0)
        dims.cols * dims.rows + (dims.cols - 1)
    else
        0;

    var result = std.ArrayList(u8).initCapacity(allocator, result_len) catch unreachable;

    for (0..dims.cols) |col| {
        for (0..dims.rows) |row| {
            const idx = row * dims.cols + col;
            if (idx < normalized.len) {
                result.appendAssumeCapacity(normalized[idx]);
            } else if (row < dims.rows) {
                result.appendAssumeCapacity(' ');
            }
        }

        if (col < dims.cols - 1) {
            result.appendAssumeCapacity(' ');
        }
    }

    return result.toOwnedSlice(allocator);
}
