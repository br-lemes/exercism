const std = @import("std");
const mem = std.mem;

pub fn countWords(allocator: mem.Allocator, s: []const u8) !std.StringHashMap(u32) {
    var map = std.StringHashMap(u32).init(allocator);

    if (s.len == 0) return map;

    var i: usize = 0;

    while (i < s.len) {
        while (i < s.len and !isWordChar(s[i])) {
            i += 1;
        }

        if (i >= s.len) break;

        const start = i;

        while (i < s.len and isWordChar(s[i])) {
            i += 1;
        }

        var word_slice = s[start..i];
        word_slice = trimApostrophes(word_slice);

        if (word_slice.len == 0) continue;

        const lower_word = try allocator.alloc(u8, word_slice.len);
        for (word_slice, 0..) |c, idx| {
            lower_word[idx] = std.ascii.toLower(c);
        }

        if (map.get(lower_word)) |count| {
            try map.put(lower_word, count + 1);
            allocator.free(lower_word);
        } else {
            try map.put(lower_word, 1);
        }
    }

    return map;
}

fn isWordChar(c: u8) bool {
    return std.ascii.isAlphanumeric(c) or c == '\'';
}

fn trimApostrophes(word: []const u8) []const u8 {
    var start: usize = 0;
    var end: usize = word.len;

    while (start < word.len and word[start] == '\'') {
        start += 1;
    }

    while (end > start and word[end - 1] == '\'') {
        end -= 1;
    }

    return word[start..end];
}
