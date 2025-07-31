#include "bob.h"
#include <ctype.h>
#include <stdbool.h>
#include <string.h>

char *hey_bob(char *greeting) {
    const size_t len = strlen(greeting);
    bool isEmpty = true;
    bool isQuestion = false;
    bool hasLower = false;
    bool hasUpper = false;

    for (size_t i = 0; i < len; i++) {
        const char c = greeting[i];
        if (isEmpty && !isspace(c)) {
            isEmpty = false;
        }
        if (c == '?') {
            isQuestion = true;
        }
        if (isalnum(c)) {
            isQuestion = false;
        }
        if (islower(c)) {
            hasLower = true;
        }
        if (isupper(c)) {
            hasUpper = true;
        }
    }
    if (isEmpty) {
        return "Fine. Be that way!";
    }

    const bool isYelling = hasUpper && !hasLower;
    if (isYelling && isQuestion) {
        return "Calm down, I know what I'm doing!";
    }
    if (isYelling) {
        return "Whoa, chill out!";
    }
    if (isQuestion) {
        return "Sure.";
    }
    return "Whatever.";
}
