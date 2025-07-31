(ns difference-of-squares)

(defn square [n] (* n n))

(defn sum-of-squares [n]
  (/ (* n (+ n 1) (+ (* 2 n) 1)) 6)
)

(defn square-of-sum [n]
  (square (/ (* n (+ n 1)) 2))
)

(defn difference [n]
  (- (square-of-sum n) (sum-of-squares n))
)
