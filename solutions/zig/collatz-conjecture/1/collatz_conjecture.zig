pub const ComputationError = error{IllegalArgument};

pub fn steps(number: usize) anyerror!usize {
    if (number <= 0) {
        return ComputationError.IllegalArgument;
    }
    var step = number;
    var count: usize = 0;
    while (step > 1) {
        if (step % 2 == 0) {
            step /= 2;
        } else {
            step = step * 3 + 1;
        }
        count += 1;
    }
    return count;
}
