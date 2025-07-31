pub fn eggCount(number: usize) u4 {
    var count: u4 = 0;
    var n = number;

    while (n > 0) {
        if (n & 1 == 1) {
            count += 1;
        }
        n >>= 1;
    }

    return count;
}
