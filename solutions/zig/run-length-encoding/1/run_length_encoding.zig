const std = @import("std");

pub fn encode(buffer: []u8, string: []const u8) []u8 {
    if (string.len == 0) {
        return buffer[0..0];
    }

    var write_idx: usize = 0;
    var i: usize = 0;

    while (i < string.len) {
        const current_char = string[i];
        var count: usize = 1;

        while (i + count < string.len and string[i + count] == current_char) {
            count += 1;
        }

        if (count > 1) {
            const count_str = std.fmt.bufPrint(buffer[write_idx..], "{d}", .{count}) catch unreachable;
            write_idx += count_str.len;
            buffer[write_idx] = current_char;
            write_idx += 1;
        } else {
            buffer[write_idx] = current_char;
            write_idx += 1;
        }

        i += count;
    }

    return buffer[0..write_idx];
}

pub fn decode(buffer: []u8, string: []const u8) []u8 {
    if (string.len == 0) {
        return buffer[0..0];
    }

    var write_idx: usize = 0;
    var i: usize = 0;

    while (i < string.len) {
        var count: usize = 1;

        if (string[i] >= '0' and string[i] <= '9') {
            count = 0;
            while (i < string.len and string[i] >= '0' and string[i] <= '9') {
                count = count * 10 + (string[i] - '0');
                i += 1;
            }
        }

        if (i < string.len) {
            const char_to_repeat = string[i];
            var j: usize = 0;
            while (j < count) {
                buffer[write_idx] = char_to_repeat;
                write_idx += 1;
                j += 1;
            }

            i += 1;
        }
    }

    return buffer[0..write_idx];
}
