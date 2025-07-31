const std = @import("std");

pub fn isValid(s: []const u8) bool {
    var i: usize = s.len;
    var sum: usize = 0;
    var count: usize = 0;
    var double = false;
    while (i > 0) {
        i -= 1;
        const char = s[i];
        if (char == ' ') {
            continue;
        }
        if (char < '0' or char > '9') {
            return false;
        }
        if (double) {
            const doubled = (char - '0') * 2;
            sum += if (doubled > 9) doubled - 9 else doubled;
        } else {
            sum += char - '0';
        }
        double = !double;
        count += 1;
    }
    return (count > 1) and (sum % 10 == 0);
}
