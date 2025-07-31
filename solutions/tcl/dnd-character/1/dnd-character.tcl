namespace eval dnd {
    namespace export character ability modifier
    namespace ensemble create

    proc modifier {score} {
        return [expr {int(floor(($score - 10) / 2))}]
    }

    proc ability {} {
        return [expr {int(rand() * 16) + 3}]
    }

    proc character {} {
        dict set character charisma [ability]
        dict set character dexterity [ability]
        dict set character intelligence [ability]
        dict set character strength [ability]
        dict set character wisdom [ability]
        set constitution [ability]
        dict set character constitution $constitution
        dict set character hitpoints [expr {[modifier $constitution] + 10}]
        return $character
    }
}
