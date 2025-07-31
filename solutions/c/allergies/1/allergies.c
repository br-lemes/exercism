#include "allergies.h"
#include <stdio.h>

bool is_allergic_to(const allergen_t allergen, const uint16_t score) {
    return (score & (1 << allergen)) != 0;
}

allergen_list_t get_allergens(const uint16_t score) {
    allergen_list_t list;
    list.count = 0;
    for (allergen_t allergen = 0; allergen < ALLERGEN_COUNT; allergen++) {
        if (is_allergic_to(allergen, score)) {
            list.allergens[allergen] = true;
            list.count++;
        }
    }
    return list;
}
