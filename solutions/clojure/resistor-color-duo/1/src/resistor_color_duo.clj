(ns resistor-color-duo)

(def colors
  ["black" "brown" "red" "orange" "yellow" "green" "blue" "violet" "grey" "white"]
)

(defn color-code [color]
  (.indexOf colors color)
)

(defn resistor-value [[first-color second-color]]
  (+ (* (color-code first-color) 10)
     (color-code second-color)
  )
)
