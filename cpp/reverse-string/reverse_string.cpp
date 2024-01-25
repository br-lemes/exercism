#include "reverse_string.h"

namespace reverse_string {
    string reverse_string(string str) {
        reverse(str.begin(), str.end());
        return str;
    }
}
