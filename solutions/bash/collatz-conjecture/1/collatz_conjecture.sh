#!/usr/bin/env bash

if [[ "$1" -lt 1 ]]; then
    echo "Error: Only positive numbers are allowed"
    exit 1
fi

number="$1"
count=0

while [[ "$number" -gt 1 ]]; do
    if [[ "$((number % 2))" -eq 0 ]]; then
        number=$((number / 2))
    else
        number=$((3 * number + 1))
    fi
    count=$((count + 1))
done

echo "$count"
