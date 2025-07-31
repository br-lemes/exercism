pub fn is_prime(number: u32) bool {
    if (number < 2) {
        return false;
    }
    var i: u32 = 2;
    while (i < number) : (i += 1) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

pub fn primes(buffer: []u32, limit: u32) []u32 {
    var current: u32 = 2;
    var buffer_index: usize = 0;
    while (current <= limit) : (current += 1) {
        if (is_prime(current)) {
            buffer[buffer_index] = current;
            buffer_index += 1;
        }
    }
    return buffer[0..buffer_index];
}
