(ns two-fer
  (:require [clojure.string :as str]))

(defn two-fer
  ([] (two-fer "you"))
  
  ([name]
   (let [target (if (str/blank? name) "you" name)]
     (str "One for " target ", one for me."))))
