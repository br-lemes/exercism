/// Writes a reversed copy of `s` to `buffer`.
pub fn reverse(buffer: []u8, s: []const u8) []u8 {
    var i: usize = s.len;
    while (i > 0) : (i -= 1) {
        buffer[i - 1] = s[s.len - i];
    }
    return buffer;
}
