const std = @import("std");
const mem = std.mem;

pub const ConversionError = error{
    InvalidInputBase,
    InvalidOutputBase,
    InvalidDigit,
};

pub fn convert(
    allocator: mem.Allocator,
    digits: []const u32,
    input_base: u32,
    output_base: u32,
) (mem.Allocator.Error || ConversionError)![]u32 {
    if (input_base < 2) return {
        return ConversionError.InvalidInputBase;
    };
    if (output_base < 2) return {
        return ConversionError.InvalidOutputBase;
    };
    for (digits) |digit| {
        if (input_base >= digit) {
            return ConversionError.InvalidDigit;
        }
    }
    return allocator.alloc(u32, 0);
}
