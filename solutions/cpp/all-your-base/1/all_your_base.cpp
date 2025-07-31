#include "all_your_base.h"

#include <algorithm>
#include <stdexcept>
#include <vector>

using std::invalid_argument;
using std::max_element;
using std::vector;

namespace all_your_base {
    vector<unsigned int> convert(unsigned int in_base, vector<unsigned int> in_digits, unsigned int out_base) {
        if ((in_base < 2) || (out_base < 2)) {
            throw invalid_argument("Invalid base");
        }
        if (in_digits.size() == 0) return { };
        if (*max_element(std::begin(in_digits), std::end(in_digits)) >= in_base) {
            throw invalid_argument("Invalid digit");
        }
        unsigned int dec_num = 0;
        for (auto const& digit : in_digits) {
            dec_num = digit + in_base * dec_num;
        }
        vector<unsigned int> out_digits;
        while (dec_num != 0) {
            out_digits.insert(out_digits.begin(), dec_num % out_base);
            dec_num = dec_num / out_base;
        }
        return out_digits;
    }
}  // namespace all_your_base
