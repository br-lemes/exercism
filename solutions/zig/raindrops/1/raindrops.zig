const std = @import("std");

pub fn convert(buffer: []u8, n: u32) []const u8 {
    var fbs = std.io.fixedBufferStream(buffer);
    const writer = fbs.writer();

    var found_factor = false;

    if (n % 3 == 0) {
        writer.writeAll("Pling") catch unreachable;
        found_factor = true;
    }
    if (n % 5 == 0) {
        writer.writeAll("Plang") catch unreachable;
        found_factor = true;
    }
    if (n % 7 == 0) {
        writer.writeAll("Plong") catch unreachable;
        found_factor = true;
    }

    if (!found_factor) {
        writer.print("{d}", .{n}) catch unreachable;
    }

    return fbs.getWritten();
}
