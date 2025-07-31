pub fn squareRoot(radicand: u64) u64 {
    if (radicand == 0) return 0;
    var x: u64 = radicand;
    var y: u64 = (x + 1) / 2;
    while (y < x) {
        x = y;
        y = (x + radicand / x) / 2;
    }
    return x;
}
