const std = @import("std");

pub const Relation = enum {
    equal,
    sublist,
    superlist,
    unequal,
};

fn isSublist(list_one: []const i32, list_two: []const i32) bool {
    if (list_one.len == 0) {
        return true;
    }
    if (list_one.len > list_two.len) {
        return false;
    }
    for (0..(list_two.len - list_one.len + 1)) |i| {
        if (std.mem.eql(i32, list_one, list_two[i..i+list_one.len])) {
            return true;
        }
    }
    return false;
}

pub fn compare(list_one: []const i32, list_two: []const i32) Relation {
    if (std.mem.eql(i32, list_one, list_two)) {
        return .equal;
    }
    if (isSublist(list_one, list_two)) {
        return .sublist;
    }
    if (isSublist(list_two, list_one)) {
        return .superlist;
    }
    return .unequal;
}