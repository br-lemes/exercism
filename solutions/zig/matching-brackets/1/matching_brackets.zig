const std = @import("std");
const mem = std.mem;

pub fn isBalanced(allocator: mem.Allocator, s: []const u8) !bool {
    _ = allocator;

    var stack: [10]u8 = undefined;
    var stack_size: usize = 0;

    for (s) |char| {
        switch (char) {
            '(', '[', '{' => {
                if (stack_size >= 10) {
                    return false;
                }
                stack[stack_size] = char;
                stack_size += 1;
            },
            ')', ']', '}' => {
                if (stack_size == 0) {
                    return false;
                }

                const opening = stack[stack_size - 1];
                const is_match = switch (char) {
                    ')' => opening == '(',
                    ']' => opening == '[',
                    '}' => opening == '{',
                    else => false,
                };

                if (!is_match) {
                    return false;
                }

                stack_size -= 1;
            },
            else => {},
        }
    }

    return stack_size == 0;
}
