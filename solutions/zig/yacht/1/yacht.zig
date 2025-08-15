pub const Category = enum {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    full_house,
    four_of_a_kind,
    little_straight,
    big_straight,
    choice,
    yacht,
};

pub fn score(dice: [5]u3, category: Category) u32 {
    switch (category) {
        .ones => return countValue(dice, 1) * 1,
        .twos => return countValue(dice, 2) * 2,
        .threes => return countValue(dice, 3) * 3,
        .fours => return countValue(dice, 4) * 4,
        .fives => return countValue(dice, 5) * 5,
        .sixes => return countValue(dice, 6) * 6,
        .full_house => return scoreFullHouse(dice),
        .four_of_a_kind => return scoreFourOfAKind(dice),
        .little_straight => return scoreLittleStraight(dice),
        .big_straight => return scoreBigStraight(dice),
        .choice => return sumDice(dice),
        .yacht => return scoreYacht(dice),
    }
}

fn countValue(dice: [5]u3, value: u3) u32 {
    var count: u32 = 0;
    for (dice) |die| {
        if (die == value) {
            count += 1;
        }
    }
    return count;
}

fn sumDice(dice: [5]u3) u32 {
    var sum: u32 = 0;
    for (dice) |die| {
        sum += @as(u32, die);
    }
    return sum;
}

fn getCounts(dice: [5]u3) [7]u32 {
    var counts = [_]u32{0} ** 7;
    for (dice) |die| {
        counts[die] += 1;
    }
    return counts;
}

fn scoreFullHouse(dice: [5]u3) u32 {
    const counts = getCounts(dice);
    var has_two = false;
    var has_three = false;

    for (counts[1..7]) |count| {
        if (count == 2) has_two = true;
        if (count == 3) has_three = true;
    }

    if (has_two and has_three) {
        return sumDice(dice);
    }
    return 0;
}

fn scoreFourOfAKind(dice: [5]u3) u32 {
    const counts = getCounts(dice);

    for (counts[1..7], 1..) |count, value| {
        if (count >= 4) {
            return @as(u32, @intCast(value)) * 4;
        }
    }
    return 0;
}

fn scoreLittleStraight(dice: [5]u3) u32 {
    const counts = getCounts(dice);

    if (counts[1] >= 1 and counts[2] >= 1 and counts[3] >= 1 and counts[4] >= 1 and counts[5] >= 1) {
        return 30;
    }
    return 0;
}

fn scoreBigStraight(dice: [5]u3) u32 {
    const counts = getCounts(dice);

    if (counts[2] >= 1 and counts[3] >= 1 and counts[4] >= 1 and counts[5] >= 1 and counts[6] >= 1) {
        return 30;
    }
    return 0;
}

fn scoreYacht(dice: [5]u3) u32 {
    const counts = getCounts(dice);

    for (counts[1..7]) |count| {
        if (count == 5) {
            return 50;
        }
    }
    return 0;
}
