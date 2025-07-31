#include "armstrong_numbers.h"
#include <math.h>

bool is_armstrong_number(int candidate) {
    int n = candidate;
    int sum = 0;
    int len = 0;

    while (n > 0) {
        n /= 10;
        len++;
    }
    n = candidate;

    while (n > 0) {
        sum += pow(n % 10, len);
        n /= 10;
    }
    return sum == candidate;
}
