pub fn isPangram(str: []const u8) bool {
    var counts = [_]u8{0} ** 26;
    for (str) |c| {
        if (c >= 'A' and c <= 'Z') {
            counts[c - 'A'] += 1;
        } else if (c >= 'a' and c <= 'z') {
            counts[c - 'a'] += 1;
        }
    }
    for (counts) |c| {
        if (c == 0) {
            return false;
        }
    }
    return true;
}
