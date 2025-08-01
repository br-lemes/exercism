const std = @import("std");
const EnumSet = std.EnumSet;

pub const Allergen = enum {
    eggs,
    peanuts,
    shellfish,
    strawberries,
    tomatoes,
    chocolate,
    pollen,
    cats,
};

pub fn isAllergicTo(score: u8, allergen: Allergen) bool {
    return (score & (@as(u8, 1) << @intFromEnum(allergen))) != 0;
}

pub fn initAllergenSet(score: usize) EnumSet(Allergen) {
    var set = EnumSet(Allergen).initEmpty();
    inline for (comptime std.enums.values(Allergen)) |allergen| {
        if ((score & (1 << @intFromEnum(allergen))) != 0) {
            set.insert(allergen);
        }
    }
    return set;
}