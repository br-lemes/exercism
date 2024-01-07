pub fn collatz(n: u64) -> Option<u64> {
    if n == 0 {
        return None;
    }
    let mut step = n;
    let mut count: u64 = 0;
    while step > 1 {
        if step % 2 == 0 {
            step /= 2;
        } else {
            step = step.checked_mul(3)?.checked_add(1)?;
        }
        count += 1;
    }
    Some(count)
}
