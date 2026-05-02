proc reverse {input} {
    set result ""
    foreach char [split $input ""] {
        set result "$char$result"
    }
    return $result
}
