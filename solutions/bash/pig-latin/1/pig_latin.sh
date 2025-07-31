#!/usr/bin/env bash

translate () {
    local word=$1
    if [[ $word =~ ^[aeiouAEIOU] || $word =~ ^xr || $word =~ ^yt ]]; then
        echo "${word}ay"
        return
    fi

    if [[ $word =~ ^[^aeiouAEIOU]*qu ]]; then
        local prefix=${BASH_REMATCH[0]}
        local rest=${word:${#prefix}}
        echo "${rest}${prefix}ay"
        return
    fi

    if [[ $word =~ ^([^aeiouAEIOU]+)y ]]; then
        local prefix=${BASH_REMATCH[1]}
        local rest=${word:${#prefix}}
        echo "${rest}${prefix}ay"
        return
    fi

    if [[ $word =~ ^[^aeiouAEIOU]+ ]]; then
        local prefix=${BASH_REMATCH[0]}
        local rest=${word:${#prefix}}
        echo "${rest}${prefix}ay"
        return
    fi
}

main() {
    local result=""
    for word in "$@"; do
        result+="$(translate "$word") "
    done
    echo "${result::-1}"
}

main "$@"
