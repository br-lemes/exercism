const std = @import("std");
const mem = std.mem;

pub fn translate(allocator: mem.Allocator, phrase: []const u8) mem.Allocator.Error![]u8 {
    var result = std.ArrayList(u8).init(allocator);
    defer result.deinit();

    var it = mem.splitScalar(u8, phrase, ' ');
    var first_word = true;

    while (it.next()) |word| {
        if (word.len == 0) continue;

        if (!first_word) {
            try result.append(' ');
        }
        first_word = false;

        const pig_latin_word = try translateWord(allocator, word);
        defer allocator.free(pig_latin_word);

        try result.appendSlice(pig_latin_word);
    }

    return try result.toOwnedSlice();
}

fn translateWord(allocator: mem.Allocator, word: []const u8) mem.Allocator.Error![]u8 {
    if (word.len == 0) return try allocator.dupe(u8, "");

    if (startsWithVowel(word) or startsWithXr(word) or startsWithYt(word)) {
        return try std.fmt.allocPrint(allocator, "{s}ay", .{word});
    }

    const consonant_end = findConsonantEnd(word);
    const remaining = word[consonant_end..];
    const consonants = word[0..consonant_end];

    return try std.fmt.allocPrint(allocator, "{s}{s}ay", .{ remaining, consonants });
}

fn startsWithVowel(word: []const u8) bool {
    if (word.len == 0) return false;
    const c = word[0];
    return c == 'a' or c == 'e' or c == 'i' or c == 'o' or c == 'u';
}

fn startsWithXr(word: []const u8) bool {
    return word.len >= 2 and mem.eql(u8, word[0..2], "xr");
}

fn startsWithYt(word: []const u8) bool {
    return word.len >= 2 and mem.eql(u8, word[0..2], "yt");
}

fn findConsonantEnd(word: []const u8) usize {
    var i: usize = 0;

    while (i < word.len) {
        const c = word[i];

        if (startsWithVowel(word[i..])) {
            break;
        }
        if (i + 1 < word.len and c == 'q' and word[i + 1] == 'u') {
            i += 2;
            break;
        }
        if (c == 'y' and i > 0) {
            break;
        }
        if (c == 'y' and i == 0) {
            i += 1;
            continue;
        }

        i += 1;
    }

    return i;
}
