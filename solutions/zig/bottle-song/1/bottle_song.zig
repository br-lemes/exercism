const std = @import("std");

fn numberToWord(n: u32, capitalize: bool) []const u8 {
    return switch (n) {
        10 => if (capitalize) "Ten" else "ten",
        9 => if (capitalize) "Nine" else "nine",
        8 => if (capitalize) "Eight" else "eight",
        7 => if (capitalize) "Seven" else "seven",
        6 => if (capitalize) "Six" else "six",
        5 => if (capitalize) "Five" else "five",
        4 => if (capitalize) "Four" else "four",
        3 => if (capitalize) "Three" else "three",
        2 => if (capitalize) "Two" else "two",
        1 => if (capitalize) "One" else "one",
        0 => "no",
        else => unreachable, // Should not happen with correct loop logic
    };
}

fn writeVerse(writer: anytype, current_bottles: u32) !void {
    const current_word_upper = numberToWord(current_bottles, true);
    const next_bottles = current_bottles - 1;
    const next_word_lower = numberToWord(next_bottles, false);

    try writer.print("{s} green bottle{s} hanging on the wall,\n", .{ current_word_upper, if (current_bottles == 1) "" else "s" });
    try writer.print("{s} green bottle{s} hanging on the wall,\n", .{ current_word_upper, if (current_bottles == 1) "" else "s" });
    try writer.print("And if one green bottle should accidentally fall,\n", .{});
    try writer.print("There'll be {s} green bottle{s} hanging on the wall.", .{ next_word_lower, if (next_bottles == 1) "" else "s" });
}

pub fn recite(buffer: []u8, start_bottles: u32, take_down: u32) []const u8 {
    var fbs = std.io.fixedBufferStream(buffer);
    var writer = fbs.writer();
    var current_bottles = start_bottles;
    var i: u32 = 0;

    while (i < take_down and current_bottles > 0) : (i += 1) {
        if (i > 0) {
            writer.writeByteNTimes('\n', 2) catch @panic("Failed to write newline");
        }
        writeVerse(writer, current_bottles) catch @panic("Failed to write verse");
        current_bottles -= 1;
    }

    return fbs.getWritten();
}
