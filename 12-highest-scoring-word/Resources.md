#STACK OVERFLOW URL
https://stackoverflow.com/questions/27877197/convert-letter-to-number-in-javascript/30697101

#Option 1: Spliting parse
parseInt('a', 36) - 9; // 1
parseInt('z', 36) - 9; // 26
parseInt('A', 36) - 9; // 1
parseInt('Z', 36) - 9; // 26

#GOLDEN OPTion
'a'.charCodeAt() - 96; // 1
'z'.charCodeAt() - 96; // 26
'A'.charCodeAt() - 64; // 1
'Z'.charCodeAt() - 64; // 26

