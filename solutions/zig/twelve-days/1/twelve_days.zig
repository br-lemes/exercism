const std = @import("std");

const ordinals = [_][]const u8{
    "first", "second", "third", "fourth", "fifth", "sixth",
    "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth",
};

const gifts = [_][]const u8{
    "a Partridge in a Pear Tree",
    "two Turtle Doves",
    "three French Hens",
    "four Calling Birds",
    "five Gold Rings",
    "six Geese-a-Laying",
    "seven Swans-a-Swimming",
    "eight Maids-a-Milking",
    "nine Ladies Dancing",
    "ten Lords-a-Leaping",
    "eleven Pipers Piping",
    "twelve Drummers Drumming",
};

pub fn recite(buffer: []u8, start_verse: u32, end_verse: u32) []const u8 {
    var fba = std.heap.FixedBufferAllocator.init(buffer);
    var list = std.ArrayList(u8).init(fba.allocator());

    for (start_verse..end_verse + 1) |i| {
        if (i > start_verse) {
            list.appendSlice("\n") catch @panic("Out of memory");
        }
        list.writer().print("On the {s} day of Christmas my true love gave to me: ", .{ordinals[i - 1]}) catch @panic("Out of memory");

        var j: u32 = @intCast(i);
        while (j > 0) : (j -= 1) {
            if (i > 1 and j == 1) {
                list.appendSlice("and ") catch @panic("Out of memory");
            }
            list.appendSlice(gifts[j - 1]) catch @panic("Out of memory");
            if (j > 1) {
                list.appendSlice(", ") catch @panic("Out of memory");
            }
        }
        list.appendSlice(".") catch @panic("Out of memory");
    }

    return list.toOwnedSlice() catch @panic("Out of memory");
}