pub fn append(first first: List(a), second second: List(a)) -> List(a) {
  prepend_all(reverse(first), second)
}

fn prepend_all(from, to) {
  case from {
    [] -> to
    [hd, ..tl] -> prepend_all(tl, [hd, ..to])
  }
}

pub fn concat(lists: List(List(a))) -> List(a) {
  foldr(lists, [], fn(acc, list) {
    prepend_all(reverse(list), acc)
  })
}

pub fn filter(list: List(a), function: fn(a) -> Bool) -> List(a) {
  list
  |> foldl([], fn(acc, el) {
    case function(el) {
      True -> [el, ..acc]
      False -> acc
    }
  })
  |> reverse()
}

pub fn length(list: List(a)) -> Int {
  foldl(list, 0, fn(acc, _) { acc + 1 })
}

pub fn map(list: List(a), function: fn(a) -> b) -> List(b) {
  list
  |> foldl([], fn(acc, el) {[function(el), ..acc]})
  |> reverse()
}

pub fn foldl(
  over list: List(a),
  from initial: b,
  with function: fn(b, a) -> b,
) -> b {
  case list {
    [] -> initial
    [hd, ..tl] -> foldl(tl, function(initial, hd), function)
  }
}

pub fn foldr(
  over list: List(a),
  from initial: b,
  with function: fn(b, a) -> b,
) -> b {
  case list {
    [] -> initial
    [hd, ..tl] -> function(foldr(tl, initial, function), hd)
  }
}

pub fn reverse(list: List(a)) -> List(a) {
  reverse_(list, [])
}

fn reverse_(list, acc) {
  case list {
    [] -> acc
    [hd, ..tl] -> reverse_(tl, [hd, ..acc])
  }
}