namespace eval resistorColor {
    variable COLORS {black brown red orange yellow green blue violet grey white}

    proc colorCode {color} {
        variable COLORS
        set index [lsearch -exact $COLORS $color]
        
        if {$index == -1} {
            error "Invalid color: $color"
        }
        
        return $index
    }

    proc colors {} {
        variable COLORS
        return $COLORS
    }
}
