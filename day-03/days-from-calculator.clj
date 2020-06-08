(require '[clj-time.core :as t])
(require '[clj-time.format :as f])

(def custom-formatter (f/formatter "yyyy-MM-dd"))
(doseq [arg *command-line-args*]
    (def date2 (f/unparse custom-formatter (t/plus (t/now) (t/days (Integer/parseInt arg)))))
    (print date2))