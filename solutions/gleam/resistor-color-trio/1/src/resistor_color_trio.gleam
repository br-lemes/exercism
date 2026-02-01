pub type Resistance {
  Resistance(unit: String, value: Int)
}

pub fn label(colors: List(String)) -> Result(Resistance, Nil) {
  case colors {
    [c1, c2, c3, .._] -> {
      let first = digit(c1)
      let second = digit(c2)
      let multiplier = multiplier_value(c3)

      let raw = { first * 10 + second } * multiplier

      Ok(normalize(raw))
    }

    _ ->
      Error(Nil)
  }
}

fn digit(color: String) -> Int {
  case color {
    "black" -> 0
    "brown" -> 1
    "red" -> 2
    "orange" -> 3
    "yellow" -> 4
    "green" -> 5
    "blue" -> 6
    "violet" -> 7
    "grey" -> 8
    "white" -> 9
    _ -> 0
  }
}

fn multiplier_value(color: String) -> Int {
  case color {
    "black" -> 1
    "brown" -> 10
    "red" -> 100
    "orange" -> 1_000
    "yellow" -> 10_000
    "green" -> 100_000
    "blue" -> 1_000_000
    "violet" -> 10_000_000
    "grey" -> 100_000_000
    "white" -> 1_000_000_000
    _ -> 1
  }
}

fn normalize(value: Int) -> Resistance {
  case value {
    v if v >= 1_000_000_000 ->
      Resistance("gigaohms", v / 1_000_000_000)

    v if v >= 1_000_000 ->
      Resistance("megaohms", v / 1_000_000)

    v if v >= 1_000 ->
      Resistance("kiloohms", v / 1_000)

    v ->
      Resistance("ohms", v)
  }
}
