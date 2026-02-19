const std = @import("std");
const mem = std.mem;

pub fn format(allocator: mem.Allocator, name: []const u8, number: u10) ![]u8 {
    const suffix = getSuffix(number);
    const result = try std.fmt.allocPrint(allocator, "{s}, you are the {d}{s} customer we serve today. Thank you!", .{ name, number, suffix });
    return result;
}

fn getSuffix(number: u10) []const u8 {
    const tens = number % 100;
    if (tens == 11 or tens == 12 or tens == 13) {
        return "th";
    }
    const units = number % 10;
    if (units == 1) {
        return "st";
    } else if (units == 2) {
        return "nd";
    } else if (units == 3) {
        return "rd";
    } else {
        return "th";
    }
}
