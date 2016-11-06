

let rec fib = function
  | 0 | 1 -> 1
  | n -> fib (n - 1) + fib (n - 2)


let () = 
  Js.log @@ 
    fib 3 + 3 
    + 3  + 2 + 3
