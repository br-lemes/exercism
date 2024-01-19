pub fn isValidIsbn10(s: []const u8) bool {
    var count: u8 = 0;
    var sum: u16 = 0;
    for (s) |c| {
        if (c >= '0' and c <= '9') {
            sum += (c - '0') * (10 - count);
            count += 1;
            continue;
        }
        if (c == 'X' and count == 9) {
            sum += 10;
            count += 1;
            continue;
        }
        if (c != '-') {
            return false;
        }
    }
    return count == 10 and sum % 11 == 0;
}
