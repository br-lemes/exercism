const std = @import("std");

pub const Plant = enum {
    clover,
    grass,
    radishes,
    violets,
};

fn charToPlant(c: u8) Plant {
    return switch (c) {
        'C' => .clover,
        'G' => .grass,
        'R' => .radishes,
        'V' => .violets,
        else => unreachable,
    };
}

pub fn plants(diagram: []const u8, student: []const u8) [4]Plant {
    const students = [_][]const u8{
        "Alice", "Bob",     "Charlie", "David",  "Eve",     "Fred",
        "Ginny", "Harriet", "Ileana",  "Joseph", "Kincaid", "Larry",
    };

    var student_index: usize = 0;
    for (students, 0..) |s, i| {
        if (std.mem.eql(u8, s, student)) {
            student_index = i;
            break;
        }
    }

    const offset = student_index * 2;
    const line_length = std.mem.indexOf(u8, diagram, "\n").?;

    const row1 = diagram[0..line_length];
    const row2 = diagram[line_length + 1 ..];

    return [_]Plant{
        charToPlant(row1[offset]),
        charToPlant(row1[offset + 1]),
        charToPlant(row2[offset]),
        charToPlant(row2[offset + 1]),
    };
}
