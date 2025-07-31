const std = @import("std");

pub fn response(s: []const u8) []const u8 {
    const trimmed = std.mem.trim(u8, s, &std.ascii.whitespace);
    var hasLower = false;
    var hasUpper = false;
    var lastChar: u8 = ' ';
    if (trimmed.len == 0) {
        return "Fine. Be that way!";
    }
    for (trimmed) |char| {
        if (char >= 'a' and char <= 'z') {
            hasLower = true;
        } else if (char >= 'A' and char <= 'Z') {
            hasUpper = true;
        }
        lastChar = char;
    }
    if (!hasLower and hasUpper) {
        if (lastChar == '?') {
            return "Calm down, I know what I'm doing!";
        }
        return "Whoa, chill out!";
    }
    if (lastChar == '?') {
        return "Sure.";
    }
    return "Whatever.";
}
