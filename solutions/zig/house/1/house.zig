const std = @import("std");

const phrases = [_][]const u8{
    "the house that Jack built.",
    "the malt that lay in ",
    "the rat that ate ",
    "the cat that killed ",
    "the dog that worried ",
    "the cow with the crumpled horn that tossed ",
    "the maiden all forlorn that milked ",
    "the man all tattered and torn that kissed ",
    "the priest all shaven and shorn that married ",
    "the rooster that crowed in the morn that woke ",
    "the farmer sowing his corn that kept ",
    "the horse and the hound and the horn that belonged to ",
};

pub fn recite(buffer: []u8, start_verse: u32, end_verse: u32) []const u8 {
    if (start_verse == 0 or end_verse == 0 or start_verse > end_verse or end_verse > phrases.len) {
        return "";
    }

    var stream = std.io.fixedBufferStream(buffer);
    const writer = stream.writer();

    for (start_verse..end_verse + 1) |verse_num| {
        if (verse_num > start_verse) {
            writer.print("\n", .{}) catch unreachable;
        }
        writer.print("This is ", .{}) catch unreachable;
        var i = verse_num;
        while (i > 0) : (i -= 1) {
            writer.print("{s}", .{phrases[i - 1]}) catch unreachable;
        }
    }

    return stream.getWritten();
}
