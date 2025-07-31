const std = @import("std");

pub fn response(s: []const u8) []const u8 {
    const trimmed = std.mem.trim(u8, s, &std.ascii.whitespace);
    const len = trimmed.len;
    if (len == 0) {
        return "Fine. Be that way!";
    }

    var hasLower = false;
    var hasUpper = false;
    for (trimmed) |char| {
        if (char >= 'a' and char <= 'z') {
            hasLower = true;
        } else if (char >= 'A' and char <= 'Z') {
            hasUpper = true;
        }
    }
    if (!hasLower and hasUpper) {
        if (trimmed[len - 1] == '?') {
            return "Calm down, I know what I'm doing!";
        }
        return "Whoa, chill out!";
    }
    if (trimmed[len - 1] == '?') {
        return "Sure.";
    }
    return "Whatever.";
}
