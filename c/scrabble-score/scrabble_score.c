#include <ctype.h>

#include "scrabble_score.h"

unsigned int score(const char *word) {
    unsigned int result = 0;
    for (int i = 0; word[i] != '\0'; i++) {
        char c = toupper(word[i]);
        if (c < 'A' || c > 'Z') {
            continue;
        }
        switch (c) {
            case 'D':
            case 'G':
                result += 2;
                break;
            case 'B':
            case 'C':
            case 'M':
            case 'P':
                result += 3;
                break;
            case 'F':
            case 'H':
            case 'V':
            case 'W':
            case 'Y':
                result += 4;
                break;
            case 'K':
                result += 5;
                break;
            case 'J':
            case 'X':
                result += 8;
                break;
            case 'Q':
            case 'Z':
                result += 10;
                break;
            default:
                result += 1;
                break;
        }
    }
    return result;
}
