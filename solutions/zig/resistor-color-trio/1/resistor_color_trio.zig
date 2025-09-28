const std = @import("std");
const mem = std.mem;
const math = std.math;

pub const ColorBand = enum(u8) {
    black,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white,
};

pub fn label(allocator: mem.Allocator, colors: []const ColorBand) mem.Allocator.Error![]u8 {
    const value = @as(u64, @intFromEnum(colors[0])) * 10 + @as(u64, @intFromEnum(colors[1]));
    const zeros = @as(u64, @intFromEnum(colors[2]));

    const ohms = value * math.pow(u64, 10, zeros);

    if (ohms >= 1_000_000_000) {
        if (ohms % 1_000_000_000 == 0) {
            return std.fmt.allocPrint(allocator, "{d} gigaohms", .{ohms / 1_000_000_000});
        }
        return std.fmt.allocPrint(allocator, "{d:.1} gigaohms", .{@as(f64, @floatFromInt(ohms)) / 1_000_000_000.0});
    }
    if (ohms >= 1_000_000) {
        if (ohms % 1_000_000 == 0) {
            return std.fmt.allocPrint(allocator, "{d} megaohms", .{ohms / 1_000_000});
        }
        return std.fmt.allocPrint(allocator, "{d:.1} megaohms", .{@as(f64, @floatFromInt(ohms)) / 1_000_000.0});
    }
    if (ohms >= 1_000) {
        if (ohms % 1_000 == 0) {
            return std.fmt.allocPrint(allocator, "{d} kiloohms", .{ohms / 1_000});
        }
        return std.fmt.allocPrint(allocator, "{d:.1} kiloohms", .{@as(f64, @floatFromInt(ohms)) / 1_000.0});
    }
    return std.fmt.allocPrint(allocator, "{d} ohms", .{ohms});
}
