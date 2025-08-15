const std = @import("std");

const Animal = struct {
    name: []const u8,
    reaction: []const u8,
    special_description: []const u8 = "",
};

const animals = [_]Animal{
    .{ .name = "fly", .reaction = "I don't know why she swallowed the fly. Perhaps she'll die." },
    .{ .name = "spider", .reaction = "It wriggled and jiggled and tickled inside her.", .special_description = " that wriggled and jiggled and tickled inside her" },
    .{ .name = "bird", .reaction = "How absurd to swallow a bird!" },
    .{ .name = "cat", .reaction = "Imagine that, to swallow a cat!" },
    .{ .name = "dog", .reaction = "What a hog, to swallow a dog!" },
    .{ .name = "goat", .reaction = "Just opened her throat and swallowed a goat!" },
    .{ .name = "cow", .reaction = "I don't know how she swallowed a cow!" },
    .{ .name = "horse", .reaction = "She's dead, of course!" },
};

pub fn recite(buffer: []u8, start_verse: u32, end_verse: u32) []const u8 {
    var pos: usize = 0;

    for (start_verse..end_verse + 1) |verse| {
        const animal_idx = verse - 1;

        if (verse > start_verse) {
            pos += (std.fmt.bufPrint(buffer[pos..], "\n", .{}) catch unreachable).len;
        }

        pos += (std.fmt.bufPrint(buffer[pos..], "I know an old lady who swallowed a {s}.\n", .{animals[animal_idx].name}) catch unreachable).len;
        pos += (std.fmt.bufPrint(buffer[pos..], "{s}", .{animals[animal_idx].reaction}) catch unreachable).len;

        if (animal_idx == 7) {
            continue;
        }

        if (animal_idx > 0) {
            pos += (std.fmt.bufPrint(buffer[pos..], "\n", .{}) catch unreachable).len;
        }

        var chain_idx = animal_idx;
        while (chain_idx > 0) : (chain_idx -= 1) {
            const current_animal = animals[chain_idx].name;
            const target_animal = animals[chain_idx - 1].name;
            const target_description = animals[chain_idx - 1].special_description;

            pos += (std.fmt.bufPrint(buffer[pos..], "She swallowed the {s} to catch the {s}{s}.\n", .{ current_animal, target_animal, target_description }) catch unreachable).len;
        }

        if (animal_idx == 0) {
            pos += (std.fmt.bufPrint(buffer[pos..], "\n", .{}) catch unreachable).len;
        } else {
            pos += (std.fmt.bufPrint(buffer[pos..], "{s}\n", .{animals[0].reaction}) catch unreachable).len;
        }
    }

    if (pos > 0 and buffer[pos - 1] == '\n') {
        pos -= 1;
    }

    return buffer[0..pos];
}
