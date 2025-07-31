(defpackage :raindrops
  (:use :cl)
  (:export :convert))

(in-package :raindrops)

(defun convert (n)
  (let ((result ""))
       (when (zerop (mod n 3))
         (setq result (concatenate 'string result "Pling")))
       (when (zerop (mod n 5))
         (setq result (concatenate 'string result "Plang")))
       (when (zerop (mod n 7))
         (setq result (concatenate 'string result "Plong")))
       (if (string= result "")
           (write-to-string n)
           result)))
