#!/usr/bin/env bash

word=${1^^}
result=0
for (( i = 0; i < ${#word}; i++ )); do
    char=${word:$i:1}
    case "$char" in
        [AEIOULNRST]) result=$(( result + 1 )) ;;
        [DG]) result=$(( result + 2 )) ;;
        [BCMP]) result=$(( result + 3 )) ;;
        [FHVWY]) result=$(( result + 4 )) ;;
        [K]) result=$(( result + 5 )) ;;
        [JX]) result=$(( result + 8 )) ;;
        [QZ]) result=$(( result + 10 )) ;;
    esac
done

echo $result
