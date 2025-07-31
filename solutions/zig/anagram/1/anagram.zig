const std = @import("std");
const mem = std.mem;

fn isAnagram(word: []const u8, candidate: []const u8) bool {
    if (word.len != candidate.len) return false;
    if (std.ascii.eqlIgnoreCase(word, candidate)) return false;

    var word_lower = std.ArrayList(u8).init(std.heap.page_allocator);
    defer word_lower.deinit();
    word_lower.appendSlice(word) catch return false;
    _ = std.ascii.lowerString(word_lower.items, word_lower.items);

    var candidate_lower = std.ArrayList(u8).init(std.heap.page_allocator);
    defer candidate_lower.deinit();
    candidate_lower.appendSlice(candidate) catch return false;
    _ = std.ascii.lowerString(candidate_lower.items, candidate_lower.items);

    std.mem.sort(u8, word_lower.items, {}, std.sort.asc(u8));
    std.mem.sort(u8, candidate_lower.items, {}, std.sort.asc(u8));

    return std.mem.eql(u8, word_lower.items, candidate_lower.items);
}

/// Returns the set of strings in `candidates` that are anagrams of `word`.
/// Caller owns the returned memory.
pub fn detectAnagrams(
    allocator: mem.Allocator,
    word: []const u8,
    candidates: []const []const u8,
) !std.BufSet {
    var anagrams = std.BufSet.init(allocator);
    errdefer anagrams.deinit();

    for (candidates) |candidate| {
        if (isAnagram(word, candidate)) {
            try anagrams.insert(candidate);
        }
    }

    return anagrams;
}
