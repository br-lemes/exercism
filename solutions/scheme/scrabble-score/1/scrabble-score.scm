(import (rnrs))

(define (score word)
  (fold-left
    (lambda (a ch) (+ a (score-letter ch)))
    0 (string->list word)))

(define (score-letter char)
  (case (char-upcase char)
    [(#\A #\E #\I #\O #\U #\L #\N #\R #\S #\T) 1]
    [(#\D #\G) 2]
    [(#\B #\C #\M #\P) 3]
    [(#\F #\H #\V #\W #\Y) 4]
    [(#\K) 5]
    [(#\J #\X) 8]
    [(#\Q #\Z) 10]
    [else 0]))