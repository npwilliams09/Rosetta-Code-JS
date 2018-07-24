## Rosetta Code: General FizzBuzz
Write a generalized version of FizzBuzz that works for any list of factors, along with their words.

This is basically a "fizzbuzz" implementation where the rules of the game are supplied to the user. Create a function to implement this. The function should take two parameters.

The first will be an array with the FizzBuzz rules. For example: [ [3,"Fizz"] , [5,"Buzz"] ].

This indcates that Fizz should be printed if the number is a multiple of 3 and Buzz if it is a multiple of 5. If it is a multiple of both then the strings should be concatenated in the order specified in the array. In this case, FizzBuzz if the number is a multiple of 3 and 5.

The second parameter is the number for which the function should return a string as stated above.